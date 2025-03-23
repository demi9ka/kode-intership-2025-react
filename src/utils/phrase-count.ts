export const phraseCount = (count: number, phrase: string[]): string => {
    //получение корректного текста с числом (1 год, 2 года, 5 лет)
    let form

    if (count % 10 === 1 && count % 100 !== 11) {
        form = phrase[0]
    } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
        form = phrase[1]
    } else {
        form = phrase[2]
    }

    return `${count} ${form}`
}
