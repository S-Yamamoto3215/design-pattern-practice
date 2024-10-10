import { Iterator } from "../../interface/Iterator";
import { Iterable } from "../../interface/Iterable";
import { Song } from "./Song";
import { PlaylistIterator } from "./PlaylistIterator";

export class Playlist implements Iterable<Song> {
  private songs: Song[] = [];
  private last = 0;

  getSongAt(index: number): Song {
    return this.songs[index];
  }

  appendSong(song: Song): void {
    this.songs.push(song);
    this.last++;
  }

  getLength(): number {
    return this.last;
  }

  iterator(): Iterator<Song> {
    return new PlaylistIterator(this);
  }
}
