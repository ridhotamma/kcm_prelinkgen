// import React, { createContext, useEffect, useState } from "react"

// const STORAGE_KEY = 'counter'

// export const CounterContext = createContext<number | string>(0);

// export const CounterContextProvider = ({ children }: { children: React.ReactNode }) => {
//     const [counter, setCounter] = useState<number | string>(0)

//     useEffect(() => {
//         const storedValue = localStorage.getItem(STORAGE_KEY)
//         if (storedValue) setCounter(storedValue)
//     }, [])

//     useEffect(() => {
//         localStorage.setItem(STORAGE_KEY, counter)
//     }, [counter])

//     return (
//         <Counter
//     )
// }   