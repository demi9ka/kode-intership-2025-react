import { observer } from 'mobx-react-lite'
import css from './styles.module.css'
import AppStore from '@/store/AppStore'

export const ColorTheme = observer(() => {
    const { color_theme, setColorTheme } = AppStore
    return (
        <div className={css.wrapper}>
            <label htmlFor="toggle-button" className={css.label}>
                Цветовая тема
            </label>
            <input checked={color_theme == 'dark'} onChange={v => setColorTheme(v.target.checked ? 'dark' : 'light')} type="checkbox" name="toggle" id="toggle-button" className={css.toggle_button} />
        </div>
    )
})
