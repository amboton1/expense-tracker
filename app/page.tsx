import Image from "next/image";
import { checkUser } from "@/lib/checkUser";
import Guest from "@/components/Guest/guest";
import AddTransaction from "@/components/AddTransaction/AddTransaction";
import Balance from "@/components/Balance/Balance";
import IncomeExpense from "@/components/IncomeExpenses/IncomeExpenses";

export default async function Home() {
  const user = await checkUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <main>
      <h1>Welcome {user.name}</h1>
      <Balance />
      <IncomeExpense />
      <AddTransaction />
    </main>
  );
}
