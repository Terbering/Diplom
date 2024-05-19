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
                detailsParagraph.textContent = 'Mercedes-Benz S-Class - це флагманська модель автомобілів від німецького виробника автомобілів Mercedes-Benz. Вона представляє собою розкішне і престижне купе, седан або кабріолет і відома своєю високою якістю, розкішшю та передовими технологіями.';
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
                detailsParagraph.textContent = 'Aston Martin DB11 - це ексклюзивний спортивний автомобіль, що виробляється британським виробником автомобілів Aston Martin. Він відомий своїм елегантним дизайном, потужними двигунами і високим рівнем розкіші.';
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
                detailsParagraph.textContent = 'Volkswagen Käfer, також відомий як Volkswagen Beetle або ж «жук», є одним з найбільш відомих і впізнаваних автомобілів у світі. Цей автомобіль став символом надійності, простоти і доступності. Він мав компактні розміри, дружній до користувача дизайн та невибагливий двигун.';
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
                detailsParagraph.textContent = 'Porsche 911 Carrera 4 - це спортивний автомобіль від Porsche, який відомий своїм високим рівнем швидкості, маневреністю та характерним дизайном. Це купе задньопривідного або повнопривідного виконання, яке виробляється компанією Porsche AG.';
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
                detailsParagraph.textContent = 'Ferrari 488 Pista - це вражаючий спортивний автомобіль, розроблений і вироблений італійським виробником автомобілів Ferrari. Він є одним із найпотужніших та найшвидших автомобілів компанії та представляє собою витончену комбінацію високої швидкості, технологій і ексклюзивного дизайну.';
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
                detailsParagraph.textContent = 'Nissan GT-R 2015 - це іконічний спортивний автомобіль від японського виробника Nissan, який відомий своєю потужністю, високою швидкістю і передовими технологіями. Цей автомобіль має неповторний дизайн і вражаючі характеристики, що роблять його популярним серед ентузіастів автоспорту та широкої публіки.';
                detailsParagraph.classList.add('additional-details');
                box.appendChild(detailsParagraph); // Додаємо новий елемент <p> до 'box'
            }
        });
    });
});