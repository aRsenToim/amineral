import { FC } from 'react'
import s from './loader.module.scss'




const Loader: FC = () => {
 return <img className={s.Loader} src='/img/loader.gif' />
}


export default Loader