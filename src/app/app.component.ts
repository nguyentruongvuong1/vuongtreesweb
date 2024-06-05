import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, RouterLink } from '@angular/router';
import { MainComponent } from './main/main.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  CategoryComponent, ProductsComponent,  RouterModule, RouterLink, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ASM1';
}
