
import Image from "next/image";

import {useState} from 'react';






export default function Menu_Pencil () {

        const [open, setOpen] = useState(false);



        function handleClick() {
                let pencil = document.getElementById("pencil");
                let ruler = document.getElementById("ruler");
                let circle = document.getElementById("circle");
                let menu = document.getElementById("menu");


                // to close:
                if(open) {
                        setOpen(false);

                        pencil.style.transform = "rotate(0deg)";
                        pencil.style.top = "60px";


                        ruler.style.transform = "rotate(0deg)";
                        ruler.style.top = "30px";


                        circle.style.opacity = "0";


                        menu.style.left = "-100%";




                }

                // to open:
                else {
                        setOpen(true);




                        pencil.style.transform = "rotate(-45deg)";
                        pencil.style.top  = "40px";


                        ruler.style.transform = "rotate(45deg)";
                        ruler.style.top = "40px";



                        circle.style.opacity = "1";


                        menu.style.left = "0";
                }




                console.clear();

                console.log("clicked")
        }






return (<button className="relative flex-1 flex items-center"  onClick={handleClick}>



{/* ruler: */}
<Image src="/Media/Images/Ruler.png" alt="image of ruler as part of menu"  width={100} height={100}  className="absolute left-5 top-6" id="ruler" />


{/* pencil: */}
<Image src="/Media/Images/pencil.png" alt="image of pencil as part of menu" width={100} height={100} className="absolute top-14 left-5" id="pencil" />







<Image src="/Media/Images/circle.png" id="circle" width={100} height={100} alt="image of several circles centralised together in Da Vinci style" className="ml-5" />


</button>)};