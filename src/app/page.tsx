import Navbar from "@/components/HomePage/Navbar";
import { redirect } from "next/navigation";

export default function Home() {
  const redirectToProfile = () => {
    redirect("/profile");
  };
  return (
    <>
      <Navbar />
    </>
  );
}
