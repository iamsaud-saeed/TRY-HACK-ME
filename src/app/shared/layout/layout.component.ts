import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/Components/header/header.component';
import { HomeComponent } from "../home/home.component";
import { RedTeamComponent } from "../red-team/red-team.component";
import { LoginComponent } from "../../modals/login/login.component";

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css'],
    standalone: true,
    imports: [HeaderComponent, HomeComponent, RedTeamComponent, LoginComponent]
})
export class LayoutComponent {

}
