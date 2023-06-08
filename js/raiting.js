let submitButton = document.querySelector('.submit-button');
let reviewButtons = document.querySelectorAll('.review');
let error = document.querySelector('.error');

submitButton.addEventListener('click', () => {
const selectedReview = document.querySelector('.review:checked');
if (selectedReview && selectedReview.dataset.evaluation === 'bad') {
    submitButton.disabled = true;
    error.classList.add('shown');
    submitButton.style.opacity = "0.7";
} else {
    submitButton.disabled = false;
    error.classList.remove('shown');
    submitButton.style.opacity = "1";
}
});

for (let i = 0; i < reviewButtons.length; i++) {
reviewButtons[i].addEventListener('change', () => {
    const selectedReview = document.querySelector('.review:checked');
    if (selectedReview && selectedReview.dataset.evaluation === 'bad') {
    submitButton.disabled = true;
    error.classList.add('shown');
    submitButton.style.opacity = "0.7";
    } else {
    submitButton.disabled = false;
    error.classList.remove('shown');
    submitButton.style.opacity = "1";
    }
});
}

function subbmit() {
    alert("Accepted");
}