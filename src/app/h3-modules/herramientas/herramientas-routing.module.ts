import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from '../../pages/user-page/user-page.component';
import { AdminPartesCuerpoComponent } from '../../components/admin-partes-cuerpo/admin-partes-cuerpo.component';
import { CategEpisComponent } from '../../components/categ-epis/categ-epis.component';



const routes: Routes = [
  { 
    path: 'administracion', 
  data: {
    title: 'Administración',
    breadcrumb: [
      {
        label: 'Administración',
        url: '/herramientas/administracion/datos-maestros/temas'
      }
    ]
  },
    children: [
    { path: 
      'datos-maestros', 
      data: {
        title: 'Datos Maestros',
        breadcrumb: [
          {
            label: 'Datos Maestros',
            url: '/herramientas/administracion/datos-maestros/temas'
          }
        ]
      },
        children: [
      { path: 'temas', component: UserPageComponent,
      data: {
        title: 'Administración - Datos Maestros - Temas',
        breadcrumb: [
          {
            label: 'Herramientas - Administración - Datos Maestros - Temas',
            url: '/herramientas/administracion/datos-maestros/temas'
          }
        ] 
      }
    },
      { 
        path: 'partes-cuerpo', 
        component: AdminPartesCuerpoComponent,
        data: {
          title: 'Partes del Cuerpo',
          breadcrumb: [
            {
              label: 'Herramientas - Administración - Datos Maestros - Partes del Cuerpo',
              url: '/herramientas/administracion/datos-maestros/temas'
            }
          ] 
        } 
      },
      { 
        path: 'categorias-epi', 
        component: CategEpisComponent,
        data: {
          title: 'Categorías EPI',
          breadcrumb: [
            {
              label: 'Herramientas - Administración - Datos Maestros - Categorías EPI',
              url: '/herramientas/administracion/datos-maestros/temas'
            }
          ] 
        } 
      }
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HerramientasRoutingModule { }
