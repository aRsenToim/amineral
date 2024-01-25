import { FC } from 'react'
import s from './productCard.module.scss'
import { NavLink } from 'react-router-dom'
import { IProduct } from '../../types/productType'

interface IProps {
 productCard: IProduct
}

const ProductCard: FC<IProps> = ({productCard}) => {
 return <div className={s.ProductCard}>
  <NavLink to={`/mineral/${productCard.id}`}>
   <img src={productCard.img} alt="" className={s.ProductCard__image} />
  </NavLink>
  <div className={s.ProductCard__info}>
   <NavLink to={`/mineral/${productCard.idMineral}`} className={s.ProductCard__link}>
    <h2 className={s.ProductCard__title}>{productCard.title}</h2>
   </NavLink>
   <p className={s.ProductCard__group}>Группа: {productCard.group.title}</p>
   <p className={s.ProductCard__id}>id: {productCard.id}</p>
  </div>
 </div>
}


export default ProductCard