
import Image from "next/image";

import {useState} from 'react';
import RedLine from "./RedLine";





export default function Menu_Pencil () {




        const [open, setOpen] = useState(false);



        function handleClick() {


                let pencil = document.getElementById("pencil");
                let ruler = document.getElementById("ruler");
                let circle = document.getElementById("circle");
                let menu = document.getElementById("menu");


                let whiteLine = document.getElementById("white");
                // let redLine = document.getElementById("red");






                // to close:
                if(open) {
                        setOpen(false);

                        pencil.style.transform = "rotate(0deg)";
                        pencil.style.top = "60px";


                        ruler.style.transform = "rotate(0deg)";
                        ruler.style.top = "30px";


                        circle.style.opacity = "0";


                        menu.style.left = "-100%";


                        // red line hide:
                        whiteLine.style.transform= "rotate(105deg)";









                }

                // to open:
                else {
                        setOpen(true);




                        pencil.style.transform = "rotate(-45deg)";
                        pencil.style.top  = "40px";


                        ruler.style.transform = "rotate(45deg)";
                        ruler.style.top = "35px";



                        circle.style.opacity = "1";


                        menu.style.left = "0";


                        // red line reveal:
                        whiteLine.style.transform = "rotate(-7deg)";














                }




                console.clear();

                console.log("clicked")
        }






return (<button className="relative flex-1 flex items-center"  onClick={handleClick}>



{/* ruler: */}
<Image src="/Media/Images/Ruler.png" alt="image of ruler as part of menu"  width={100} height={100}  className="absolute left-[20px] top-[30px]" id="ruler" />



{/* pencil: */}
<Image src="/Media/Images/pencil.png" alt="image of pencil as part of menu" width={100} height={100} className="absolute top-14 left-5" id="pencil" />






{/* Circle: */}
<Image src="/Media/Images/circle.png" id="circle" width={100} height={100} alt="image of several circles centralised together in Da Vinci style" className="ml-5" />





{/* red Line: */}
<RedLine />


</button>)};