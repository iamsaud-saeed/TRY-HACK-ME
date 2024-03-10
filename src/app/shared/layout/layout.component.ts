import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/Components/header/header.component';
import { HomeComponent } from "../home/home.component";
import { RedTeamComponent } from "../red-team/red-team.component";
import { LoginComponent } from "../../modals/login/login.component";
import { CompeteComponent } from '../compete/compete.component';
import { BlueTeamComponent } from "../blue-team/blue-team.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css'],
    standalone: true,
    imports: [HeaderComponent, CompeteComponent, HomeComponent, RedTeamComponent, LoginComponent, BlueTeamComponent, RouterOutlet]
})
export class LayoutComponent {

}
