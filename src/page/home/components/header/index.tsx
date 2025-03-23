import { observer } from 'mobx-react-lite'
import css from './styles.module.css'
import { Image } from '@/ui/image'
import { useEffect, useState } from 'react'
import AppStore from '@/store/AppStore'
import { SortModal } from './components/sort-modal'

export const Header = observer(() => {
    const [search_value, setSearchValue] = useState('')
    const { setSearch, filter } = AppStore
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)
    const [open_sort_modal, setOpenSortModal] = useState(false)

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
        <>
            <SortModal open_modal={open_sort_modal} setOpenModal={setOpenSortModal} />
            <header className={css.header}>
                <h1 className={css.title}>Поиск</h1>
                <div className={css.input_wrapper}>
                    <Image width={24} height={24} src="/search.svg" />
                    <input onChange={e => setSearchValue(e.target.value)} value={search_value} className={css.input} type="text" placeholder="Введите имя, тег, почту..." />
                    <div className={css.btn} onClick={() => setOpenSortModal(true)}>
                        <Image clicked width={24} height={24} src={filter == 'default' ? '/filter.svg' : '/filter-active.svg'} />
                    </div>
                </div>
            </header>
        </>
    )
})
