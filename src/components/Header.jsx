import IconMenu from "../icons/IconMenu";
import IconConfig from "../icons/IconConfig";

export default function Header() {
  return (
    <section className="flex justify-between w-full">
      <section className="flex gap-6 items-center">
        <div className="hover:bg-slate-600/50 p-3">
          <IconMenu />
        </div>

        <h1 className="text-white font-semibold">To Do</h1>
      </section>
      <section className="flex items-center ">
        <input className="w-96 rounded-sm" type="search"></input>
      </section>
      <section className="flex gap-6 items-center">
        <div className="hover:bg-slate-600/50 p-3">
          <IconConfig />
        </div>
      </section>
    </section>
  );
}
