import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MathsComponent } from './maths/maths.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule} from 'ngx-clipboard';
import { ScienceComponent } from './science/science.component';
import { PtmComponent } from './maths/ptm/ptm.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MathsComponent,
    ScienceComponent,
    PtmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
