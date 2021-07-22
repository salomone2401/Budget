import React, {Fragment} from 'react';
import {checkBudget} from '../helper';

import PropTypes from 'prop-types';

const BudgetControl = ({budget, remaining}) => {

    

        return(
            <Fragment>
                <div className='alert alert-primary'>
                    Budget:$ {budget}

                </div>
                <div className={checkBudget(budget, remaining)}>
                    Remaining: ${remaining}

                </div>
            </Fragment>
      );
}

BudgetControl.propTypes = {
    budget: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired
}
export default BudgetControl;