import Admin from '@/views/Admin.vue';

export default [
  {
    path: '/admin',
    component: Admin,
    children: [
      {
        name: 'Admin',
        path: '',
        component: Admin,
      },
    ],
  },
];
