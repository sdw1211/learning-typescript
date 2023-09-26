let singer: (song: string) => string;
singer = song => `${song.toUpperCase()}`;


const songs = ['a', 'b', 'c'];

songs.forEach((song, index) => console.log(`${song} is at index ${index}`));

export {};