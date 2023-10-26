// 제한된 제네릭 타입

interface WithLength {
    length: number;
}

function logWithLength<T extends WithLength>(input: T) {
    console.log(`Length: ${input.length}`);
    return input;
}

// 타입 스크립트에서 type check는 해당 속성을 가지고 있는지 여부로 체크
// string 형은 length를 가지고 있다.
logWithLength('qwdqwdwqdqwdwdqwdq');
// 배열로 length를 가지고 있다.
logWithLength([]);
// length 속성을 선언
logWithLength({length: 2132323});
// length가 없어서 에러
logWithLength(new Date);


function get<T, Key extends keyof T>(container: T, key: Key) {
    return container[key];
}

function get2<T>(container: T, key: keyof T) {
    return container[key];
}

const roles = {
    favorite: 'feeef',
    others: ['wdwdwd', 'wdwdwdw', 'wdwddwdw'];
}

const favorite = get(roles, 'favorite');
const others = get(roles, 'others');
const missing = get(roles, 'extra');

const found = get2(roles, 'favorite');




export {};