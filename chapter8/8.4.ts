// 클래스와 인터페이스

interface Learner {
    name: string;
    study(hours: number): void;
}

class Student implements Learner {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    study(hours: number): void {
        console.log(`${this.name}-${hours}`);
    }
}

class Slacker implements Learner {

}

// 다중 인터페이스 구현

interface Graded {
    gredes: number[];
}

interface Reporter {
    report: () => string;
}

class ReportCard implements Graded, Reporter {
    report = () => {
        return this.gredes.join(',');
    }
    gredes: number[];
    constructor(grades: number[]) {
        this.gredes = grades;
    }
}

class Empty implements Graded, Reporter {}

// 아래와 같은 경우는 인터페이스를 제대로 구현할 수 없다.

interface AgeIsNumber {
    age: number;
}

interface AgeIsNotANumber {
    age: () => string;
}

class AsNumber implements AgeIsNumber, AgeIsNotANumber {
    // age = 0;

    // age = () => 'wdwdwdw'
}

export {};