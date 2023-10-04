
// 타입스크립트에서는 에러가 나지 않지만 런타임 시 에러가 발생
function withElements(elements: string[]) {
    console.log(elements[9001].length);
}

withElements(['aaaa', 'bbbbb']);

export {};