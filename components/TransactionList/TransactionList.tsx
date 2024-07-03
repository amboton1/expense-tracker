import getTransactions from '@/app/actions/getTransactions';
import TransactionItem from '../TransactionItem/TransactionItem';
import { Transaction } from '@/types/Transaction';

const TransactionList = async () => {
    const { transactions, error } = await getTransactions();

    if (error) {
        return <p className='error'>{error}</p>;
    }

    const renderTransactions = (transactions: Transaction[] | undefined) => {
        return (
            transactions && transactions.length !== 0 ?
                transactions.map((transaction: Transaction) => (
                    <TransactionItem key={transaction.id} transaction={transaction} />
                )) : <p>No list of transactions</p>
        )
    }

    return (
        <>
            <h3>History</h3>
            <ul className='list'>
                {renderTransactions(transactions)}
            </ul>
        </>
    );
};

export default TransactionList;