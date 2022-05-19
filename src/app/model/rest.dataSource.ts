import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./product.model";
import { map } from "rxjs/operators";
import { Order } from "./order.model";
const PROTOCOL = "http";
const PORT = 3600;
@Injectable()
export class RestDataSource {
    baseUrl:string;
    auth_token:string;
    constructor(private http:HttpClient){
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
        
    }
    getProducts():Observable<Product[]>{
        return this.http.get<Product[]>(this.baseUrl+"products");
    }
    saveOrder(order:Order): Observable<Order>{
        return this.http.post<Order>(this.baseUrl+"orders",order);
    }
    authenticate(user:string,pass:string):Observable<boolean>{
        return this.http.post<any>(this.baseUrl+"login",{name:user,password:pass})
        .pipe(map(response=>{
            this.auth_token = response.success ? response.token:null;
            return response.success;
        }));
    }
    private getOptions(){
        return {
            headers:new HttpHeaders({Authorization:`Bearer<${this.auth_token}>`})
        }
    }
    saveProduct(product:Product):Observable<Product> {
        return this.http.post<Product>(this.baseUrl+"products",product,this.getOptions());
    }
    updateProduct(product:Product):Observable<Product> {
        return this.http.put<Product>(`${this.baseUrl}products/${product.id}`,product,this.getOptions())

    }
    deleteProduct(id:number):Observable<Product> {
        return this.http.delete<Product>(`${this.baseUrl}products/${id}`,this.getOptions())
    }
    getOrders():Observable<Order[]> {
        return this.http.get<Order[]>(this.baseUrl+"orders",this.getOptions());
    }
    deleteOrder(id:number):Observable<Order> {
        return this.http.delete<Order>(`${this.baseUrl}orders/${id}`,this.getOptions());
    }
    updateOrder(order:Order):Observable<Order> {
        return this.http.put<Order>(`${this.baseUrl}orders/${order.id}`,order,this.getOptions());

    }
    




}