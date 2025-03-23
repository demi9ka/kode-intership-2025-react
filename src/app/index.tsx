import { observer } from 'mobx-react-lite'
import { Routes, Route } from 'react-router-dom'
import { Home } from '@/page/home'
import { NotFound } from '@/page/not-found'
import { User } from '@/page/user'

export const App = observer(() => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:user_id" element={<User />} />
            <Route path="*" element={<NotFound />} /> {/* Страница если неизветсный url */}
        </Routes>
    )
})
