type Poem = {
    author: {
        fistName: string;
        lastName: string;
    },
    name: string;
};

type Author = {
    fistName: string,
    lastName: string,
};

type PoemWithAuthor = {
    author: Author,
    name: string;
};


const poemMatch: Poem = {
    author: {
        fistName: 'Dongwoo',
        lastName: 'Seo',
    },
    name: 'Seo DongWoo',
};

const poemMismatch: Poem = {
    author: {
        name: 'dwdwwdwd',
    },
    name: 'wdwdwdwdwd',
};

export {};