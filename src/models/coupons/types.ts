import { IType } from "../types/types";
import { IUnit } from "../units/types";
import { IWebshop } from "../webshops/types";

export interface ICoupon {
    id: number;
    amount: number;
    description: string;
    validFrom: string;
    validTo: string;
    code: string;
    popularity: number;
    webshop: IWebshop;
    unit: IUnit;
    type: IType;
}
