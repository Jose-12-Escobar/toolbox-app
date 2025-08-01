import { Component } from '@angular/core';

@Component({
  selector: 'app-csv-to-json',
  templateUrl: './csv-to-json.component.html',
})
export class CsvToJsonComponent {
  csvData = '';
  jsonResult: any[] = [];

  convert() {
    const lines = this.csvData.split('\n');
    const headers = lines[0].split(',');
    this.jsonResult = lines.slice(1).map(line => {
      const values = line.split(',');
      return headers.reduce((obj: { [key: string]: any }, header, i) => {
        obj[header.trim()] = values[i]?.trim();
        return obj;
      }, {});
    });
  }
}
