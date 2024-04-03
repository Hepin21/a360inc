import { Component } from '@angular/core';
import { ClientSelectionService } from 'src/app/InvestorType/client-selection.service';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss'],
})
export class ClientCardComponent {
  clients: any[] = [];
  constructor(private clientSelectionService: ClientSelectionService) {}
  selectClient(clientName: string) {
    this.clientSelectionService.setSelectedClient(clientName);
  }
  ngOnInit(): void {
    this.loadInvestor();
  }
  loadInvestor(): void {
    this.clientSelectionService.getClientTypes().subscribe(
      (data: any[]) => {
        this.clients = data;
      },
      (error) => {
        console.error('Error fetching Clients types:', error);
      }
    );
  }
}
