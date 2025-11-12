import React, { useRef, useState } from 'react'
import { Row, Col, Form, FormControl, FormGroup, FormLabel, FormSelect, Button } from 'react-bootstrap'
import "./Expenses.css"
const Expenses = () => {
    const [expenses, setExpenses] = useState([]);
    const amountRef = useRef();
    const descRef = useRef();
    const categoryRef = useRef();

    const submitHandler= (e) =>{
        e.preventDefault();

        const newExpense ={
            amount : amountRef.current.value,
            desc : descRef.current.value,
            cat : categoryRef.current.value,
        };

        setExpenses(prev => [...prev, newExpense]);
        
    }

  return (
    <>
    <div className='pt-lg-5 mx-lg-5 '>
        <Form onSubmit={submitHandler}>
            <Row className='justify-content-center'>
                <Col sm={2} >
                    <FormGroup>
                        <FormLabel>Amount:</FormLabel>
                        <FormControl type='number' min={0} ref={amountRef} />
                    </FormGroup>
                </Col>
                <Col sm={4}>
                    <FormGroup>
                        <FormLabel>Description:</FormLabel>
                        <FormControl type='text' maxLength={25} ref={descRef}/>
                    </FormGroup>
                </Col>
                <Col sm={2}>
                    <FormGroup>
                        <FormLabel>Category:</FormLabel>
                        <FormSelect ref={categoryRef}>
                            <option>Food</option>
                            <option>Petrol</option>
                            <option>Salary</option>
                            <option>Personal</option>
                        </FormSelect>
                    </FormGroup>
                </Col>
                <Col sm={2} className='mt-auto ' >
                    <Button type='submit' variant="primary" size='lg' style={{'width':'200px'}} >Add Expense</Button>
                </Col>
            </Row>
        </Form>
    </div>
    <div className='expenses pt-lg-5 mx-lg-5 '>
        {expenses && expenses.map((expense, index) =>
        <Row className='justify-content-center mb-3' key={index}>
            <Col sm={2} className='expense-amount'>
                <span>{expense.amount}</span>
            </Col>
            <Col sm={4} className='expense-desc'>
                <span>{expense.desc}</span>
            </Col>
            <Col sm={2} className='expense-category'>
                <span>{expense.cat}</span>
            </Col>
        </Row>
        )}
    </div>
    </>
  )
}

export default Expenses