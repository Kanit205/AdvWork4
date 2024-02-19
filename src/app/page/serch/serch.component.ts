import { SerchGetResponse } from './../../model/serch_get_res';
import { Component } from '@angular/core';
import { OmdbService } from '../../service/api/omdb.service';
import { OmdbGetResponse } from '../../model/omdb_get_res';


@Component({
  selector: 'app-serch',
  standalone: true,
  imports: [],
  templateUrl: './serch.component.html',
  styleUrl: './serch.component.scss'
})
export class SerchComponent {
  find: SerchGetResponse | undefined;

  constructor(private OmdbService: OmdbService) { }

  async findSerch(s: string, y?: string) {
    console.log("find...");
    if (!y) {
      this.find = await this.OmdbService.getTitle(s);
    } else {
      this.find = await this.OmdbService.getTitle(s,y);
    }
    console.log(this.find.Search);
  }
}
