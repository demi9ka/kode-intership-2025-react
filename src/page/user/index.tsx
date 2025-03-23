import { observer } from 'mobx-react-lite'
import css from './styles.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { Image } from '@/ui/image'
import { useEffect, useState } from 'react'
import { UserType } from '@/interface'
import UserStore from '@/store/UserStore'
import { phraseCount } from '@/utils/phrase-count'
import { formatPhoneNumber } from '@/utils/format-phone-number'

export const User = observer(() => {
    const [user, setUser] = useState<UserType | null>(null)
    const { users_list, loadUserList } = UserStore
    const { user_id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (!users_list) {
            loadUserList()
        } else {
            const crnt_user = users_list.find(el => el.id === String(user_id))
            if (!crnt_user) return
            setUser(crnt_user)
        }
    }, [users_list])

    if (!user) return <div className={css.loading}>Загрузка профиля</div>
    return (
        <div className={css.wrapper}>
            <header className={css.header}>
                <div className={css.back} onClick={() => navigate('/')}>
                    <Image src={'/back.svg'} width={24} height={24} />
                </div>
                <div className={css.profile}>
                    <div className={css.avatar}>
                        <Image src={user.avatarUrl} width={104} height={104} skeleton />
                    </div>
                    <h2 className={css.name}>
                        {user.firstName} {user.lastName}
                        <span className={css.user_tag}>{user.userTag}</span>
                    </h2>
                    <p className={css.departament}>{user.department}</p>
                </div>
            </header>
            <div className={css.info_wrapper}>
                <div className={css.info}>
                    <div className={css.flex}>
                        <Image src="/star.svg" width={24} height={24} />
                        <p className={css.value}>{formatDate(user.birthday)}</p>
                    </div>
                    <div className={css.age}>{getAge(user.birthday)}</div>
                </div>
                <div className={css.info}>
                    <div className={css.flex}>
                        <Image src="/phone.svg" width={24} height={24} />
                        <a target="_blank" className={css.value} href={`https://api.whatsapp.com/send?phone=${user.phone}`}>
                            {formatPhoneNumber(user.phone)}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
})

const getAge = (birthday: string) => {
    const date = new Date(birthday).getTime()
    const now = new Date().getTime()
    const age = Math.floor((now - date) / (1000 * 60 * 60 * 24 * 365))
    return `${phraseCount(age, ['год', 'года', 'лет'])}`
}

const formatDate = (birthday: string) => {
    const date = new Date(birthday)
    const day = date.getDate() // Получаем день
    const month = date.toLocaleString('ru-RU', { month: 'long' }) // Получаем полное название месяца
    const year = date.getFullYear() // Получаем год
    return `${day} ${month} ${year}`
}
