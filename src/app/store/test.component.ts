import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";
@Component({
    selector:"test",
    templateUrl:"test.component.html"
})
export class TestComponent{
    public selectedCategory:any =null;
    public productsPerPage=3;
    public selectedPage=1;
    constructor(private repository:ProductRepository,private cart:Cart,private router:Router){}

    get products():Product[]{
        let pageIndex=(this.selectedPage-1)*this.productsPerPage;
        return this.repository.getProducts(this.selectedCategory)
        .slice(pageIndex, pageIndex + this.productsPerPage);
    }
    get categories():string[]{
        return this.repository.getCategories();
    }

    changeCategory(newCategory?:string){
        this.selectedCategory=newCategory;
    }
    changePage(pageNO:number){
          this.selectedPage = Number(pageNO);
    }
    changePageSize(newSize:number){
          this.productsPerPage = Number(newSize);
          this.changePage(1);
    }
    get pageNumbers():number[]{
        return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length)
           / this.productsPerPage).fill(0).map((x,i)=>i+1);
    }
    get pageCount():number{
        return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage);
    }
    addProductToCart(product:Product){
               this.cart.addLine(product,1);
               this.router.navigateByUrl("/cart");
    }
}