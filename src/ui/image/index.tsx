import css from './styles.module.css'

interface ImageType {
    src: string
    width?: number
    height?: number
    alt?: string
    clicked?: boolean
}

export const Image = ({ height, src, width, alt, clicked }: ImageType) => {
    return (
        <div style={{ width, height, cursor: clicked ? 'pointer' : 'default' }} className={css.image_wrapper}>
            <img className={css.image} src={src} alt={alt} />
        </div>
    )
}
