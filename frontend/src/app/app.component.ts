import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';

@Component({
  selector: 'app-root',
  imports: [DashboardComponent, VehicleFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
