import { IProducts } from './../entities/Iproduct';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-admin-eidt-product',
  standalone: true,
  imports: [HttpClientModule, RouterLink, RouterModule, ReactiveFormsModule,CommonModule, ],
  templateUrl: './admin-eidt-product.component.html',
  styleUrl: './admin-eidt-product.component.css'
})
export class AdminEidtProductComponent {

  
  EditForm = new FormGroup({
    name : new FormControl(''),
    price : new  FormControl(''),
    img : new FormControl(''),
    quantity : new FormControl(''),
    cate_id : new FormControl(''),
    xem : new FormControl(''),
    description : new FormControl(''),
    ngay : new FormControl(''),
  })


  



Product: IProducts | undefined;
constructor(private http: HttpClient,private router: ActivatedRoute){}
ngOnInit(){
  const id = this.router.snapshot.params['id']
  this.http.get<IProducts[]>(`http://localhost:3000/admin/products/${id}`).subscribe(data=>{
    this.Product = data[0]

    this.EditForm.patchValue({
      name: this.Product.name,
      price: this.Product.price.toString(),
      img: this.Product.img,
      quantity: this.Product.quantity.toString(),
      cate_id: this.Product.cate_id.toString(),
      xem: this.Product.xem.toString(),
      description: this.Product.description,
      ngay: this.Product.ngay,
    })
  })
}


Edit(id: number){
  const data = this.EditForm.value;
  this.http.put<IProducts>(`http://localhost:3000/admin/editproducts/${id}`, data).subscribe(result =>{
    alert("Bạn đã sửa sản phẩm thành công")

  })
}




}
