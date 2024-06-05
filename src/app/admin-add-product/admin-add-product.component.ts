import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { IProducts } from '../entities/Iproduct';
@Component({
  selector: 'app-admin-add-product',
  standalone: true,
  imports: [RouterLink, RouterModule, ReactiveFormsModule ,HttpClientModule, CommonModule, ],
  templateUrl: './admin-add-product.component.html',
  styleUrl: './admin-add-product.component.css'
})
export class AdminAddProductComponent {
AddForm = new FormGroup({
  name : new FormControl(''),
  price : new FormControl(''),
  img : new FormControl(''),
  quantity : new FormControl(''),
  cate_id : new FormControl(''),
  description : new FormControl(''),
  ngay : new FormControl(''),
})

constructor(private http: HttpClient, private router: Router){}
Add(){
  const data = this.AddForm.value;
  this.http.post<IProducts>(`http://localhost:3000/admin/addproducts`, data).subscribe( result=>{
  const hoi = confirm("bạn đã thêm sản phẩm thành công. bạn có muốn đến trang quản lí sản phẩm.")
  if(hoi){
    this.router.navigate(['admin/Products'])
  }else{
    window.location.reload();
  }
}
  )
}
}
