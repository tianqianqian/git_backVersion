export const add = (x, y) => {
    return x + y;
}
export const formatTime = (duration, type) => {
    const endTime = new Date().valueOf()
    const startTime = currTime - duration * 24 * 60 * 60 * 1000
    return {
        startTime,
        endTime
    }
}