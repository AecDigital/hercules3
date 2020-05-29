import { MenuItem } from '../interfaces/menu-items';

export const MenuItems: MenuItem[] = [
    {
     id: 'escritorio',
     label: 'Mi Escritorio',
     rol: 0,
     linkTo: ''
    },
    {
      id: 'evaluaciones',
      label: 'Evaluaciones',
      rol: 1,
      children: [
        {
          id: 'xxx',
          label: 'Consulta Evaluación',
          rol: 1
        },
        {
          id: 'yyy',
          label: 'Alta Evaluación',
          rol: 2
        },
        {
          id: 'yyy',
          label: 'Reemplazar Responsables',
          rol: 2
        },
      ]
     },
     {
      id: 'empleados',
      label: 'Empleados',
      rol: 1
     },
     {
      id: 'puestos',
      label: 'Puestos',
      rol: 1
     },
     {
      id: 'fichas',
      label: 'Fichas',
      rol: 0,
      children: [
        {
          id: 'xxx',
          label: 'Consulta Fichas',
          rol: 2
        },
        {
          id: 'yyy',
          label: 'Editar Ficha',
          rol: 3
        },
        {
          id: 'yyy',
          label: 'Alta Fichas',
          rol: 3
        },
      ]
     },
     {
      id: 'riesgos',
      label: 'Riesgos',
      rol: 3,
      children: [
        {
          id: 'xxx',
          label: 'Consulta Riesgos',
          rol: 3
        },
        {
          id: 'yyy',
          label: 'Alta Riesgos',
          rol: 4
        },
      ]
     },
     {
      id: 'documentacion',
      label: 'Documentación',
      rol: 0,
      children: [
        {
          id: 'xxx',
          label: 'Coordinación Cliente',
          rol: 3,
          children: [
            {
              id: 'yyy',
              label: 'Consulta Documentos',
              rol: 0
            },
            {
              id: 'yyy',
              label: 'Coordinación',
              rol: 3
            },
          ]
        },
        {
          id: 'yyy',
          label: 'Publicaciones Pendientes',
          rol: 2
        },
        {
          id: 'yyy',
          label: 'Asociación Empleado Puesto',
          rol: 1
        },
        {
          id: 'yyy',
          label: 'Bandeja de Salida',
          rol: 1
        },
      ]
     },
     {
      id: 'herramientas',
      label: 'Herramientas',
      rol: 1,
      children: [
        {
          id: 'consultaColas',
          label: 'Consulta Colas',
          rol: 4
         },
        {
          id: 'xxx',
          label: 'Informes',
          rol: 1,
          children: [
            {
              id: 'xxxx',
              label: 'Generador Informes',
              rol: 1
            },
            {
              id: 'yyy',
              label: 'Listado Memoria Anual',
              rol: 4
            },
          ]
     },
     {
      id: 'central',
      label: 'Central',
      rol: 4,
      children: [
        {
          id: 'xxx',
          label: 'Informe de Controles Periódicos',
          rol: 4
        },
        {
          id: 'yyy',
          label: 'Informe de Evolución de Controles Periódicos',
          rol: 4
        },
      ]
     },
     {
      id: 'admon',
      label: 'Administración',
      rol: 4,
      children: [
        {
          id: 'xxx',
          label: 'Seguridad',
          rol: 4,
          children: [
            {
              id: 'yyy',
              label: 'Usuarios',
              rol: 4
            },
          ]
        },
        {
          id: 'historico',
          label: 'Datos Maestros',
          rol: 4,
          children: [
            {
              id: 'yyy',
              label: 'Temas',
              rol: 4,
              linkTo: '/herramientas/administracion/datos-maestros/temas'
            },
            {
              id: 'yyy',
              label: 'Subtemas',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Categorías EPI',
              rol: 4,
              linkTo: '/herramientas/administracion/datos-maestros/categorias-epi'
            },
            {
              id: 'yyy',
              label: 'Partes del cuerpo',
              rol: 4,
              linkTo: '/herramientas/administracion/datos-maestros/partes-cuerpo'
            },
            {
              id: 'yyy',
              label: 'Códigos de Riesgo',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Ámbitos',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Modelos de Negocio',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Equipos',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Operaciones',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Actividades',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Empresas',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Tipos de Oficina',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Oficinas',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Tipos de Puesto',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Provincias',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Líneas de Venta',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Líneas Venta Actividad',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Líneas Venta Actividad Operación',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Empresas Líneas de Venta',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Temarios',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Cursos',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Referencias Nivel 1',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Referencias Nivel 2',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Mantenimiento de EPI´s',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Protocos Médicos',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Instrucciones-Guías',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Agentes Laborales',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Embarazo',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Lactancia',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Recurso Preventivo',
              rol: 4
            },
            {
              id: 'yyy',
              label: 'Tareas Limitadas',
              rol: 4
            },
          ]
         },
      ],
    },
     
      ],
    }
  ];