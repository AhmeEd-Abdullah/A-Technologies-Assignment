import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localAr from '@angular/common/locales/ar-EG';
registerLocaleData(localAr);

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentDate: Date = new Date();
  formattedTime!: string;
}
