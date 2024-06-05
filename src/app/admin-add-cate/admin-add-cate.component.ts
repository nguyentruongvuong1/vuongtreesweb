import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ICate } from '../entities/ICate';
import { RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-admin-add-cate',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, RouterLink, RouterModule],
  templateUrl: './admin-add-cate.component.html',
  styleUrl: './admin-add-cate.component.css'
})
export class AdminAddCateComponent {

  AddCate = new FormGroup({
    name : new FormControl(''),
    img : new FormControl(''),
  })

  constructor(private http: HttpClient){}

  Add(){
    const data = this.AddCate.value;

    this.http.post<ICate>(`http://localhost:3000/admin/addcate`, data).subscribe(data =>{
      alert("Bạn đã thêm danh mục thành công")
      this.AddCate.reset();
    })
  }

}
