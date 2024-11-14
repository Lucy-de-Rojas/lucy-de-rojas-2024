import Layout from "@/Components/Layout"


export default function Contact () {

        let numbers = [0,1,2,3,4,5,6,7,8,9];
        let letters = ["gm" ,"lucy",  "ail","de", "c","rojas", "om"];
        let zavinac = "@";
        let tecka = ".";
        let plus = "+";

        let email = letters[1] + letters[3] + letters[5] + zavinac + letters[0] + letters[2] + tecka + letters[4] + letters[6] ;

        let phoneNumber = plus + numbers[4] + numbers[4] + numbers[7] + numbers[4] + numbers[1] + numbers[1] + numbers[3] + numbers[8] + numbers[7] + numbers[0] + numbers[0] + numbers[9] ;


        console.clear();
        console.log(phoneNumber);
















return (<Layout>
<main className="flex flex-col items-center w-full">
<h1>Contact</h1>

<br />

<a href={"tel:" + phoneNumber} className="bg-pink-300 w-3/4 text-center py-10 my-3 rounded-full shadow-2xl">Call (UK)</a>
<a href={"sms:" + phoneNumber} className="bg-pink-300 w-3/4 text-center py-10 my-3 rounded-full shadow-2xl">Send Text Message (UK)</a>
<a href={"mailto:" + email} className="bg-pink-300 w-3/4 text-center py-10 my-3 rounded-full shadow-2xl">Send Email</a>

</main>





</Layout>)};