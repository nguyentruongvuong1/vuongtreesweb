import { CommonModule } from '@angular/common';
import {  IProducts } from './../entities/Iproduct';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule , RouterLink, RouterModule, HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  Products:IProducts[] = []

ngOnInit():void {
  this.Getpr()
}


  constructor(private http: HttpClient){}

  Getpr(){
    this.http.get<IProducts[]>("http://localhost:3000/spnew").subscribe(
      data =>{
        this.Products = data;
      }
    )
  }



}


