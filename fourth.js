// 4. Написать программу, реализующую журнал академической группы с 
// произвольным количеством студентов. Программа должна предоставлять 
// возможность добавления студента в группу, удаления студента из группы, 
// редактирования данных о студенте, вывода информации о студентах на экран.



class Student{


    constructor(n, s, a, gID, sID){
        this.name = n;
        this.surname = s;
        this.age = a;
        this.groupID = gID;
        this.studentID = sID;
    }

   printStudent(){
    console.log(`Name: ${this.name}`);
    console.log(`Surname: ${this.surname}`);
    console.log(`Age: ${this.age}`);
    console.log(`Group ID: ${this.groupID}`);
    console.log(`Student ID: ${this.studentID}`);
   }

   changeName(n){
    this.name = n;
   }

   changeSurname(s){
    this.surname = s;
   }

   changeAge(a){
    this.age = a;
   }

   changeGroup(id){
    this.groupID = id;
   }

   changeID(id){
    this.studentID = id;
   }
   
   deleteStudent(id){
    if(this.studentID === id){
        this.name = "";
        this.surname = "";
        this.age = 0;
        this.groupID = 0;
        this.student
        ID = 0;
    }
   }
}


class Group{
    constructor(){
        this.students = [];
    }

    addStudent(student){
        this.students.push(student);
    }

    removeStudent(student, studentID) {
        this.students = this.students.filter(student => student.studentID !== studentID);
    }

    editStudent(studentID, newData) {
        var student = this.students.find(student => student.studentID === studentID);
        if (student) {
            student.changeName(newData.name || student.name);
            student.changeSurname(newData.surname || student.surname);
            student.changeAge(newData.age || student.age);
            student.changeGroup(newData.groupID || student.groupID);
            student.changeID(newData.studentID || student.studentID);
        }
    }

    printAllStudents() {
        this.students.forEach(student => {
            student.printStudent();
            console.log('---');
        });
    }
}

module.exports.Student = Student;
module.exports.Group = Group;
