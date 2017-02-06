import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {SearchService} from "./search.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private SearchStr:string;
  private SearchForm:FormGroup;
  private SearchResults:string;

  constructor(private fb:FormBuilder, private ss:SearchService, private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(){
    this.SearchForm = this.fb.group({
      SearchStr: ['', Validators.required]
    })
  }
  searchMusic() {
    console.log(this.SearchForm.value.SearchStr);
    this.ss.searchMusic(this.SearchForm.value.SearchStr)
      .subscribe(
        res=>{
          this.SearchResults = res.artists.items;
        }
      )
  }

  gotoArtist(artistid){
    this.router.navigate(['/artist', artistid]);
  }

}
