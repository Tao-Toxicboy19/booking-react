import { createTheme } from '@mui/material'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

// สร้าง Theme สำหรับโหมด Light
export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#2C6A45',
        },
        secondary: {
            main: '#4F6354',
        },
        background: {
            default: '#F6FBF3',
            paper: '#FFFFFF',
        },
        error: {
            main: '#BA1A1A',
        },
        text: {
            primary: '#181D19', // สีสำหรับข้อความหลัก
            secondary: '#414942', // สีสำหรับข้อความรอง
            disabled: '#717971', // สีสำหรับข้อความที่ถูก disable
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: {
            fontSize: '3rem',
            fontWeight: 600,
        },
        body1: {
            fontSize: '1rem',
        },
    },
})