import { Component } from '@angular/core';
import { ClientSelectionService } from 'src/app/DilComponent/Services/client-selection.service';

@Component({
  selector: 'app-client-name',
  templateUrl: './client-name.component.html',
  styleUrls: ['./client-name.component.scss'],
})
export class ClientNameComponent {
  clients: any[] = [];
  constructor(private clientSelectionService: ClientSelectionService) {}

  selectClient(clientName: string) {
    this.clientSelectionService.setSelectedClient(clientName);
  }

  ngOnInit(): void {
    this.loadClients();
  }
  loadClients(): void {
    this.clientSelectionService.getClientTypes().subscribe(
      (data: any[]) => {
        this.clients = data;
      },
      (error) => {
        console.error('Error fetching client types:', error);
      }
    );
  }
}
