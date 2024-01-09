const navDropdown = document.querySelector('.nav-dropdown');
const navLinks = document.querySelectorAll('.nav-link');

// добавляем обработчик события для смены страницы при выборе опции в выпадающем меню
navDropdown.addEventListener('change', function() {
    const href = this.value;
    if (href !== '#') {
        window.location.href = href;
    }
});

// добавляем обработчики события для скрытия выпадающего меню при клике на ссылки в навигации 
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navDropdown.style.display = 'none';
    });
});

// добавляем обработчик события для показа/скрытия выпадающего меню при клике на .poloski
document.querySelector('.time-nomer-zvonok .poloski').addEventListener('click', function() {
    navDropdown.style.display = navDropdown.style.display === 'block' ? 'none' : 'block';
});




