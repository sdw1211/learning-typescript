type WithFirstName = {
    firstName: string
};

type WithLastName = {
    lastName: string
};

const hasBoth = {
    firstName: 'DongWoo',
    lastName: 'Seo'
};

let withFirstName: WithFirstName = hasBoth;
let withLastName: WithLastName = hasBoth;

export {};