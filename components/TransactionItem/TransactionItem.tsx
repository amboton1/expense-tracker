'use client';
import { Transaction } from '@/types/Transaction';
import { addCommas } from '@/lib/utils';
import { toast } from 'react-toastify';
import deleteTransaction from '@/app/actions/deleteTransaction';

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+';

    const handleOnDeleteTransaction = async (id: string) => {
        const { message, error } = await deleteTransaction(id);

        if (error) {
            toast.error(error);
        }

        toast.success(message);
    }

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text}
            <span>{sign}${addCommas(Math.abs(transaction.amount))}</span>
            <button onClick={() => handleOnDeleteTransaction(transaction.id)} className='delete-btn'>x</button>
        </li>
    );
};

export default TransactionItem;