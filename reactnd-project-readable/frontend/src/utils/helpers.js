export function comparePostsBy(str){
    return function(a, b){
        if ( a[str] < b[str] ){
            return -1
        }
        if ( a[str] > b[str] ){
            return 1
        }
        return 0
    }
}

export function convertTimstampToDate(timesamp, long=false){
    
    const date = new Date(timesamp)

    if (long) {
        return `on ${date.toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}`
    } else {
        const current = new Date()
        const diff = current - date

        if (diff < 24*60*60*1000){
            if (diff < 60*60*1000){
                if (diff < 60*1000){
                    const numSecs = diff / 1000
                    return `${numSecs} ${(numSecs === 1)? 'second': 'seconds'}`
                }
                const numMins = diff / (60*1000)
                return `${numMins} ${(numMins === 1)? 'min': 'mins'}`
            }
            const numHours = diff / (60*60*1000)
            return `${numHours} ${(numHours === 1)? 'hour': 'hours'}`
        }
        return `on ${date.toLocaleDateString('en-US', { dateStyle: 'medium' })}`
    }
}