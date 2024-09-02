// 3)
// Создать тип, описывающую обычную дробь. Написать функции, 
// реализующие операции сложения, вычитания, умножения и деления дробей.

module.exports = {
numerator: 1,
denominator: 1,

setFraction: function(num, den){
    this.numerator = num;
    this.denominator = den;
},

sum : function(num1, den1){
if(this.numerator != 0 && this.denominator != 0) {
    if(this.denominator === den1){
        this.numerator += num1;
    }
}
},

difference : function(num1, den1){
    if(this.numerator != 0 && this.denominator != 0) {
        if(this.denominator === den1){
            this.numerator -= num1;
        }
    }
},

multiply: function(num1, den1){
    if(this.numerator != 0 && this.denominator != 0) {
        if(this.denominator === den1){
            this.numerator *= num1;
        }
    } 
},

division: function(num1, den1){
    if(this.numerator != 0 && this.denominator != 0) {
        if(this.denominator === den1){
            this.numerator /= num1;
        }
    } 
},
print: function(){
    console.log(this.numerator + "/" + this.denominator);
}, 

getNumerator: function(){
    return this.numerator;
},

getDenominator: function(){
    return this.denominator; 
}


}