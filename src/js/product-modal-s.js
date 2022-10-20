(() => {
    const refs = {
        openModalBtn: document.querySelector("[product-modal-s-open]"),
        closeModalBtn: document.querySelector("[product-modal-s-close]"),
        modal: document.querySelector("[product-modal-s]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
         document.body.classList.toggle('modal-open');
        refs.modal.classList.toggle("is-hidden");
    }
})();