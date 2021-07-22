import React, { useState, useEffect } from 'react';
import Ask from "./components/Ask";
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';



function App() {

  //definir el state
  const [budget, saveBudget] = useState(0);
  const [remaining, saveRemaining] = useState(0);
  const [showAsk, updateAsk] = useState(true);
  const [expenses, saveExpenses] = useState([]);
  const [expense, saveExpense] = useState({});
  const [createExpense, saveCreateExpense] = useState(false);

  //useffect que actualiza el restante
  useEffect(() => {
    if (createExpense) {

      
      //agrega el nuevo presupuesto
      saveExpenses([
        ...expenses,
        expense
      ])

      //resta el presupuesto actual
      const remainingBudget = remaining - expense.amount;
      saveRemaining(remainingBudget);
      //resetear a false
      saveCreateExpense(false);
    }

  }, [expense, createExpense, expenses, remaining])


  return (
    <div className='container'>
      <header>
        <h1>Weeekly Expenses</h1>
        <div className='content main-content'>
          {/* //carga condicional de un componente: si ingresa el monto que tiene aparece un componente, si no lo ingresa aparece otro */}
          {showAsk ? (<Ask
            saveBudget={saveBudget}
            saveRemaining={saveRemaining}
            updateAsk={updateAsk}
          />
          ) : (
            <div className='row'>
              <div className='one-half column'>
                <Form
                  saveExpense={saveExpense}
                  saveCreateExpense={saveCreateExpense}
                />
              </div>
              <div className='one-half column'>
                <List
                  expenses={expenses}
                />
                <BudgetControl
                  budget={budget}
                  remaining={remaining}
                />
              </div>
            </div>
          )}

        </div>
      </header>
    </div>

  );
}

export default App;
