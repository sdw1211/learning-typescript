class FieldTrip {
    destination: string;

    constructor(destination: string) {
        this.destination = destination;
        console.log(`${this.destination}`);

        this.wdwdwdw = 'wwww';
    }
}

const trip = new FieldTrip('wdwdwd');

trip.destination;
trip.efwefwefewfwef;

// 자바스크립트의 특징
class WithMethod {
    myMethod() {}
}

// true
new WithMethod().myMethod === new WithMethod().myMethod;
// WithMethod.prototype.myMethod

class WithProperty {
    myProperty = () => {};
}

// false
new WithProperty().myProperty === new WithProperty().myProperty
// WithProperty.myProperty

class WithPropertyParameters {
    tasksParameters = (input:boolean) => input ? 'yes' : 'no';
}

const instance = new WithPropertyParameters();

instance.tasksParameters(true);
instance.tasksParameters('121221');

// 초기화 검사

class WithValue {
    immediate = 0;  // 초기값 설정
    later: number;  // 생성자에서 할당
    myBeUndefined: number | undefined;  // undefined 허용
    unused: number;
    // 엄격한 초기화 검사를 적용하면 안되는 속성인 경우 !를 추가해 검사를 비활성화한다.
    // unused!: number;

    constructor() {
        this.later = 1;
    }
}

// 선택적 속성

class MissingInitializer {
    property?: string;
}

new MissingInitializer().property?.length;
new MissingInitializer().property.length;

// 읽기 전용 속성
class Quote {
    // 생성자에서만 초깃값만 할당 가능
    readonly text: string = 'ㅈㅇㅈㅇㅈㅇ';

    constructor(text: string) {
        this.text = '';
    }

    emphasize() {
        this.text = 'wdwwd';
    }
}

const quote = new Quote('wqdwdwdwd');

quote.text = 'effefe';

class RandomQuote {
    readonly explicit: string = 'efefefef';
    readonly implict = 'efwefewfewfewf';

    constructor() {
        this.explicit = 'efewfewfwefwef122';
        this.implict = 'wefwefew';
        
    }
}

export {};