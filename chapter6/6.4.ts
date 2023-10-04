let yearAndWarrior: [number, string];

yearAndWarrior = [530, 'aaaa'];
yearAndWarrior = [false, 'bbbb'];

yearAndWarrior = [530];

// year는 숫자타입, warrior는 문자 타입
// 이런식으로 배열 구조 분해 할당 방식을 자주 사용
let [year, warroir] = Math.random() > 0.5 ? [340, 'aaaa'] : [550, 'bbbb'];

// 가변 길이의 배열 타입은 튜플 타입에 할당할 수 없다.

const pairLoose = [false, 123];
const pairTupleLoose: [boolean, number] = pairLoose;

const tupleThree: [boolean, number, string] = [false, 1583, 'aaaa'];
const tupleTwoExact: [boolean, number] = [tupleThree[0], tupleThree[1]];
const tupleTwoExtra: [boolean, number] = tupleThree;

// 튜플의 경우는 배열의 타입 순서가 보장된다. 그래서 아래와 같은 상황해서 유용하게 사용할 수 있다.

function logPair(name: string, value: number) {
    console.log(`${name} has ${value}`);
}

const pairArray = ['aaa', 1];

logPair(...pairArray);

const pairTupleIncorrect: [number, string] = [1, 'aaa'];

logPair(...pairTupleIncorrect);

const pairTupleCorrect: [string, number] = ['aaa', 1];

logPair(...pairTupleCorrect);

function logTrio(name: string, value: [number, boolean]) {
    console.log(`${name} has ${value[0]}(${value[1]})`);
}

const trio: [string, [number, boolean]][] = [
    ['aaaa', [1, true]],
    ['bbbb', [2, true]],
    ['xxxx', [3, false]],
];

trio.forEach(logTrio);
trio.forEach(t => logTrio(...t));

// 일반적으로 타입스크립트에서 생성된 배열은 튜플이 아닌 가변 길이의 배열로 취급
function firstCharAndSize(input: string) {
    return [input[0], input.length];
}

const [firstChar, size] = firstCharAndSize('Gwdwdw');

// 값이 튜플 타입임을 저장하는 방법
// 명시적 튜플 타입

function firstCharAndSizeExplicit(input: string): [string, number] {
    return [input[0], input.length];
}


const [firstChar2, size2] = firstCharAndSizeExplicit('Gwdwdw');

// const 어셔션
// readlonly이기 때문에 수정이 불가
// 이게 가장 나아보이나?

const readonlyTuple = [1157, 'aaaa'] as const;

readonlyTuple[0] = 111;

function firstCharAndSizeReadOnly(input: string) {
    return [input[0], input.length] as const;
}

const [firstChar3, size3] = firstCharAndSizeReadOnly('Gwdwdw');

export {};