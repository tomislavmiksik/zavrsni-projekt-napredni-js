import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image-services/image.service';

@Component({
  selector: 'app-image-search-page',
  templateUrl: './image-search-page.component.html',
  styleUrls: ['./image-search-page.component.scss'],
})
export class ImageSearchPageComponent implements OnInit {
  searchResults: any[] = [];
  query?: string;
  private API_KEY: string = '?key=29244130-14d16ae5eaac27d231135ba31&';
  private API_URL: string = 'https://pixabay.com/api/';
  private URL: string = this.API_URL + this.API_KEY + '&q=';
  private perPage: string = '&per_page=100';

  constructor(private imageService: ImageService) {
    this.searchResults = [];
  }

  ngOnInit(): void {}

  search() {
    if (this.query)
      fetch(this.URL + this.query + this.perPage)
        .then((response) => response.json())
        .then((data) => {
          this.searchResults = data.hits;
          console.log(this.searchResults);
        });
  }
}
