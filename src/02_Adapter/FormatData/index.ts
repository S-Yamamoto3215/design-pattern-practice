import { XMLService } from "./XMLService";
import { XMLToJSONAdapter } from "./XMLToJSONAdapter";

const xmlService = new XMLService("<data><name>John Doe</name></data>");
const adapter = new XMLToJSONAdapter(xmlService);

console.log(adapter.getJSON());
