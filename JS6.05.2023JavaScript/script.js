/* • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • JavaScript необходимые основы для начинающих • • • • •
• • • • • • • • • • • • практический курс • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • */
// ================== 0. Настройка окружения ===============
/*
- Установка редактора
- Установка плагина liveServer
- Моя тема Ayu
- Создание проекта
*/

// =================== 1. Подключение ===================
/*
- index.html
- файл main.js
- тег <script src></script>
- Запуск в liveServer
- команда console.log для вывода информации в консоль браузера
- комментарии
*/


// =================== 2. Переменные ===================
/*
let userName = 'Марк';
console.log(userName);

// =================== 2.1 Типы переменных ===================

/*
Новый стандарт ES6:
let - переменная
const - константа

Старый стандарт ES5:
var - переменная
*/

/* let - может менять значение во время работы программы */
// let userName = 'Марк';
// userName = 'Егор';

/* const - не может менять значение */
// const yearOfBirth = 1990;
// yearOfBirth = 1995; // Ошибка!!

// const p = 3.14;

/*
var - старый формат объявления переменной
в отличие от let и const имеет функциональную область видимости, а не блочную
будет рассмотрен в отдельном уроке по нюансам работы JS
не рекомендуется к использованию
Может менять значение на протяжении работы программы
*/
// var city = 'Moscow';
// city = 'Minsk';
// city = 'Kiev';

/*
! По умолчанию используем const,
когда явно понятно что переменная будет менять свое значение, тогда let
*/

/* =================== 2.2 Типы данных =================== */
// let userName = 'Марк'; // Строка (Текст) (Одно слово, фраза, предложение, абзац, хоть целая книга)
// let age = 30; // Число
// let isMarried = false; // Логическое значение true/false

/* Динамическая типизация */
// let someVariable = 'Some value'; // сейчас someVariable типа Number
// someVariable = 50; // а теперь someVariable типа String
// someVariable = true; // someVariable становится типа Boolean

/*
Значение null
«ничего», «пусто» или «значение неизвестно».
*/
// let age = null;

/*
Значение undefined
Означает что «значение не было присвоено
Если переменная объявлена, но ей не присвоено никакого значения,
то её значением будет undefined
*/
// let newVariable; // undefined

// let someName = 'James';
// someName = undefined; // !Так не делают
// someName = null; // Делают так

/*
Объекты
Массивы
*/

// Оператор typeof
/*
const someName = 'Bob';
console.log(typeof someName);
8/
// BigInt
// Symbol

/*
Числа number
BigInt
Строки string
Булевый тип данный boolean
null
undefined
Объекты object
Symbol
*/


// =================== 3. Операторы сравнения и условия ===================

/*
Операторы сравнения
>, <, >=, <= - больше, меньше, больше либо равно, меньше либо равно
== - нестрогое сравнение
=== - строгое сравнение
!= - нестрогое неравенство
!== строгое неравенство
*/
/*
console.log(10 > 5); // true
console.log(20 > 80); // false

console.log('5' == 5); // true
console.log('5' === 5); // false
*/
/*
if (условие) {
    // Код который будет выполнен если условие верно
} else {
	// Код который будет выполнен если условие НЕ верно
}
*/
/*
const time = 12;

if (time < 12) {
	console.log('Доброе утро');
} else {
	console.log('Добрый день');
}

const time = 19;

if (time < 12) {
	console.log('Доброе утро');
} else if (time > 12 && time < 18) {
	console.log('Добрый день');
} else {
	console.log('Добрый вечер');
}
*/
/*
Утро: с 6 до 12
День: с 12 до 18
Вечер: с 18 до 22
Ночь: до 6 и после 22
*/
/*
const time = 23;

if (time > 6 && time < 12) {
	console.log('Доброе утро');
} else if (time >= 12 && time < 18) {
	console.log('Добрый день');
} else if (time >= 18 && time < 22) {
	console.log('Добрый вечер');
} else {
	console.log('Доброй ночи');
}
*/
/*
Логические операторы
&& - логическое И
|| - логическое ИЛИ
!true - логическое НЕ
*/


