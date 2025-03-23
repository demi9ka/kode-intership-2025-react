import { FilterType } from '@/interface'

import { makeAutoObservable } from 'mobx'
import UserStore from './UserStore'

class Appstore {
    public search: string = '' //Поле поиска
    public filter: FilterType = 'default' // Значение фильтра
    public load_error = false // если не получилось загрузить пользователей то true иначе false
    public connect_status = navigator.onLine == true ? 0 : 1 // 0 -ПОдключено, 1 - Подключение потеряно, 2 - подключение восстановлено
    public color_theme: string = 'light'

    constructor() {
        makeAutoObservable(this)
        window.addEventListener('online', () => {
            if (this.connect_status == 0) return
            this.setConnectStatus(2)
            setTimeout(() => {
                UserStore.loadUserList()
                this.setConnectStatus(0)
            }, 300)
        })
        window.addEventListener('offline', () => {
            this.setConnectStatus(1)
        })
        this.loadColorTheme()
    }
    setConnectStatus = (status: number) => {
        this.connect_status = status
    }
    setLoadError = (state: boolean) => {
        this.load_error = state
    }
    setSearch = (value: string) => {
        this.search = value
        UserStore.updateUsersList()
    }
    setFilter = (value: FilterType) => (this.filter = value)
    setColorTheme = (theme: string) => {
        this.color_theme = theme
        document.documentElement.setAttribute('data-theme', theme)
    }
    loadColorTheme = () => {
        let theme = localStorage.getItem('theme')
        if (!theme) {
            localStorage.setItem('theme', 'light')
            theme = 'light'
        }
        this.setColorTheme(theme)
    }
}
export default new Appstore()
