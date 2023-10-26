// Promise

class PromiseLike<Value> {
    constructor(
        excutor: (
            resolve: (value: Value) => void,
            reject: (reason: unknown) => void,
        ) => void
    ) {

    }
}

const resolvesUnknown = new Promise((resolve) => {
    setTimeout(() => resolve('done!'), 1000);
    setTimeout(() => resolve(121212121), 1000);
});

const resolvesString = new Promise<string>((resolve) => {
    setTimeout(() => resolve(12121212), 1000);
    setTimeout(() => resolve('2e2e2e22e'), 1000);
});


const result = resolvesString.then(text => text.length);

async function lengthAfterSecond(text: string) {
    return await new Promise(resolve => setTimeout(resolve, 1000));
}

async function lengthImmediately(text: string) {
    return text.length;
}


async function lengthImmediately2(text: string): Promise<number> {
    return text.length;
}

async function lengthImmediately3(text: string): number {
    return text.length;
}

export {};