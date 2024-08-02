const fs = require("fs/promises")

fs.readFile('input.txt', 'utf8')
    .then((input) => {
        let floor = 0
        let positionOfChar = 0
        for(let i = 0; i < input.length; i++) {
            const char = input[i]
            if (char === '(') {
                floor += 1
            } else if (char === ')') {
                floor -= 1
            }

            if(floor === -1 && positionOfChar === 0) {
                positionOfChar = i + 1
            }
        }
        console.log("Floor =", floor, "\nPosition =", positionOfChar);
    })
    .catch(err => {
        console.log("ERROR", err);
    })