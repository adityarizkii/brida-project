import Header from "@/components/Header";
import Hero from "@/components/Hero";

// mobile min 360
// tablet md min 768
// desktop lg min 1024
export default function Home() {
  return (
    <div className="md:p-8 lg:py-8 lg:px-[100px]">
      <Header></Header>
      <Hero></Hero>
    </div>
  );
}
