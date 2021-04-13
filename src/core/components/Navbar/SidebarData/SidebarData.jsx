import React from 'react';
import * as Io5Icons from 'react-icons/io5';
import * as RiIcons from 'react-icons/ri';
import * as GrIcons from 'react-icons/gr';

export const SidebarData = [
  {
    title: 'Perfil',
    path: '/', 
    icon: <Io5Icons.IoPersonCircleOutline />,
    cName: 'nav-text'
  },
  {
    title: 'Favorito',
    path: '/',
    icon: <Io5Icons.IoStarOutline />,
    cName: 'nav-text'
  },
  {
    title: 'Diario',
    path: '/diary',
    icon: <RiIcons.RiContactsBookLine />,
    cName: 'nav-text'
  },
  {
    title: 'Compartir',
    path: '/',
    icon: <GrIcons.GrShareOption/>,
    cName: 'nav-text'
  },
  {
    title: 'Traductor',
    path: '/',
    icon: <Io5Icons.IoLanguage />,
    cName: 'nav-text'
  },
  {
    title: 'Salir',
    path: '/login',
    icon: <Io5Icons.IoExitOutline />,
    cName: 'nav-text'
    
  }
];
