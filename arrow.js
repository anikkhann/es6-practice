// function doubleIt(num)
// {
//     return num*2;
// }
// const result=doubleIt(2);
// console.log(result);          //normal wayte function 

// const doubleIt=function myFun(num)
// {
//     return num*2;
// }
// const result=doubleIt(2);
// console.log(result);         // function ke variable a decleare kore kaj kora

//Arrow function in es6

const bishalFunction= (x, y) => {

    const sum = x + y;
    const sub = x - y;
    const result = sum * sub;
    return result;
}
const result =  bishalFunction(3, 2);
console.log(result);
