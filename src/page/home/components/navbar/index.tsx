import { observer } from 'mobx-react-lite'
import css from './styles.module.css'
import { NavbarDataType } from '@/interface'
import { Item } from './item'
import { useSearchParams } from 'react-router-dom'

const navbar_data: NavbarDataType[] = [
    {
        param: '',
        text: 'Все',
    },
    {
        param: 'design',
        text: 'Designers',
    },
    {
        param: 'analytics',
        text: 'Analysts',
    },
    {
        param: 'management',
        text: 'Managers',
    },
    {
        param: 'ios',
        text: 'IOS',
    },
    {
        param: 'android',
        text: 'Android',
    },
]

export const Navbar = observer(() => {
    const [searchParams] = useSearchParams()

    // Получаем значение параметра example
    const example_value = searchParams.get('example')

    return (
        <div className={css.wrapper}>
            <ul>
                {navbar_data.map(el => (
                    <Item key={`${new Date().getTime()}_${el.param}`} active={el.param === example_value || (el.param === '' && example_value === null)} {...el} />
                ))}
            </ul>
        </div>
    )
})
