import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CsvToJsonComponent } from './tools/csv-to-json/csv-to-json.component';
import { PasswordGeneratorComponent } from './tools/password-generator/password-generator.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout/layout.component';
import { Base64EncoderComponent } from './tools/base64-encoder/base64-encoder.component';
import { UuidGeneratorComponent } from './tools/uuid-generator/uuid-generator.component';
import { JsonFormatterComponent } from './tools/json-formatter/json-formatter.component';

@NgModule({
  declarations: [
    AppComponent,
    CsvToJsonComponent,
    PasswordGeneratorComponent,
    LayoutComponent,
    Base64EncoderComponent,
    UuidGeneratorComponent,
    JsonFormatterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

