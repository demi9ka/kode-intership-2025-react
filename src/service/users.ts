import { api } from '.'

const list = async (example: string = 'all') => {
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
