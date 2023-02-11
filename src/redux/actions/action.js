export const incNumber = (num) => {
    return{
        type: "INCREMENT",
        inc: num
    }
}

export const decNumber = () => {
    return {
        type: "DECREMENT"
    }
}