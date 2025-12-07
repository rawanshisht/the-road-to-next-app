import Link from "next/link";

import { ticketsPath } from "@/paths";
const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-teal-400">Home Page</h2>
        <p className="text-sm text-muted-foreground">Your place to start</p>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath()} className="text-yellow-400 underline"> Go to
          Tickets Page</Link>
      </div>
    </div>
  );
}
export default HomePage;