// ======== 4. Тернарный оператор =========
/*
if (10 < 12) {
	console.log('Условие верно');
} else {
	console.log('Условие НЕ верно');
}
*/
// (условие) ? (условие верно) : (условие не верно);
/*
10 < 12 ? console.log('Условие верно') : console.log('Условие НЕ верно');

let greeting;

if (10 < 12) {
	greeting = 'Доброе утро';
} else {
	greeting = 'Добрый день';
}

console.log(greeting);

let greeting;
greeting = 10 < 12 ? 'Доброе утро' : 'Добрый день';
console.log(greeting);

let greeting;
greeting = 10 < 12 ? 'Доброе утро' : null;
console.log(greeting);
*/

// ======== 4. Конкатенация строк и шаблонные строки =========
/*
console.log('Привет, Марк! Как твои дела?');

// конкатенация 'строка' + 'строка'
const userName = 'Марк';
console.log('Привет, ' + userName + '! Как твои дела?'); // конкатенация

// шаблонные строки
console.log(`Привет, ${userName}! Как твои дела?`); // Шаблонные строки и интерполяция

*/
// =================== 5. Функции ===================

// Описание и вызов функции
/*
console.log('Привет, дорогой пользователь!');

function sayHi() {
	console.log('Привет, дорогой пользователь!');
}

sayHi();

*/
// =================== 5.1 Параметры и аргументы для функции ===================
/*
const userName = 'Марк';
console.log(`Привет, ${userName}! Как твои дела?`);

function sayHi(name) {
	console.log(name);
	console.log(`Привет, ${name}! Как твои дела?`);
}

const pavel = 'Павел';
sayHi(pavel);

sayHi('Боб');
sayHi('Павел');
*/

// =================== return внутри функции ===================
/*
function summ(a, b) {
	const result = a + b;
	return result;
}

const res = summ(10, 15);
console.log(res);

function summ(a, b) {
	const result = a + b;
	return result;
	console.log('Some other code');
}

function summ(a, b) {
	return a + b;
}
*/

// =================== 5.3 Функция как аргумент ===================
/*
function summ(a, b) {
	return a + b;
}

const res = summ(summ(5, 5), summ(20, 20));
console.log(res);
*/
// =================== 5.3 Функция как аргумент - 2 ===================
/*
function summ (a, b){
	return a + b;
}

function diff (a, b){
	return a - b;
}

function doSomething(func){
	let result = func(10, 15);
	console.log(result);
}

doSomething(summ); // 25
doSomething(diff); // -5
*/
// =================== 5.3 Самовызывающаяся функция ===================
/*
(function sayHi() {
	console.log('Привет, дорогой пользователь!');
})()(function summ(a, b) {
	console.log(a + b);
})(10, 15);
*/

// =================== 5.3 Стрелочные функции ===================

// const sayHi = (name) => {
// 	console.log(`Привет, ${name}! Как твои дела?`);
// };
/*
const sayHi = (name) => console.log(`Привет, ${name}! Как твои дела?`);
sayHi('Yurij');

function summ(a, b) {
	const result = a + b;
}

const summ = (a, b) => {
	const result = a + b;
	return result;
};

const summ = (a, b) => {
	return a + b;
};

const summ = (a, b) => a + b;
*/

// =================== 6. Массивы ===================
/*
const autoBrand1 = 'Audi';
const autoBrand2 = 'BMW';
const autoBrand3 = 'Mazda';
const autoBrand4 = 'Toyota';

const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
console.log(autoBrands);
console.log(autoBrands[0]);
console.log(autoBrands[1]);
console.log(autoBrands[2]);

console.log(autoBrands.length); // длинна массива, кол-во элементов
*/

// =================== 7. Методы массивов ===================
// .push(), .pop(), shift(), unshift(), .splice(), .slice(), .forEach(), .indexOf(), .includes()  ...

/*
.push(...items) – Добавить элемент в конец массива
arr.pop() – Удалить элемент из конца массива
arr.shift() – Удалить элемент из начала массива
arr.unshift(...items) – Добавить элемент в начало массива
arr.splice([start]], [deleteCount, newElements])
*/
/*
const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
autoBrands.push('Nissan');
console.log(autoBrands);

autoBrands.splice(2, 1);
console.log(autoBrands);
*/
// Методы массивов - это тема для отдельного урока


