// 클래스 확장
class Teacher {
    teach() {
        console.log('wdwdwd');
    }
}

class StudentTeacher extends Teacher {
    learn() {
        console.log('wqdwdwdd');
    }
}

const teacher  = new StudentTeacher();

teacher.learn();
teacher.teach();

// 할당 가능성 확장
class Lesson {
    subject: string;

    constructor(subject: string) {
        this.subject = subject;
    }
}

class OnlineLession extends Lesson {
    url: string;

    constructor(subject: string, url: string) {
        // 파생 클래스의 경우 super 가 필수
        // this 전에 항상 super가 위에 있어야 한다.
        super(subject);
        this.url = url;
    }
}

let lesson: Lesson;

lesson = new Lesson('coding');
lesson = new OnlineLession('coding', 'wdwdwd');

lesson.subject;
lesson.url;

let onlineLession: OnlineLession;

onlineLession = new Lesson('wdwdwd');
onlineLession = new OnlineLession('wdwdwdw', 'wdwddw');

class PastGrades {
    grades: number[] = [];
}

class LabeledPastGrades extends PastGrades {
    label?: string;
}

let subClass: LabeledPastGrades;

subClass = new LabeledPastGrades();
subClass = new PastGrades();

// 재정의된 생성자
// 하위 클래스에서 생성자를 정의하지 않을 경우 기본 클래스의 생성자를 사용
// 하위 클래스에서 생성자를 선언할 경우는 무조건 super 키워드를 통해 기본 클래스의 생성자를 호출

// 재정의된 메서드
// 하위 클래스에서 똑같은 형태로 만들어야 재정의 가능

// 재정의된 속성
// 하위 클래스가 구조적으로 같거나 더 구체적이어야 가능

class GradeAnnouncer {
    message: string;
    aaa: string = '100';
    ccc?: string = '100';

    constructor(grade: number) {
        this.message = grade >= 65 ? '....' : 'good';
    }

    // (string[]) => number
    countGrades(grades: string[]) {
        return 100;
    }
 }

class PassingAnnouncer extends GradeAnnouncer {
    aaa: string = '200';
    // ccc: string = '100';
    ccc: undefined;

    constructor() {
        super(100);
    }

    // (string[]) => number
    countGrades(grades: string[]) {
        return 200;
    }

}

class FailingAnnouncer extends GradeAnnouncer {
    aaa: number = 200;
    ccc: number = 100;

    constructor() {
    }

    // (string[]) => string
    // countGrades(grades: string[]) {
    //     return '232323';
    // }


    // (number) => number
    countGrades(grades: number) {
        return 121212;
    }
}






export {};