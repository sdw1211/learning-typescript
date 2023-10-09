interface Merged {
    fromFirst: string;
}

interface Merged {
    fromSecond: number;
}

// 이런 인터페이스 생성됨
// interface Merged {
//     fromFirst: string;
//     fromSecond: number;
// }

interface Window {
    aaaa: string;
}

window.aaaa // 왜안되지 설정인가?


interface MergedProperties {
    same: (input: boolean) => string;
    different: (input: string) => string;
    different2(input: string): string;
}


interface MergedProperties {
    same: (input: boolean) => string;
    // 이름이 같은 경우 같은 형식 이어야 한다. 프로퍼티의 경우
    // different: (input: number) => string;
    // 메서드의 경우는 오버로딩이 된다.(통일성이 없구만)
    different2(input: number): string;
}

const test333: MergedProperties = {
    same: (input) => 'wdwdw',
    different(input) {
        return '' + input;
    },
    different2(input: number|string): string {
        return '';
    }
};




export {};