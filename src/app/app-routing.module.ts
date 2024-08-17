import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { EmployeeComponent } from './employee/employee.component';
import { ReservationComponent } from './reservation/reservation.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: 'restaurants', component: RestaurantComponent },
  { path: 'employees', component: EmployeeComponent },
  { path: 'reservations', component: ReservationComponent },
  { path: 'orders', component: OrderComponent },
  { path: '', redirectTo: '/restaurants', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
