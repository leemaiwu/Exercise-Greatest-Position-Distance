const greatestDistance = function(data) {
    let distance = 0
    for (let i = 0; i < data.length; i++) {
        for (let k = i; k < data.length; k++) {
            if (data[k] === data[i]) {
                distance = Math.max(distance, k - i)
            }
        }
    }
    return distance
}

console.log(greatestDistance([0, 2, 1, 2, 4, 1])) // 3