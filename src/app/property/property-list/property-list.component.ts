import { Component } from "@angular/core";
import { PropertyCardComponent } from "../property-card/property-card.component";
import { Properties } from "../../../data/prorerties.config";
import { IProperty } from "../Iproperty.interface";

@Component({
  selector: "app-property-list",
  standalone: true,
  imports: [PropertyCardComponent],
  templateUrl: "./property-list.component.html",
  styleUrl: "./property-list.component.scss",
})
export class PropertyListComponent {
  properties: Array<IProperty> = Properties;
}
