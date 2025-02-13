// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
 
function wrapAdjective(string = '*') {
    return function(adj = 'special') {
        return `You are ${string}${adj}${string}!`
    }
}

const Calculator = {
    add: function (a, b) {
            return a + b
    },
    subtract: function (a, b) {
        return a - b
    },
    multiply: function (a, b) {
        return a * b
    },
    divide: function (a, b) {
        return a / b
    }
}

function actionApplyer(int, arr) {
    let result = int
    for(let i =0; i<arr.length; i++) {
        result = arr[i](result)
    }
    return result 
}

