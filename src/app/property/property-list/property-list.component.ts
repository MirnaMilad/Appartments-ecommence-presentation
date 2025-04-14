import { Component } from "@angular/core";
import { PropertyCardComponent } from "../property-card/property-card.component";

@Component({
  selector: "app-property-list",
  standalone: true,
  imports: [PropertyCardComponent],
  templateUrl: "./property-list.component.html",
  styleUrl: "./property-list.component.scss",
})
export class PropertyListComponent {
  properties: Array<any> = [
    {
      id: 1,
      name: "Beautiful House",
      type: "House",
      price: 500000,
    },
    {
      id: 2,
      name: "Luxury Apartment",
      type: "Apartment",
      price: 750000,
    },
    {
      id: 3,
      name: "Cozy Cottage",
      type: "Cottage",
      price: 300000,
    },
    {
      id: 4,
      name: "Modern Villa",
      type: "Villa",
      price: 900000,
    },
    {
      id: 5,
      name: "Charming Bungalow",
      type: "Bungalow",
      price: 400000,
    },
    {
      id: 6,
      name: "Spacious Townhouse",
      type: "Townhouse",
      price: 600000,
    },
  ];
}
