import { AxiosError } from "axios";
import { productsApi } from "../../api/servies/productsApi";
import { IProduct } from "../../types/productType";
import { setError, setProduct, setProducts, setSearchProducts } from "../slices/productsSlice";
import { AppDispatch } from "../store";
import { setContent, setIsOpen, setTitleAlert } from "../slices/pagesSlice";





export const getProductsFetch = () => async (dispatch: AppDispatch) => {
 try {
  productsApi.getProducts().then((data: IProduct[]) => {
   dispatch(setProducts(data))
  }).catch((err: AxiosError) => dispatch(setError(err.message)))
 } catch (error) {
  dispatch(setError('Не удается загрузить каталог минералов'))
 }
}

export const getProductFetch = (id: string) => async (dispatch: AppDispatch) => {
 try {
  productsApi.getProduct(id).then((data: IProduct[]) => {
   dispatch(setProduct(data[0]))
  }).catch((err: AxiosError) => dispatch(setError(err.message)))
 } catch (error) {
  dispatch(setError('Не удается загрузить минерал'))
 }
}

export const createProductFetch = (product: IProduct) => async (dispatch: AppDispatch) => {
 try {
  productsApi.createProduct(product).then(() => {
   dispatch(getProductsFetch())
   dispatch(setTitleAlert('Успешно'))
   dispatch(setContent('Минерал создан'))
   dispatch(setIsOpen())
  }).catch((err: AxiosError) => dispatch(setError(err.message)))
 } catch (error) {
  dispatch(setError('Не удается добавить минерал'))
 }
}

export const searchProductFetch = (value: string) => async (dispatch: AppDispatch) => {
 try {
  productsApi.searchProduct(value).then((data: IProduct[]) => {
   dispatch(setSearchProducts(data))
  }).catch((err: AxiosError) => dispatch(setError(err.message)))
 } catch (error) {
  dispatch(setError('Не удается загрузить каталог минералов'))
 }
}


export const deleteProductFetch = (id: number) => async (dispatch: AppDispatch) => {
 try {
  productsApi.deleteProduct(id).then(() => {
   dispatch(getProductsFetch())
   dispatch(setTitleAlert('Успешно'))
   dispatch(setContent('Минерал удален'))
   dispatch(setIsOpen())
  }).catch((err: AxiosError) => dispatch(setError(err.message)))
 } catch (err) {
  dispatch(setError('Не удается удалить минерал'))
 }
}


export const changeProduct = (product: IProduct) => async (dispatch: AppDispatch) => {
 try {
  productsApi.changeProduct(product).then(() => {
   dispatch(getProductsFetch())
   dispatch(getProductFetch(product.idMineral))
   dispatch(setTitleAlert('Успешно'))
   dispatch(setContent('Минерал изменен'))
   dispatch(setIsOpen())
  })
 } catch (error) {
  dispatch(setTitleAlert('Ошибка'))
  dispatch(setContent('Не удается изменить минерал'))
  dispatch(setIsOpen())
 }
}