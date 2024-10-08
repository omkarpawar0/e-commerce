import { NgModule } from "@angular/core"; 
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SellerAuthComponent } from "./seller-auth/seller-auth.component";

const router:Routes = [
    {path:"home", component:HomeComponent},
    {path:"seller-auth", component:SellerAuthComponent},

]

@NgModule({
    imports: [
        RouterModule.forRoot(router)
    ],
    exports:[
        RouterModule
    ]
})
export class appRouting{

}