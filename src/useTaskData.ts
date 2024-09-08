import { isSameDay, parse } from 'date-fns'

// ฟังก์ชันสำหรับแปลงวันที่ใน data
export const parseDate = (dateStr: string) => {
    return parse(dateStr, 'dd/MM/yyyy', new Date())
}

// Hook สำหรับจัดการการจับคู่ task
export const useTaskData = (
    daysInMonth: Date[],
    data: { id: string; date: string; task: string }[]
) => {
    return daysInMonth.map((day) => {
        const tasksForDay = data.filter((item) =>
            isSameDay(parseDate(item.date), day)
        ) // ใช้ filter เพื่อหาทุก task ที่ตรงกับวันนั้น
        return {
            day,
            tasks: tasksForDay, // คืนค่า array ของ tasks ที่ตรงกับวันนั้น
        }
    })
}
