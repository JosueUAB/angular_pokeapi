import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule,

  ],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {
  serviciosPokemon= inject(PokemonService);


  loadPokemon(){
    this.serviciosPokemon.getPokemon()
    .subscribe({
      next: (resp)=>{
        console.log(resp);
      },
      error:(err)=>{
        console.log(err);
      }
    })

  }
}
