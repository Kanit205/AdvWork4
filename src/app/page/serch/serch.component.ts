import { SerchGetResponse, Search } from './../../model/serch_get_res';
import { Component } from '@angular/core';
import { OmdbService } from '../../service/api/omdb.service';
import { OmdbGetResponse } from '../../model/omdb_get_res';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-serch',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './serch.component.html',
  styleUrl: './serch.component.scss'
})

export class SerchComponent {
  findID: OmdbGetResponse | undefined;
  find: SerchGetResponse | undefined;
  serchBy: number = 0;
  counter: number[] = [];

  constructor(private OmdbService: OmdbService) { }

  ngOnInit(): void {
    this.findSerch("movie", "");
    this.counter = Array.from({length: 10 }, (_, index) => index + 1);
    this.serchBy = 1;
  }

  async findSerch(s?: string, y?: string) {
    console.log("find...");
    this.serchBy = 0;

    let search = s?.substring(0, 2);
    if (search && search.startsWith("tt")) {
      this.findID = await this.OmdbService.getSerchID(s);
      this.serchBy = 2;
      console.log(this.findID);
    } else {
      if (s && y) {
        this.find = await this.OmdbService.getSerch(s, y);
        this.serchBy = 1;
        console.log(this.find);
      } else if (s && !y) {
        this.find = await this.OmdbService.getSerch(s, "");
        this.serchBy = 1;
        console.log(this.find);
      } else {
        this.ngOnInit();
      }
    }
  }

  async nextPage(s: string , y?: string, page?: number) {
    console.log(s, page);

    if (!s && !y && page) {
      this.find = await this.OmdbService.getSerch("movie", "", page);
      this.serchBy = 1;
    } else {
      this.find = await this.OmdbService.getSerch(s, y, page);
      this.serchBy = 1;
    }
    console.log(this.find);
  }

  async findSerchID (i: string) {
    this.findID = await this.OmdbService.getSerchID(i);
    this.serchBy = 3;
    console.log(this.findID);
  }
}
