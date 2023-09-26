function fail(message: string): never {
    throw new Error(message);
}

function workWithUnsafeParam(param: unknown) {
    if (typeof param !== 'string') {
        fail('error');
    }

    param.toUpperCase();
}

export {};