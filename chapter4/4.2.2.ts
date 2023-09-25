type Poet = {
    born: number;
    name: string;
};

const poetMatch: Poet = {
    born: 2023,
    name: 'dwdwddwwd'
};

const extraProperty: Poet = {
    born: 2023,
    name: 'wdwdwdw',
    actitivy: true,
}

let extraProperty2: Poet;
const hasBoth = {
    born: 2023,
    name: 'wdwdwdw',
    actitivy: true,
};
extraProperty2 = hasBoth;   // ??

extraProperty2.born
extraProperty2.name

extraProperty2 = {
    born: 2023,
    name: 'wdwdwdw',
    actitivy: true,
};                          // ??

export {};