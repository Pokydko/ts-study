import { IModalProps } from "../../App.types";
import css from "./ImageModal.module.css";
import Modal from "react-modal";

const ImageModal = ({
  isOpen,
  onClose,
  children: { href, description, name },
}: IModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={css.modalBackdrop}
      className={css.modalContent}
      ariaHideApp={false}
      closeTimeoutMS={500}
      onRequestClose={() => onClose()}
    >
      <div className="pictureWrapper">
        <img
          src={href}
          alt={description || `Author: ${name}`}
          className={css.picture}
        />

        <span className={css.aboutPicture}>{description}</span>
      </div>
      <button
        onClick={onClose}
        aria-label="modal window close button"
        className={css.modalCloseBtn}
      >
        &times;
      </button>
    </Modal>
  );
};
export default ImageModal;
