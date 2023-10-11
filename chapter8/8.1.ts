class Greeter {
    greet(name: string) {
        console.log(`${name}, do your stuff`);
    }
}

new Greeter().greet('test');
new Greeter().greet();

// 클래스 생성자는 매개변수와 관련하여 전형적인 클래스 메서드처럼 취급

class Greeted {
    constructor(message: string) {
        console.log(`${message}`);
    }
}

new Greeted('wqdqwdwqdwqdq');
new Greeted();

export {};