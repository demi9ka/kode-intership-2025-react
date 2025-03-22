import css from './styles.module.css'

export const Skeleton = () => {
    return (
        <div className={css.wrapper}>
            <div className={`${css.avatar} ${css.skeleton}`} />
            <div className={css.flex}>
                <div className={`${css.top}  ${css.skeleton}`} />
                <div className={`${css.bottom}  ${css.skeleton}`} />
            </div>
        </div>
    )
}
