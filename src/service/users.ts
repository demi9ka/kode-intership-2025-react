import { api } from '.'

const list = async (example: string = 'all') => {
    //получение списка пользователей с сервера
    try {
        return await api.get('/users', {
            params: {
                __example: example,
            },
        })
    } catch (e: any) {
        return e.response
    }
}

export default {
    list,
}
