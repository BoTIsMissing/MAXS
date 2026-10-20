import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {
  stats: Stat[] = [
    { value: '20+',  label: 'Anos de mercado' },
    { value: '100%', label: 'Equipe certificada' },
    { value: '4',    label: 'Áreas de especialidade' },
    { value: '24/7', label: 'Monitoramento Cloud' }
  ];
}
