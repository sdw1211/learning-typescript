// 스프레드

// string[]
const soldier = ['aaa', 'bbb', 'cccc'];
// number[]
const soldierAges = [90, 19, 45];

// 타입이 (sting|number)[]
const conjoined = [...soldier, ...soldierAges];

function logWarrior(greeting: string, ...names: string[]) {
    for (const name of names) {
        console.log(`${greeting}, ${name}!`)
    }
}

const warrior = ['aaa', 'bbbb', 'cccc'];

logWarrior('test', ...warrior);
logWarrior('test', warrior);

const birthYears = [1844, 1840, 1583];

logWarrior('test', ...birthYears);


export {};

