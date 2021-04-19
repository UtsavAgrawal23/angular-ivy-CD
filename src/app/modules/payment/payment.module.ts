import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { PaymentLandingComponent } from "./components/payment-landing/payment-landing.component";
import { PaymentCardComponent } from "./components/payment-card/payment-card.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [PaymentLandingComponent, PaymentCardComponent],
  exports:[PaymentLandingComponent]
})
export class PaymentModule {}
