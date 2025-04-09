import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, Type } from '@angular/core';

export interface TabItem {
  name: string;
  component: Type<any>; // oppure Type<any> se importi da '@angular/core',
  success?: boolean,
  disabled?: boolean,
  showCheck?: boolean,
  showWarning?: boolean
}
@Component({
  selector: 'mlps-wizard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mlps-wizard.component.html',
  styleUrl: './mlps-wizard.component.scss'
})
export class MLPSWizardComponent {
  @Input() selectedTab: number = 0;
  @Output() changeTab: EventEmitter<number> = new EventEmitter();
  @Input() tabsList: TabItem[] = [];
  conditionCheck: boolean = false;
  conditionWarning: boolean = false; 

  onChangeTab(index: number){
    this.selectedTab = index
    this.changeTab.emit(this.selectedTab);
  }
}
