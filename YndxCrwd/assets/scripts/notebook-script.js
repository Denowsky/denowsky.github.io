let currentForm = 1;
let autoSlideInterval;

function showForm(formNum) {
    const forms = document.querySelectorAll('.participant-page-content-form');
    forms.forEach(form => {
        form.style.display = 'none';
    });
    document.querySelectorAll(`.pc-form${formNum}`).forEach(form => {
        form.style.display = 'flex';
    });
}

function changeForm(formNum) {
    clearInterval(autoSlideInterval);
    currentForm = formNum;
    showForm(currentForm);
    updatePaginationForm();
}

function nextForm() {
    clearInterval(autoSlideInterval);
    if (currentForm < 2) {
        currentForm++;
        showForm(currentForm);
        updatePaginationForm();
    }
    else {
        changeForm(1)
    }
}

function prevForm() {
    clearInterval(autoSlideInterval);
    if (currentForm > 1) {
        currentForm--;
        showForm(currentForm);
        updatePaginationForm();
    }
    else {
        changeForm(2)
    }
}

function autoSlide() {
    autoSlideInterval = setInterval(() => {
        nextForm();
    }, 4000);
}

function updatePaginationForm() {
    document.getElementById("formNum-pc").textContent = currentForm*3;
    autoSlide()

    const prevButton = document.querySelector('.participant-page-header-button-color.prev');
    if (currentForm === 1) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }
    const nextButton = document.querySelector('.participant-page-header-button-color.next');
    if (currentForm === 2) {
        nextButton.classList.add('disabled');
    } else {
        nextButton.classList.remove('disabled');
    }
}

// Показываем первую страницу при загрузке
showForm(currentForm);
updatePaginationForm();
autoSlide()

