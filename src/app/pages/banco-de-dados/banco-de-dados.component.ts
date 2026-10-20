import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-banco-de-dados',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './banco-de-dados.component.html',
  styleUrl: './banco-de-dados.component.scss',
})
export class BancoDeDadosComponent {}
