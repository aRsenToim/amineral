import { FC } from 'react'
import s from './MineralComponent.module.scss'

interface IProps {
 id: string
	title: string
 img: string
	group: {
		id: string
		title: string
	},
	properties: {
  syngony: string
  formula: string
  hardness: string
  density: string
  cleavage: string
  kink: string
  color: string
  strokeColor: string
  shine: string
  luminescence: boolean
	}
}


const MineralComponent: FC<IProps> = ({title, id, img, properties, group}) => {
 return <div className={s.MineralComponent}>
 <img src={img} className={s.MineralComponent__image} alt="" />
 <div className={s.MineralComponent__info}>
  <h1 className={s.MineralComponent__title}>{title}</h1>
  <p className={s.MineralComponent__id}>id {id}</p>
  <ul className={s.MineralComponent__properties}>
   <li className={s.MineralComponent__item}>Группа: {group.title}</li>
   <li className={s.MineralComponent__item}>Сингония: {properties.syngony}</li>
   <li className={s.MineralComponent__item}>Формула: {properties.formula}</li>
   <li className={s.MineralComponent__item}>Твердость: {properties.hardness}</li>
   <li className={s.MineralComponent__item}>Расщепление: {properties.cleavage}</li>
   <li className={s.MineralComponent__item}>Излом: {properties.kink}</li>
   <li className={s.MineralComponent__item}>Цвет излома: {properties.strokeColor}</li>
   <li className={s.MineralComponent__item}>Блеск минерала: {properties.shine}</li>
   <li className={s.MineralComponent__item}>Цвет минерала: {properties.color}</li>
   <li className={s.MineralComponent__item}>Люминесценция: {properties.luminescence ? 'Есть' : 'Нет'}</li>
  </ul>
 </div>
</div>
}


export default MineralComponent