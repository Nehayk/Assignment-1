

import ExpenseItem from './ExpenseItem';
import './Expense.css';
function Expenses(props) {

    return(
        <div className='expenses'> 
        <ExpenseItem
        title="toilet paper"
        amount="49"
        date={props.data[0].date}/>
        <ExpenseItem
        title={props.data[1].title}
        amount={props.data[1].amount}
        date={props.data[1].date}
      />
      <ExpenseItem
        title={props.data[2].title}
        amount={props.data[2].amount}
        date={props.data[2].date}
      />
      <ExpenseItem
        title={props.data[3].title}
        amount={props.data[3].amount}
        date={props.data[3].date}
      />
    </div>


        
    );

}
export default Expenses;