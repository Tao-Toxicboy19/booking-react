import { useState } from 'react'
import {
    eachDayOfInterval,
    startOfMonth,
    endOfMonth,
    addMonths,
    subMonths,
} from 'date-fns'

export const useCalendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date())

    const handleNextMonth = () => {
        setCurrentMonth((prev) => addMonths(prev, 1)) // เลื่อนไปเดือนถัดไป
    }

    const handlePreviousMonth = () => {
        setCurrentMonth((prev) => subMonths(prev, 1)) // เลื่อนไปเดือนก่อนหน้า
    }

    const getDaysInMonth = (month: number, year: number) => {
        return eachDayOfInterval({
            start: startOfMonth(new Date(year, month)),
            end: endOfMonth(new Date(year, month)),
        })
    }

    const daysInCurrentMonth = getDaysInMonth(
        currentMonth.getMonth(),
        currentMonth.getFullYear()
    )

    const daysInPreviousMonth = getDaysInMonth(
        subMonths(currentMonth, 1).getMonth(),
        subMonths(currentMonth, 1).getFullYear()
    )

    const firstDayIndex = startOfMonth(currentMonth).getDay()

    return {
        currentMonth: {
            value: currentMonth,
            daysInCurrentMonth,
            daysInPreviousMonth,
            firstDayIndex,
        },
        actions: {
            handleNextMonth,
            handlePreviousMonth,
        },
    }
}
