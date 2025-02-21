import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Content from "@/components/Content";


export default function Home() {
  return (
    <div className="flex flex-col gap-10 w-[60%] mx-auto border-2 border-white rounded-xl p-8">
      <Header />
      <main className="flex justify-between">
        <Sidebar />
        <Content title="Home"></Content>
      </main>
      <Footer />
    </div>
  );
}
