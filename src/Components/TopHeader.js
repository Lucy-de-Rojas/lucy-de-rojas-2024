
import Menu from "./Menu";
import Menu_Pencil from "./Menu_Pencil";
import Ldr from "./Ldr";
import Logo from "./Logo";
// import RedLine from "./RedLine";









export default function TopHeader() {






        return (<div className="flex w-full items-center justify-between">


                <Menu_Pencil  />
                <Ldr  />
                <Logo />
                {/* <RedLine /> */}


                <Menu />






        </div>);}