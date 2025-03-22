import { UserType } from '@/interface'
import service from '@/service'
import { makeAutoObservable } from 'mobx'

class UsersStore {
    users_list: UserType[] | null = null
    users_list_filter: UserType[] | null = null
    load_error = false
    search: string = ''
    constructor() {
        makeAutoObservable(this)
    }

    loadUserList = async (example: string | null) => {
        this.setLoadError(false)
        this.setUserslist(null)
        const { data, status } = await service.users.list(example ? example : undefined)
        if (status !== 200) return this.setLoadError(true)
        this.setUserslist(data.items)
    }
    setUserslist = (list: UserType[] | null) => {
        this.users_list = list
    }
    setLoadError = (state: boolean) => {
        this.load_error = state
    }
    setSearch = (value: string) => (this.search = value)
}
export default new UsersStore()
