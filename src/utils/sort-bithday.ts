import { UserType } from '@/interface'

export const SortBithday = (users_list: UserType[]): [UserType[], UserType[]] => {
    const today = new Date()
    const currentYear = today.getFullYear()

    // Функция для вычисления следующего дня рождения
    function getNextBirthday(birthday: string): Date {
        const date = new Date(birthday)
        date.setFullYear(currentYear)

        if (date < today) {
            date.setFullYear(currentYear + 1)
        }

        return date
    }

    // Разделение данных на две группы
    const currentYearData: UserType[] = []
    const nextYearData: UserType[] = []

    users_list.forEach(item => {
        const nextBirthday = getNextBirthday(item.birthday)

        if (nextBirthday.getFullYear() === currentYear) {
            currentYearData.push(item)
        } else {
            nextYearData.push(item)
        }
    })

    // Функция для сортировки по ближайшему дню рождения
    function sortByClosestBirthday(data: UserType[]): UserType[] {
        return data.sort((a, b) => {
            const nextBirthdayA = getNextBirthday(a.birthday)
            const nextBirthdayB = getNextBirthday(b.birthday)

            return nextBirthdayA.getTime() - nextBirthdayB.getTime()
        })
    }

    // Сортировка каждой группы
    const sortedCurrentYearData = sortByClosestBirthday(currentYearData)
    const sortedNextYearData = sortByClosestBirthday(nextYearData)

    // Возвращаем результат в виде массива массивов
    return [sortedCurrentYearData, sortedNextYearData]
}
