import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Vat } from 'src/app/core/model/vat';
import { VatsService } from '../services/vat.service';
import { selectVat } from 'src/app/redux/vat';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vat',
  templateUrl: './vat.component.html',
  styleUrls: ['./vat.component.scss']
})
export class VatComponent implements OnInit {

  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};
  
  constructor(private router: Router, private store: Store, private vatService: VatsService) {
    console.log('costruttore vat')
    this.vatService.retrieveAllVat();
  }

  ngOnInit(): void {
    this.vatService;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 25],
      processing: true
    };
  }

  get vats(): Observable<Vat[]> {
    return this.store.pipe(select(selectVat));
  }

  delete(vat: Vat) {
    console.log('delete')
    this.vatService.deleteVat(vat)
  }

  goToDetail(codVat: String) {
    this.router.navigateByUrl("/vat/detail/"+codVat)
  }
}