// =================== 7. Циклы ===================
/*
for (let i = 0; i < 10; i++) {
	console.log(i);
}
*/
// =================== 7. Обход массива циклом for ===================
/*
const autoBrands = ['Audi', 'BMW', 'Mazda', 'Mazda', 'Toyota'];

console.log(autoBrands[0]);
console.log(autoBrands[1]);
console.log(autoBrands[2]);

for (let i = 0; i < autoBrands.length; i++) {
	autoBrands[i];
}
*/
// =================== 7. Обход массива циклом for ( of ) ===================
/*
const autoBrands = ['Audi', 'BMW', 'Mazda', 'Mazda', 'Toyota'];

for (let item of autoBrands) {
	console.log(item);
}
*/
// =================== 8. Обход массива методом forEach() ===================
/*
const autoBrands = ['Audi', 'BMW', 'Mazda', 'Mazda', 'Toyota'];

autoBrands.forEach(function (item) {
	console.log(item);
});
*/
// ================================ 9. Объекты ===============================
/*
let userName = 'Марк';
let age = 30;
let isMarried = false;

const person = {
	userName: 'Марк',
	age: 30,
	isMarried: false,
};

console.log(person);
console.log(person.name);

person.speciality = 'JS developer';
console.log(person);
console.log(person.speciality);

delete person.age;
console.log(person);
*/

// ================================ 9. Методы в объектах ===============================
// Метод - это функция которая является свойством объекта. Функция принадллежащая объекту.
/*
const person = {
	userName: 'Марк',
	age: 30,
	isMarried: false,
	sayHi: function () {
		console.log('Привет!');
	},
};

person.sayHi();
*/
// Параметры в методе, также как и в функции
/*
person.sayHi = function (yourName) {
	console.log(`Привет, ${yourName}!`);
};

person.sayHi();
*/
// Ключевое слово this
/*
const person = {
	userName: 'Марк',
	age: 30,
	isMarried: false,
	sayHi: function () {
		console.log(`Привет, ${yourName}! Меня зовут ${userName}.`);
	},
};

person.sayHi();
*/

// ================= 10. Объекты обход циклом for in (не путать с for of) ================
// В отличие от for ... of  - for .. in может обходить неитерируемые объекты и возвращает ключи.
/*
for (let key in person) {
	console.log(key, ':', person[key]);
}
*/

// ================================ 10. Нюанс сonst и изменением объекта и массива ===============================
/*
const person = {
	userName: 'Марк',
	age: 30,
	isMarried: false,
};
*/
// Ошибка! Переопределение ссылки на новый объект
/*
person = {
	userName: 'Ник',
};
*/
// Аналогично и для массивов


// ================================ 10. Классы. Конструкторы объектов ===============================

// Представим ситуацию когда нам надо описать несколько одинаковых объектов
/*
const person1 = {
	userName: 'Марк',
	age: 30,
	isMarried: false,
	sayHi: function () {
		console.log(`Привет, ${yourName}! Меня зовут ${userName}.`);
	},
};

const person2 = {
	userName: 'Павел',
	age: 28,
	isMarried: true,
	sayHi: function () {
		console.log(`Привет, ${yourName}! Меня зовут ${userName}.`);
	},
};
*/
// Выглядит довольно громоздко, не так ли.
// Плюс заметно что мы используем "одну и ту же структуру" для каждого объекта.
// Если бы это можно было упростить.
// И такой способ есть, использовать классы

// Опишем класс, это как чертеж для всех будущих объектов person которые будут создаваться на его основе
/*
class Person {
	constructor(userName, age, isMarried) {
		this.userName = userName;
		this.age = age;
		this.isMarried = isMarried;
	}

	sayHi(yourName) {
		console.log(`Привет, ${yourName}! Меня зовут ${userName}.`);
	}
}
*/
// Теперь создадим новые объекты на основе класса person
/*
const person1 = new Person('Марк', 30, false);
const person2 = new Person('Павел', 28, true);
*/
// Они были созданы с указанными свойствами, плюс оба имеют методы которые были описаны в конструкторе
/*
person1.sayHi('Юрий');
person2.sayHi('Елена');
*/

// ================================  Выбор DOM элементов ===============================

