## React Graphql Tutorial

### What is Graphql?

GraphQL is a query language for your API. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data. A GraphQL service is created by defining types and fields on those schemas, then providing functions (resolver) for each field on each type

### What is a query language

A query language is any computer programming language written for the purpose of requesting and recieving data from an existing host database

### Why Graphql?

#### Simplified Data Fetching

- With a REST API, typically you'd need to hit multiple endpoints to access the data that you need. For example, if your app had users who had multiple posts, you'd make need to make a `get` request to `/users/$id` for information about that user, then another request to `/users/$id/posts` to get all the post that user made. What if the users had followers too? You'd have to make yet another request to `/users/$id/followers`. That's three different requests now.
- With Graphql, this is no longer the case. You can define one query that returns all the relevant information about this user, their posts, and their followers

#### No More Overfetching / Underfetching

- One of the most common problems with REST is that of overfetching and underfetching. This happens because the only way for a client to download data is by hitting endpoints that return fixed data structures. It’s very difficult to design the API in a way that it’s able to provide clients with their exact data needs.
- Overfetching means that a client downloads more information than is actually required in the app. Imagine for example a screen that needs to display a list of users only with their names. In a REST API, this app would usually hit the /users endpoint and receive a JSON array with user data. This response however might contain more info about the users that are returned, e.g. their birthdays or addresses - information that is useless for the client because it only needs to display the users’ names.
- Another issue is underfetching and the n+1-requests problem. Underfetching generally means that a specific endpoint doesn’t provide enough of the required information. The client will have to make additional requests to fetch everything it needs. This can escalate to a situation where a client needs to first download a list of elements, but then needs to make one additional request per element to fetch the required data.

#### Strongly Type System and Schema

- Graphql uses a strong type system to define the capabilities and schema of the API. These schema serves as a contract between the client and server to define how a client can access data. Once the schema is defined, the teams working on frontend and backends can do their work without further communication since they both are aware of the definite structure of the data that’s sent over the network.

#### Rapid Product Iteration

- A common pattern with REST APIs is to structure the endpoints according to the views that you have inside your app. This is handy since it allows for the client to get all required information for a particular view by simply accessing the corresponding endpoint.
- The major drawback of this approach is that it doesn’t allow for rapid iterations on the frontend. With every change that is made to the UI, there is a high risk that now there is more (or less) data required than before. Consequently, the backend needs to be adjusted as well to account for the new data needs. This kills productivity and notably slows down the ability to incorporate user feedback into a product.
- With GraphQL, this problem is solved. Thanks to the flexible nature of GraphQL, changes on the client-side can be made without any extra work on the server. Since clients can specify their exact data requirements, no backend engineer needs to make adjustments when the design and data needs on the frontend change.

### Backend Recap

#### Types

- You can think of a graphql typedef as an entry point into our schema. It describes what can be fetched and how. The language used to write a Graphql's SDL (schema definition language). The syntax is very similar to TypeScript. This is an example of a user type.

```
  type User {
    id: ID!
    name: String!
    age: Int
    gender: String
  }
```

#### Resolvers

- Resolvers provide the instructions for turning a GraphQL operation (a query, mutation, or subscription) into data. They either return the same type of data we specify in our schema or a promise for that data.
- Essentially it's a controller that will go and retrieve the specified information from the database or perform a specific operation to it.
  ```
  const resolver = {
    Query: {
      movie: async (_, { _id }) => await MovieService.getMovieById(_id),
      randomMovie: async _ => await MovieService.getRandomMovie()
    }
  }
  ```

#### Services (optional)

- When the logic in a resolver gets complex and unwieldy, its best to abstract this logic to a "Service".
- This is purely for maintainability and reusability of code. Generally we like our resolvers to be as concise as possible so that its clear what they're returning
  ```
  class MovieService {
    static getMovieById = async _id => await Movie.findById(_id);
    static getRandomMovie = async _ => {
      const [movie] = await Movie.aggregate([{ $sample: { size: 1 } }]);
      return movie;
    };
  }
  ```

#### Fields

- A simple query for users

```
{
  users {
    name
  }
}
```

- The return value for that query

```
  {
    "data": {
      "users": [
        {
        "name": "R2-D2"
        }
        {
          "name": "Luke Skywalker"
        }
      ]
    }
  }
```

#### Arguments

- A query for a specific user using an id argument

```
{
  user(id: 1) {
    name
  }
}
```

- The return value of that query

```
  {
    "data": {
      "user": {
        "name": "Han Solo"
      }
    }
  }
```

#### Variables

- The same query for a specific user using dynamic variables for argument values

