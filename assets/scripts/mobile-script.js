let currentPage = 1;

function showPage(pageNum) {
    const pages = document.querySelectorAll('.stage-page-content-grid-item');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    document.querySelectorAll(`.page${pageNum}`).forEach(page => {
        page.style.display = 'flex';
    });
}

function changePage(pageNum) {
    currentPage = pageNum;
    showPage(currentPage);
    updatePagination();
}

function nextPage() {
    if (currentPage < 5) {
        currentPage++;
        showPage(currentPage);
        updatePagination();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
        updatePagination();
    }
}

function updatePagination() {
    const dots = document.querySelectorAll('.stage-page-header-button-links-dot');
    dots.forEach((dot, index) => {
        if (index + 1 === currentPage) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    const prevButton = document.querySelector('.stage-page-header-button-color.prev');
    if (currentPage === 1) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }
    const nextButton = document.querySelector('.stage-page-header-button-color.next');
    if (currentPage === 5) {
        nextButton.classList.add('disabled');
    } else {
        nextButton.classList.remove('disabled');
    }
}

let currentForm = 1;
let autoSlideInterval;

function showForm(formNum) {
    const forms = document.querySelectorAll('.participant-page-content-form');
    forms.forEach(form => {
        form.style.display = 'none';
    });
    document.querySelectorAll(`.form${formNum}`).forEach(form => {
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
    if (currentForm < 6) {
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
        changeForm(6)
    }
}

function autoSlide() {
    autoSlideInterval = setInterval(() => {
        nextForm();
    }, 4000);
}

function updatePaginationForm() {
    document.getElementById("formNum").textContent = currentForm;
    autoSlide()

    const prevButton = document.querySelector('.participant-page-header-button-color.prev');
    if (currentForm === 1) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }
    const nextButton = document.querySelector('.participant-page-header-button-color.next');
    if (currentForm === 6) {
        nextButton.classList.add('disabled');
    } else {
        nextButton.classList.remove('disabled');
    }
}

// Показываем первую страницу при загрузке
showPage(currentPage);
showForm(currentForm);
updatePagination();
updatePaginationForm();
autoSlide()

