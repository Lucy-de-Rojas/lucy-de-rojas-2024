import Link from "next/link"




export default function Menu () {

return (<div className="w-full bg-white text-slate-800 font-bold absolute left-[-100%] top-[120px]" id="menu">






<Link href="/" className="flex-1 bg-pink-300 m-4 flex justify-center items-center min-w-1/7 py-7 rounded shadow-2xl">Home </Link>
<Link href="/About" className="flex-1 bg-pink-300 m-4 flex justify-center items-center min-w-9 py-7 rounded shadow-2xl">About </Link>
<Link href="/Web" className="flex-1 bg-green-300 m-4 flex justify-center items-center min-w-9 py-7 rounded shadow-2xl">  UI / UX Design </Link>
<Link href="/Digital" className="flex-1 bg-green-300 m-4 flex justify-center items-center min-w-9 py-7 rounded shadow-2xl">  Digital Design Editing </Link>
<Link href="/Video" className="flex-1 bg-green-300 m-4 flex justify-center items-center min-w-9 py-7 rounded shadow-2xl">  Video Editing </Link>
<Link href="/Print" className="flex-1 bg-green-300 m-4 flex justify-center items-center min-w-9 py-7 rounded shadow-2xl">  Print Design</Link>
<Link href="/Contact" className="flex-1 bg-pink-300 m-4 flex justify-center items-center min-w-9 py-7 rounded shadow-2xl">Contact </Link>






</div>)};