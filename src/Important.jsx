import Layout from "./layouts/Layout";
import IconStar from "./icons/IconStar"
import Date from "./components/Date"

export default function Important(){
  return(
    <Layout>
      <section className=" relative flex  p-8 gap-4 h-full">
        <div className="relative flex flex-1 gap-4 h-full ">
          <div className="grid grid-rows-[auto,1fr,auto] w-full">
            <section>
              <header className="flex flex-row gap-4 items-center stroke-white">
                <IconStar />
                <h2 className="text-xl font-bold text-white "> Importante </h2>
              </header>
              <Date />
            </section>
            <section></section>
            <section>
              <input
                type="text"
                placeholder="Agregar Tarea"
                className="p-2 border-2 border-gray-300 rounded-sm w-full hover:border-gray-500"
              ></input>
            </section>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-green-900 via-green-500/80 -z-10"></div>
      </section>
    </Layout>

  );
}