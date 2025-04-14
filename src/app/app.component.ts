import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { PropertyListComponent } from "./property/property-list/property-list.component";
import { PropertyCardComponent } from './property/property-card/property-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, PropertyListComponent , PropertyCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'appartments-ecommerce-presentation';
}
