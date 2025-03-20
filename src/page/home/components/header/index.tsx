import { observer } from 'mobx-react-lite'
import css from './styles.module.css'
import { Image } from '@/ui/image'

export const Header = observer(() => {
    return (
        <header className={css.header}>
            <h1 className={css.title}>Поиск</h1>
            <div className={css.input_wrapper}>
                <Image width={24} height={24} src="/search.svg" />
                <input className={css.input} type="text" placeholder="Введите имя, тег, почту..." />
                <Image clicked width={24} height={24} src="/filter.svg" />
            </div>
        </header>
    )
})
