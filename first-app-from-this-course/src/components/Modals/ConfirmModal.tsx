import { Button, Modal } from "react-bootstrap";
import { ModalProps } from "react-bootstrap/Modal";

export interface IConfirmModal extends ModalProps {
  onConfirm: () => void;
}

export const ConfirmModal = ({ onConfirm, onHide, show }: IConfirmModal) => {
  const onConfirmModal = () => {
    onConfirm();
    if (onHide) {
      onHide();
    }
  };
  return (
    <Modal
      onHide={onHide}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h4 className="text-center">
          Are you shor you want to delete this item?
        </h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="danger" onClick={onConfirmModal}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
