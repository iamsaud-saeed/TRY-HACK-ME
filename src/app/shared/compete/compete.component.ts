import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-compete',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './compete.component.html',
  styleUrls: ['./compete.component.css']
})
export class CompeteComponent {
  constructor(private router: Router){

  }


  GotoToRoute(){
console.log(window?.location)
  }
}
