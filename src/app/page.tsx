import Image from "next/image";
import Project from "./tailwindcss/Project"
import Flexrverse from "./flexrverse/Flexrverse";
import Flexgrow from "./flexgrow/Flexgrow"
import Signup from "./signup/Signup";
export default function Home() {
  return (
    <main>
   <Project/>
   <Signup/>
   <Flexrverse/>
   <Flexgrow/>
    </main>
  );
}
