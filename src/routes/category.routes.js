import { application, Router } from "express";
import {createCategory} from "../controller/category.controller.js";

export const router = Router();

router.post('/',createCategory)