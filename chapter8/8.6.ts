// 추상 클래스(타입 스크립트 기능)
// 인스턴스를 만들 수 없는 클래스
// 하위 클래스에 해당 메서드를 제공할 것을 예상하고 기본 클래스를 만드는 방법
// 여러가지 역할을 하는 경우에 잘 사용하는데(인터페이스 vs 추상클래스) - 객체지향언어에서 다형성?, 


abstract class School {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract getStudentTypes(): string[];

    log() {
        console.log(this.getStudentTypes);
    }
}

const aaa = new School('wdwdwdw');


class Preschool extends School {
    getStudentTypes(): string[] {
        return ['wdwdwdwdwd'];
    }
}

class Preschool2 extends School {
}


const ccc: Preschool = new Preschool('wdwdwdw');
const ccc2: School = new Preschool('wdwdwdw');

ccc.log();
ccc2.log();

export {};