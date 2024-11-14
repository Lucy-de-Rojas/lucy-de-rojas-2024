import Layout from "@/Components/Layout"
import Image from "next/image";
import Head from "next/head";


export default function About () {

return (<Layout>
<main className="px-14 ">


<h1>About</h1>
<div className="flex justify-center">

<Image
 src="/Media/Images/Lucy_de_Rojas_Profile_Illustration.png"
 width={200}
 height={200}
 alt="Lucy de Rojas Profile Illustration"

/>
 </div>

<br />
<p>My name is Lucy and I’m a digital, web, and graphic designer with experience in video editing, combining creativity with technical skills to create visually engaging designs across different platforms.
<br /><br />
My background in professional athletics has helped me develop discipline and focus, while my love for puzzles has strengthened my problem-solving abilities, which I apply to my design work in a thoughtful and strategic way.</p>

<br />
Ready to design with purpose? Let’s shape visuals that turn first impressions into lasting connections.


</main>
</Layout>)};