import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

async function getIncomeExpense(): Promise<{
    incomes?: number;
    expenses?: number;
    error?: string;
}> {
    const { userId } = auth();

    if (!userId) {
        return { error: 'User not found' };
    }

    try {
        const transactions = await db.transaction.findMany({
            where: { userId },
        });

        const incomes = transactions.filter((income) => income.amount > 0).reduce((sum, income) => sum + income.amount, 0);
        const expenses = transactions.filter((expense) => expense.amount < 0).reduce((sum, expense) => sum + expense.amount, 0);

        return { incomes, expenses };
    } catch (error) {
        return { error: 'Database error' };
    }
}

export default getIncomeExpense;