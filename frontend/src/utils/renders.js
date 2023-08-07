// import axios from "axios"
import { axiosClient } from "./axiosClient";
import {toast} from 'react-hot-toast'
// amount , category , date , usersid
export const getUserExpenses = async (userId)=>{
    try {
        
        const response = await axiosClient.post('/expenses/allExpenses',{
            userId
        });
        // records.sort((a, b) => {
        //     return new Date(a.order_date) - new Date(b.order_date); // descending
        //   })
        const exp = response.data.message.sort((a,b)=>{
            return new Date(b.date) - new Date(a.date);
        });
        // console.log(exp)
        return exp;
    } catch (error) {
        console.log(error.message);
    }
}

export const createExpense = async (expInfo)=>{
    try {
        console.log(expInfo)
        const response = await axiosClient.post('/expenses/addExpense',
            expInfo
        )
        console.log(response.data)
        if(response.data.statusCode !== 200)
        {
            toast.error(`${response.data.message}`);
            return;
        }
        window.location.reload();

        return;

    } catch (e) {
        console.log(e.message);
    }
}

export const deleteExpense = async (data)=>{
    try {
        // console.log(data)
        const {expenseId,userId} = data ;
        const response = await axiosClient.post('/expenses/deleteExpense',{
            expenseId ,
            userId 
        });
        if(response.data.statusCode !== 201)
        {
            toast.error(`${response.data.message}`);
            return;
        }
        window.location.reload();

        console.log(response.data)
        return;
    } catch (error) {
        console.log(error.message)   
    }
}

export const sendEmail = async (sender , data)=>{
        try {
            const response = await axiosClient.post('/expenses/sendEmail',{
                recipient : sender , 
                body : data
            })
            toast.success("Email Sent");
            return response;
        } catch (e) {
            console.log(e.message)
            return e.message ;
        }
}