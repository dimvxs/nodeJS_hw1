// 1)
// Создайте тип, описывающую точку в двумерной системе координат (х, у). 
// С помощью этой структуры задайте две точки. Будет ли прямая, проходящая 
// через эти точки, параллельна оси ординат или оси абсцисс?



// var point1 = require('./first');
// point1.setCordinates(7, 4);

// var point2 = require('./first');
// point2.setCordinates(3, 3);

// var pointX = point2.getCordinateX();
// var pointY = point2.getCordinateY();

// point1.testCordinates(pointX, pointY);


// 2) 
// Создать тип, описывающую человека. Создать функции для работы с этой 
// структурой (например, заполнение объекта и распечатка данных объекта).

// var user = require('./second');
// user.setUser("igor", "kremlev", 30, "sailor", 32956);
// user.printUser();




// 3)
// Создать тип, описывающую обычную дробь. Написать функции, 
// реализующие операции сложения, вычитания, умножения и деления дробей.

// var fraction = require('./third');
// fraction.setFraction(3, 3);
// fraction.print();

// var fraction1 = require('./third');
// fraction1.setFraction(3, 3);

// var num1 = fraction1.getNumerator();
// var den1 = fraction1.getDenominator();

// fraction.sum(num1, den1);

// fraction.print();





// 4. Написать программу, реализующую журнал академической группы с 
// произвольным количеством студентов. Программа должна предоставлять 
// возможность добавления студента в группу, удаления студента из группы, 
// редактирования данных о студенте, вывода информации о студентах на экран.

var { Student, Group } = require('./fourth');

var group = new Group();
var student1 = new Student("Igor", "Kremlev", 20, 101, 1);
group.addStudent(student1);
group.printAllStudents();