import { observer } from 'mobx-react-lite'
import css from './styles.module.css'
import UserStore from '@/store/UserStore'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Warning } from '@/ui/warning'
import { Skeleton } from '@/ui/skeleton'
import { Item } from './item'

export const UsersList = observer(() => {
    const { loadUserList, load_error, users_list } = UserStore
    const [searchParams] = useSearchParams()

    // Получаем значение параметра example
    const example_value = searchParams.get('example')
    useEffect(() => {
        loadUserList(example_value)
    }, [example_value])

    if (load_error) {
        return (
            <Warning icon="/load-users-error-icon.png" title="Какой-то сверхразум все сломал">
                <div className={css.warning_wrapper}>
                    <p className={css.error_text}>Постараемся быстро починить</p>
                    <button className={css.reload_btn} onClick={() => loadUserList(example_value)}>
                        Попробовать снова
                    </button>
                </div>
            </Warning>
        )
    }
    return <div className={css.wrapper}>{users_list ? users_list.map(el => <Item key={`user_${el.id}`} {...el} />) : [1, 2, 3, 4, 5, 6, 7].map(i => <Skeleton key={`skeleton_${i}`} />)}</div>
})
