import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { ICate } from '../entities/ICate';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-admin-eidt-cate',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, RouterLink, RouterModule, CommonModule],
  templateUrl: './admin-eidt-cate.component.html',
  styleUrl: './admin-eidt-cate.component.css'
})
export class AdminEidtCateComponent {

  Cate: ICate | undefined;

  EditForm = new FormGroup({
    name : new FormControl(''),
    img : new FormControl(''),
  })

  constructor(private router: ActivatedRoute, private http: HttpClient){}

  ngOnInit(){
    const id = this.router.snapshot.params['id']
    this.http.get<ICate[]>(`http://localhost:3000/admin/cate/${id}`).subscribe(
      data =>{
        this.Cate = data[0];
        this.EditForm.patchValue({
          name: this.Cate.name,
          img: this.Cate.img,
        })
      }
    )
  }


  Edit(id: number){
    const data = this.EditForm.value;
    this.http.put<ICate>(`http://localhost:3000/admin/editcate/${id}`, data).subscribe(result=>{
      alert("bạn đã sửa danh mục thành công");
    })
  }

}
