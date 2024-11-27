import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/manage/categories/categories.component';
import { CategoriesFormComponent } from './components/manage/categories-form/categories-form.component';

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
    }
];
