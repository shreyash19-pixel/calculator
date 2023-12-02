import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 100dvh;
    height: 100vh;
    background-color: #9ADE7B;
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline:10px;
`

export const CalculatorWrap = styled.div`
    width: 100%;
    max-width: 300px;
    min-height: 450px;
    background-color: #FFFFFF;
    border-radius: 15px;
    padding: 10px 25px;
    display: flex;
    flex-direction: column;
`

export const CalculationArea = styled.div`
    width: 100%;
    min-height: 90px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding-bottom: 15px;
`

export const CalcButtonsArea = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(20px, 50px));
    
`

export const CalcButtons = styled.div`
    background-color: #EEEEEE;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    cursor: pointer;
    color: ${(props) => (props.isOp ? "#0091ff" : "black")}
`