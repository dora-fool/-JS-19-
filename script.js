///// Задание 1 /////

const person = {
  name: "София",
  age: 20,
  greet: function () {
    console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`);
  },
};

const greetFunction = person.greet;

greetFunction();

///// Задание 2 /////

/*

Первый случай (student.greet()):

Когда вызываем student.greet(), метод greet вызывается как метод объекта student. 
В этом случае this внутри greet ссылается на объект student, поэтому this.name равно "Alice", и выводится Hello, Alice!.


Второй случай (student.delayedGreet()):

Внутри метода delayedGreet передается this.greet в setTimeout. 
Когда setTimeout вызывает this.greet через 1 секунду, он вызывает его как обычную функцию, а не как метод объекта. 
В результате this внутри greet теряет связь с объектом student 
и становится либо undefined (в строгом режиме), либо ссылается на глобальный объект (например, window в браузере). 
Поскольку ни undefined, ни глобальный объект не имеют свойства name, выводится Hello, undefined!.

*/

const student = {
  name: "София",

  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },

  delayedGreet: function () {
    setTimeout(() => {
      this.greet();
    }, 1000);
  },
};

student.greet();
student.delayedGreet();

///// Задание 3 /////

function greet() {
  console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`);
}

const person1 = {
  name: "Иван",
  age: 30,
};

const person2 = {
  name: "София",
  age: 20,
};

// Использование call
greet.call(person1);
greet.call(person2);

// Использование apply
greet.apply(person1);
greet.apply(person2);

// Использование bind
const greetPerson1 = greet.bind(person1);
const greetPerson2 = greet.bind(person2);

greetPerson1();
greetPerson2();

///// Задание 4 /////

/*

sayHelloToAdmin():

Выведет: Hello, Bob.
Использование bind для создания новой функции sayHelloToAdmin, где this привязан к объекту admin. 
Поэтому this.name равно "Bob".


sayHelloToUser():

Выведет: Hello, Bob.
Попытка использования bind на уже привязанной функции sayHelloToAdmin. 
bind работает только один раз — после первого вызова bind контекст this фиксируется и не может быть изменён повторным вызовом bind. 
Поэтому this остаётся привязанным к объекту admin, и this.name по-прежнему равно "Bob".

*/

function sayHello() {
    console.log('Hello, ' + this.name);
}

const admin = {
    name: 'София'
};

const user = {
    name: 'John'
};

const sayHelloToAdmin = sayHello.bind(admin);
const sayHelloToUser = sayHello.bind(user);

sayHelloToAdmin();
sayHelloToUser();