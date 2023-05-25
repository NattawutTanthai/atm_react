import { Button } from '@mui/material'
import { useState } from 'react'
import Swal from 'sweetalert2'
function App() {

  const [money, setMoney] = useState(1000000)
  const [moneyWant, setMoneyWant] = useState("")

  const addMoneyWant = (amount) => {
    setMoneyWant(moneyWant + amount)
  }

  const clearMoneyWant = () => {
    setMoneyWant("")
  }

  const alert_text = (title, detail) => {
    let timerInterval
    Swal.fire({
      title: title,
      html: detail,
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    })
  }

  const handleSubmit = () => {
    if( moneyWant === ""){
      alert_text("ทำรายการไม่สำเร็จ", "กรุณากรอกจำนวนเงิน")
    }else if (money - moneyWant < 0) {
      alert_text("ทำรายการไม่สำเร็จ", "เงินในบัญชีไม่พอ")
    } else {
      setMoney(money - moneyWant)
      alert_text("ทำรายการสำเร็จ", "รอรับเงินได้เลยจ้า")
    }
    clearMoneyWant()
  }

  return (
    <>
      <div className='flex flex-row '>
        <div className=' flex-1 p-5'>
          <h1 className='text-gray-500 text-3xl'><b>เลขที่บัญชี</b></h1>
          <h1 className='text-gray-500 text-3xl'>123XXXX234565</h1>
        </div>
        <div className='flex-1 p-5'>
          <h1 className='text-gray-500 text-3xl'><b>จำนวนเงิน</b></h1>
          <h1 className='text-gray-500 text-3xl'>{money.toLocaleString('en-US')} บาท</h1>
        </div>
      </div>

      <nav className="fixed bottom-0 inset-x-0 bg-blue-100 flex justify-between text-sm text-blue-900">
        <div className='w-full'>
          <h1 className='text-2xl m-2'>กรอกจำนวนเงิน</h1>
          <div className='bg-gray-100 m-2 h-16 flex justify-end p-2 rounded-xl'>
            <h1 className='text-5xl'>
              {moneyWant === "0" ? "0" : moneyWant}  ฿</h1>
          </div>

          <div className='flex flex-row justify-evenly'>
            <div>
              <div className='space-x-5 my-3'>
                <Button variant="contained" onClick={() => addMoneyWant(7)} sx={{ p: 4, pl: 5, pr: 5 }} >7</Button>
                <Button variant="contained" onClick={() => addMoneyWant(8)} sx={{ p: 4, pl: 5, pr: 5 }} >8</Button>
                <Button variant="contained" onClick={() => addMoneyWant(9)} sx={{ p: 4, pl: 5, pr: 5 }} >9</Button>
              </div>
              <div className='space-x-5 my-3'>
                <Button variant="contained" onClick={() => addMoneyWant(6)} sx={{ p: 4, pl: 5, pr: 5 }} >6</Button>
                <Button variant="contained" onClick={() => addMoneyWant(5)} sx={{ p: 4, pl: 5, pr: 5 }} >5</Button>
                <Button variant="contained" onClick={() => addMoneyWant(4)} sx={{ p: 4, pl: 5, pr: 5 }} >4</Button>
              </div>

              <div className='space-x-5 my-3'>
                <Button variant="contained" onClick={() => addMoneyWant(1)} sx={{ p: 4, pl: 5, pr: 5 }} >1</Button>
                <Button variant="contained" onClick={() => addMoneyWant(2)} sx={{ p: 4, pl: 5, pr: 5 }} >2</Button>
                <Button variant="contained" onClick={() => addMoneyWant(3)} sx={{ p: 4, pl: 5, pr: 5 }} >3</Button>
              </div>
              <div className='justify-center flex mb-2'>
                <Button variant="contained" onClick={() => addMoneyWant(0)} sx={{ p: 4, pl: 5, pr: 5 }} >0</Button>
              </div>
            </div>
            <div className='flex flex-col space-y-5 justify-center'>
              <Button variant="contained" color='warning' sx={{
                height: '100px',
                width: '100px',
              }} onClick={() => clearMoneyWant()}>C</Button>
              <Button variant="contained" color='success' sx={{
                height: '100px',
                width: '100px',
              }} onClick={() => handleSubmit()}>ตกลง</Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default App
