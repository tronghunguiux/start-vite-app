import Header from "./Header";
import Footer from "./Footer";
import AsideLeft from "./AsideLeft";
import AsideRight from "./AsideRight";
// import "@scss/template.scss";
// import '@css/globals.css'
import HeadMeta from "./HeadMeta";
interface LayoutProps {
  children: React.ReactNode;
  showAsideLeft?: boolean;
  showAsideRight?: boolean;
  idPage?: string;
  classPage?: string;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  canonical?: string;
}

const DefaultLayout: React.FC<LayoutProps> = ({ title, description, keywords, image, url, canonical, children, showAsideLeft = false, showAsideRight = false, classPage = '', idPage }) => {
  return (
    <>
      <HeadMeta
        title={title}
        description={description}
        image={image}
        url={url}
        keywords={keywords}
        canonical={canonical ? canonical : url}
      />
      <main id={idPage} className={"main_page flex flex-col gap-8 row-start-2 items-center sm:items-start"}>
        <Header />
        <div className="main_body">
          {showAsideLeft && <AsideLeft />}
          <div className={"page_content " + classPage} >
            {children}
          </div>
          {showAsideRight && <AsideRight />}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default DefaultLayout;
