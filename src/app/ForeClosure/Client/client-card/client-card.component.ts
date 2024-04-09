import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClientSelectionService } from '../../Services/client-selection.service';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss'],
})
export class ClientCardComponent {
  clients: any[] = [];
  @Output() clientID: EventEmitter<number> = new EventEmitter<number>();

  @Input() stateID: number = 0;
  @Input() investorID: number = 0;
  @Input() foreclosureTypeId: number = 0;
  @Input() loanID: number = 0;

  constructor(private clientSelectionService: ClientSelectionService) {}
  selectClient(clientName: string, clientID: number) {
    this.clientSelectionService.setSelectedClient(clientName);
    this.clientSelectionService.setSelectedClientId(clientID);
  }
  ngOnInit(): void {
    this.loadInvestor();
  }
  loadInvestor(): void {
    this.clientSelectionService
      .getClientTypes(
        this.stateID,
        this.foreclosureTypeId,
        this.loanID,
        this.investorID
      )
      .subscribe(
        (data: any[]) => {
          this.clients = data;
        },
        (error) => {
          console.error('Error fetching Clients types:', error);
        }
      );
  }
}
