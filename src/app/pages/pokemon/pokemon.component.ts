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
  personajes:any=[];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadPokemon();
  }


  loadPokemon(){
    for (let i = 1; i < 100; i++) {

      this.serviciosPokemon.getPokemon(i)
    .subscribe({
      next: (resp)=>{
        // console.log(resp);
        this.personajes.push(resp);

      },
      error:(err)=>{
        console.log(err);
      }
    })

    }


  }
}
