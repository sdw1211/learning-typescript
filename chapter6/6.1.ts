let arrayOfNumbers: number[];

arrayOfNumbers = [4,8,15,16,23,42];

let createStrings: () => string[];
let stringCreator: (() => string)[];

createStrings = () => ['wdwdwdwd'];
stringCreator = [() => 'wdwdwdwdw'];
stringCreator.push(() => 'wdwdwd');

let stringOrArrayOfNumbers: string | number[];
let stringOrStringOrNumbers: (string | number)[];

stringOrArrayOfNumbers = 'wdwdwd';
stringOrArrayOfNumbers = [1,2,3,4,5,6];

stringOrStringOrNumbers = [1];
stringOrStringOrNumbers.push('wdwdwdwd');

const namesMaybe = [
    'fdwefefe',
    'wdwdwddwwd',
    undefined
];

let values = [];

values.push('');
values[0] = 0;

values.push(undefined);
values.push(null);

let arrayOfArraysOfNumbers: number[][];

arrayOfArraysOfNumbers = [
    [1,2,3,4,5],
    [3,4,5,],
    [4],
];



export {};