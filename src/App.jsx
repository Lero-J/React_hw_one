import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ReverseString({str})
{
    let reversedStr = ''
    for(let i=str.length-1;i>=0;i--)
    {
        reversedStr += str[i]
    }
    return(
        <>
            <div>

                <h1
                style={{color: 'green'}}
                >Первое задание</h1>
                <div className='original'><h1>Original : {str}</h1></div>
                <div className='reversed'><h1>Reversed : {reversedStr}</h1></div>

            </div>
        </>
    )
}

function GetDatInfo()
{
    let today = new Date()
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    if(today.getDate() % 2 === 0)
    {
        return (
            <>

                <h1 style={{color: "red"}}>Второе задание</h1>
                <h2>Если день четный</h2>
            <div>
                <h1>Месяц : {monthNames[today.getMonth()]}</h1>
                <h1>Год : {today.getFullYear()}</h1>
            </div>
            </>
        )
    }
    else
    {
        return (
            <>
                <h2>Если день нечетный</h2>
                <div>
                    <h1>День недели : {days[today.getDay()]}</h1>
                    <h1>День месяца : {today.getDate()}</h1>
                </div>
            </>
        )
    }
}


function App() {
    return (
      <>
        <ReverseString str={'real slim shady'} />
          <GetDatInfo/>
      </>
  )
}



export default App
