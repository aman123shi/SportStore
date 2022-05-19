import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "./cartSummary.component";
import { CheckoutComponent } from "./checkout.component";
import { CartDetailComponent } from "./cartDetail.component";
import { TestComponent } from "./test.component";
import { RouterModule } from "@angular/router";
@NgModule({
    imports:[FormsModule,BrowserModule,ModelModule,RouterModule],
    declarations:[TestComponent,StoreComponent,CounterDirective,CartSummaryComponent,CheckoutComponent,CartDetailComponent],
    exports:[StoreComponent,CheckoutComponent,CartDetailComponent,TestComponent]
})
export class StoreModule{}










