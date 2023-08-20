/* eslint @typescript-eslint/no-var-requires: "off" */
import { Router } from 'express';
import glob from 'glob';

export function registerRoutes(router: Router): void {
  const routes = glob.sync(`${__dirname}/**/*.route.*`);

  routes.map((route: string) => addRoute(route, router));
}

function addRoute(routePath: string, router: Router) {
  const { routes } = require(routePath) as { routes: (router: Router) => void };
  routes(router);
}