// Выбор одного элемента DOM по селектору
// Будет выбрат первый найденный элемент. Поиск осуществляется с начала кода страницы, сверху вниз.
/*
document.querySelector('selector');

document.querySelector('h2').classList.add('red');
document.querySelector('p');

const heading2 = document.querySelector('h2');
heading2.classList.add('red');
*/
// Выбор коллекции элементов
/*
document.querySelectorAll('selector');

document.querySelectorAll('h2');
document.querySelectorAll('p');

const h2headings = document.querySelectorAll('h2');
for (heading of h2headings) {
	console.log(heading);
	heading.classList.add('green');
}
*/
// Также есть следующие методы
/*
document.getElementsByClassName(); // выбор Коллекции элементов по CSS классу
document.getElementsByTagName(); // выбор Коллекции элементов по Тегу
document.getElementById(); // выбор одного элемента по ID
*/

// ================================  Работа с CSS классами ===============================

/*
element.classList.add()

.add()
.remove()
.toggle()
.contains()

*/
/*
document.querySelector('h2');
*/

// ================================  Работа c атрибутами ===============================

/*
getAttribute(attrName) — возвращает значение указанного атрибута
setAttribute(name, value) — добавляет указанные атрибут и его значение к элементу
hasAttribute(attrName) — возвращает true при наличии у элемента указанного атрибута
removeAttribute(attrName) — удаляет указанный атрибут

toggleAttribute(name, force) — добавляет новый атрибут при отсутствии или удаляет существующий атрибут.
hasAttributes() — возвращает true, если у элемента имеются какие-либо атрибуты
getAttributesNames() — возвращает названия атрибутов элемента
*/
/*
const img = document.querySelector('#logo');
img.getAttribute('src');

img.setAttribute('src', './img/php.png');
img.setAttribute('width', '200');
img.setAttribute('src', './img/js.png');

img.src = './img/js.png';
*/

// ================================  Работа c прослушкой событий ===============================
/*
const button = document.querySelector('#button');
const img = document.querySelector('#logo');
button.value = 'удалить';

button.addEventListener('click', function () {
	img.remove();
	console.log('Click');
});

button.onclick = function () {
	img.remove();
	console.log('Click');
};
*/
// ================================  Работа c прослушкой событий ===============================
/*
const inputText = document.querySelector('#input-text');
const textBlock = document.querySelector('#text-block');

inputText.addEventListener(
	'input',
	function () {
		console.log(inputText.value);
		textBlock.innerText = inputText.value;
	},
	{ once: true }
);

inputText.addEventListener('input', inputHandler, { once: true });

function inputHandler() {
	console.log(inputText.value);
	textBlock.innerText = inputText.value;
}
*/

// ================================  Объект event   ===============================
/*
const list = document.querySelector('#list');
list.addEventListener('click', function (event) {
	console.log(this);
	console.log(event);
	console.log(event.target);
});
*/

// ================================  Работа c элементами  ===============================

/*
// Создать элемент
document.createElement('tag-name')

// Изменить HTML содержимое внутри элемента
element.innerHTML = ''

// Изменить Текстовое  содержимое внутри элемента
node.innerText = ''

// Клонирование элемента
node.cloneNode() // true c внутренним содержимым (текст и теги), false - без внутреннего содержимого

// вставить элемент внутрь другого элемента
element.append(nodesOrDOMStrings)

// Удалить элемент
element.remove()
*/

// Выбор контейнера
/*
const container = document.querySelector('#elementsContainer');
*/
// Создание заголовка
/*
const newHeader = document.createElement('h1');
newHeader.textContent = 'Новый заголовок';
container.append(newHeader);
*/
// Копирование шапки
/*
const mainHeader = document.querySelector('header');
const copyOfHeader = mainHeader.cloneNode(true);
container.append(copyOfHeader);
*/
// Вставка разметки через строки
/*
const htmlExample = '<h2>Еще один заголовок</h2>';
container.insertAdjacentHTML('beforeend', htmlExample);
*/
// Вставка разметки через шаблонные строки
/*
const title = 'Текст заголовка';
const htmlExample = `<h2>${title}</h2>`;
container.insertAdjacentHTML('beforeend', htmlExample);
*/

