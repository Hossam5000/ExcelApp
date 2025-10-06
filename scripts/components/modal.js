const modal = {
    openModal() {
        document.getElementById("myModal").style.display = "flex";
    },

    closeModal() {
        document.getElementById("myModal").style.display = "none";
    },

    submitData() {
        const input = document.getElementById("userInput").value;
        console.log("User input:", input);
        modal.closeModal()
    },
}
export default modal;