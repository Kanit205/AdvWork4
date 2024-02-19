import { Injectable } from '@angular/core';
import { Constants } from '../../config/constants';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { OmdbGetResponse } from '../../model/omdb_get_res';
import { SerchGetResponse } from '../../model/serch_get_res';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  constructor(private constants: Constants, private http: HttpClient) { }

  public async getTitle(s?: string, y?: string) {
    let url = this.constants.API_ENDPOINT + "s=" + s;
    if (y) {
      url = url + "&y=" + y;
    }
    const res = await lastValueFrom(this.http.get(url));
    return res as SerchGetResponse;
  }
}