// =============  ToDo список задач  ================
/*
const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);

function formHandler(event) {
	event.preventDefault();
*/
	// Получаем название задачи из инпута
    /*
	const taskText = todoInput.value;
*/
	// Создаем тег li с помощью создания элемента
    /*
	const newTask = document.createElement('li');
	newTask.innerText = taskText;
*/
	// Создаем кнопку Удалить
    /*
	const deleteBtn = document.createElement('button');
	deleteBtn.setAttribute('role', 'button');
	deleteBtn.innerText = 'Удалить';
	deleteBtn.style['margin-left'] = '15px';
	newTask.append(deleteBtn);
*/
	// Добавляем событие по клику
    /*
	deleteBtn.addEventListener('click', function () {
		this.closest('li').remove();
	});
*/
	// Добавляем элемент на страницу
    /*
	todoList.append(newTask);
*/
	// Очищаем поле ввода
    /*
	todoInput.value = '';
*/
	// Фокус на поле ввода
    /*
	todoInput.focus();
}
*/

// ============  setInterval   ==============

// const timerIntervalID = setInterval(function () {
// 	console.log('Fired!');
// }, 1000);

// clearInterval(timerIntervalID)

// ============  setTimeOut   ==============

// const timerID = setTimeout(function () {
// 	console.log('setTimeout Fired!');
// }, 2000);

// clearInterval(timerID);

// ============  setInterval + setTimeOut   ==============

// const timerID = setInterval(function () {
// 	console.log('setInterval Fired!');
// }, 1000)

// setTimeout(function () {
// 	clearInterval(timerID);
// }, 10000)

// ============  Секундомер   ==============
/*
const counterElement = document.querySelector('#counter');
let counter = 0;
let timerID;
*/
// Старт
/*
const btnStart = document.querySelector('#start');
btnStart.onclick = function () {
	console.log('btnStart');
	timerID = setInterval(function () {
		counter++;
		counterElement.innerText = counter;
	}, 1000);
};
*/
// Пауза
/*
const btnPause = document.querySelector('#pause');
btnPause.onclick = function () {
	console.log('btnStop');
	clearInterval(timerID);
};
*/
// Сброс
/*
const btnReset = document.querySelector('#reset');
btnReset.onclick = function () {
	counter = 0;
	counterElement.innerText = counter;
	clearInterval(timerID);
};
*/

// ================================  Работа с SetTimeOut   ===============================
/*
console.log('Start');

setTimeout(function () {
	console.log('Print after 2s');
}, 2000);
*/
// ------------------------------------------
/*
console.log('Start');

setTimeout(function () {
	console.log('Print after 2s');
}, 2000);

console.log('Finish');

clearTimeout();
*/

// ===========  Callback. Callback hell   ==================
/*
console.log('Start');

setTimeout(function () {
	console.log('Print after 2000ms');
}, 2000);

console.log('Finish');

console.log('Start');

setTimeout(function () {
	console.log('Print after 2000ms');
	setTimeout(function () {
		console.log('Print after 1500ms');
		setTimeout(function () {
			console.log('Print after 1000ms');
			setTimeout(function () {
				console.log('Print after 500ms');
				setTimeout(function () {
					console.log('Print after 100ms');
				}, 100);
			}, 500);
		}, 1000);
	}, 1500);
}, 2000);
*/
//=============  Пример без задержки  =========
/*
function checkRooms() {
	console.log('Проверяем номера в отеле...');
	// ---- код который отправляет запрос в отель ---
	const availableRooms = true;
	return availableRooms;
}

if (checkRooms()) {
	console.log('Номера есть!');
	console.log('Едем в отпуск! 🌴 :)');
} else {
	console.log('Номеров нет.');
	console.log('Отпуск отменяется 😢 :(');
}
*/
// =========  Пример c задержкой. Проблема. Нерабочий код  =========

/*
- Добавим Timeout
- Возникает проблема, не можем передать значение из setTimeout
- Даже если вынести availableRooms в глобальную область видимости
- Добавлять setTimeout для if else нельзя, потому как мы не знаем сколько именно времени займет запрос
*/
/*
let availableRooms;

function checkRooms() {
	setTimeout(function () {
		console.log('Проверяем номера в отеле...');
		availableRooms = true;
		console.log(availableRooms);
		return availableRooms;
	}, 500);
}

checkRooms();

if (availableRooms) {
	console.log('Номера есть!');
	console.log('Едем в отпуск! 🌴 :)');
} else {
	console.log('Номеров нет.');
	console.log('Отпуск отменяется 😢 :(');
}
*/
// =========  Пример c задержкой. Решение =========

