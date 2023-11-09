import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  constructor(private service:MovieApiServiceService){
    
  }
  ngOnInit(): void {
    
  }
  searchResult:any;

  SearchForms = new FormGroup({
    'movieName': new FormControl(null)
  });

  submitForm(){
    console.log(this.SearchForms.value,'searchForm#');
    this.service.getSearchMovie(this.SearchForms.value).subscribe((result)=>{
      console.log(result,'searchmovie#');
      this.searchResult = result.results;
      
    });
    
  }

}
