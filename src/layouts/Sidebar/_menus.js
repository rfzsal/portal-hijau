import {
  UserIcon,
  DocumentTextIcon,
  HomeIcon,
  CalendarIcon,
  ClipboardCheckIcon,
  StarIcon
} from '@heroicons/react/outline';

export const menus = [
  {
    icon: <HomeIcon height={24} />,
    text: 'Beranda',
    exact: true,
    link: '/'
  },
  {
    icon: <UserIcon height={24} />,
    text: 'Profil',
    exact: false,
    link: '/profil'
  },
  {
    icon: <CalendarIcon height={24} />,
    text: 'Jadwal Perkuliahan',
    exact: false,
    link: '/jadwal-perkuliahan'
  },
  {
    icon: <ClipboardCheckIcon height={24} />,
    text: 'Absensi Perkuliahan',
    exact: false,
    link: '/absensi-perkuliahan'
  },
  {
    icon: <StarIcon height={24} />,
    text: 'Daftar Nilai',
    exact: false,
    link: '/daftar-nilai'
  },
  {
    icon: <DocumentTextIcon height={24} />,
    text: 'Formulir',
    exact: false,
    link: '/formulir'
  }
];
