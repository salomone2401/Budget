import React from 'react';
import PropTypes from 'prop-types';


const Expense = ({expense}) => (
    <li className='expenses'>
    <p>
        {expense.name}

        <span className='expense'>${expense.amount}</span>
    </p>
    </li>
);

Expense.propTypes = {
    expense: PropTypes.object.isRequired
}
export default Expense;