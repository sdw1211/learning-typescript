function singSongsRecursive(songs: string[], count = 0): number {
    const [_, ...rest] = songs;
    return songs.length ? singSongsRecursive(rest, count + 1) : count;
}

const singSongsRecursive2 = (songs: string[], count = 0): number => {
    const [_, ...rest] = songs;
    return songs.length ? singSongsRecursive2(rest, count + 1) : count;
};

function getSongRecordingDate(song: string): Date | undefined {
    switch (song) {
        case 'test':
            return new Date();
        case 'test2':
            return 'test';
        default:
            return undefined;
    }
}



export {};
