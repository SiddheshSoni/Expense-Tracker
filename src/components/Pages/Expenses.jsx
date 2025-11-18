import React, { useEffect, useRef, useState } from 'react'
import { Row, Col, Form, FormControl, FormGroup, FormLabel, FormSelect, Button } from 'react-bootstrap'
import "./Expenses.css"
import { AddExpenseDB, DeleteExpenseDB, GetExpenseDB, EditExpenseDB } from '../API/ExpenseDB';
import { useDispatch, useSelector } from 'react-redux';
import { expensesActions } from '../Store/expenseSlice';
const Expenses = () => {
    const dispatch = useDispatch();
    const expenses = useSelector(state => state.expense.expenses);
    const expenseTotal = useSelector(state => state.expense.expenseTotal);

    const amountRef = useRef();
    const descRef = useRef();
    const dateRef = useRef();
    const categoryRef = useRef();
    const [error, setError] = useState(null);

    const loadData = async () =>{
        const result = await GetExpenseDB();
        // console.log(JSON.stringify(result.data));
        // setExpenses(JSON.stringify(result.data));

        const dataObj = result.data || {};

        const list = Object.keys(dataObj).map(key => ({ //firebase returns Object
            id: key,
            ...dataObj[key],
        }));
        dispatch(expensesActions.setExpenses(list));
        // console.log(list);
    }
    useEffect(()=>{
        loadData();
    },[])

    const submitHandler= async (e) =>{
        e.preventDefault();
        const enteredDate = dateRef.current.value;

        const formattedDate = new Date(enteredDate).toLocaleDateString("en-US",{
            month : 'short',
            day : '2-digit',
            year : '2-digit',
        })
        const newExpense ={
            amount : amountRef.current.value,
            desc : descRef.current.value,
            cat : categoryRef.current.value,
            date : formattedDate,
        };

        const result = await AddExpenseDB(newExpense);

         if(!result.ok){
            setError(result.error);
            console.log(error);
        }
        else{
            // Add the new expense to Redux state only after successful DB save
            // The 'name' property from Firebase is the unique ID for the new item
            dispatch(expensesActions.addExpense({ ...newExpense, id: result.data.name }));
            console.log(`Successfully added!`);
        }
    }

    const editBtnHandler=async (id)=>{
        const exp = expenses.find(item => item.id == id);
        
        if(!exp) return;

        amountRef.current.value = exp.amount ??'';
        descRef.current.value = exp.desc ??'';
        categoryRef.current.value = exp.cat ??'';

        const result = await EditExpenseDB(id);
         if(!result.ok){
            setError(result.error);
            console.log(error);
        }
        else{
            console.log(`Successful!`)
        }
        // loadData();
    };

    const deleteBtnHandler= async (id)=>{ 
        const result = await DeleteExpenseDB(id);
         if(!result.ok){
            setError(result.error);
            console.log(error);
        }
        else{
            console.log(`Successful!`)
        }
        loadData();
    };

  return (
    <>
    <div className="d-flex mb-3 justify-content-center align-content-center">
    {expenseTotal>=10000?<Button variant='danger'>Activate Premium</Button>:null}
    </div>
    <div className='addExpense pt-lg-5 mx-lg-5 '>
        <Form onSubmit={submitHandler}>
            <Row className='justify-content-center'>
                <Col sm={2} >
                    <FormGroup>
                        <FormLabel>Amount:</FormLabel>
                        <FormControl type='number' min={0} ref={amountRef}  required/>
                    </FormGroup>
                </Col>
                <Col sm={4}>
                    <FormGroup>
                        <FormLabel>Description:</FormLabel>
                        <FormControl type='text' maxLength={25} ref={descRef} required/>
                    </FormGroup>
                </Col>
                <Col sm={2}>
                    <FormGroup>
                        <FormLabel>Category:</FormLabel>
                        <FormSelect ref={categoryRef} required>
                            <option>Food</option>                           
                            <option>Petrol</option>                           
                            <option>Salary</option>                           
                            <option>Miscellaneous</option>                           
                        </FormSelect >
                    </FormGroup>
                </Col>
                <Col sm={2}>
                    <FormGroup>
                        <FormLabel>Date:</FormLabel>
                        <FormControl type='Date' maxLength={25} ref={dateRef} required/>
                    </FormGroup>
                </Col>
                <Col sm={2} className='mt-auto ' >
                    <Button type='submit' variant="primary" size='lg' style={{'width':'200px'}} >Add Expense</Button>
                </Col>
            </Row>
        </Form>
    </div>
    <div className='expenses'>Total: ₹{expenseTotal}</div>
    <div className='expenses pt-lg-5 mx-lg-5 '>
        {expenses && expenses.map((expense, index) =>
        <Row className='justify-content-center mb-3' key={index}>
            <Col sm={2} className='expense-amount'>
                <span> ₹ {expense.amount}</span>
            </Col>
            <Col sm={2} className='expense-desc'>
                <span>{expense.desc}</span>
            </Col>
            <Col sm={2} className='expense-category'>
                <span>{expense.cat}</span>
            </Col>
            <Col sm={2} className='expense-category'>
                <span>{expense.date}</span>
            </Col>
            <Col sm={2} className='expense-category'>
                <Button onClick={()=>deleteBtnHandler(expense.id)} >X</Button>
            </Col>
            <Col sm={2} className='expense-category'>
                <Button onClick={()=>editBtnHandler(expense.id)} >E</Button>
            </Col>
        </Row>
        )}
    </div>
    </>
  )
}

export default Expenses