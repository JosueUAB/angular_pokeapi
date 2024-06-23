import { Routes } from '@angular/router';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

export const routes: Routes = [
  {path:'',component:PokemonComponent},
  {path:'pokemon',component:PokemonComponent},
  {path:'**',component:PokemonComponent}
];
