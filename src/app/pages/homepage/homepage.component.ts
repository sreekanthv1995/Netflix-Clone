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
  actionMovieResult: any =[];
  adventureMovieResult: any =[];
  animationMovieResult: any =[];
  comedyMovieResult: any =[];
  documentoryMovieResult: any =[];
  scienceFictionMovieResult: any =[];
  thrillerMovieResult: any =[];


  ngOnInit(): void {
     this.bannerData();
     this.trendingMovieData();
     this.actionMovieData();
     this.adventureMovieData();
     this.animationMovieData();
     this.comedyMovieData();
     this.documentoryMovieData();
     this.scienceFictionMovieData();
     this.thrillerMovieData();
     
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

   //action data
   actionMovieData(){
    this.service.fetchActionMovies().subscribe((result)=>{
      console.log(result,'action movies#');
      this.actionMovieResult = result.results;
    });
  }

  //adventure data
  adventureMovieData(){
    this.service.fetchAdventureMovies().subscribe((result)=>{
      console.log(result,'action movies#');
      this.adventureMovieResult = result.results;
    });
  }

  //animation data
  animationMovieData(){
    this.service.fetchAnimationMovies().subscribe((result)=>{
      console.log(result,'action movies#');
      this.animationMovieResult = result.results;
    });
  }

   //comedy data
   comedyMovieData(){
    this.service.fetchComedyMovies().subscribe((result)=>{
      console.log(result,'action movies#');
      this.comedyMovieResult = result.results;
    });
  }

  //documentory data
  documentoryMovieData(){
    this.service.fetchDocumentoryMovies().subscribe((result)=>{
      console.log(result,'action movies#');
      this.documentoryMovieResult = result.results;
    });
  }

  //science-fiction data
  scienceFictionMovieData(){
    this.service.fetchScienceFictionMovies().subscribe((result)=>{
      console.log(result,'action movies#');
      this.scienceFictionMovieResult = result.results;
    });
  }

  //triller data
  thrillerMovieData(){
    this.service.fetchThrillerMovies().subscribe((result)=>{
      console.log(result,'action movies#');
      this.thrillerMovieResult = result.results;
    });
  }
  

}
