import { Button } from "@/app/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container px-8 py-10">
      <Button asChild>
        <Link href={"/dashboard/forms"}>Accéder au dashboard</Link>
      </Button>
    </div>
  );
}
