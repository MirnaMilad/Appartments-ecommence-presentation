import { Component, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-property',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.scss'
})
export class AddPropertyComponent {
  onSubmit(form:NgForm){
    console.log("Form submitted");
    console.log(form.value);
  }
}
