function singAllTheSongs(singer: string, ...songs: string[]) {
    for (const song of songs) {
        console.log(`${song}, by ${singer}`);
    }
}

singAllTheSongs('test');
singAllTheSongs('test', 'song1', 'song2');
singAllTheSongs('test', 'song1', 'song2', 300);

export {};