```
query getUserById($id: ID!) {
  user(id: $id) {
    name
  }
}

{
  id: 1
}
```

- The return value of that query

```
  {
    "data": {
      "user": {
        "name": "Han Solo"
      }
    }
  }
```

#### Mutations

- A mutation to create a new user using a predefined input type

```
  mutation createUser($input: NewUserInput!) {
    createUser(input: $input) {
      name
    }
  }


  {
    name: "Darth Vader",
    age: 18,
    gender: "male"
  }
```

- The return value for that mutation (if mutation was successful)

```
{
  "data": {
    "createUser": {
      "name": "Darth Vader"
    }
  }
}
```

### Frontend Queries and Mutations with Apollo

#### Queries

- useQuery

```
import { useQuery } from 'react-apollo'

const ExampleComponent = _ => {
  const [user, setUser] = useState({})
  const { data, loading } = useQuery(FetchUser, { variables: { id: 1 } })

  useEffect(_ => {
    !loading && setUser(data.user)
  }, [loading])
  return !loading ? <UserComponent user={user}> : <div> loading... </div>
}
```

- useLazyQuery

```
  import { useLazyQuery } from 'react-apollo'

  const ExampleComponent = _ => {
    const [user, setUser] = useState({})
    const [executeQuery, { data, loading, called }] = useLazyQuery(FetchUser)
    const getUserData =  _ => executeQuery({ variables: { id: 1 } })
    useEffect(_ => {
      called && !loading && setUser(data.user)
    }, [data, loading])
    return (
      <div>
      {loading ? <div>loading...</div> : <UserComponent user={user} />}
      </div>
    )
  }
```

- Client Query & withApollo HOC

```
import { withApollo } from 'react-apollo'

const ExampleComponent = ({ client }) => {
  const [user, setUser] = useState(null)
  const getUserData = async _ => {
    const { data } = await client.query({
      query: FetchUser,
      variables: { id: 1 }
    })
    setUser(data.user)
  }
  return (
    <div>
      <button onClick={getUserData}>Get User Info!</button>
      {user && <UserComponent user={user}> />}
    </div>
  )
}
export default withApollo(ExampleComponent)
```

- Query Component (outdated)

```
import { Query } from 'react-apollo'

const ExampleComponent = _ => (
  <Query query={FetchUser} variables={{ id: 1 }}>
    {({ data, loading }) => {
      if (loading) return <div> loading... </div>
      return <UserComponent user={data.user}>
    }}
  </Query>
)
```

#### Mutations

- useMutation

```
import { useMutation } from 'react-apollo'

const ExampleComponent = props => {
  const [executeMutation] = useMutation(CreateUser)
  const createNewUser = async input => {
    e.preventDefault()
    const { data } = await executeMutation({ variables: { input } })
    props.history.push(`/user/${data.user.id}`)
  }
}
```

- Client Mutate / With Apollo HOC

```
import { withApollo } from 'react-apollo'

const ExampleComponent = ({ client, history }) => {
  const createNewUser = async input =>  {
    const { data } = await client.mutate({
      mutation: CreateUser,
      variables: { input }
    })
    props.history.push(`/user/${data.user.id}`)
  }
}

export default withApollo(ExampleComponent)
```

- Mutation Component (outdated)

```
import { Mutation } from 'react-apollo'

const ExampleComponent ({ history }) => (
  <Mutation mutation={CreateUser}>
    {executeMutation => {
      const createUser = async input => {
        e.preventDefault()
        const { data } = await executeMutation({ variables: { input } })
        history.push(`/user/${data.user.id}`)
      }
      return (
        <form>
          // form stuff
        </form>
      )
    }}
  </Mutation>
)
```

### Useful Links

- Graphql vs REST https://www.howtographql.com/basics/1-graphql-is-the-better-rest/
- Queries and Mutations https://graphql.org/learn/queries/
- Schema https://graphql.org/learn/schema/
- More Schema https://www.apollographql.com/docs/graphql-tools/generate-schema/
- Enums and Scalars https://www.apollographql.com/docs/graphql-tools/scalars/
- Resolvers https://www.apollographql.com/docs/graphql-tools/resolvers/
- Best Practices https://graphql.org/learn/best-practices/
- Migrating from ApolloBoost https://www.apollographql.com/docs/react/migrating/boost-migration/
- The caching problem summarized by the Apollo Team https://www.youtube.com/watch?v=8ZKpIB1pDw8&t=482s
- Apollo Link Watch Mutation https://github.com/haytko/apollo-link-watched-mutation
- Busting the Cache https://medium.com/@martinseanhunt/how-to-invalidate-cached-data-in-apollo-and-handle-updating-paginated-queries-379e4b9e4698
