import React from 'react';

// Layouts
import AdminLayout from './layouts/AdminLayout';
// import DefaultLayout from './layouts/DefaultLayout';

// Admin Pages
const Pages         = React.lazy(() => import('./pages/admin/pages/Pages'));
const Portfolios    = React.lazy(() => import('./pages/admin/portfolios/Portfolios'));
const Posts         = React.lazy(() => import('./pages/admin/posts/Posts'));
const Projects      = React.lazy(() => import('./pages/admin/projects/Projects'));
const Services      = React.lazy(() => import('./pages/admin/services/Services'));
const Settings      = React.lazy(() => import('./pages/admin/settings/Settings'));
const Dashboard     = React.lazy(() => import('./pages/admin/Dashboard'));

// Frontend Pages
const Home          = React.lazy(() => import('./pages/frontend/Home'));

// Common Pages
const Login         = React.lazy(() => import('./pages/common/Login'));
const Register      = React.lazy(() => import('./pages/common/Register'));
const Page404       = React.lazy(() => import('./pages/common/404'));

const routes = [
    { path:'/admin/pages',       auth:true,   role:'user', exact:false,  name:'Pages',      component:Pages,      layout:AdminLayout },
    { path:'/admin/portfolios',  auth:true,   role:'user', exact:false,  name:'Portfolios', component:Portfolios, layout:AdminLayout },
    { path:'/admin/posts',       auth:true,   role:'user', exact:false,  name:'Posts',      component:Posts,      layout:AdminLayout },
    { path:'/admin/projects',    auth:true,   role:'user', exact:false,  name:'Projects',   component:Projects,   layout:AdminLayout },
    { path:'/admin/services',    auth:true,   role:'user', exact:false,  name:'Services',   component:Services,   layout:AdminLayout },
    { path:'/admin/settings',    auth:true,   role:'user', exact:false,  name:'Settings',   component:Settings,   layout:AdminLayout },
    { path:'/admin/',            auth:true,   role:'user', exact:false,  name:'Dashboard',  component:Dashboard,  layout:AdminLayout },
    { path:'/login/',            auth:false,  role:'user', exact:true,   name:'Login',      component:Login       },
    { path:'/register/',         auth:false,  role:'user', exact:true,   name:'Register',   component:Register    },
    { path:'/',                  auth:false,  role:'user', exact:true,   name:'Home',       component:Home        },
    { path:'/*/',                auth:false,  role:'user', exact:true,   name:'404',        component:Page404     },
];

export default routes;
