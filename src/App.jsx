import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {

  const [value,setValue]=useState([]);
  const [creditHour,setCreditHour]=useState(0);
  const [price,setPrice]=useState(0);
  const [remaining,setRemaining]=useState(20);
 
  const handelSetTitle=blog=>{

    if(value.find(item=>item.title===blog.title) && creditHour<=20 ){
      alert('You Can not Get One Course Multiple time and the Highest Credit is 20.');
    }
    else{
        const newValue=[...value,blog];
        
        const newCredit=creditHour+blog.credit_hour;
        const newPrice=price+blog.price;
        const newRemaining=remaining-blog.credit_hour;
        if(newRemaining>=0){
          setRemaining(newRemaining);
        }
        if(newCredit<=20){
          setCreditHour(newCredit);
          setPrice(newPrice);
          setValue(newValue);
        }
        else{
          alert('You Get Highest 20 Credit');
        }
    }
  }

  return (
    <>
      <div className='lg:mx-28 mb-8'>
        <h1 className='text-4xl font-bold text-center py-12'>Course Registration</h1>
          <div className='lg:flex'>
            <Blogs handelSetTitle={handelSetTitle}></Blogs>
            <Bookmarks  remaining={remaining} price={price} value={value} creditHour={creditHour}></Bookmarks>
          </div>
      </div>
    </>
  )
}

export default App
