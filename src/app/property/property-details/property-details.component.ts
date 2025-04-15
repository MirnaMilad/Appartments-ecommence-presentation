import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [],
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.scss'
})
export class PropertyDetailsComponent {
  propertyId!: number;
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.propertyId = this.route.snapshot.params['id'];
  }

 onSelectNext(){
  this.propertyId++;
  this.router.navigate(['/property-details', this.propertyId]);
 }
}
