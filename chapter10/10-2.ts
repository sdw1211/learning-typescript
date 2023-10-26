// 제네릭 인터페이스

interface Box<T> {
    inside: T;
}

let stringBox: Box<string> = {
    inside: 'abc',
};

let numberBox: Box<number> = {
    inside: 123,
};

let incorrectBox: Box<number> = {
    inside: 'wdwdwd',
};

interface LinkedNode<Value> {
    next?: LinkedNode<Value>;
    value: Value;
}

function getLast<Value>(node: LinkedNode<Value>): Value {
    return node.next ? getLast(node.next) : node.value;
}

// 유추된 Value 타입 인수: Date
let lastDate = getLast({
    value: new Date(),
});

// 유추된 Value 타입 인수: string
let lastFruit = getLast({
    next: {
        value: 'banana',
    },
    value: 'apple',
});

// 유추된 Value 타입 인수: number
let lastMismatch = getLast({
    next: {
        value: 123,
    },
    value: false
});

interface CrateLike<T> {
    contents: T;
}

// 인터페이스가 타입 매개변수를 선언하는 경우, 해당 인터페이스를 참조하는 모든 타입 애너테이션은 이에
// 상응하는 타입 인수를 제공해야 합니다.
let missingGeneric: CrateLike = {
    contents: 
};

export {};