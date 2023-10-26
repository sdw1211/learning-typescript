class Secret<Key, Value> {
    key: Key;
    value: Value;

    constructor(key: Key, value: Value) {
        this.key = key;
        this.value = value;
    }

    getValue(key: Key): Value | undefined {
        return this.key === key ? this.value : undefined;
    }
}

const storage = new Secret(12345, 'test');
storage.getValue(12345);

class CurriedCallback<Input> {
    #callback: (input: Input) => void;

    constructor(callback: (input: Input) => void) {
        this.#callback = (input: Input) => {
            console.log('input:', input);
            callback(input);
        };
    }

    call(input: Input) {
        this.#callback(input);
    }
}

// string 으로 유추
new CurriedCallback((input: string) => {
    console.log(input.length);
});

// 유추할 수 없기 때문에 unknown
new CurriedCallback((input) => {
    console.log(input.length);
});

// 명시적으로 선언하면 가능
new CurriedCallback<string>((input) => {
    console.log(input.length);
});

// 당연한 에러
new CurriedCallback<string>((input: boolean) => {
    console.log(input.length);
});

class Quote<T> {
    lines: T;

    constructor(lines: T) {
        this.lines = lines;
    }
}

class SpokenQuote extends Quote<string[]> {
    speak() {
        console.log(this.lines.join(' '));
    }
}


new Quote('wdwdwdwdfewfewfewfwdwd').lines;
new Quote([1,2,3,4,5,6,7]).lines;

new SpokenQuote(['wdwdw', 'wdwdwdwd', 'wdwdwdw']).lines;
new SpokenQuote([1,2,3,4,5,6,7,8,9,10]).lines;


class AttributedQuote<Value> extends Quote<Value> {
    speaker: string;

    constructor(value: Value, speaker: string) {
        super(value);
        this.speaker = speaker;
    }
}


new AttributedQuote('wdwdwdwdwdwd', 'wdwdwdwwdwd');
new AttributedQuote([112121212,1212,12,12,12,12,12,12,12], 'wdwdwdwwdwd');

interface ActingCredit<Role> {
    role:Role;
}
// 제네릭 클래스

class MoviePart implements ActingCredit<string> {
    role: string;
    // role: boolean;
    speaking: boolean;

    constructor(role: string, speaking: boolean) {
        this.role = role;
        this.speaking = speaking;
    }
}

const part = new MoviePart('dwwdwdw', true);

part.role;

class CreatePairFactory<Key> {
    key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    createPair<Value>(value: Value) {
        return {key: this.key, value};
    }
}

const factory = new CreatePairFactory("role");


factory.createPair('dddd');
factory.createPair(1234);

class BothLogger<OnInstance> {
    instanceLog(value: OnInstance) {
        console.log(value);
        return value;
    }

    static staticLog<OnStatic>(value: OnStatic) {
        // let fromInstace: OnInstance;


        console.log(value);
        return value;
    }
}

const logger = new BothLogger<number[]>;

logger.instanceLog([1,2,3]);

BothLogger.staticLog('wdwdwdwd');
BothLogger.staticLog([1,2,23,34,,4,4]);


export {};