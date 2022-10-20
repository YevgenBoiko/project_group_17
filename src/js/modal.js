(() => {
   const refs = {
     openModalBtn: document.querySelector("[data-modal-open-buy-n]"),
     closeModalBtn: document.querySelector("[data-modal-close-buy-n]"),
     modal: document.querySelector("[data-modal-buy-n]"),
   };
 
   refs.openModalBtn.addEventListener("click", toggleModal);
   refs.closeModalBtn.addEventListener("click", toggleModal);
 
  function toggleModal() {
      document.body.classList.toggle('modal-open');
     refs.modal.classList.toggle("is-hidden");
   }
 })();