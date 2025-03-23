import { useState } from 'react'
import css from './styles.module.css'

interface ImageType {
    src: string
    width?: number
    height?: number
    alt?: string
    skeleton?: boolean
}

export const Image = ({ height, src, width, alt, skeleton }: ImageType) => {
    const [is_load, setIsLoad] = useState(false) //Если картрка не загрузилась то показываем загрузку если включен параметр skeleton
    return (
        <div style={{ width, height }} className={css.image_wrapper}>
            {!is_load && skeleton ? <div className={css.skeleton} /> : ''}
            <img className={css.image} style={{ display: !is_load ? 'none' : 'block' }} onLoad={() => setIsLoad(true)} src={src} alt={alt} />
        </div>
    )
}
