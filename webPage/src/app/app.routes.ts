import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/manage/categories/categories.component';
import { CategoriesFormComponent } from './components/manage/categories-form/categories-form.component';
import { BrandComponent } from './components/manage/brand/brand.component';
import { BrandFormComponent } from './components/manage/brand-form/brand-form.component';
import { ProductComponent } from './components/manage/product/product.component';
import { ProductFormComponent } from './components/manage/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './core/auth-guard';
import { AdminDashboardComponent } from './components/manage/admin-dashboard/admin-dashboard.component';
import { adminGuard } from './core/admin-guard';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { WishlistsComponent } from './components/wishlists/wishlists.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CustomerOrdersComponent } from './components/customer-orders/customer-orders.component';

export const routes: Routes = [
    {
        path:"",component:HomeComponent,canActivate:[authGuard]
    },
    {
        path:"admin",component:AdminDashboardComponent,canActivate:[adminGuard]
    },
    {
        path:"admin/categories",component:CategoriesComponent,canActivate:[adminGuard]
    },
    {
        path:"admin/categories/add",component:CategoriesFormComponent,canActivate:[adminGuard]
    },
    {
        path:"admin/categories/:id",component:CategoriesFormComponent,canActivate:[adminGuard]
    },
    {
        path:"admin/brands",component:BrandComponent,canActivate:[adminGuard]
    },
    {
        path:"admin/brands/add",component:BrandFormComponent,canActivate:[adminGuard]
    },
    {
        path:"admin/brands/:id",component:BrandFormComponent,canActivate:[adminGuard]
    },
    {
        path:"admin/products",component:ProductComponent,canActivate:[adminGuard]
    },
    {
        path:"admin/products/add",component:ProductFormComponent,canActivate:[adminGuard]
    },
    {
        path:"admin/products/:id",component:ProductFormComponent,canActivate:[adminGuard]
    },
    {
        path:"products",component:ProductListComponent,canActivate:[authGuard]
    },
    {
        path:"product/:id",component:ProductDetailComponent,canActivate:[authGuard]
    },
    {
        path:"profile",component:CustomerProfileComponent,canActivate:[authGuard]
    },
    {
        path:"wishlists",component:WishlistsComponent,canActivate:[authGuard]
    },
    {
        path:"cart",component:ShoppingCartComponent,canActivate:[authGuard]
    },
    {
        path:"orders",component:CustomerOrdersComponent,canActivate:[authGuard]
    },
    {
        path:'register',component:RegisterComponent
    },
    {
        path:'login',component:LoginComponent
    }
];
