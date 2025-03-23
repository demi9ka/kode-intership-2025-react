import { UserType } from '@/interface'
import css from './styles.module.css'
import { observer } from 'mobx-react-lite'
import { Image } from '@/ui/image'
import AppStore from '@/store/AppStore'
import { useNavigate } from 'react-router'

const formatDate = (date_string: string) => {
    const date = new Date(date_string)
    const day = date.getDate()
    const month = date.toLocaleString('ru-RU', { month: 'short' })
    return `${day} ${month}`
}

export const Item = observer(({ avatarUrl, birthday, department, firstName, id, lastName, userTag }: UserType) => {
    const { filter } = AppStore
    const navigate = useNavigate()

    return (
        <div className={css.wrapper} onClick={() => navigate(`/user/${id}`)}>
            <div className={css.part}>
                <div className={css.avatar}>
                    <Image skeleton src={avatarUrl} width={72} height={72} />
                </div>
                <div className={css.flex}>
                    <div className={css.name}>
                        <p>
                            {firstName} {lastName}
                        </p>
                        <span className={css.user_tag}>{userTag}</span>
                    </div>
                    <p className={css.departament}>{department}</p>
                </div>
            </div>
            {filter == 'date' ? <p className={css.birthday}>{formatDate(birthday)}</p> : ''}
        </div>
    )
})
