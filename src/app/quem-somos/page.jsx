'use client'

import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import CardUser from "@/components/CardUser";
import Content from "@/components/Content";
import { useState } from "react";


export default function Home() {
  const [users, setUsers] = useState([
    {name:"Emanuel Cardoso", email:"emanuelc@gmail.com", image:"https://github.com/EmanuelCAC.png"},
    {name:"Henrique Szabo", email:"hszabo@gmail.com", image:"https://github.com/Szaboltz.png"}
  ])

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [avatar, setAvatar] = useState("")

  const handelForm = () => {
    setUsers([...users, {name:name, email:email, image:avatar}])
    setName("")
    setEmail("")
    setAvatar("")
  }


  return (
    <div className="flex flex-col gap-10 w-[60%] mx-auto border-2 border-white rounded-xl p-8">
      <Header />
      <main className="flex justify-between">
        <Sidebar />
        <Content title="Quem Somos">
          <div className="flex w-full gap-5">
            <div className="flex flex-col gap-2">
              {users.map((user, i) => (
                <CardUser key={i} name={user.name} email={user.email} image={user.image} />
              ))}
            </div>
            <div className="flex flex-col gap-2 justify-center items-center mx-auto border border-white rounded-xl p-5">
              <h1>Add Person</h1>
              <p>Nome: <input type="text" value={name} onChange={(event) => setName(event.target.value)} className="text-white p-2 rounded-lg bg-slate-700 border-slate-800 border-2" /></p>
              <p>Email: <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} className="text-white p-2 rounded-lg bg-slate-700 border-slate-800 border-2" /></p>
              <p>Avatar: <input type="text" value={avatar} onChange={(event) => setAvatar(event.target.value)} className="text-white p-2 rounded-lg bg-slate-700 border-slate-800 border-2" /></p>
              <button className="border border-white rounded-xl px-5 py-1" onClick={handelForm}>Add</button>
            </div>
          </div>
        </Content>
      </main>
      <Footer />
    </div>
  );
}
