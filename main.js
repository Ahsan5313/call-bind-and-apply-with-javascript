function printMe(){

    console.log('Name:'  + this.name)
}

var obj = {

    name: 'Ahsanul Huq'
}

var opened = printMe.bind(obj)
console.log(opened())
printMe.call(obj)


function addMe(a , b){

    return (a + b) * this.c
}

var obj = {

    c : 4
}

var obj1 = {

    c : 4
}

var binded = addMe.bind(obj)
console.log(binded(10, 20))

var bind1 = addMe.call(obj1, 10, 20)
var bind2 = addMe.apply(obj1,[10, 20])

console.log(bind1, bind2)


