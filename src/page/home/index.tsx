import { Header } from './components/header'
import { Navbar } from './components/navbar'
import { UsersList } from './components/users-list'
import css from './styles.module.css'
import { observer } from 'mobx-react-lite'

export const Home = observer(() => {
    return (
        <div className={css.wrapper}>
            <Header />
            <Navbar />
            <UsersList />
        </div>
    )
})
