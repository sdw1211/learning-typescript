let songLogger: (song: string) => void;

songLogger = (song) => {
    console.log(song);
    return 100;
};
let test: string | undefined;

test = songLogger('wdwdwd');

export {};