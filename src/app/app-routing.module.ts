import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { FmxAltaComponent } from './fmx-alta/fmx-alta.component';
import { FmxListadoComponent } from './fmx-listado/fmx-listado.component';

const routes: Routes = [
  { path: 'posts'   , component: PostsComponent  },
  { path: 'albums'  , component: AlbumsComponent },
  { path: 'usuarios', component: UsersComponent  },
  { path: 'fmx-alta', component: FmxAltaComponent},
  { path: 'fmx-listado', component: FmxListadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
