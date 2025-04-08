import axios from "axios";//Para pedir al api externa
import { YesNo } from "../interfaces/YesNo";
const API_URL="https://yesno.wtf/api";

export const yesNoConnection=async ():Promise<YesNo>=>{
    const response=await axios.get(API_URL);
    const {data}=response;
    return data;
}