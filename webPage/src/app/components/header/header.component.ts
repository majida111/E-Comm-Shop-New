import { Component, inject } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../types/category';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
categoryService=inject(CategoryService);
categoryList:Category[]=[];
ngOnInit(){

  this.categoryService.getCategories().subscribe(result=>{
    this.categoryList=result;
    console.log(result);
  })

}
router=inject(Router);
onSearch(e:any){
if(e.target.value){
 this.router.navigateByUrl("/products?search="+e.target.value)
}

}
searchCategory(id:string){
  this.router.navigateByUrl("/products?categoryId="+id)

}
}
