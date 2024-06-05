import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { ICate } from '../entities/ICate';
import { CommonModule } from '@angular/common';
import { error } from 'console';
@Component({
  selector: 'app-admin-cate',
  standalone: true,
  imports: [RouterLink, RouterModule, HttpClientModule, CommonModule,],
  templateUrl: './admin-cate.component.html',
  styleUrl: './admin-cate.component.css'
})
export class AdminCateComponent {

Cates: ICate[]= [];

constructor(private http:HttpClient, private router: ActivatedRoute){}

ngOnInit() : void
{
  const id = this.router.snapshot.params['id'];
  this.GetCates();
}

GetCates(){
this.http.get<ICate[]>(`http://localhost:3000/admin/cate`).subscribe(
  data=>{
    this.Cates = data;
  },
  error =>{
    console.log(error)
  }
)
}

DeleteC(id : number){
  const xoa = confirm("Bạn có muốn xóa danh mục này không")
  if(xoa){
    this.http.delete<ICate>(`http://localhost:3000/admin/deletecate/${id}`).subscribe(
      data =>{
        console.log(data)
        alert("Bạn đã xóa danh mục thành công")
        window.location.reload();
      }
    )
  }else{
    window.location.reload();
  }
  }


}
