import { observer } from 'mobx-react-lite'
import css from './styles.module.css'
import { NavbarDataType } from '@/interface'
import { Link } from 'react-router-dom'

interface NavbarItemDataType extends NavbarDataType {
    active: boolean
}

export const Item = observer(({ param, text, active }: NavbarItemDataType) => {
    return (
        <ul className={`${css.wrapper} ${active ? css.active : ''}`}>
            <Link className={css.link} to={param ? `/?example=${param}` : '/'}>
                {text}
            </Link>
        </ul>
    )
})
