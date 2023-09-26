let nothingInGivesString: () => string;
let inputAndOutput: (songs: string[], count?: number) => number;

const songs = ['Juice', 'Shake It Off', `What's up`];

function runOnSongs(getSongAt: (index: number) => string) {
    songs.forEach((_, index) => {
        console.log(getSongAt(index));
    });
}

function getSongAt(index: number) {
    return `${songs[index]}`;
}

runOnSongs(getSongAt);


function logSong(song: string) {
    return `${song}`;
}

runOnSongs(logSong);

export {};