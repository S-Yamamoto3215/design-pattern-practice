export abstract class DataProcessor {
  process(): void {
    this.readData();
    this.transformData();
    this.saveData();
  }

  protected abstract readData(): void;
  protected abstract transformData(): void;

  protected saveData(): void {
    console.log('Data saved');
  }
}
