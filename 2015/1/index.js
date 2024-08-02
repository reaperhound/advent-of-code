const fs = require("fs/promises")

async function returnInput() {
    try {
        const data = await fs.readFile('input.txt', 'utf8')
        return data
    } catch (error) {
        return error
    }
}

async function printInput(){
    try {
        let input = await returnInput()
        console.log("input", input.split(""));
        // inputArr = input.split("")
    } catch (error) {
        console.error(error);
    }
}

// printInput()

async function calculateFloor() {
    let floor = 0
    try {
        let inputArr = await returnInput()
        inputArr = inputArr.split("")
        // console.log(inputArr);

        inputArr.forEach((value) => {
            if(value === '(') {
                floor += 1
            } else if (value === ")") {
                floor -= 1
            } 
        })
        console.log("floor = ", floor)
    } catch (error) {
        console.error(error);
    }
}

calculateFloor()

// --------------------------- P2--------------------------

async function positionOfChar() {
    let floor = 0
    let position = 0
    try {
        let input = await returnInput()
        input = input.split("")
        for (let i = 0; i < input.length; i++) {
            if(input[i] === '(') {
                floor += 1
            } else if (input[i] === ')') {
                floor -= 1
            }
            // console.log("Floor", floor, "position", i);
            if (floor === -1) {
                position = i + 1 // cause the first character starts from 1 and here i starts from 0
                break
            }
        }
        console.log("Position", position);
    } catch (error) {
        console.log(error)
    }
}

positionOfChar()
