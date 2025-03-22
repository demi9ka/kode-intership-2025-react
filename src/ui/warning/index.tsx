import { ReactNode } from 'react'
import css from './styles.module.css'
import { Image } from '../image'

interface WarningType {
    icon: string
    title: string
    children: ReactNode
}

export const Warning = ({ children, icon, title }: WarningType) => {
    return (
        <div className={css.wrapper}>
            <div className={css.content}>
                <Image src={icon} width={56} height={56} />
                <p className={css.title}>{title}</p>
                <span className={css.content}>{children}</span>
            </div>
        </div>
    )
}
