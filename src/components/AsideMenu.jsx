import { useNavigate } from "react-router-dom";
import AsideElement from "./AsideElements";
import IconDay from "../icons/IconDay";
import IconStar from "../icons/IconStar";
export default function AsideMenu() {
  const navigate = useNavigate();

  return (
    <section className="grid grid-rows-2 overflow-hidden flex-1">
      <section className="flex flex-col ">
        <AsideElement navigate={navigate} title="Mi día">
          <IconDay />
        </AsideElement>
        <AsideElement navigate={navigate} title="Importante">
          <IconStar />
        </AsideElement>
      </section>
      <section className="overflow-y-hidden"></section>
    </section>
  );
}
