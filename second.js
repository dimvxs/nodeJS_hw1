// 2) 
// Создать тип, описывающую человека. Создать функции для работы с этой 
// структурой (например, заполнение объекта и распечатка данных объекта).


module.exports = {
    name : "",
    surname : "",
    age: 0,
    profession : "",
    id : 0,

    setUser : function(n, s, a, p, i){
        this.name = n;
        this.surname = s;
        this.age = a;
        this.profession = p;
        this.id = i;
    },

    printUser : function(){
        console.log("User info: ");
        console.log("name: " + this.name);
        console.log("surname: " + this.surname);
        console.log("age: " + this.age);
        console.log("profession" + this.profession);
        console.log("id: " + this.id);
    }
}