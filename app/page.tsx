import Image from "next/image";
import { checkUser } from "@/lib/checkUser";
import Guest from "@/components/Guest/guest";
import AddTransaction from "@/components/AddTransaction/AddTransaction";

export default async function Home() {
  const user = await checkUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <main>
      <h1>Welcome {user.name}</h1>
      <AddTransaction />
    </main>
  );
}
