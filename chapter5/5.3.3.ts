type StringToNumber = (input: string) => number;

let stringToNumber: StringToNumber;
//
let stringToNumber2: (input: string) => number;

stringToNumber = input => input.length;
stringToNumber = input => input.toUpperCase();

export {};