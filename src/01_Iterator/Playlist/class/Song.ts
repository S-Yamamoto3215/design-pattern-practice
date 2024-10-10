export class Song {
  private title: string;
  private artist: string;
  private duration: number;

  constructor(title: string, artist: string, duration: number) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
  }

  getTitle(): string {
    return this.title;
  }

  getArtist(): string {
    return this.artist;
  }

  getDuration(): number {
    return this.duration;
  }

  getSongInfo(): string {
    return `${this.title} by ${this.artist} (${this.duration} minutes)`;
  }
}
