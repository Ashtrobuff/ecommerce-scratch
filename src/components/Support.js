import React from 'react'
import check from './check.png'
import sup from './sup.png'
import truck from './truck.png'
const Support = () => {
  return (
    <div className='h-80 w-full text-black py-10'>
        <div  className='flex flex-row  items-center justify-center' style={{gap:"300px"}}>
            <div className='flex flex-col items-center justify-center w-52 mt-5'>
                <img src={check}/>
            <h2 className='text-center'>FREE AND FAST DELIVERY</h2>
            <p className='text-center'>Get your order delivered to your doorstep within 3-5 business days</p>
            </div>
            <div className='flex flex-col items-center justify-center w-52'><img src={sup}/>
            <h2 className='text-center'>24/7 CUSTOMER SERVICE</h2>
            <p className='text-center'>Friendly 24/7 customer support</p>
            </div>
            <div className='flex flex-col items-center justify-center w-52 text-center'><img src={check}/>
            <h2>MONEY BACK GUARANTEE</h2>
            <p>We return money within 30 days</p>
            </div>
        </div>
    </div>
  )
}

export default Support