import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableFilter } from 'mat-table-filter';
import { Router } from '@angular/router';
import { AtmData } from 'src/app/models/AtmData';
import mock from '../../data/atms.json';

@Component({
  selector: 'app-atm-search',
  templateUrl: './atm-search.component.html',
  styleUrls: ['./atm-search.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class AtmSearchComponent implements OnInit{
  displayedColumns: string[] = ['clientName', 'atmName', 'location', 'model', 'responsible', 'operator', 'actions'];
  // displayedColumns: string[] = ['Cliente', 'Cajero', 'Ubicación', 'Modelo', 'Responsable', 'Operador', 'Acciones'];
  dataSource!: MatTableDataSource<AtmData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  filterEntity!: AtmData;
  filterType!: MatTableFilter;

  showClientFilter: boolean = false;
  @ViewChild('searchClientFilter') searchClientFilter!: ElementRef;
  showAtmNameFilter: boolean = false;
  @ViewChild('searchAtmNameFilter') searchAtmNameFilter!: ElementRef;
  showLocationFilter: boolean = false;
  @ViewChild('searchLocationFilter') searchLocationFilter!: ElementRef;
  showModelFilter: boolean = false;
  @ViewChild('searchModelFilter') searchModelFilter!: ElementRef;
  showResponsibleFilter: boolean = false;
  @ViewChild('searchResponsibleFilter') searchResponsibleFilter!: ElementRef;
  showOperatorFilter: boolean = false;
  @ViewChild('searchOperatorFilter') searchOperatorFilter!: ElementRef;

  toggleShowClientFilter(): void {
    this.showClientFilter = !this.showClientFilter;
    setTimeout(() => {
      this.searchClientFilter.nativeElement.focus();
    }, 200);
  }
  toggleShowAtmNameFilter(): void {
    this.showAtmNameFilter = !this.showAtmNameFilter;
    setTimeout(() => {
      this.searchAtmNameFilter.nativeElement.focus();
    }, 200);
  }
  toggleShowLocationFilter(): void {
    this.showLocationFilter = !this.showLocationFilter;
    setTimeout(() => {
      this.searchLocationFilter.nativeElement.focus();
    }, 200);
  }
  toggleShowModelFilter(): void {
    this.showModelFilter = !this.showModelFilter;
    setTimeout(() => {
      this.searchModelFilter.nativeElement.focus();
    }, 200);
  }
  toggleShowResponsibleFilter(): void {
    this.showResponsibleFilter = !this.showResponsibleFilter;
    setTimeout(() => {
      this.searchResponsibleFilter.nativeElement.focus();
    }, 200);
  }
  toggleShowOperatorFilter(): void {
    this.showOperatorFilter = !this.showOperatorFilter;
    setTimeout(() => {
      this.searchOperatorFilter.nativeElement.focus();
    }, 200);
  }

  constructor(
    private router: Router,
  ) {
    this.filterEntity = new AtmData();
    this.filterType = MatTableFilter.ANYWHERE;
  }

  ngOnInit() {
    this.getAtms();
  }

  getAtms(){
    const atmList: AtmData[] = [...mock];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(atmList);
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 200)
  }

  goToControl( id: number ){
    this.router.navigate(['/control'], {
      queryParams: { id },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
