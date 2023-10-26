// 제네릭 제한자

// 제네릭의 기본값을 설정할 수 있음
interface Quote<T = string> {
    value: T;
}

let explicit: Quote<number> = {value: 123};
let implicit: Quote = {value: 'ewdwdwdwddw'};
let mismatch: Quote = {value: 23232332};

interface KeyValuePair<Key, Value = Key> {
    key: Key;
    value: Value;
}

let allExplicit: KeyValuePair<string, number> = {
    key: 'wdwdwdw',
    value: 121212
};

let oneDeFaulting: KeyValuePair<string> = {
    key: 'wdwdwdwd',
    value: 'wdwdwdwdwd'
};

let firstMissing: KeyValuePair = {
    key: 'wdwdwdwd',
    value: 'wdwdwdwdwd'
};

function inTheEnd<First, Second, Thrid = number, Fourth = string>() {}
function inTheMiddle<First, Second, Thrid = number, Fourth>() {}



export {};