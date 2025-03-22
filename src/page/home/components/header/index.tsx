import { observer } from 'mobx-react-lite'
import css from './styles.module.css'
import { Image } from '@/ui/image'
import { useEffect, useState } from 'react'
import AppStore from '@/store/AppStore'

export const Header = observer(() => {
    const [search_value, setSearchValue] = useState('d')
    const { setSearch } = AppStore
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)

    useEffect(() => {
        timer && clearTimeout(timer)
        setTimer(
            setTimeout(() => {
                setSearch(search_value)
            }, 500)
        )
        return () => {
            timer && clearTimeout(timer)
        }
    }, [search_value])

    return (
        <header className={css.header}>
            <h1 className={css.title}>Поиск</h1>
            <div className={css.input_wrapper}>
                <Image width={24} height={24} src="/search.svg" />
                <input onChange={e => setSearchValue(e.target.value)} value={search_value} className={css.input} type="text" placeholder="Введите имя, тег, почту..." />
                <Image clicked width={24} height={24} src="/filter.svg" />
            </div>
        </header>
    )
})
