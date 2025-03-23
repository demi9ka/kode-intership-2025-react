import { UserType } from '@/interface'

export const sortDefault = (users_list: UserType[]) => {
    return [...users_list].sort((a, b) => {
        if (a.firstName < b.firstName) {
            return -1 // a должен быть перед b
        }
        if (a.firstName > b.firstName) {
            return 1 // a должен быть после b
        }
        return 0 // a и b равны
    })
}
