import PokemonItem from '../components/PokemonItem';
import { NextPage } from 'next';
import usePokemonData from "@/getDataAPI/getPokemonData";
import Link from "next/link";
import DefaultLayout from "../template/Template";


const Home: NextPage = () => {
    return (
    <>
        <DefaultLayout showAsideLeft showAsideRight classPage={''}>
            <h1>Welcome to Pokémon List</h1>
            <Link href="/pokemon">
                <button className="btn btn-outline-primary navigate-btn">Xem danh sách Pokémon</button>
            </Link>
        </DefaultLayout>
    </>
    );
};
export default Home;
