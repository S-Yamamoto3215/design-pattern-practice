import { DataProcessor } from "./DataProcessor";

export class JSONDataProcessor extends DataProcessor {
  protected readData(): void {
    console.log("Reading data from JSON file");
  }

  protected transformData(): void {
    console.log("Transforming data from JSON format");
  }

  protected saveData(): void {
    console.log("Data saved in JSON format");
  }
}
