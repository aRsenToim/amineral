import { IGroup } from "../../types/productType"
import { $api } from "../api"




export const groupsApi = {
 async getGroups(){
  const data = await $api.get<IGroup[]>('/groups')
  return data.data
 },
 async createGroup(group: IGroup){
  const data = await $api.post('/groups', group)
  return data.data
 }
}
