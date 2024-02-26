//Album:

function make_album(artist_name: string, title: string, track: number | null = null): { artist: string, title: string, track: number | null } {
    var album = { artist: artist_name, title: title, track: track };
    return album;
}

console.log(make_album("Moeed", "Album1"));
console.log(make_album("Ali", "Album2", 2));
