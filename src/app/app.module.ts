import { NgModule } from '@angular/core';

// Importing forms module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { AsidenavComponent } from './asidenav/asidenav.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'; 

@NgModule({
bootstrap: [
	AppComponent
],
declarations: [
	AppComponent,
 AdminComponent,
 UserComponent,
 AsidenavComponent
],
imports: [
	FormsModule,
	BrowserModule,
	BrowserAnimationsModule,
	ReactiveFormsModule,
	NgbModule,
	HttpClientModule,
	RouterModule,
	AppRoutingModule
]
})
export class AppModule { }
