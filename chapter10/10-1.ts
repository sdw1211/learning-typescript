// 제네릭 함수

// <> 에 타입 매개변수
// 함수에 타입 매개변수를 추가하면 타입 안정성을 유지하고 any 타입을 피하면서 
// 다른 입력과 함께 재사용할 수 있다.
function identity<Type>(input: Type) {
    return input;
}

const identityArrow = <T>(input: T) => input;

// string 타입의 파마미터를 사용하여 자동으로 T => string을 유추
const numberic = identity('테스트');
// number 타입의 파마미터를 사용하여 자동으로 T => number을 유추
const stringy = identity(123);

function logWrapper<Input>(callback: (input: Input) => void) {
    return (input: Input) => {
        console.log(`input: ${input}`);
        callback(input);
    }
}

logWrapper((input: string) => {
    console.log(input.length);
});

// input의 타입을 알 수 없기 때문에 unknown
logWrapper((input) => {
    console.log(input.length);
});

// 명시적 제네릭 타입 인수를 사용하면 input을 string으로 선언 가능
// 이름<Type> 형태
logWrapper<string>((input) => {
    console.log(input.length);
});

// 명시적으로 선언 것과 결과가 다르기 때문에 에러
logWrapper<string>((input: boolean) => {
    console.log(input.length);
});

function makeTuple<First, Second>(first: First, second: Second) {
    return [first, second] as const;
}

let tuple = makeTuple(true, 'abc');

function makePair<Key, Value>(key: Key, value: Value) {
    return {key, value};
}

// 제네릭 타입을 모두 선언하지 않은 경우는 유추로 처리
makePair('abc', 123);
// 제네릭 타입을 선언할 것이면 모두 선언해야 한다.
makePair<string, number>('abc', 123);
// 제네릭 타입을 선언할 것이면 모두 선언해야 한다.
makePair<'abc', 123>('abc', 123);
makePair<'abc', 123>('abc', 456);

// 제네릭 타입을 선언할 때 하나만 선언하면 에러
makePair<string>('abc', 123);

export {};