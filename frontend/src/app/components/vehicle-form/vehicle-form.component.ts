import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LogsService } from '../../services/logs.service';

@Component({
  selector: 'app-vehicle-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vehicle-form.component.html',
  styleUrl: './vehicle-form.component.css',
})
export class VehicleFormComponent {
  licensePlate: string = '';
  vehicleType: string = '';

  constructor(private logsService: LogsService) {}

  addVehicle(): void {
    const newVehicle = {
      licensePlate: this.licensePlate,
      vehicleType: this.vehicleType,
    };
    if (!this.licensePlate || !this.vehicleType) {
      alert('Please fill all fields');
      return;
    }
    this.logsService.createLog(newVehicle).subscribe(() => {
      alert('Vehicle Added Successfully');

      window.location.reload();
    });
  }
}
