// import Image from "next/image";
import Template from "@/views/template/Template";

export default function Home() {
  return (
    <Template
      title="Title First page"
      description="Generated by create next app first"
      image="https://my-next-app.com/home-og-image.png"
      classPage="first-page"
      idPage="first_page"
      linkcss={[]}>

        <div className="min-h-50 bg-blue-100 px-2">
        </div>
        <div className="min-h-50 bg-red-100 px-2">
        </div>
        <div className="min-h-50 bg-green-100 px-2">
        </div>
        <div className="min-h-50 bg-orange-100 px-2">
        </div>
    </Template>
  );
}
