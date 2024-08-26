import { Hero } from "@/Components/Hero";
import { Header } from "../Components/Header";
import { About } from "@/Components/About";
import { Skills } from "@/Components/Skills";
import Javascript from "../Components/icons/Javascript";
import Typescript from "../Components/icons/Typescript";
import React from "../Components/icons/React";
import Nexts from "../Components/icons/Nexts";
import Express from "@/Components/icons/Express";
import Node from "@/Components/icons/Node";
import Nest from "@/Components/icons/Nest";
import Socket from "../Components/icons/Socket";

export default function Homepage() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />

      <div>
        <Javascript />
        <Typescript />
        <React />
        <Nexts />
        <Node />
        <Express />
        <Nest />
        <Socket />
      </div>
    </div>
  );
}
