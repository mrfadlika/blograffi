const Modal = ({ message, onClose, answer }) => {
    const messageColor = answer === "true" ? "text-success" : "text-danger";
    const answerText = answer === "true" ? "Benar" : "Salah";
  return (
    <div
      className="modal"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className={`modal-title ${messageColor}`}>Jawaban Anda {answerText}</h4>
            <button
              type="button"
              class="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={onClose}>
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
