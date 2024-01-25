import { FC } from 'react'
import s from './catalogComponent.module.scss'
import ProductCard from '../productCard/productCard'
import { IProduct } from '../../types/productType'

interface IProps {
 productCards: IProduct[]
 title: string
}

const CatalogComponent: FC<IProps> = ({ productCards, title }) => {
 return <div className={s.Catalog}>
  <h2 className={s.Catalog__title}>{title}</h2>
  <div className={s.Catalog__items}>
   {productCards.map((productCard: IProduct) => <ProductCard productCard={productCard} key={productCard.id}/>)}
  </div>
 </div>
}


export default CatalogComponent