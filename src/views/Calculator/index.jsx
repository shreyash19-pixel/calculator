import React, { useState } from 'react'
import { CalcButtons, CalcButtonsArea, CalculationArea, CalculatorWrap, Container, Wrapper } from '../../styles/Calculator'

const Calculator = () => {

    const buttons = [
        {
            id : 'AC', name : 'AC', isOp : true
        },
        {
            id : 'DEL', name : 'DEL', isOp : true
        },
        {
            id : '%', name : '%', isOp : true
        },
        {
            id : '/', name : '/', isOp : true
        },
        {
            id : '7', name : '7'
        },
        {
            id : '8', name : '8'
        },
        {
            id : '9', name : '9'
        },
        {
            id : '*', name : '*', isOp : true
        },
        {
            id : '4', name : '4'
        },
        {
            id : '5', name : '5'
        },
        {
            id : '6', name : '6'
        },
        {
            id : '-', name : '-', isOp : true
        },
        {
            id : '1', name : '1'
        },
        {
            id : '2', name : '2'
        },
        {
            id : '3', name : '3'
        },
        {
            id : '+', name : '+', isOp : true
        },
        {
            id : '0', name : '0'
        },
        {
            id : '0.0', name : '0.0'
        },
        {
            id : '.', name : '.', isOp : true
        },
        {
            id : '=', name : '=', isOp : true
        },
       
    ]

    const [expression, setExpression] = useState('')
    const [evaluate, setEvaluate] = useState('')

    const handleExpressions = (id) => {

        if(id === '=')
        {
            try{
             const evalExp = eval(expression)
             setEvaluate(evalExp) 
             setExpression('')
            }
            catch(error)
            {
                setExpression('')
                setEvaluate('Error')
            }
        }
        else if(id === "AC")
        {
            setEvaluate('')
            setExpression('')
        }
        else if(id === "DEL")
        {
            setExpression((prev) => prev.length > 0 ? prev.slice(0,-1) : "")
        }
        else
        {
            setExpression((prev) => prev + id)
           
        }
    }


  return (
    <Container>
        <Wrapper>
            <CalculatorWrap>
                <CalculationArea>
                    {expression}
                    {evaluate}
                </CalculationArea>
                <CalcButtonsArea>
                 {buttons.map((button) => (
                    <CalcButtons key = {button.id} isOp = {button.isOp} onClick = {() => handleExpressions(button.id)}>
                        {button.name}
                    </CalcButtons>
                 ))}
                </CalcButtonsArea>
            </CalculatorWrap>
        </Wrapper>
    </Container>
  )
}

export default Calculator