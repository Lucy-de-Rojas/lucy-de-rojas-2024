import { useState } from "react";



export default function MultiColourCircle () {


        const [open, setOpen] = useState(false);




        function handleClick() {
                let red = document.getElementById("red");

                if(open) {
                        setOpen(!open);
                        red.style.transform = "rotate(-90deg)";

                }
                else {
                        setOpen(!open);
                        red.style.transform = "rotate(0deg)";
                }


        }





return (<svg onClick={handleClick}>




{/* green: */}
<path id="green" fill="#FFFFFF" stroke="#006838" stroke-width="9" stroke-linecap="round" d="M24.666,23.977
	C31.208,17.605,40.146,13.681,50,13.681c9.344,0,17.863,3.528,24.299,9.325"/>


{/* Yellow: */}
<path id="yellow" fill="#FFFFFF" stroke="#D7DF23" stroke-width="9" stroke-linecap="round" d="M26.237,77.467
	C18.546,70.807,13.681,60.972,13.681,50c0-10.205,4.209-19.426,10.985-26.023"/>


{/* blue: */}
<path id="blue" fill="#FFFFFF" stroke="#27AAE1" stroke-width="9" stroke-linecap="round"  d="M78.732,72.22
	c-6.644,8.578-17.043,14.1-28.732,14.1c-9.086,0-17.394-3.337-23.763-8.853"/>


{/* red */}
<path id="red" fill="#FFFFFF" stroke="#ED1C24" stroke-width="9" stroke-linecap="round" d="M74.299,23.006
	C81.679,29.654,86.319,39.285,86.319,50c0,8.369-2.831,16.078-7.587,22.22"/>






</svg>)};


























