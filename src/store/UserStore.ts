import { UserType } from '@/interface'
import service from '@/service'
import { makeAutoObservable } from 'mobx'
import AppStore from './AppStore'

class UsersStore {
    public users_list: UserType[] | null = null
    private _users_list: UserType[] | null = null //Список пользователей неизменеyatvsq
    public example: string | null = null

    constructor() {
        makeAutoObservable(this)
    }

    loadUserList = async () => {
        try {
            //Функция для запроса списка пользователей по параметру example

            if (AppStore.connect_status == 1) return

            AppStore.setLoadError(false) // выключаем ошибку
            this.setPrivateUsersList(null) //очищаем список пользователей для отображения Skeleton
            const { data, status } = await service.users.list(this.example ? this.example : undefined) //запращиваем пользователей

            if (status !== 200) return AppStore.setLoadError(true) //Если ошпибка то включаем окно с ошибкой
            this.setPrivateUsersList(data.items) //сохраняем пользователей в users_list
        } catch {
            AppStore.setLoadError(true)
        }
    }
    setPrivateUsersList = (list: UserType[] | null) => {
        this._users_list = list
        this.updateUsersList()
    }
    updateUsersList = () => {
        if (!this._users_list) return (this.users_list = null)
        const search = AppStore.search.toLowerCase()
        const filter_users_list = this._users_list.filter(({ lastName, firstName, userTag }) => lastName.toLowerCase().includes(search) || firstName.toLowerCase().includes(search) || userTag.toLowerCase().includes(search))
        this.users_list = filter_users_list
    }
    setExample = (example: string | null) => {
        this.example = example
        this.loadUserList()
    }
}
export default new UsersStore()
