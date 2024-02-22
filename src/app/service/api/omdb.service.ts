import { Injectable } from '@angular/core';
import { Constants } from '../../config/constants';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { OmdbGetResponse } from '../../model/omdb_get_res';
import { SerchGetResponse } from '../../model/serch_get_res';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  constructor(private constants: Constants, private http: HttpClient) { }

  public async getSerch(s?: string, y?: string, page:number = 1) {
    let url = `${this.constants.API_ENDPOINT}s=${s}&page=${page}`;
    if (y) {
      url += `&y=${y}`;
    }
    const res = await lastValueFrom(this.http.get(url));
    return res as SerchGetResponse;
  }

  public async getSerchID(i?: string) {
    const res = await lastValueFrom(this.http.get(`${this.constants.API_ENDPOINT}i=${i}`));
    return res as OmdbGetResponse;
  }
}
