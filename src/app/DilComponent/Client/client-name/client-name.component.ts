import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClientSelectionService } from 'src/app/DilComponent/Services/client-selection.service';

@Component({
  selector: 'app-client-name',
  templateUrl: './client-name.component.html',
  styleUrls: ['./client-name.component.scss'],
})
export class ClientNameComponent {
  clients: any[] = [];
  @Output() clientID: EventEmitter<number> = new EventEmitter<number>();

  @Input() loanID: number = 0;
  @Input() investorID: number = 0;
  constructor(private clientSelectionService: ClientSelectionService) {}

  selectClient(clientName: string, clientID: number) {
    this.clientSelectionService.setSelectedClient(clientName);
    this.clientSelectionService.setSelectedClientId(clientID);
  }

  ngOnInit(): void {
    this.loadClients();
  }
  loadClients(): void {
    this.clientSelectionService
      .getClientTypes(this.loanID, this.investorID)
      .subscribe(
        (data: any[]) => {
          this.clients = data;
        },
        (error) => {
          console.error('Error fetching client types:', error);
        }
      );
  }
}
