type FirstAndLastNames = {
    first: string;
    last: string;
};


const hasBoth: FirstAndLastNames = {
    first: 'DongWoo',
    last: 'Seo',
};

const hasOnlyOne: FirstAndLastNames = {
    first: 'dongwoo',
};

type TimeRange = {
    start: Date;
};

const hasStartString: TimeRange = {
    start: '2023-11-26',
};

export {};