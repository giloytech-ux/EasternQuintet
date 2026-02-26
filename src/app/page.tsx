import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Repertoire } from "@/components/sections/repertoire";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Repertoire />
      <Contact />
    </main>
  );
}
