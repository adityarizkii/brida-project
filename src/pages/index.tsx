// mobile min 360
// tablet md min 768
// desktop lg min 1024
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Link href={"/landing"} className="text-2xl font-semibold underline">
        Landing Page
      </Link>
    </div>
  );
}
