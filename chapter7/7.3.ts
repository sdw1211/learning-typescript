interface Writing {
    title: string;
}

interface Novella extends Writing {
    pages: number;
}

let myNovella: Novella = {
    title: 'wdwdwd',
    pages: 11,
};

type Writing2 = {
    title: string;
};

type Novella2 = {
    pages: number;
} & Writing2;

let myNovella2: Novella2 = {
    title: 'wdwdwd',
    pages: 11,
};

interface WithNullableName {
    name: string | null;
}

// 속성을 재정의할 때는 더 구체적으로 만들어줘야 한다.
interface WithNonNullableName extends WithNullableName {
    name: string;
    // name: string | number;
}

// 여러 개의 인터페이스를 확장할 수 있다.
interface GivesNumber {
    giveNumber(): number;
}

interface GivesString {
    giveString(): string;
}

interface GivesBothAndEither extends GivesNumber, GivesString {
    giveEither(): number | string;
}

function useGivesBoth(instance: GivesBothAndEither) {
    instance.giveEither();
    instance.giveNumber();
    instance.giveString();
}




export {};