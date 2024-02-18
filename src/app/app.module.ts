import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/app/modals/login/login.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from "./shared/home/home.component";
import { RedTeamComponent } from './shared/red-team/red-team.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';


@NgModule({
    declarations: [
        AppComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HomeComponent,
        LayoutComponent,
        LoginComponent
    ]
})
export class AppModule { }
