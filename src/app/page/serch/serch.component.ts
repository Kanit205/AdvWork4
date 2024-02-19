import { SerchGetResponse } from './../../model/serch_get_res';
import { Component } from '@angular/core';
import { OmdbService } from '../../service/api/omdb.service';
import { OmdbGetResponse } from '../../model/omdb_get_res';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-serch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './serch.component.html',
  styleUrl: './serch.component.scss'
})
export class SerchComponent {
  find: SerchGetResponse | undefined;
  findID : OmdbGetResponse | undefined;
  serchBy: number = 0;

  constructor(private OmdbService: OmdbService) { }

  async findSerch(s?: string, y?: string, i?: string) {
    console.log("find...");
    if (s && !y && !i) {
      this.find = await this.OmdbService.getSerch(s);
      this.serchBy = 1;
    } else if (s && y && !i) {
      this.find = await this.OmdbService.getSerch(s,y);
      this.serchBy = 1;
    } else {
      this.findID = await this.OmdbService.getSerchID(i);
      this.serchBy = 2;
    }

    if (this.serchBy === 1) {
      console.log(this.find?.Search);
    } else {
      console.log(this.findID);

    }
  }
}
