import { Component, OnInit } from '@angular/core';
import { Detail } from 'src/app/models/detail.model';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.component.html',
  styleUrls: ['./add-detail.component.css']
})
export class AddDetailComponent implements OnInit {

  detail: Detail = {
      name: ``,
      nationality: ``,
      channeler: false,
      gender: ``
  }
  submitted: boolean = false;

  constructor(private detailService: DetailService) { }

  ngOnInit(): void {
  }

  saveDetail(): void
  {
    const data =
    {
      name: this.detail.name,
      nationality: this.detail.nationality,
      channeler: this.detail.channeler,
      gender: this.detail.gender
    }

    this.detailService.create(data).subscribe(response => {
      console.log(response);
      this.submitted = true;
    }, err => {console.log(err);})
  }

  newDetail(): void
  {
    this.submitted = false;
    this.detail =
    {
      name: ``,
      nationality: ``,
      channeler: this.detail.channeler,
      gender: ``
    }
  }

  setFalse(): void
  {
    this.detail.channeler = false;
  }

  setTrue(): void
  {
    this.detail.channeler = true;
  }

}
