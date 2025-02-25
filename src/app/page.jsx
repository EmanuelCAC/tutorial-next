'use client'

import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Content from "@/components/Content";
import { useState } from "react";

import { RiResetLeftFill } from "react-icons/ri";


export default function Home() {
  const [count, setCount] = useState(0)

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [res, setRes] = useState(0)

  const [name, setName] = useState("Emanuel")
  const [tempName, setTempName] = useState("")
  

  return (
    <div className="flex flex-col gap-10 w-[60%] mx-auto border-2 border-white rounded-xl p-8">
      <Header />
      <main className="flex justify-between">
        <Sidebar />
        <Content title={`Bem vindo ${name}!`}>
          <div className="flex flex-col w-full justify-center items-center gap-2">
            <h1>Contador</h1>
            <p>{count == 13 ? "Faz o L" : count}</p>
            <div className="flex gap-3">
              <button className="border border-white rounded-xl px-5 py-1" onClick={() => setCount(0)}><RiResetLeftFill /></button>
              <button className="border border-white rounded-xl px-5 py-1" onClick={() => setCount(count + 1)}>+1</button>
            </div>
            <hr className="border-white w-[70%] my-3"/>
            <p>Valor 1: <input type="text" value={num1} onChange={(event) => setNum1(event.target.value)} className="text-white p-2 rounded-lg bg-slate-700 border-slate-800 border-2" /></p>
            <p>Valor 2: <input type="text" value={num2} onChange={(event) => setNum2(event.target.value)}  className="text-white p-2 rounded-lg bg-slate-700 border-slate-800 border-2" /></p>
            <p>Resultado: {res}</p>
            <button className="border border-white rounded-xl px-5 py-1" onClick={() => setRes((+num1) + (+num2))}>sum</button>
            <hr className="border-white w-[70%] my-3"/>
            <button className="border border-white rounded-xl px-5 py-1" onClick={() => setName('Teste da Silva')}>testar?</button>
            <hr className="border-white w-[70%] my-3"/>
            <p>Digite seu nome: <input type="text" value={tempName} onChange={(event) => setTempName(event.target.value)} className="text-white p-2 rounded-lg bg-slate-700 border-slate-800 border-2" /></p>
            <button className="border border-white rounded-xl px-5 py-1" onClick={() => setName(tempName)}>Mudar Nome</button>
          </div>
          
        </Content>
      </main>
      <Footer />
    </div>
  );
}
