import { AxiosError } from "axios";
import { groupsApi } from "../../api/servies/groupsApi";
import { IGroup } from "../../types/productType";
import { createGroup, setContent, setGroups, setIsOpen, setTitleAlert } from "../slices/pagesSlice";
import { AppDispatch } from "../store";
import { setError } from "../slices/productsSlice";




export const getGroupsFetch = () => async (dispatch: AppDispatch) => {
 try {
  groupsApi.getGroups().then((data: IGroup[]) => {
   dispatch(setGroups(data))
  }).catch((error: AxiosError) => dispatch(setError(error.message)))
 } catch (error) {
  dispatch(setError('Не удается загрузить группы минералов'))
 }
}


export const createGroupFetch = (group: IGroup) => async (dispatch: AppDispatch) => {
 try {
  groupsApi.createGroup(group).then(() => {
   dispatch(createGroup(group))
   dispatch(setTitleAlert('Успешно'))
   dispatch(setContent('Группа создана'))
   dispatch(setIsOpen())
  }).catch((error: AxiosError) => dispatch(setError(error.message)))
 } catch (error) {
  dispatch(setError('Не добавить группу'))
 }
}