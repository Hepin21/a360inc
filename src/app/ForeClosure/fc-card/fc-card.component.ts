import { Component ,OnInit} from '@angular/core';
import { ForeclosuretypeService } from 'src/app/Services/foreclosuretype.service';

@Component({
  selector: 'app-fc-card',
  templateUrl: './fc-card.component.html',
  styleUrls: ['./fc-card.component.scss'],
})
export class FcCardComponent implements OnInit{
  foretypes: any[] = [];
  constructor(private ForeclosuretypeService:ForeclosuretypeService ) { }
  selectForeClosure(foreclosuretypeName: string) {
    this.ForeclosuretypeService.setSelectedForeclosuretype(foreclosuretypeName);
  }
  ngOnInit(): void {
    this.loadMilestones();
  }
  loadMilestones(): void {
    this.ForeclosuretypeService.getForeclosureTypes().subscribe(
      (data: any[]) => {
        this.foretypes = data;
      },
      (error) => {
        console.error('Error fetching Foreclosuretype types:', error);
      }
    );
  }
}