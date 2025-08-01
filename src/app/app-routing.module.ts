import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsvToJsonComponent } from './tools/csv-to-json/csv-to-json.component';
import { PasswordGeneratorComponent } from './tools/password-generator/password-generator.component';

const routes: Routes = [
  { path: 'csv-to-json', component: CsvToJsonComponent },
  { path: 'password-generator', component: PasswordGeneratorComponent },
  { path: '', redirectTo: '/csv-to-json', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
