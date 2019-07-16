import { Router } from 'express';
import * as express from 'express';
interface Controller {
  path: string;
  router: Router;
}

export default Controller;
