import { DataProcessor } from "./DataProcessor";

export class CSVDataProcessor extends DataProcessor {
  protected readData(): void {
    console.log('Reading data from CSV file');
  }

  protected transformData(): void {
    console.log('Transforming data from CSV format');
  }
}
