import { Catergory } from "../../model/Category_Model";
import { Currency } from "../../model/Currency_Model";
import { Provider } from "../../model/Provider_Model";
import { Status } from "./status";

export interface ServiceInterface {
    id?: number;
    name: string;
    description: string;
    price: number;
    currency: Currency;
    category: Catergory;
    status: Status;
    image: string;
}
