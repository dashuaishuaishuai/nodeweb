import { Router } from 'express';
import Service from "./service-interface";
interface Controller {
  path: string;
  router: Router;
  service:Service;
}

export default Controller;
