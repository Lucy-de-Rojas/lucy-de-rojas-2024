
import Image from "next/image"






export default function Menu_Pencil () {

return (<div className="relative flex-1 flex items-center bg-red-400">




<Image src="/Media/Images/Ruler.png" alt="image of ruler as part of menu"  width={100} height={100}  className="absolute left-7 top-6" id="ruler" />

<Image src="/Media/Images/pencil.png" alt="image of pencil as part of menu" width={100} height={100} className="absolute top-14 left-7" id="pencil" />







<Image src="/Media/Images/circle.png" id="cicrle" width={100} height={100} alt="image of several circles centralised together in Da Vinci style" className="ml-7" />


</div>)};