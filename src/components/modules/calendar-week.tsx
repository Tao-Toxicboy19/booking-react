import { Box, Typography, Divider, Grid2, Button } from '@mui/material'
import {
  format,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameDay,
  parse,
} from 'date-fns'
import { Fragment, useState } from 'react'
import ReserveRoom from '../forms/reserve-room'

const initialRooms = [
  {
    id: 1,
    room_name: 'robot 1',
    category: 20,
    reserve_room: [
      {
        id: 1,
        date: '02/09/2024',
        time: '9:00 - 12:00',
        user: 'std-5',
      },
      {
        id: 2,
        date: '02/09/2024',
        time: '13:00 - 16:00',
        user: 'std-3',
      },
    ],
  },
  {
    id: 2,
    room_name: 'robot 2',
    category: 20,
    reserve_room: [
      {
        id: 1,
        date: '03/09/2024',
        time: '9:00 - 12:00',
        user: 'std-1',
      },
      {
        id: 2,
        date: '04/09/2024',
        time: '13:00 - 16:00',
        user: 'std-2',
      },
    ],
  },
  {
    id: 3,
    room_name: 'robot 3',
    category: 20,
    reserve_room: [
      {
        id: 1,
        date: '03/09/2024',
        time: 'ทั้งวัน',
        user: 'std-1',
      },
      {
        id: 2,
        date: '02/09/2024',
        time: '13:00 - 16:00',
        user: 'std-2',
      },
    ],
  },
]

export default function CalendarWeek() {
  const [rooms, setRooms] = useState(initialRooms)
  const today = new Date()

  // หาวันเริ่มต้นและสิ้นสุดของสัปดาห์นี้ โดยให้เริ่มที่วันจันทร์
  const start = startOfWeek(today, { weekStartsOn: 1 })
  const end = endOfWeek(today, { weekStartsOn: 1 })

  // สร้าง array ของวันที่ในสัปดาห์นี้
  const weekDays = eachDayOfInterval({ start, end })

  return (
    <Fragment>
      {/* Form */}
      <ReserveRoom />

      <Box
        sx={{
          width: 'auto',
          height: 'fit-content',
          borderLeft: '1px solid #ccc',
          borderRight: '1px solid #ccc',
          borderTop: '1px solid #ccc',
        }}
      >
        {/* ส่วนแสดงวันในสัปดาห์ */}
        <Grid2
          columns={8}
          container
          sx={{
            borderBottom: '1px solid #ccc',
          }}
        >
          <Grid2 size={1}></Grid2>
          {weekDays.map((day, index) => (
            <Grid2
              size={1}
              key={index}
              sx={{
                borderLeft: '1px solid #ccc',
                paddingY: 1,
                textAlign: 'center',
              }}
            >
              <Typography
                variant='body1'
                sx={{
                  fontSize: 18,
                  fontWeight: isSameDay(day, new Date()) ? 500 : 400,
                  color: isSameDay(day, new Date())
                    ? 'primary.main'
                    : 'text.primary',
                }}
              >
                {format(day, 'EEE')}
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  fontSize: 18,
                  fontWeight: isSameDay(day, new Date()) ? 500 : 400,
                  color: isSameDay(day, new Date())
                    ? 'primary.main'
                    : 'text.primary',
                }}
              >
                {format(day, 'dd')}
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  fontSize: 18,
                  fontWeight: isSameDay(day, new Date()) ? 500 : 400,
                  color: isSameDay(day, new Date())
                    ? 'primary.main'
                    : 'text.primary',
                }}
              >
                {format(day, 'MMM')}
              </Typography>
            </Grid2>
          ))}
        </Grid2>

        {/* ตารางแสดง rooms และเวลาประจำวัน */}
        {rooms.map((room) => (
          <Grid2
            columns={8}
            container
            key={room.id}
            sx={{ borderBottom: '1px solid #ccc' }}
          >
            {/* ชื่อห้อง */}
            <Grid2
              size={1}
              sx={{
                padding: 2,
                textAlign: 'center',
              }}
            >
              <Typography>{room.room_name}</Typography>
            </Grid2>
            {/* ช่องแสดงเวลาของแต่ละวันสำหรับห้อง */}
            {weekDays.map((day, index) => {
              // หาการจองที่ตรงกับวันนั้น
              const reservation = room.reserve_room.find((res) =>
                isSameDay(parse(res.date, 'dd/MM/yyyy', new Date()), day),
              )

              return (
                <Grid2
                  size={1}
                  key={index}
                  sx={{
                    borderLeft: '1px solid #ccc',
                    padding: 2,
                    textAlign: 'center',
                  }}
                >
                  {/* แสดงข้อมูลการจองที่ตรงกับวัน */}
                  {reservation && (
                    <>
                      <Typography variant='body2'>
                        {reservation.user}
                      </Typography>
                      <Typography variant='body2'>
                        {reservation.time}
                      </Typography>
                    </>
                  )}
                </Grid2>
              )
            })}
          </Grid2>
        ))}
      </Box>
    </Fragment>
  )
}
