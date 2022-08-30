import { baseURL } from "./baseURL"
import axios from "axios"

const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data;
  }
  
const main = async():Promise<void> => {
    try {
        
        const subscribers = axios.get(`${baseURL}/subscribers`)
        
        
      } catch (error:any) {
        const resp = error.response.data || error.message
        console.log(resp)
        
}}

main()