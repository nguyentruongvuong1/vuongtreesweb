import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IProducts } from '../entities/Iproduct';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ICate } from '../entities/ICate';
@Component({
  selector: 'app-product-by-cate',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, HttpClientModule, RouterModule],
  templateUrl: './product-by-cate.component.html',
  styleUrl: './product-by-cate.component.css'
})
export class ProductByCateComponent {
  Cate : ICate | undefined;
  products: IProducts[] = [];
constructor(private http: HttpClient,private router: ActivatedRoute){}
  ngOnInit(){
    const id = this.router.snapshot.params['id'];
    this.http.get<ICate[]>(`http://localhost:3000/cate/name/${id}`).subscribe(
      data=> {
        this.Cate = data[0]
      }
    );
    this.getPr()
  }

  getPr(){
    const id = this.router.snapshot.params['id'];
    this.http.get<IProducts[]>(`http://localhost:3000/cate/${id}`).subscribe(
    data=>{
      this.products = data;
    },
    error =>{
      console.log(error)
    }
    )
  }
}
