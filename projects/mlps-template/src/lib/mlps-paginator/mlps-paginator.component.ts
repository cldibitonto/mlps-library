import { Component, Input } from '@angular/core';
import { ItPaginationComponent } from 'design-angular-kit';
import { Table } from 'primeng/table';

@Component({
  selector: 'mlps-paginator',
  standalone: true,
  imports: [ItPaginationComponent],
  templateUrl: './mlps-paginator.component.html',
  styleUrl: './mlps-paginator.component.scss'
})
export class MLPSPaginatorComponent {
  @Input() myTable!: Table;
  @Input() dataLength!: number; 
  @Input() rows: number = 10
  @Input() changerValue: 2 | 5 | 10 | 15 | 20 | undefined = undefined;
  numberOfPages!: number;
  currentPage = 0
  changerValues: number[] = [2, 5, 10, 15, 20];
  
  ngOnInit(){
    this.calcRows()
    this.myTable.rows = this.rows
  }

  pageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    if (this.myTable) {
      this.myTable.first = (pageNumber) * this.myTable.rows!;
    }
  }

  changerEvent(value:  number): void {
    this.myTable.rows = this.rows = value
    this.changerValue = value  as 2 | 5 | 10 | 15 | 20 | undefined;
    this.calcRows()
    this.calcPage()
  }

  calcPage(){
    const first = this.myTable.first;
    const rows = this.myTable.rows;
    const currentPage = Math.floor(first! / rows!) + 1;
    this.currentPage = currentPage - 1;
    this.myTable.first = (currentPage - 1) * rows!
  }

  calcRows(){
    this.numberOfPages= Math.ceil(this.dataLength/this.rows)
  }
}
