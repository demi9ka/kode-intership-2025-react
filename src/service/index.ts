import axios from 'axios'
import users from './users'

export const api = axios.create({
    baseURL: 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/',
})

export default {
    users,
}
