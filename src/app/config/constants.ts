import { Injectable } from "@angular/core";

@Injectable ({
  providedIn: 'root',
})

export class Constants {
  public readonly API_ENDPOINT: string = "http://www.omdbapi.com/?apikey=c038fe09&";
}
