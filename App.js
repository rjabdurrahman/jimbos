import React from "react";
import { NativeBaseProvider } from "native-base";
import Header from "./components/Header";

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
    </NativeBaseProvider>
  );
}