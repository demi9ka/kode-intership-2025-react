export const formatPhoneNumber = (phone: string) => {
    // Убираем "+7" и оставляем только цифры
    const cleaned = phone.replace(/\D/g, '').slice(1)

    // Проверяем, что номер содержит 10 цифр
    if (cleaned.length !== 10) {
        throw new Error('Номер телефона должен содержать 10 цифр после +7')
    }

    // Разбиваем номер на части
    const part1 = cleaned.slice(0, 3) // Первые 3 цифры (код оператора)
    const part2 = cleaned.slice(3, 6) // Следующие 3 цифры
    const part3 = cleaned.slice(6, 8) // Следующие 2 цифры
    const part4 = cleaned.slice(8) // Последние 2 цифры

    // Собираем номер в нужном формате
    return `+7 (${part1}) ${part2} ${part3} ${part4}`
}