/*
Решение. Поместить код if else с дальнейшими действиями внутрь setTimeout
*/
/*
function checkRooms() {
	setTimeout(function () {
		console.log('Проверяем номера в отеле...');
		let availableRooms = true;

		if (availableRooms) {
			console.log('Номера есть!');
			console.log('Едем в отпуск! 🌴 :)');
		} else {
			console.log('Номеров нет.');
			console.log('Отпуск отменяется 😢 :(');
		}
	}, 500);
}

checkRooms();
*/
// =========  А если действий будет больше. callBackHell =========

// 1. Проверить номера в отеле
// 2. Проверить билеты ✈
// - Летим в отпуск! 🌴 :)
// - Отпуск отменяется 😢 :(
/*
function checkRooms(success, failed) {
	setTimeout(function () {
		console.log('Проверяем номера в отеле...');
		let availableRooms = true;

		if (availableRooms) {
			success('Номера есть!');
		} else {
			failed('Номеров нет.');
		}
	}, 500);
}
*/
// Вынесем сообщения о Успехе и Неудаче в отдельные функции
/*
function cancelVacation(message) {
	console.log('---- cancelVacation ----');
	console.log('Ответ на предыдущем шаге:', message);
	console.log('Отпуск отменяется 😢 :(');
}

function sumbitVacation(message) {
	console.log('---- sumbitVacation ----');
	console.log('Ответ на предыдущем шаге:', message);
	console.log('Едем в отпуск! 🌴 :)');
}
*/
// Уже появляются зачатки callback Hell))
// Код начинает уезжать вправо
/*
checkRooms(
	function (messageFromCheckRooms) {
		sumbitVacation();
	},
	function (messageFromCheckRooms) {
		cancelVacation(messageFromCheckRooms);
	}
);
*/
// =========  Добавим еще одно действие, проверить билеты. callBackHell =========

// И сделаем так чтобы функция checkTickets()
// принимала данные от результата работы checkRooms()
/*
function checkRooms(success, failed) {
	setTimeout(function () {
		console.log('Проверяем номера в отеле...');
		let availableRooms = true;

		if (availableRooms) {
			success('Номера есть!');
		} else {
			failed('Номеров нет.');
		}
	}, 500);
}
*/
// Добавим ф-ю checkTickets которая будет принимать данные (сообщение)
// от предыдущего действия, и после запускать функции success или failed
/*
function checkTickets(message, success, failed) {
	setTimeout(() => {
		console.log('---- function checkTickets ----');
		console.log('Ответ на предыдущем шаге:', message);

		console.log('Проверяем авиабилеты...');
		// ---- код который отправляет запрос в авиакомпанию ---
		const availableTickets = true;

		if (availableTickets) {
			let message = 'Билеты есть';
			success(message);
		} else {
			let message = 'Билетов нет';
			failed(message);
		}
	}, 1000);
}
*/
// Сообщения о Успехе и Неудаче в отдельные функции
/*
function cancelVacation(message) {
	console.log('---- cancelVacation ----');
	console.log('Ответ на предыдущем шаге:', message);
	console.log('Отпуск отменяется 😢 :(');
}

function sumbitVacation(message) {
	console.log('---- sumbitVacation ----');
	console.log('Ответ на предыдущем шаге:', message);
	console.log('Едем в отпуск! 🌴 :)');
}
*/
// callback Hell разростается
// код уезжает вправо
/*
checkRooms(
	function (messageFromCheckRooms) {
		checkTickets(
			messageFromCheckRooms,
			function () {
				sumbitVacation(messageFromCheckRooms);
			},
			function () {
				cancelVacation(messageFromCheckRooms);
			}
		);
	},
	function (messageFromCheckRooms) {
		cancelVacation(messageFromCheckRooms);
	}
);
*/
// ================================  Callback hell   ===============================

// ------------------------
/*
setTimeout(function () {
	console.log('Print after 2000ms');
}, 2000);

setTimeout(function () {
	console.log('Print after 2000ms');
}, 1500);
*/
// ------------------------
/*
setTimeout(function () {
	console.log('Print after 2000ms');
	setTimeout(function () {
		console.log('Print after 1500ms');
	}, 1500);
}, 2000);
*/
// ------------------------

