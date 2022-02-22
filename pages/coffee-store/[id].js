import { useRouter } from "next/router";
import Link from "next/link";
const CoffeeStore = () => {
    const router = useRouter();
    return(
        <div>
            <h1>
                coffee page {router.query.id}
            </h1>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </div>
    );
}

export default CoffeeStore;