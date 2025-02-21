import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import CardUser from "@/components/CardUser";
import Content from "@/components/Content";


export default function Home() {
  return (
    <div className="flex flex-col gap-10 w-[60%] mx-auto border-2 border-white rounded-xl p-8">
      <Header />
      <main className="flex justify-between">
        <Sidebar />
        <Content title="Quem Somos">
          <div className="flex flex-wrap gap-3 justify-between">
            <CardUser name="Emanuel Cardoso" email="emanuelc@gmail.com" image="https://github.com/EmanuelCAC.png"/>
            <CardUser name="Henrique Szabo" email="hszabo@gmail.com" image="https://github.com/Szaboltz.png"/>
            <CardUser name="Emanuel Cardoso" email="emanuelc@gmail.com" image="https://github.com/EmanuelCAC.png"/>
            <CardUser name="Henrique Szabo" email="hszabo@gmail.com" image="https://github.com/Szaboltz.png"/>
            <CardUser name="Emanuel Cardoso" email="emanuelc@gmail.com" image="https://github.com/EmanuelCAC.png"/>
            <CardUser name="Henrique Szabo" email="hszabo@gmail.com" image="https://github.com/Szaboltz.png"/>
          </div>
        </Content>
      </main>
      <Footer />
    </div>
  );
}
