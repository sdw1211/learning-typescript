type Poet = {
    born: number;
    name: string;
};

interface IPoet {
    born: number;
    name: string;
}

let valueLater: Poet;
let valueLater2: IPoet;

valueLater = {
    born: 1935,
    name: 'wdwdwddw',
};

// 타입 스크립트는 프로퍼티가 존재하는 여부로 타입을 판단하기 때문에 가능
valueLater2 = valueLater;



export {};