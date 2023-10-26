// 제네릭 타입 별칭

type Nullish<T> = T | null | undefined;
type CreatesValue<Input, Output> = (input: Input) => Output;


let creator:CreatesValue<string, number>;

creator = text => text.length;
creator = text => text.toLocaleUpperCase();

type Result<Data> = FailureResult | SuccessfulResult<Data>;

interface FailureResult {
    error: Error;
    successed: false;
}

interface SuccessfulResult<Data> {
    data: Data;
    successed: true;
}

function handleResult(result: Result<string>) {
    if (result.successed) {
        console.log(`We did it! ${result.data}`);
    } else {
        console.log(`Awwwww...${result.error}`)
    }

    result.data;
}


export {};