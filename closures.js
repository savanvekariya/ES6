//closure - Closure is the form of lexical scoping used to preserve the variables from outer scope of the function in inner scope of function
//Lexical Scoping - It is the process used to define the scope of varible by its position in the sorce code.

function closureFunc(a,b){
    let c = 2
    return function(d){
        return a+b+c+d
    }
}

let resultFunc = closureFunc(3,4)
let sum = resultFunc(5)


function SeconfClosureFunc(i){
    return {
        twoSum : function(a){
            return a+i
        },
        threeSum : function(a,b){
            return a+b+i
        }
    }
}

let SecondResultFunc = SeconfClosureFunc(1)
let twoSumResult = SecondResultFunc.twoSum(2)
let threeResult = SecondResultFunc.threeSum(3,4)