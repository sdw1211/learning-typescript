function singSongs(songs: string[]) {
    return songs.length;
}

function getSongAt(songs: string[], index: number) {
    return index < songs.length ?
        songs[index] :
        undefined;
}

