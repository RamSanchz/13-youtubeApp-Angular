import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YouTubeResponse } from '../models/youtube.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyDmvUrR3n5bOlczIhYCt8wkW9NYGdVxzv0';
  private playList = 'UU5Jn-9jqrVvKm9Hx0WW8Pgw';
  private nextPageToken = '';

  constructor(private http: HttpClient) {}

  getVideos() {
    const url = `${this.youtubeUrl}/playlistItems`;
    //params se utiliza para mandar parametros como en postman y asi no nos quede enorme la url
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '15')
      .set('playlistId', this.playList)
      .set('key', this.apiKey)
      .set('pageToken', this.nextPageToken);

    return this.http
      .get<YouTubeResponse>(url, { params })
      .pipe(
        map((resp) => {
          this.nextPageToken = resp.nextPageToken;
          return resp.items;
        }),
        map((items) => items.map((video) => video.snippet))
      );
  }
}
