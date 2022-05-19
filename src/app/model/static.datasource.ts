import { Injectable } from "@angular/core";
import { Observable,from } from "rxjs";
import { Product } from "./product.model";
import { Order } from "./order.model";
@Injectable()
export class StaticDataSource{
         private products:Product [] =[
         new Product(1,"product 1","catagory 1"," product 1 catagory 1",20),
         new Product(11,"product 1","catagory 1"," product 1 catagory 1",20),
         new Product(12,"product 1","catagory 1"," product 1 catagory 1",20),
         new Product(13,"product 1","catagory 1"," product 1 catagory 1",20),
         new Product(14,"product 1","catagory 1"," product 1 catagory 1",20),
         new Product(15,"product 1","catagory 1"," product 1 catagory 1",20),
         new Product(2,"product 2","catagory 1"," product 2 catagory 1",200),
         new Product(3,"product 3","catagory 1"," product 1 catagory 1",19),
         new Product(4,"product 4","catagory 2"," product 1 catagory 2",67),
         new Product(5,"product 5","catagory 2"," product 1 catagory 2",78),
         new Product(6,"product 6","catagory 2"," product 1 catagory 2",21),
         new Product(7,"product 7","catagory 3"," product 1 catagory 3",34),
         new Product(8,"product 8","catagory 3"," product 1 catagory 3",44),
         new Product(9,"product 9","catagory 3"," product 1 catagory 3",267),
         new Product(10,"product 10","catagory 3"," product 1 catagory 3",29)
         ];

         getProducts() : Observable<Product[]>{
             return from([this.products]);
         }
         saveOrder(order:Order):Observable<Order>{
             console.log(JSON.stringify(order));
             return from([order]);
             
         }
}