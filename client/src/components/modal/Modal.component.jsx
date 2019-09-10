import React, { useContext } from 'react';
import { Portal } from 'react-portal';
import { ModalContext } from '../../context';

const Modal = _ => {
  const { modal, setModal } = useContext(ModalContext);
  return modal.isOpen ? (
    <Portal>
      <aside className="c-modal-cover fadeIn">
        <div className="c-modal slideIn">
          <div className="modalWrapper">
            <div className="modalHeader">
              <i className="icn-person material-icons">error</i>
            </div>
            <div className="c-modal_body">{modal.content}</div>
            <button className="btn btn-info" onClick={_ => setModal({})}>
              Okay
            </button>
          </div>
        </div>
      </aside>
    </Portal>
  ) : null;
};

export default Modal;