import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { deleteExpense } from '../utils/renders';

function Items(props) {
  const exp = props.data;
 
  // console.log(Date.parse(exp.date));
  function getDate(){
  let dater = new Date(Date.parse(exp.date));
  let txt = dater.toString();
  // console.log(typeof txt)
  // console.log(txt)
    let date =txt.substring(8,10) + " " + txt.substring(4,7);
    return date;
  }
  return (
    <div className='flex bg-black rounded-2xl font-mont w-full p-5 flex-col smr gap-8 '>
        <div className='text-white flex  justify-between smr  '>
        <p className='text-white font-bold text-2xl justify-between font-mont '>₹ {exp.amount}</p>
        <p className='border-2 rounded-full text-black font-bold font-mont bg-white pl-2 pr-2 pt-0.5 pb-0.5 h-fit text-center text-sm' >{getDate()}</p>
        </div>
        <div className='grid grid-flow-col  justify-between smr  '>
            <div className='text-white text-center mt-1 category w-fit p-1 pl-2 pr-2  h-fit  rounded-full border-2 text-sm '><p>{exp.category}</p></div>
      
           <a onClick={()=>{
          let datar = {
            expenseId : exp._id,
            userId : exp.usersid
          };
          // console.log(datar)
          deleteExpense(datar )}
          // window.location.reload();
        }  href="#_" className="rounded-md w-fit px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-white">
      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
      <span className="relative text-white  transition duration-300 group-hover:text-white ease"><AiFillDelete></AiFillDelete></span>
      </a>
        
        </div>
    </div>
  )
}

export default Items