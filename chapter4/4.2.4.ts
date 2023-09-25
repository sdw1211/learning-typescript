type Book = {
    author?: string;
    pages: number | undefined;    
};

const ok:Book = {
    author: 'wdwdwdwd',
    pages: 80,
};

const ok2: Book = {
    author: '23232323',
    pages: undefined
};


const ok3: Book = {
    pages: 100,
};

const missing: Book = {
    author: '23232323',
};

export {};