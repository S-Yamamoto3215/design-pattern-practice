import { Iterator } from "../../interface/Iterator";

import { Song } from "./Song";
import { Playlist } from "./Playlist";

export class PlaylistIterator implements Iterator<Song> {
  private playlist: Playlist;
  private index: number;

  constructor(playlist: Playlist) {
    this.playlist = playlist;
    this.index = 0;
  }

  hasNext(): boolean {
    return this.index < this.playlist.getLength();
  }

  next(): Song {
    if (!this.hasNext()) {
      throw new Error("No such element");
    }
    const song = this.playlist.getSongAt(this.index);
    this.index++;
    return song;
  }
}
