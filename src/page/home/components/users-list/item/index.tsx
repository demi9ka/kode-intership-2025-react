import { UserType } from '@/interface'
import css from './styles.module.css'
import { observer } from 'mobx-react-lite'
import { Image } from '@/ui/image'

export const Item = observer(({ avatarUrl, birthday, department, firstName, id, lastName, phone, position, userTag }: UserType) => {
    return (
        <div className={css.wrapper}>
            <div className={css.part}>
                <div className={css.avatar}>
                    <Image src={avatarUrl} width={72} height={72} />
                </div>
                <div className={css.flex}>
                    <div className={css.name}>
                        <p>
                            {firstName} {lastName}
                        </p>
                        <span>
                            {firstName} {lastName}
                        </span>
                        <span className={css.user_tag}>{userTag}</span>
                    </div>
                    <p className={css.departament}>{department}</p>
                </div>
            </div>
            <div className={css.part}></div>
        </div>
    )
})
