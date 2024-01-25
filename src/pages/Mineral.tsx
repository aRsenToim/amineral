import { FC, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { getProductFetch } from "../store/actions/productsAction"
import MineralComponent from "../components/mineral/MineralComponent"






const Mineral: FC = () => {
 const {id} = useParams()

 const dispatch = useAppDispatch()
 const {product, error} = useAppSelector(state => state.productsSlice)


 useEffect(() => {
  if (!product || String(product?.idMineral) !==  id) {
   dispatch(getProductFetch(id ?? ''))
  }
 })

 return <>{product ? <MineralComponent id={product.idMineral} title={product?.title} img={product.img} group={product.group} properties={product.properties}/> : undefined}</>
}



export default Mineral