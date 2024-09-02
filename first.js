
// Создайте тип, описывающую точку в двумерной системе координат (х, у). 
// С помощью этой структуры задайте две точки. Будет ли прямая, проходящая 
// через эти точки, параллельна оси ординат или оси абсцисс?

module.exports = {
x : 0,
y : 0,

setCordinates : function(a, b){
this.x = a;
this.y = b;
},

getCordinateX : function(){
return this.x;
},

getCordinateY : function(){
    return this.y;
    },

testCordinates : function(x1, y1){
if(this.x = x1){
    console.log("there is parallel");
}
if(this.x != x1){
    console.log("no parallel");
}

else{
    console.log("no parallel");
}
}

}