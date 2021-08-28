import type { RouteRecordRaw } from "vue-router";

const Home = {
  template: `
    <div>
      <h2>Home</h2>
      
      <div style="display: flex; gap: 1em">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>
  `
};

const About = {
  template: `
    <div>
      <h2>About</h2>

      <div style="display: flex; gap: 1em">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>
  `
};

export const defaultRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]