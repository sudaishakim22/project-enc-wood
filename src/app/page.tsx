import SectionFive from "@/components/sections/section-five";
import SectionOne from "@/components/sections/section-one";
import SectionTwo from "@/components/sections/section-two";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Jumbotron from "@/components/ui/jumbotron";
import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const SectionThreeComponent = dynamic(
  () => {
    return import("../components/sections/section-three");
  },
  { ssr: false }
);

const SectionFourComponent = dynamic(
  () => {
    return import("../components/sections/section-four");
  },
  { ssr: false }
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mt-20">
        <div id="jumbotron">
          <Jumbotron />
        </div>
        <SectionOne />
        <SectionTwo />
        <Box width={"100%"} height={100} />
        <div id="section-three" className="w-full">
          <SectionThreeComponent />
        </div>
        <Box width={"100%"} height={"2px"} bg={"black"} className="mb-10" />
        <SectionFourComponent />
        <SectionFive />
        <Footer />
      </section>
    </main>
  );
}
