import { useRouter } from "next/router";
import Link from "next/link";
import coffeeStoreData from '../../data/coffee-stores.json'


export function getStaticProps(staticProps){
    const params = staticProps.params;
    return {
        props:{
            coffeeStore: coffeeStoreData.find(coffeeStore =>{
                return coffeeStore.id.toString() === params.id 
            }),
        },
    }
}

export function getStaticPaths(){
    return{
        paths: [
            {params: {id: '0' }},
            {params: {id: '1' }},
        ],
        fallback: true,
    }
}
const CoffeeStore = (props) => {
    const router = useRouter();

    if(router.isFallback){
        return<div>Loading</div>
    }
    return(
        <div>
            <h1>
                coffee page {router.query.id}
            </h1>
            <Link href="/">
                <a>Back to home</a>
            </Link>
            <p>{props.coffeeStore.address}</p>
            <p>{props.coffeeStore.name}</p>
        </div>
    );
}

export default CoffeeStore;