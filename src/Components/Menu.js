import Link from "next/link"




export default function Menu () {

return (<div className="flex flex-row w-full bg-red-600 text-white">

<Link href="/" className="flex-1 bg-blue-500 m-4 flex justify-center items-center min-w-1/7">HOME </Link>

<Link href="/About" className="flex-1 bg-blue-500 m-4 flex justify-center items-center min-w-9">ABOUT </Link>


<Link href="/Contact" className="flex-1 bg-blue-500 m-4 flex justify-center items-center min-w-9">CONTACT </Link>
<Link href="/Print" className="flex-1 bg-blue-500 m-4 flex justify-center items-center min-w-9">  PRINT DESIGN </Link>
<Link href="/Web" className="flex-1 bg-blue-500 m-4 flex justify-center items-center min-w-9">  WEB DESIGN </Link>
<Link href="/Video" className="flex-1 bg-blue-500 m-4 flex justify-center items-center min-w-9">  VIDEO EDITING </Link>






</div>)};