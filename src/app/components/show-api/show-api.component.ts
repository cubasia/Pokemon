import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpclientService } from 'src/app/services/HttpClient/HttpClientServices';

class API {
  NomeApi = '';
  Payload: { [key: string]: string } = {
    Name: '',
    Description: '',
    Path: '',
  };
}
interface Elemento {
  cosa: any;
}

@Component({
  selector: 'app-show-api',
  templateUrl: './show-api.component.html',
  styleUrls: ['./show-api.component.css'],
})
export class ShowApiComponent implements OnInit {
  @ViewChild('paginator') paginator!: MatPaginator;
  elementi: Elemento[] = [];
  constructor(private httpService: HttpclientService) {}
  displayedColumns = ['Index', 'NomeApi', 'Name', 'Description', 'Path'];
  Tabledatasource: API[] = [];
  datasource = new MatTableDataSource(this.Tabledatasource);
  pageOptions = [5, 10, 15];
  ngOnInit(): void {
    this.callService();
  }

  callService() {
    this.httpService
      .getListWithUrl<Elemento>('https://api.covid19api.com/')
      .subscribe((x) => {
        for (const property in x) {
          let _api = new API();
          _api.NomeApi = property;
          _api.Payload = { ...x[property] };

          
          // let oggetto: Record<string, any> = x[property];
          // for (const prop in oggetto) {
          //   _api.Payload[prop] = oggetto[prop];
          // }
          this.Tabledatasource.push(_api);
        }
        this.datasource.data = this.Tabledatasource;
        this.datasource.paginator = this.paginator;
      });
  }


}
