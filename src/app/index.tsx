import { observer } from 'mobx-react-lite'
import { Routes, Route } from 'react-router-dom'
import { Home } from '@/page/home'
import { NotFound } from '@/page/not-found'

export const App = observer(() => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} /> {/* Страница если неизветсный url */}
        </Routes>
    )
})
