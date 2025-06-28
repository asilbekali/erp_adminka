import axios from "axios";
import { API } from "./getEnv";

export const inctanse = axios.create({ baseURL: API })