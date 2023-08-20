
import { DataNameResInterface } from "./data-name-res.interface";

export interface DataNameInterface {
  nome: string;
  localidade: string;
  sexo: string;
  res: DataNameResInterface[];
}
