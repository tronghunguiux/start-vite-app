// import Image from "next/image";
import { useRouter } from 'next/router';
import Template from "@/views/template/Template";

export default function GarageSale() {
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <Template
      title="Title garagesale page"
      description="Generated by create  next app first"
      image="https://my-next-app.com/home-og-image.png"
      url={currentPath}
      classPage="garagesale_page"
      idPage="garagesale"
      linkcss={[]}>

        <div className="min-h-50 bg-blue-100 px-2">
          <h2 className="text-black text-center">Garage Sale</h2>
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
