/*!

=========================================================
* * NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
import Image from "@material-ui/icons/Image";


const dashboardRoutes = [
  {
    path: "/login",
    name: "login",
    rtlName: "لوحة القيادة",
    icon: Image,

    layout: "/login",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,

    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Perfil de usuario",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,

    layout: "/admin",
  },
  // {
  //   path: "/table-list",
  //   name: "Clientes",
  //   rtlName: "قائمة الجدول",
  //   icon: "content_paste",

  //   layout: "/admin",
  // },
  {
    path: "/clientes",
    name: "Clientes",
    rtlName: "قائمة الجدول",
    icon: "content_paste",

    layout: "/admin",
  },
  // {
  //   path: "/typography",
  //   name: "Contratos",
  //   rtlName: "طباعة",
  //   icon: LibraryBooks,

  //   layout: "/admin",
  // },
  {
    path: "/contratos",
    name: "Contratos",
    rtlName: "طباعة",
    icon: LibraryBooks,

    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: BubbleChart,

  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   rtlName: "خرائط",
  //   icon: LocationOn,

  //   layout: "/admin",
  // },
  {
    path: "/notifications",
    name: "Notificaciones",
    rtlName: "إخطارات",
    icon: Notifications,

    layout: "/admin",
  },

];

export default dashboardRoutes;
