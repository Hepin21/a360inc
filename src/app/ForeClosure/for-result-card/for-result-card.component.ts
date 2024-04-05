import { Component } from '@angular/core';
import { FilteredService } from 'src/app/ForeClosure/Services/filtered.service';
@Component({
  selector: 'app-for-result-card',
  templateUrl: './for-result-card.component.html',
  styleUrls: ['./for-result-card.component.scss']
})
export class ForResultCardComponent {
  fees: any[] = [];
  constructor(private filteredService:FilteredService ) { }
  selectForeClosure(foreclosuretypeName: string) {
    this.filteredService.setSelectedFiltered(foreclosuretypeName);
  }
  ngOnInit(): void {
    this.loadData();
  }
  loadData(): void {
    this.filteredService.getFilteredData().subscribe(
      (data: any[]) => {
        this.fees = data;
      },
      (error) => {
        console.error('Error fetching Foreclosuretype types:', error);
      }
    );
  }
}
