import { Song } from "./class/Song";
import { Playlist } from "./class/Playlist";

// create a new Playlist instance
const playlist = new Playlist();

// add songs to the playlist
playlist.appendSong(new Song("Song 1", "Artist 1", 3.5));
playlist.appendSong(new Song("Song 2", "Artist 2", 4.0));
playlist.appendSong(new Song("Song 3", "Artist 3", 4.5));
playlist.appendSong(new Song("Song 4", "Artist 4", 5.0));

// create an iterator
const iterator = playlist.iterator();

// iterate through the playlist
while (iterator.hasNext()) {
  const song = iterator.next();
  console.log(song.getSongInfo());
}
