import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const PageHeader = (props) => {
  return (
    <div className="d-sm-flex align-items-center justify-content-center">
      <h1 className={props.cn}>{props.pagetitle}</h1>
    </div>
  )
}

const CommonModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose} size={props.size}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        {
          props.buttons ? props.buttons.map((btn, index) =>
            <Button key={index} variant={btn.color} onClick={btn.onClick}>
              {btn.label}
            </Button>
          ) :
            <Button variant="primary">
              Save Changes
            </Button>
        }
      </Modal.Footer>
    </Modal>
  )
}


const Breadcrumb = () => {
  return (
    <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">User</a></li>
                <li className="breadcrumb-item active" aria-current="page">User Profile</li>
              </ol>
            </nav>
          </div>
        </div>
  )
}

export { PageHeader, CommonModal,Breadcrumb }