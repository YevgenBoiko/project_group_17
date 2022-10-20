(() => {
  const refs = {
      openModalBtn: document.querySelector("[modal-prod-open]"),
      closeModalBtn: document.querySelector("[modal-prod-close]"),
      modal: document.querySelector("[modal-prod]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
     document.body.classList.toggle('modal-open');
      refs.modal.classList.toggle("is-hidden");
  }
})();