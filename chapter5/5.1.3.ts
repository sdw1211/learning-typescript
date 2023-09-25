function rateSong(song: string, rating = 0) {
    console.log(`${song} gets ${rating} / 5 stars!`);
}

rateSong('test');
rateSong('test', 1000);
rateSong('test', undefined);
rateSong('test', '100');

export {};