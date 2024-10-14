import { CSVDataProcessor } from "./CSVDataProcessor";
import { JSONDataProcessor } from "./JSONDataProcessor";

const csvProcessor = new CSVDataProcessor();
csvProcessor.process();

console.log("--------------------");

const jsonProcessor = new JSONDataProcessor();
jsonProcessor.process();
