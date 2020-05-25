function createAnalytics() {
    let conunter = 0
    let isDestroyd = false

    const listener = () => conunter++

    document.addEventListener('click', listener)

    return{
        destroy() {
            document.removeEventListener('click', listener)
            isDestroyd = true
        },

        getClicks() {
            if (isDestroyd) {
                return 'Analitics is destroyed. Yes'
            }
            return conunter
        }
    }
}

window.analytics = createAnalytics()