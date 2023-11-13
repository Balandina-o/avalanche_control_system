import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../css_components/OperationPanel.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AvalancheModal = ({ show, onClose }) => {
  const [showFinalModal, setShowFinalModal] = useState(false);
  const handleClose = () => setShowFinalModal(false);

  function temp() {
    setShowFinalModal(true);
  }

  return (
    <div>
      <div>
        <Modal
          show={show}
          onHide={() => onClose()}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>ВНИМАНИЕ! Высока вероятность схода ЛАВИНЫ</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Рекомендуется немедленно произвести запланированный подрыв снежного
            пласта! Нажатие на кнопку запустит процесс оповещения граждан и
            пошлет сигнал городским службам
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => onClose()}>
              Игнорировать предупреждение
            </Button>
            <Button variant="danger" onClick={temp}>
              Оповестить
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <Modal
          show={showFinalModal}
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Идет оповежение граждан...</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="spinner-border text-info" role="status">
              <span class="visually-hidden"></span>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Закрыть
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AvalancheModal;
