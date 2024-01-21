import { IProduct } from "../../types/productType"
import { $api } from "../api"




export const productsApi = {
 async getProducts(){
  const data = await $api.get<IProduct[]>('/products')
  return data.data
 },
 async getProduct(id: string){
  const data = await $api.get<IProduct[]>(`/products?idMineral=${id}`)
  return data.data
 },
 async createProduct(product: IProduct){
  const data = await $api.post('/products', product)
  return data
 },
 async searchProduct(value: string){
  const data = await $api.get<IProduct[]>(`products?search=${value}`)
  return data.data
 }
}