interface Book {
    // 선택적 속성으로 표현
    author?: string;
    pages: number;
}

const ok: Book = {
    pages: 80,
    author: 'dwdwdwdwd',
};

const anotherOk: Book = {
    pages: 100,
};

const missing: Book = {
    author: 'wdwdwdwd',
};

interface Page {
    readonly text: string;
}

type Page2 = {
    readonly text: string;
}

const page:Page = {
    text: '2323232323'
};

page.text = 'wefwfef';


const page2:Page2 = {
    text: '2323232323'
};

page2.text = 'wefwfef';

interface HasBothFunctionTypes {
    // 속성 구문(property 에 함수 리터럴로 선언)
    // 선택정 키워드도 사용 가능
    // readonly 사용 가능
    readonly property?: () => string;
    // 메서드 구문(함수 선언문을 선언)
    // 메서드 구문에서는 readonly 사용 불가
    method(): string;
    // readonly method2(): string;

}

const hasBoth: HasBothFunctionTypes = {
    property: () => '',
    // property() {
    //     return ''
    // },
    method() {
        return '';
    }
    // method: () => 'wdwdwd',
}   

const hasBoth2: HasBothFunctionTypes = {
    method() {
        return '';
    }
    // method: () => 'wdwdwd',
}   

type FuntionAlias = (input: string) => number;

// 자바에서 함수형 인터페이스와 같은 원리
interface CallSignature {
    (input: string): number;
}

const typedFunctionAlias: FuntionAlias = (input) => input.length;
const typedCallSignature: CallSignature = (input) => input.length;

// 먼지는 알겠는데 이렇게 쓰까??
interface FunctionWithCount {
    count: number;
    (): void;
}

let hasCallCount: FunctionWithCount;

function keepsTrackOfCalls() {
    keepsTrackOfCalls.count += 1;
    console.log(keepsTrackOfCalls.count);
}

keepsTrackOfCalls.count = 0;
hasCallCount = keepsTrackOfCalls;

function doesNotHaveCount() {
    console.log('wdwdw');
}

hasCallCount = doesNotHaveCount;

// 인덱스 시그니처
interface WordCounts {
    [i: number]: number;
}

type WordCounts2 = {
    [i: string]: number;
};

interface DatesByName {
    [i: string]: Date;
}




const counts1: WordCounts = {};
const counts2: WordCounts2 = {};

counts1.apple = 0;
counts1.apple2 = 'dwdwdw';

counts1[2] = 0;
counts1[1] = 1;

counts1['wdwdw'] = 0;

const publishDates: DatesByName = {
    AAAA: new Date(),
};

publishDates.AAAA;
// 런타임 시 에러
// 이런 상황도 있을 수 있기 때문에 잘 써야 합니다.
publishDates.BBBB.toDateString();

interface HistoricalNovels {
    Oroonoko: number;
    [i: string]: number;
}

const novels: HistoricalNovels = {};
const novels2: HistoricalNovels = {
    Oroonoko: 1212121,
};
const novels3: HistoricalNovels = {
    Oroonoko: 1212121,
    dwwdwdwd: 1212121,
};

type Key = 'aaa' | 'bbbb' | 'cccc';

interface MoreNarrowNumbers {
    [i: number]: string;
    [i: string]: string | undefined;

    // [i: number]: string | undefined;
    // [i: string]: string;

}

const mixesNumberAdnStrings: MoreNarrowNumbers = {
    0: '',
    // 1: undefined,
    key1: '',
    key2: undefined,
};


interface Novel {
    author: {
        name: String;
    };
    setting: Setting;
}

interface Setting {
    place: string;
    year: number;
}




export {};