import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/manage/categories/categories.component';
import { CategoriesFormComponent } from './components/manage/categories-form/categories-form.component';
import { BrandComponent } from './components/manage/brand/brand.component';
import { BrandFormComponent } from './components/manage/brand-form/brand-form.component';
import { ProductComponent } from './components/manage/product/product.component';
import { ProductFormComponent } from './components/manage/product-form/product-form.component';

export const routes: Routes = [
    {
        path:"",component:HomeComponent
    },
    {
        path:"admin/categories",component:CategoriesComponent
    },
    {
        path:"admin/categories/add",component:CategoriesFormComponent
    },
    {
        path:"admin/categories/:id",component:CategoriesFormComponent
    },
    {
        path:"admin/brands",component:BrandComponent
    },
    {
        path:"admin/brands/add",component:BrandFormComponent
    },
    {
        path:"admin/brands/:id",component:BrandFormComponent
    },
    {
        path:"admin/products",component:ProductComponent
    },
    {
        path:"admin/products/add",component:ProductFormComponent
    },
    {
        path:"admin/products/:id",component:ProductFormComponent
    },
];
