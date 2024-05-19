document.addEventListener('DOMContentLoaded', function () {
    var detailsButtons = document.querySelectorAll('.details1');

    detailsButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Зупиняємо дію за замовчуванням

            var box = button.closest('.box'); // Знаходимо батьківський елемент з класом 'box'
            var existingDetails = box.querySelector('.additional-details');

            if (existingDetails) {
                existingDetails.remove(); // Видаляємо існуючу додаткову інформацію
            } else {
                var detailsParagraph = document.createElement('p');
                detailsParagraph.textContent = 'GS F оснащений 5,0-літровим V8 двигуном, який генерує вражаючу потужність і динаміку прискорення, забезпечуючи екстраординарні відчуття під час водіння. Крім того, він має передові системи керування, що роблять його маневреним і динамічним на дорозі.';
                detailsParagraph.classList.add('additional-details');
                box.appendChild(detailsParagraph); // Додаємо новий елемент <p> до 'box'
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var detailsButtons = document.querySelectorAll('.details2');

    detailsButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Зупиняємо дію за замовчуванням

            var box = button.closest('.box'); // Знаходимо батьківський елемент з класом 'box'
            var existingDetails = box.querySelector('.additional-details');

            if (existingDetails) {
                existingDetails.remove(); // Видаляємо існуючу додаткову інформацію
            } else {
                var detailsParagraph = document.createElement('p');
                detailsParagraph.textContent = 'Ручка перемикання передач - це механічний пристрій у салоні автомобіля, який використовується для вибору і перемикання передач у трансмісії.';
                detailsParagraph.classList.add('additional-details');
                box.appendChild(detailsParagraph); // Додаємо новий елемент <p> до 'box'
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var detailsButtons = document.querySelectorAll('.details3');

    detailsButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Зупиняємо дію за замовчуванням

            var box = button.closest('.box'); // Знаходимо батьківський елемент з класом 'box'
            var existingDetails = box.querySelector('.additional-details');

            if (existingDetails) {
                existingDetails.remove(); // Видаляємо існуючу додаткову інформацію
            } else {
                var detailsParagraph = document.createElement('p');
                detailsParagraph.textContent = 'Диски 19 - це колісні диски для автомобілів з діаметром 19 дюймів. Ці диски використовуються для підвищення естетичного вигляду автомобіля, а також для поліпшення характеристик управління та їздових властивостей.';
                detailsParagraph.classList.add('additional-details');
                box.appendChild(detailsParagraph); // Додаємо новий елемент <p> до 'box'
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var detailsButtons = document.querySelectorAll('.details4');

    detailsButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Зупиняємо дію за замовчуванням

            var box = button.closest('.box'); // Знаходимо батьківський елемент з класом 'box'
            var existingDetails = box.querySelector('.additional-details');

            if (existingDetails) {
                existingDetails.remove(); // Видаляємо існуючу додаткову інформацію
            } else {
                var detailsParagraph = document.createElement('p');
                detailsParagraph.textContent = 'Диски 18 дюймів - це популярний вибір для автомобілів, який може покращити їх зовнішній вигляд та ходові характеристики.';
                detailsParagraph.classList.add('additional-details');
                box.appendChild(detailsParagraph); // Додаємо новий елемент <p> до 'box'
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var detailsButtons = document.querySelectorAll('.details5');

    detailsButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Зупиняємо дію за замовчуванням

            var box = button.closest('.box'); // Знаходимо батьківський елемент з класом 'box'
            var existingDetails = box.querySelector('.additional-details');

            if (existingDetails) {
                existingDetails.remove(); // Видаляємо існуючу додаткову інформацію
            } else {
                var detailsParagraph = document.createElement('p');
                detailsParagraph.textContent = 'Моторний відсік Ferrari 250 GT - це легендарний компонент класичного автомобіля Ferrari 250 GT. Знаходиться спереду та вміщує потужний двигун V12, що забезпечує потужність та емоції під час їзди.';
                detailsParagraph.classList.add('additional-details');
                box.appendChild(detailsParagraph); // Додаємо новий елемент <p> до 'box'
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var detailsButtons = document.querySelectorAll('.details6');

    detailsButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Зупиняємо дію за замовчуванням

            var box = button.closest('.box'); // Знаходимо батьківський елемент з класом 'box'
            var existingDetails = box.querySelector('.additional-details');

            if (existingDetails) {
                existingDetails.remove(); // Видаляємо існуючу додаткову інформацію
            } else {
                var detailsParagraph = document.createElement('p');
                detailsParagraph.textContent = 'Мотор Ferrari 458 Italia - це потужний та високоефективний 4,5-літровий V8 двигун, розроблений і виготовлений італійським виробником Ferrari. Він відомий своєю динамікою, потужністю та високим обертовим моментом, що забезпечує спортивний характер автомобіля';
                detailsParagraph.classList.add('additional-details');
                box.appendChild(detailsParagraph); // Додаємо новий елемент <p> до 'box'
            }
        });
    });
});