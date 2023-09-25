type PoemWithPages = {
    name: string;
    pages: number;
};

type PoemWithRhymes = {
    name: string;
    rhymes: boolean;
};

type Poem = PoemWithPages | PoemWithRhymes;

const poem: Poem = Math.random() > 0.5 ? 
    {name: 'Dongwoo Seo', pages: 7} : 
    {name: 'Dongwoo Seo', rhymes: true};

if ('pages' in poem) {
    poem.pages;
} else {
    poem.rhymes;
}

if (poem.pages) {
    poem.pages;
} else {
    poem.rhymes;
}



export {};
