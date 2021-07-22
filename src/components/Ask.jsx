import React, {Fragment, useState} from 'react'; 
import Error from './Error';

import PropTypes from 'prop-types';


const Ask = ({saveBudget, saveRemaining, updateAsk}) => {

    const [amount, setAmount] = useState(0);
    const [error, setError] = useState(false)

    // funcion que lee el presupuesto
    // lo que leo del input viene como string por eso hay q convertirlo a int
// el 10 es solo para asegurarse que retorne un número decimal, ya que por defecto no esta esa opcion y con algunos numeros daría problemas.

    const defineBudget = e =>{
        setAmount(parseInt(e.target.value, 10) )
    }



//submit para definir el presupuesto
const submitBudget = e => {
    e.preventDefault();

        //validar
        if (amount<1 | isNaN(amount)) {
            setError(true);
            return;
        }
        setError(false);
        saveBudget(amount);
        saveRemaining(amount);
        updateAsk(false)

    }


    return (
        <Fragment>
           
            <h2>Add your Budget</h2>
            {error ?  <Error message='The budget is incorrect'/> : null}

            <form
            onSubmit={submitBudget}
            >
                <input 
                type="number" 
                className="u-full-width" 
                placeholder='Add your Budget'
                onChange={defineBudget}/>


                <input type="submit"
                className='button-primary u-full-width'
                value='Set budget'
                />
            </form>
        </Fragment>
      );
}
Ask.propTypes = {
    saveBudget: PropTypes.func.isRequired,
    saveRemaining: PropTypes.func.isRequired,
    updateAsk: PropTypes.func.isRequired
}
export default Ask;
