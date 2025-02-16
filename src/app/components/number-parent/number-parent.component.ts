import { Component } from '@angular/core';
import { NumberHeaderComponent } from './children/number-header/number-header.component';
import { TableComponent } from './children/table/table.component';
import { FooterComponent } from './children/footer/footer.component';

@Component({
  selector: 'app-number-parent',
  standalone: true,
  imports: [NumberHeaderComponent, TableComponent, FooterComponent],
  templateUrl: './number-parent.component.html',
  styleUrl: './number-parent.component.scss',
})
export class NumberParentComponent {}
