import { observer } from 'mobx-react-lite'
import css from './styles.module.css'
import UserStore from '@/store/UserStore'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Warning } from '@/ui/warning'
import { Skeleton } from '@/ui/skeleton'
import { Item } from './item'
import AppStore from '@/store/AppStore'
import { SortBirthday } from '@/utils/sort-birthday'
import { sortDefault } from '@/utils/sort-default'

export const UsersList = observer(() => {
    const { loadUserList, users_list } = UserStore
    const { load_error, filter } = AppStore
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
    if (users_list === null) {
        return (
            <div className={css.wrapper}>
                {[1, 2, 3, 4, 5, 6, 7].map(i => (
                    <Skeleton key={`skeleton_${i}`} />
                ))}
            </div>
        )
    }
    if (users_list.length == 0) {
        return (
            <Warning icon="/search.png" title="Мы никого не нашли">
                <div className={css.warning_wrapper}>
                    <p className={css.error_text}>Попробуй скорректировать запрос</p>
                </div>
            </Warning>
        )
    }
    if (!users_list) {
        return (
            <div className={css.wrapper}>
                {[1, 2, 3, 4, 5, 6, 7].map(i => (
                    <Skeleton key={`skeleton_${i}`} />
                ))}
            </div>
        )
    }
    if (filter == 'default') {
        const users_list_sort = sortDefault(users_list)
        return (
            <div className={css.wrapper}>
                {users_list_sort.map(el => (
                    <Item key={`user_${el.id}`} {...el} />
                ))}
            </div>
        )
    }
    if (filter == 'date') {
        const [crnt_year_users, next_year_users] = SortBirthday(users_list)
        const next_year = new Date().getFullYear()
        return (
            <div className={css.wrapper}>
                {crnt_year_users.map(el => (
                    <Item key={`user_${el.id}`} {...el} />
                ))}
                {next_year_users.length ? (
                    <>
                        <div className={css.year_line}>
                            <p className={css.year}>{next_year}</p>
                        </div>
                        {next_year_users.map(el => (
                            <Item key={`user_${el.id}`} {...el} />
                        ))}
                    </>
                ) : (
                    ''
                )}
            </div>
        )
    }
})
