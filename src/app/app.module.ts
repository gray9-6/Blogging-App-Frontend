import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './AngularMaterialModule';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewAllComponent } from './pages/view-all/view-all.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    ViewAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule    // frontend se backend mein api call karne ke liye
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
