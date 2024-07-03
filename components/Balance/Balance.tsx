import getUserBalance from "@/app/actions/getUserBalance";
import { addCommas } from "@/lib/utils";

const Balance = async () => {
    const { balance } = await getUserBalance();

    return (
        <>
            <br />
            <h4>Your balance</h4>
            <h1>EUR: {addCommas(balance ?? 0)}</h1>
        </>
    );
};

export default Balance;