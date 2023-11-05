"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Tab } from "@headlessui/react";
import Aside from "@/app/components/aside/aside";
import Main from "./components/main/Main";
export default function Home() {
  return (
    <main>
      <Aside />
      <Main />
    </main>
  );
}
