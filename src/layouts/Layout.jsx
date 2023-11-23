import Header from "../components/Header";
import AsideMenu from "../components/AsideMenu";
export default function Layout({ children }) {
  return (
    <section className="h-screen w-screen grid grid-rows-[auto,1fr] ">
      <section id="header" className="flex flex-auto  bg-zinc-800 ">
        <Header />
      </section>
      <section className="grid grid-cols-[300px,1fr] overflow-hidden">
        <aside id="aside">
          <AsideMenu />
        </aside>
        <section id="main">
          {children}
        </section>
      </section>
    </section>
  );
}
