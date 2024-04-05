import { Component } from '@angular/core';
import { FilteredService } from '../Services/filtered.service';
@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent {
  dils: any[] = [];
  constructor(private filteredService:FilteredService ) { }
  selectForeClosure(resultData: string) {
    this.filteredService.setSelectedFiltered(resultData);
  }
  ngOnInit(): void {
    this.DilloadData();
  }
  DilloadData(): void {
    this.filteredService.getDilFilteredData().subscribe(
      (data: any[]) => {
        this.dils = data;
      },
      (error) => {
        console.error('Error fetching Foreclosuretype types:', error);
      }
    );
  }
}
