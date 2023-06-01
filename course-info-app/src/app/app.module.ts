import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule  // add this
  ],
  declarations: [
    AppComponent,
    CoursesComponent  // and make sure this is here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


