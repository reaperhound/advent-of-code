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


