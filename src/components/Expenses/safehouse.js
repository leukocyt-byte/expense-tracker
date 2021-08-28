import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';

const Expenses = (props) => {
    let returnedItems = props.items.map(function(index) {
      return (
        <ExpenseItem
        title={index.title}
        amount={index.amount}
        date={index.date}
      />
      );
    });
  return (
    <Card className="expenses">{returnedItems}
    </Card>
  );
}

export default Expenses;



















import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}

export default Expenses;
















import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const returnedItems = props.items.map(function (index) {
    return (
      <ExpenseItem
        title={index.title}
        amount={index.amount}
        date={index.date}
        key={index.id}
      />
    );
  });

  const selectedYearChart = (selected) => {
    console.log(selected);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearChange={selectedYearChart} />
        {returnedItems}
      </Card>
    </div>
  );
};

export default Expenses;








<Card className="expenses">
<ExpensesFilter onYearChange={selectedYearChart} />
{
props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}
key={expense.id}/>)}

</Card>