// callback Hell
/*
setTimeout(function () {
	console.log('Print after 2000ms');
	setTimeout(function () {
		console.log('Print after 1500ms');
		setTimeout(function () {
			console.log('Print after 1000ms');
			setTimeout(function () {
				console.log('Print after 500ms');
				setTimeout(function () {
					console.log('Print after 100ms');
				}, 100);
			}, 500);
		}, 1000);
	}, 1500);
}, 2000);
*/
// ================= Создание промиса =================
/*
const myPromise = new Promise((resolve, reject) => {
	*/
    // При созданиие объекта myPromise сразу выполняется данный код
	// Например асинхронная операция
    /*
	console.log('Run some code');
*/
	// Далее по результату асинхронной операции, на основе полученного ответа
	// мы сами вызываем функции resolve() или reject()
	// передавая в них значение которое получили от асинхронной операции
/*
	resolve(someValue); // успешное завершение
    */
	// или
    /*
	reject('failure reason'); // неудача
});
*/
// ================= Использование. Потребление промиса =================
/*
const myPromise = new Promise(function (resolve, reject) {
	setTimeout(() => {
        */
		// Представим что здесь был запрос на сервер
		// и он вернул нам значение в переменную res
/*
		res = 'success';
        */
		// В случае успеха нашего запроса мы должны запустить функцию resolve()
		/*
        if (res == 'success') {
			resolve('DONE!');
		} else {
            */
			// В случае НЕ успеха нашего запроса мы должны запустить функцию resolve()
			/*
            reject('FAIL!');
		}
	}, 500);
})
	.then(function (data) {
		console.log('---- Resolve function ----');
		console.log(data);
	})
	.catch(function (data) {
		console.log('---- Reject function ----');
		console.log(data);
	});
*/
// ========== Цепочка промисов. Синхронные шаги ============
/*
const promise = new Promise(function (resolve, reject) {
	setTimeout(() => {
        */
		// Представим что здесь был запрос на сервер.
		// Сервер вернул нам результат в переменную res
		// и дванные в dataFromServer
        /*
		const res = 'success';
		const dataFromServer = 'dataFromServer = DONE!';
*/
		// !ВАЖНО! Мы сами определяем успешно
		// прошел запрос или нет, на основе полученных данных
		/*
        if (res == 'success') {
            */
			// В случае успеха нашего запроса
			// мы должны запустить функцию resolve()
			/*
            resolve(dataFromServer);
		} else {
            */
			// В случае НЕ успеха нашего запроса мы должны запустить функцию resolve()
			/*
            reject(dataFromServer);
		}
	}, 500);
});

promise
	.then(
		function (data) {
			console.log('Step 1');
			console.log(data);
			return 'Data from Step 1';
		},
		function (data) {
			console.log('Error');
			console.log(data);
		}
	)
	.then(
		function (data) {
			console.log('Step 2');
			console.log(data);
			return 'Data from Step 2';
		},
		function (data) {
			console.log('Error');
			console.log(data);
		}
	);
*/
// ========== Цепочка промисов. Несколько промисов c setTimeout ============
/*
const checkRooms = new Promise(function (resolve, reject) {
	setTimeout(function () {
		console.log('Проверяем номера в отеле...');
        */
		// ---- код который отправляет запрос в отель ---
		/*
        let availableRooms = true;

		if (availableRooms) {
			resolve('Номера есть!');
		} else {
			reject('Номеров нет.');
		}
	}, 1500);
})
	.then(function (data) {
		return new Promise(function (resolve, reject) {
			setTimeout(() => {
				console.log('---- then 1. checkTickets ----');
				console.log('Ответ на предыдущем шаге:', data);

				console.log('Проверяем авиабилеты...');
				*/
                // ---- код который отправляет запрос в авиакомпанию ---
				/*
                const availableTickets = true;

				if (availableTickets) {
					let message = 'Билеты есть';
					resolve('message');
				} else {
					let message = 'Билетов нет';
					throw new Error(message);
				}
			}, 1000);
		});
	})
	.then(function (data) {
		console.log('---- then 2. sumbitVacation ----');
		console.log('Ответ на предыдущем шаге:', data);
		console.log('Едем в отпуск! 🌴 :)');
	})
	.catch(function (data) {
		console.log('---- catch ----');
		console.log('Ответ на предыдущем шаге:', data);
		console.log('Отпуск отменяется 😢 :(');
	});
*/
    // ================================  Promise   ===============================

