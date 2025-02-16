import { Component, OnInit } from '@angular/core';
import { NumberParentComponent } from './components/number-parent/number-parent.component';
import { CommonModule } from '@angular/common';
import { SwitchLangService } from './core/services/switch-lang.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NumberParentComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  currentLanguage!: string | null;

  constructor(private switchLangService: SwitchLangService) {}

  ngOnInit(): void {
    this.switchLangService.swichLang(localStorage.getItem('lang') || 'ar');
    this.currentLanguage = localStorage.getItem('lang');
  }

  changeLang(language: string) {
    this.switchLangService.swichLang(language);
    this.currentLanguage = language;
  }
}
