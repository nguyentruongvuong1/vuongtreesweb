import { AdminEidtProductComponent } from './admin-eidt-product/admin-eidt-product.component';
import { Routes } from '@angular/router';
import { DetailPComponent } from './detail-p/detail-p.component';
import { MainComponent } from './main/main.component';
import { ProductByCateComponent } from './product-by-cate/product-by-cate.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { AdminCateComponent } from './admin-cate/admin-cate.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminAddCateComponent } from './admin-add-cate/admin-add-cate.component';
import { AdminEidtCateComponent } from './admin-eidt-cate/admin-eidt-cate.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';

export const routes: Routes = [
    { path: '', component: MainComponent }, 
    { path: 'Pdetail/:id', component: DetailPComponent },
    {path: 'product_by_cate/:id', component:ProductByCateComponent},
    {path: 'admin', component: AdminIndexComponent},
    {path: 'admin/Cates', component: AdminCateComponent},
    {path: 'admin/Products', component: AdminProductsComponent},
    {path: 'admin/Users', component: AdminUsersComponent},
    {path: 'admin/add_cate', component: AdminAddCateComponent},
    {path: 'admin/edit_cate/:id', component: AdminEidtCateComponent},
    {path: 'admin/edit_product/:id', component: AdminEidtProductComponent},
    {path: 'admin/add_product', component: AdminAddProductComponent},

];