/*
Представим себе такую ситуацию. Нам необходимо сделать запрос на сервер.
И только после того как придет ответ продолжать работу программы
*/

// На callback это бы выглядело так:

function serverRequest() {
	const res = 'success';
	// В случае успеха нашего запроса мы должны запустить функцию resolve()
	if ((res = 'success')) {
		(function () {
			console.log('DONE');
		})();
	} else {
		// В случае НЕ успеха нашего запроса мы должны запустить функцию resolve()
		(function () {
			console.log('FAIL');
		})();
	}
}

const myFirstPromise = new Promise((resolve, reject) => {
	// выполняется асинхронная операция, которая в итоге вызовет:
	//
	//   resolve(someValue); // успешное завершение
	// или
	//   reject("failure reason"); // неудача
});

// const promise = new Promise( function(resolve, reject){ ... } );

const promise = new Promise(function (resolve, reject) {
	setTimeout(() => {
		// Представим что здесь был запрос на сервер и он вернул нам значение в переменную res
		res = 'success123123213';
		// В случае успеха нашего запроса мы должны запустить функцию resolve()
		if (res == 'success') {
			resolve('DONE!');
		} else {
			// В случае НЕ успеха нашего запроса мы должны запустить функцию resolve()
			reject('FAIL!');
		}
	}, 500);
});

function startPromise() {
	return promise
		.then(function (done) {
			console.log(done);
		})
		.catch(function (fail) {
			console.log(fail);
		});
}

startPromise();

// ========  Async functions. Асинхронные функции. Потребление промиса   ========

function promiseFunction() {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			res = 'success123';
			if (res == 'success') {
				resolve('DONE!');
			} else {
				reject('FAIL!');
			}
		}, 500);
	});
}

async function startPromise() {
	try {
		const result = await promiseFunction();
		console.log(result);
	} catch (error) {
		console.log(error);
	}
}

startPromise();

// ========  Несколько асинхронных операций. Серия промисов.   ========

function checkRooms() {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			console.log('Проверяем номера в отеле...');
			// ---- код который отправляет запрос в отель ---
			let availableRooms = true;

			if (availableRooms) {
				resolve('Номера есть!');
			} else {
				reject('Номеров нет.');
			}
		}, 1500);
	});
}

function checkTickets(data) {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			console.log('----  checkTickets ----');
			console.log('Ответ на предыдущем шаге:', data);

			console.log('Проверяем авиабилеты...');
			// ---- код который отправляет запрос в авиакомпанию ---
			const availableTickets = true;

			if (availableTickets) {
				let message = 'Билеты есть';
				resolve(message);
			} else {
				let message = 'Билетов нет';
				reject(message);
			}
		}, 1000);
	});
}

function submitVacation(data) {
	console.log('---- submitVacation ----');
	console.log('Ответ на предыдущем шаге:', data);
	console.log('Едем в отпуск! 🌴 :)');
}

function cancelVacation(data) {
	console.log('---- cancelVacation ----');
	console.log('Ответ на предыдущем шаге:', data);
	console.log('Отпуск отменяется 😢 :(');
}

async function checkVacation() {
	// const roomsResult = await checkRooms();
	// const ticketsResult = await checkTickets(roomsResult);

	// if (ticketsResult === 'Билеты есть') {
	// 	submitVacation(ticketsResult);
	// } else {
	// 	cancelVacation(ticketsResult);
	// }

	try {
		const roomsResult = await checkRooms();
		const ticketsResult = await checkTickets(roomsResult);
		submitVacation(ticketsResult);
	} catch (err) {
		cancelVacation(err);
	}
}

checkVacation();

// ====  Пример fetch c промисами получение данных по API   =======
// https://www.cbr-xml-daily.ru/

async function getCurrencies() {
	// 1. Получить данные с сервера
	const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
	const response = await fetch(url);
	const data = await response.json();

	// 2. Отобразить эти данные на странице
	renderRates(data);
}

getCurrencies();

function renderRates(data) {
	const usdRate = data.Valute.USD.Value.toFixed(2);
	const eurRate = data.Valute.EUR.Value.toFixed(2);

	// 2. Отобразить эти данные на странице
	const usdElement = document.querySelector('#usd');
	const eurElement = document.querySelector('#eur');

	usdElement.innerText = usdRate;
	eurElement.innerText = eurRate;
}
