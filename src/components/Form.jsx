import React, { useState } from 'react';
import Error from './Error'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';

const Form = ({saveExpense, saveCreateExpense}) => {
    //crear el state para los gastos
    const [name, saveName] = useState('');
    const [amount, saveAmount] = useState(0);
    const [error, saveError] = useState(false)


    //cuando agregemos un nuevo gasto

    //cuando el user agrega un gasto
    const addExpense = e => {
        e.preventDefault();

        //validar
        if (amount < 1 || isNaN(amount) || name.trim() === '') {
            saveError(true);
            return;
        }
        saveError(false);
        // saveBudget(amount);
        // saveRemaining(amount);
        // updateAsk(false)

        //construir el gasto
        const expense = {
            name,
            amount,
            id: nanoid()
          
        }

        //pasar el gasto al componente principal
        saveExpense(expense);
        saveCreateExpense(true);

        //resetear el formulario
      saveName('')
      saveAmount(0);
    }
    return (
        <form

            onSubmit={addExpense}>
            <h2>Enter your expenses</h2>

            {error ? <Error message='Both fields must be completed' /> : null}

            <div className='field'>
                <label>Expense Name</label>
                <input
                    type="text"
                    className='u-full-width'
                    placeholder='e.g. Transport'
                    value={name}
                    onChange={e => saveName(e.target.value)}
                />
            </div>
            
            <div className='field'>
                <label>Amount Expense</label>
                <input
                    type="number"
                    className='u-full-width'
                    placeholder='e.g. 300'
                    value={amount}
                    onChange={e => saveAmount(parseInt(e.target.value))} />
            </div>
            <input
                type="submit"
                className='button-primary u-full-width'
                value='Add Expense' />
        </form>
    );
}

Form.propTypes = {
    saveExpense: PropTypes.number.isRequired,
    saveCreateExpense: PropTypes.number.isRequired
}
export default Form;