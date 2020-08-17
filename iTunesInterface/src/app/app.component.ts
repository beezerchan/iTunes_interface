import { Component } from '@angular/core';
import { ItunesDataService } from './services/itunes-data.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private dataService: ItunesDataService
  ) {}
  title = 'iTunesInterface';
  searchTerm = '';
  searchResults: any;
  currentResults;

  currentPage = 0;
  lastPage = 10;
  firstResult;
  lastResult;
  perPage = 5;
  resultsTotal = 0;

  updateResults() {
    this.currentResults = this.searchResults.slice(this.currentPage * this.perPage, this.currentPage * this.perPage + this.perPage);
    this.firstResult = this.currentPage * this.perPage + 1;
    this.lastResult = this.currentPage * this.perPage + this.perPage;
    this.lastPage = Math.floor(this.searchResults.length / this.perPage) - 1;
    console.log(this.lastPage);
  }

  prevResults() {
    this.currentPage --;
    this.currentPage = this.currentPage < 0 ? 0 : this.currentPage;
    console.log('current: ' + this.currentPage.toString() + ' - ');
    this.updateResults();

  }

  nextResults() {
    this.currentPage ++;
    this.currentPage = this.currentPage > this.lastPage ? this.lastPage : this.currentPage;
    console.log('current: ' + this.currentPage.toString() + ' - last: ' + this.lastPage.toString());
    this.updateResults();
  }

  searchForTerm() {
    console.log(this.searchTerm);
    this.dataService.searchTerm(this.searchTerm).subscribe(
      res => {
        this.searchResults = res;
      },
      err => {
        console.log(err);
      },
      () => {
        this.searchResults = this.searchResults.results;
        console.log(this.searchResults.length);
        this.currentPage = 0;
        this.updateResults();
        this.resultsTotal = this.currentResults.length;
      }
    );
  }

  showresults() {
    console.log(this.searchResults);
  }

  clearSearch() {
    this.searchTerm = '';
  }
}
