document.addEventListener('DOMContentLoaded', () => {

    // Элементы навигации
    const mainMenuBtn = document.getElementById('main-menu-btn');
    const builderBtn = document.getElementById('builder-btn');
    const navButtons = document.querySelectorAll('.nav-button');

    // Экраны
    const mainScreen = document.getElementById('main-screen');
    const connectedScreen = document.getElementById('connected-screen');
    const builderScreen = document.getElementById('builder-screen');
    const screens = document.querySelectorAll('.screen');

    // Элементы управления
    const userItems = document.querySelectorAll('.user-item');
    const disconnectBtn = document.getElementById('disconnect-btn');
    const createBuildBtn = document.getElementById('create-build-btn');


    // Функция для переключения экранов
    function showScreen(screenToShow) {
        screens.forEach(screen => {
            screen.classList.remove('active');
        });
        screenToShow.classList.add('active');
    }

    // Функция для обновления активной кнопки навигации
    function updateActiveNav(activeButton) {
        navButtons.forEach(button => {
            button.classList.remove('active');
        });
        activeButton.classList.add('active');
    }


    // --- Обработчики событий ---

    // Клик по кнопке "Главное меню"
    mainMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showScreen(mainScreen);
        updateActiveNav(mainMenuBtn);
    });

    // Клик по кнопке "Билдер"
    builderBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showScreen(builderScreen);
        updateActiveNav(builderBtn);
    });

    // Двойной клик по пользователю для "подключения"
    userItems.forEach(item => {
        item.addEventListener('dblclick', () => {
            showScreen(connectedScreen);
            // Можно было бы передать сюда ID пользователя и обновить заголовок
            // например: document.querySelector('#connected-screen .header h2').textContent = `Подключено к ${item.dataset.id}`;
        });
    });

    // Клик по кнопке "Выйти"
    disconnectBtn.addEventListener('click', () => {
        showScreen(mainScreen);
    });

    // Клик по кнопке "Create" в билдере
    createBuildBtn.addEventListener('click', () => {
        alert('Билд успешно "создан"! (Это симуляция)');
    });

});
