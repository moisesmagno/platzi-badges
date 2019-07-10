import React from 'react';

import Modal from './Modal';

const DeleteBadgeModal = (props) => {
    return (
        <Modal isOpen={props.modaIsModal} onClose={props.closeModal}> 
            <div className="DeleteBadgeModal">
                <h1>Are you Sure?</h1>
                <p>You are about to delete this page.</p>
                <div>
                    <button onClick={props.deleteBadge} className="btn btn-danger mr-4">Delete</button>
                    <button onClick={props.closeModal} className="btn btn-primary">Cancel</button>
                </div>
            </div>
        </Modal>
    );
}

export default DeleteBadgeModal;