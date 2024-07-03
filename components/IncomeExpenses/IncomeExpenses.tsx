import getIncomeExpense from '@/app/actions/getIncomeExpense';
import { addCommas } from '@/lib/utils';

const IncomeExpense = async () => {
    const { incomes, expenses } = await getIncomeExpense();

    console.log(incomes)

    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className='money plus'>${addCommas(Number(incomes?.toFixed(2)))}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className='money minus'>${addCommas(Number(expenses?.toFixed(2)))}</p>
            </div>
        </div>
    );
};

export default IncomeExpense;