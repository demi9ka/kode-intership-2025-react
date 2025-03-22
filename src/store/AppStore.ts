import { FilterType } from '@/interface'

import { makeAutoObservable } from 'mobx'
import UserStore from './UserStore'

class Appstore {
    public search: string = '' //Поле поиска
    public filter: FilterType = 'default' // Значение фильтра
    public load_error = false // если не получилось загрузить пользователей то true иначе false

    constructor() {
        makeAutoObservable(this)
    }

    setLoadError = (state: boolean) => {
        this.load_error = state
    }
    setSearch = (value: string) => {
        this.search = value
        UserStore.updateUsersList()
    }
    setFilter = (value: FilterType) => (this.filter = value)
}
export default new Appstore()
