export class XMLService {
  private data: string;

  constructor(data: string) {
    this.data = data;
  }

  getXML(): string {
    return this.data;
  }
}
