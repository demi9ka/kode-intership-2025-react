import { ReactNode } from 'react'
import css from './styles.module.css'
import { Image } from '../image'

interface ModalType {
    children: ReactNode
    is_openned: boolean
    title: string
    onClose: () => void
}

export const Modal = ({ children, is_openned, onClose, title }: ModalType) => {
    if (!is_openned) return <></>

    return (
        <div className={css.wrapper}>
            <div className={css.bg} onClick={onClose}></div>
            <div className={css.modal}>
                <div className={css.header}>{title}</div>
                <div className={css.close} onClick={onClose}>
                    <Image src="/close.svg" width={24} height={24} />
                </div>
                <div className={css.content}>{children}</div>
            </div>
        </div>
    )
}
