function announceSong(song: string, singer?: string, test?: string) {
    console.log(`Song: ${song}`);
}

announceSong('test');
announceSong('test', 'test');
announceSong('test2', 'test1');
announceSong('test2', 'test1', 'test');

function announceSongBy(song: string, singer: string | undefined) {
    console.log(`Song: ${song}`);
}

announceSongBy('test');

function announceSongError(song?: string, singer: string, test: string) {
    console.log(`Song: ${song}`);
}


export {};