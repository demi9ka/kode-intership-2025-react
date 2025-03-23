import { observer } from 'mobx-react-lite'
import css from './styles.module.css'
import { Image } from '@/ui/image'
import { useEffect, useState } from 'react'
import AppStore from '@/store/AppStore'
import { SortModal } from './components/sort-modal'
import { ColorTheme } from './components/color-theme'

export const Header = observer(() => {
    const { setSearch, filter, search, connect_status } = AppStore
    const [search_value, setSearchValue] = useState(search)
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
            <header className={`${css.header} ${connect_status == 1 ? css.error : ''} ${connect_status == 2 ? css.reconnect : ''}`}>
                <div className={css.flex}>
                    <h1 className={css.title}>Поиск</h1>
                    <ColorTheme />
                </div>
                {connect_status == 0 ? (
                    <div className={css.input_wrapper}>
                        <Image width={24} height={24} src="/search.svg" />
                        <input onChange={e => setSearchValue(e.target.value)} value={search_value} className={css.input} type="text" placeholder="Введите имя, тег, почту..." />
                        <div className={css.btn} onClick={() => setOpenSortModal(true)}>
                            <Image width={24} height={24} src={filter == 'default' ? '/filter.svg' : '/filter-active.svg'} />
                        </div>
                    </div>
                ) : (
                    ''
                )}
                {connect_status == 1 ? <p className={css.message}>Не могу обновить данные. Проверь соединение с интернетом.</p> : ''}
                {connect_status == 2 ? <p className={css.message}>Секундочку, гружусь...</p> : ''}
            </header>
        </>
    )
})
