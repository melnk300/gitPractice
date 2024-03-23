const power = (num1: number, num2: number) => {
    for (var i = 1; i <= num2; i++) {
        num1 *= num1
    }

    return num1
}