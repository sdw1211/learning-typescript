// 맴버 접근성(타입 스크립트)
// public(기본값): 모든 곳에서 사용 가능
// protected: 클래스 내부또는 하위 클래스에서만 사용 가능
// private: 클래스 내부만 사용 가능(자바스크립트에서는 #)

class Base {
    isPublicImplicit = 0;
    public isPublicExlicit = 1;
    protected isProected = 2;
    private isPrivate = 3;
    #truePrivate = 4;
}

class Subclass extends Base {
    example() {
        this.isProected;
        this.isPublicExlicit;
        this.isPublicImplicit;
    }
}

const sub = new Subclass();

sub.example();
sub.isPublicExlicit;
sub.isPublicImplicit;


class TwoKeywords {
    private readonly name: string;

    constructor() {
        this.name = 'wdwdwdw';
    }

    log() {
        console.log(this.name);
    }
}

const two = new TwoKeywords();

two.name;
two.log();

class Question {
    protected static readonly answer: 'wdwdw';

    guess() {
        Question.answer;
    }
}

class aaa extends Question {
    static a() {
        console.log(super.answer);
        Question.answer;
    }
}

Question.answer;



export {};