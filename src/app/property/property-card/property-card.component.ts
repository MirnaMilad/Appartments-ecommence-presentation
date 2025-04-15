import { Component, Input } from "@angular/core";
import { IProperty } from "../Iproperty.interface";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-property-card",
  standalone: true,
  imports: [RouterModule],
  templateUrl: "./property-card.component.html",
  styleUrl: "./property-card.component.scss",
})
export class PropertyCardComponent {
  @Input() property!: IProperty;
}
