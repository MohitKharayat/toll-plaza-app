import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LogsService } from '../../services/logs.service';
import { Log } from '../../interfaces/log.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  logs: Log[] = [];

  searchText: string = '';
  selectedVehicleType: string = '';

  constructor(private logsService: LogsService) {
    this.getLogs();
  }

  getLogs(): void {

    this.logsService.getLogs().subscribe((data) => {
      this.logs = data;
    });

  }

  filteredLogs(): Log[] {

    return this.logs.filter((log) => {

      const matchesSearch =
        log.licensePlate
          .toLowerCase()
          .includes(this.searchText.toLowerCase());

      const matchesVehicleType =
        this.selectedVehicleType === '' ||
        log.vehicleType === this.selectedVehicleType;

      return matchesSearch && matchesVehicleType;

    });

  }

}
