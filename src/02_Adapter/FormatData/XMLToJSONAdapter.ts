import xml2js from "xml2js";

import { JSONData } from "./interfaces";
import { XMLService } from "./XMLService";

export class XMLToJSONAdapter implements JSONData {
  private xmlService: XMLService;

  constructor(xmlService: XMLService) {
    this.xmlService = xmlService;
  }

  getJSON(): string {
    const xml = this.xmlService.getXML();
    const json = this.convertXMLToJSON(xml);
    return json;
  }

  private convertXMLToJSON(xml: string): string {
    let json = "";
    const parseOptions = { explicitArray: false }
    xml2js.parseString(xml, parseOptions, (err, result) => {
      if (err) {
        throw new Error("Error parsing XML to JSON");
      }
      json = JSON.stringify(result);
    });
    return json;
  }
}
