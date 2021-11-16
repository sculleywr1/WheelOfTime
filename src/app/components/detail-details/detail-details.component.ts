import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detail } from 'src/app/models/detail.model';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-detail-details',
  templateUrl: './detail-details.component.html',
  styleUrls: ['./detail-details.component.css']
})
export class DetailDetailsComponent implements OnInit {

  currentDetail: Detail = {
    name: '',
    nationality: '',
    channeler: false,
    gender: ''
  };

  message = '';

  constructor(private detailService: DetailService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.message = ``;
    this.getDetail(this.route.snapshot.params.id);
  }

  getDetail(id: string): void
  {
    this.detailService.get(id).subscribe(
      data =>
      {
        this.currentDetail = data;
        console.log(data);
      },
      error =>
      {
        console.log(error);
      }
    );
  }
  updateChanneler(status: boolean): void
  {
    const data =
    {
      name: this.currentDetail.name,
      nationality: this.currentDetail.nationality,
      channeler: status,
      gender: this.currentDetail.gender
    };

    this.message = ``;

    this.detailService.update(this.currentDetail.id, data).subscribe(
      response =>
      {
        this.currentDetail.channeler = status;
        console.log(response);
        this.message = response.message ? response.message : `The channeler designation was updated successfully!`;
      },
      error =>
      {
        console.log(error);
      }
    )
  }

  updateDetail(): void
  {
    this.message = ``
    this.detailService.update(this.currentDetail.id, this.currentDetail).subscribe(
      response =>
      {
        console.log(response);
        this.message = response.message? response.message : `This character was updated successfully`;
      },
      error =>
      {
        console.log(error);
      }
    );
  }

  deleteDetail(): void
  {
    this.detailService.delete(this.currentDetail.id).subscribe(
      response =>
      {
        console.log(response);
        this.router.navigate([`/details`]);
      },
      error =>
      {
        console.log(error);
      }
    )
  }

}
