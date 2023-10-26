// 제네릭 올바르게 사용하기
// 한번만 있는 경우는 굳이..
function logInput1<Input extends string>(input: Input) {
    console.log('Hi!!', input);
}

function logInput2(input: string) {
    console.log('Hi!!', input);
}

// 표준 명명 규칙
// 타입인수 --> T
// 후속 매개변수 --> U, V
// 상태 관리 라이브러리 --> S
// 키 --> K
// 값 --> V
// 하나의 글자로 하면 이것이 무엇인지 알기 힘들다.

// L,V가 무엇인가...
function labelBox2<L, V>(l: L, v:V) {}

// 알아먹을 수 있게 만들자
function labelBox3<Label, Value>(l: Label, v:Value) {}

export {};

export {};