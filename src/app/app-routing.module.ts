import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsvToJsonComponent } from './tools/csv-to-json/csv-to-json.component';
import { PasswordGeneratorComponent } from './tools/password-generator/password-generator.component';
import { Base64EncoderComponent } from './tools/base64-encoder/base64-encoder.component';
import { UuidGeneratorComponent } from './tools/uuid-generator/uuid-generator.component';
import { JsonFormatterComponent } from './tools/json-formatter/json-formatter.component';

const routes: Routes = [
  { path: '', redirectTo: 'csv-to-json', pathMatch: 'full' },
  { path: 'csv-to-json', component: CsvToJsonComponent },
  { path: 'password-generator', component: PasswordGeneratorComponent },
  { path: 'base64-encoder', component: Base64EncoderComponent },
  { path: 'uuid-generator', component: UuidGeneratorComponent },
  { path: 'json-formatter', component: JsonFormatterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}