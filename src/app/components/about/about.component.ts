import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AboutItem {
  label: string;
  value: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  items: AboutItem[] = [
    { label: 'Fundação', value: '2009' },
    { label: 'Experiência da equipe', value: '+20 anos' },
    { label: 'Modelo de trabalho', value: 'Consultoria especializada' },
    { label: 'Foco', value: 'Resultado e confiança' },
    { label: 'Localização', value: 'Vila Hamburguesa, SP' }
  ];
}
