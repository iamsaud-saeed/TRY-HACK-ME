import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/app/modals/login/login.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from "./shared/home/home.component";
import { RedTeamComponent } from './shared/red-team/red-team.component';
import {  ReactiveFormsModule } from '@angular/forms';


import { BlueTeamComponent } from "./shared/blue-team/blue-team.component";


@NgModule({
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HomeComponent,
        LayoutComponent,
        LoginComponent,
        RedTeamComponent,
        BlueTeamComponent,
        HeaderComponent
    ]
})
export class AppModule { }
