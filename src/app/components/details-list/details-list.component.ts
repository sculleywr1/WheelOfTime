import { Component, OnInit } from '@angular/core';
import { Detail } from 'src/app/models/detail.model';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-details-list',
  templateUrl: './details-list.component.html',
  styleUrls: ['./details-list.component.css']
})
export class DetailsListComponent implements OnInit {

  details?: Detail[];
  currentDetail: Detail = {};
  currentIndex: number = -1;
  name: string = ``

  constructor(private detailService: DetailService) { }

  ngOnInit(): void {
    this.retrieveDetails();
  }

  retrieveDetails(): void
  {
    this.detailService.getAll().subscribe(
      data =>
      {
        this.details = data;
        console.log(data);
      },
      error =>
      {
        console.log(error);
      }
    )
  }

  refreshList(): void
  {
    this.retrieveDetails();
    this.currentDetail = {};
    this.currentIndex = -1;
  }

  setActiveDetail(detail: Detail, index: number): void
  {
    this.currentDetail = detail;
    this.currentIndex = index;
  }

  searchName(): void
  {
    this.currentDetail = {};
    this.currentIndex = -1;

    this.detailService.findByName(this.name).subscribe(
      data =>
      {
        this.details = data;
        console.log(data);
      },
      error =>
      {
        console.log(error);
      }
    )
  }

}
