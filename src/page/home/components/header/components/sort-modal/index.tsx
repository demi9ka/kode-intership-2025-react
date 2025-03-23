import { observer } from 'mobx-react-lite'
import css from './styles.module.css'
import AppStore from '@/store/AppStore'
import { Modal } from '@/ui/modal'
import { FilterType } from '@/interface'

interface SortModalType {
    open_modal: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const SortModal = observer(({ open_modal, setOpenModal }: SortModalType) => {
    const { setFilter, filter } = AppStore

    const setFilterValue = (v: FilterType) => {
        if (filter == v) return
        setFilter(v)
        setOpenModal(false)
    }

    return (
        <Modal title="Сортировка" is_openned={open_modal} onClose={() => setOpenModal(false)}>
            <div className={css.wrapper}>
                <label htmlFor="sort-default" className={css.sort_type}>
                    <input id="sort-default" type="radio" checked={filter == 'default'} onChange={e => e.target.checked && setFilterValue('default') && setFilter('default')} />
                    <p className={css.text}>По алфавиту</p>
                </label>
                <label htmlFor="sort-date" className={css.sort_type}>
                    <input id="sort-date" type="radio" checked={filter == 'date'} onChange={e => e.target.checked && setFilterValue('date') && setFilter('date')} />
                    <p className={css.text}>По дню рождения</p>
                </label>
            </div>
        </Modal>
    )
})
