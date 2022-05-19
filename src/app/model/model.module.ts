import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { RestDataSource } from "./rest.dataSource";
import { AuthService } from "./auth.service";

@NgModule({
  
    providers:[ProductRepository,
        Cart,Order,OrderRepository,AuthService,RestDataSource,
        {provide:StaticDataSource,useClass: RestDataSource}]


})
export class ModelModule{}