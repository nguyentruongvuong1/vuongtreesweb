import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ProductsComponent, CategoryComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
