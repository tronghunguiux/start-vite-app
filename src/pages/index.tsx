import Template from "@/components/template/Template";
import Link from "next/link";


export default function First() {
    return (
        <>
            <Template
                    title="Title First page"
                    description="Generated by create next app first"
                    image="https://my-next-app.com/home-og-image.png"
                    url="/first"
                    classPage="first-page"
                    idPage="first_page">
                <div>
                    <h1>The First</h1>
                </div>
                <Link href="/pokemon">
                    <button className="btn btn-outline-primary navigate-btn">Let&apos;s Catch Them All! Pokémon</button>
                </Link>
            </Template>
        </>
    );
}
