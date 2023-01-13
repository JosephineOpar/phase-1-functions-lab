function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42)
}

function distanceFromHqInFeet(someValue) {
    // return Math.abs(someValue - 42) * 264
    return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination) {
    let distance = Math.abs(start - destination) * 264
    if (distance < 400) return 0
    else if (distance > 400 && distance < 2000) return (distance - 400) * 2 / 100
    else if (distance > 2000 && distance < 2500) return 25
    else return 'cannot travel that far'
}