package main

import (
	"fmt"
	"io/ioutil"
	// "strings"
)

func main() {
	floor := 0
	positionOfChar := 0
	data, err := ioutil.ReadFile("input.txt")
	if (err != nil) {
		fmt.Println("Error reading file", err)
	}

	for i := 0; i < len(string(data)); i++ {
		char := string(data)[i]
		if char == '(' {
			floor += 1
		} else if char == ')' {
			floor -= 1
		}
		
		if (floor == -1 && positionOfChar == 0) {
			positionOfChar = i + 1
		}
	}

	fmt.Println("floor =", floor)
	fmt.Println("position =", positionOfChar)
}