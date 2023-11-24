import Layout from "./layouts/Layout";
import IconDay from "./icons/IconDay";
import Date from "./components/Date";
import LayoutColor from "./layouts/LayoutColor";

function Day() {
  return (
    <Layout>
      <LayoutColor fromColor="from-blue-900" viaColor="via-blue-800/50" >
        <div className="grid grid-rows-[auto,1fr,auto] w-full">
          <section>
            <header className="flex flex-row gap-4 items-center stroke-white">
              <IconDay />
              <h2 className="text-xl font-bold text-white "> Mi día </h2>
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
      </LayoutColor>
    </Layout>
  );
}

export default Day;
