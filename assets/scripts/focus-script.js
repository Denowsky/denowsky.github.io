// document.getElementById("focusButton-support").addEventListener("click", () => {
//     document.getElementById("focus-support").focus();
// });
// document.getElementById("focusButton-more").addEventListener("click", () => {
//     document.getElementById("focus-more").focus();
// });

function showSupportPage() {
    document.getElementById("focus-support").scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showMorePage() {
    document.getElementById("focus-more").scrollIntoView({ behavior: 'smooth', block: 'start' });
}