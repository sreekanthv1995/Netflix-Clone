import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{

  constructor(private service:MovieApiServiceService){ }

  bannerResult: any =[];
  trendinMovieResult: any =[];

  ngOnInit(): void {
     this.bannerData();
     this.trendingMovieData();
  }

  //banner data
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerresult#');
      this.bannerResult = result.results;
    });
  }

  //trending data
  trendingMovieData(){
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result,'rending movies#');
      this.trendinMovieResult = result.results;
      
    });
  }

}
