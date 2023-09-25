type PoemWithPages = {
    name: string;
    pages: number;
    type: 'pages';
};

type PoemWithRhymes = {
    name: string;
    rhymes: boolean;
    type: 'rhymes';
};

type Poem = PoemWithPages | PoemWithRhymes;

const poem: Poem = Math.random() > 0.5 ? 
    {name: 'Dongwoo Seo', pages: 7, type: 'pages'} : 
    {name: 'Dongwoo Seo', rhymes: true, type: 'rhymes'};

if (poem.type === 'pages') {
    poem.pages;
} else {
    poem.rhymes;
}

export {};
