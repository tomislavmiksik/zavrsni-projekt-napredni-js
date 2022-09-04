import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  private API_KEY: string = '?key=29244130-14d16ae5eaac27d231135ba31&';
  private API_URL: string = 'https://pixabay.com/api/';
  private URL: string = this.API_URL + this.API_KEY + '&q=';
  private perPage: string = '&per_page=100';

  //https://pixabay.com/api/?key=29244130-14d16ae5eaac27d231135ba31&q=yellow+flowers&image_type=photo

  fetchImages(query: string) {}
}
