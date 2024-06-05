import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { IProducts } from '../entities/Iproduct';


@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink, RouterModule],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css'
})
export class AdminProductsComponent {
Products: IProducts[] = [];


constructor(private http:HttpClient){}
ngOnInit(){
this.Getpr()
}

Getpr(){
  this.http.get<IProducts[]>(`http://localhost:3000/admin/products`).subscribe(
    data=>{
      this.Products = data;
    }
  )
}

Deletepr(id: number){
  const xoa = confirm("Bạn có muốn xóa sản phẩm này ?")
  if(xoa) {
    this.http.delete(`http://localhost:3000/admin/deleteproducts/${id}`).subscribe(data=>{
    alert("Bạn đã xóa sản phẩm thành công");
    window.location.reload();
  })
  }else{
    window.location.reload();

  }
  
}


}
