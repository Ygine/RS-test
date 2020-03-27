const refs = {
  backdrop: document.querySelector(".js-modal-backdrop"),
  openModalButton: document.querySelector('[data-action="open-modal"]'),
  closeModalButton: document.querySelector('[data-action="close-modal"]'),
  body: document.body
};

const OpenModal = e => {
  refs.backdrop.classList.toggle("modal-hidden");
  window.addEventListener("keydown", handleKeyPress);
};

const CloseModal = e => {
  refs.backdrop.classList.toggle("modal-hidden");
  window.removeEventListener("keydown", handleKeyPress);
};

const handleKeyPress = e => {
  if (e.code !== "Escape") {
    return;
  }
  CloseModal();
};

const hendleBackdropClick = ({ target, currentTarget }) => {
  if (target !== currentTarget) {
    return;
  }
  refs.backdrop.classList.toggle("modal-hidden");
};

refs.openModalButton.addEventListener("click", OpenModal);
refs.closeModalButton.addEventListener("click", CloseModal);
refs.backdrop.addEventListener("click", hendleBackdropClick);