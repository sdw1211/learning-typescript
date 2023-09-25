type Artwork = {
    genre: string;
    name: string;
};

type Writing = {
    pages: number;
    name: string;
};

type WrittenArt = Artwork & Writing;

let writter: WrittenArt;

type ShortPoem = {author: string} & (
    {kigo: string; type: 'haiko';}
    | {meter: number; type: 'villanelle';}
);

const morningGlory: ShortPoem = {
    author: '나는야',
    kigo: '우하하',
    type: 'haiko'
};

const oneArt: ShortPoem = {
    author: '우하하',
    type: 'villanelle',

}

type NotPossbile = number & string;

let notNumber: NotPossbile = 0;
let notString: NotPossbile = '';


export {};
