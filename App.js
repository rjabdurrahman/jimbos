import React from "react";
import { NativeBaseProvider } from "native-base";
import Homepage from "./components/Homepage";

export default function App() {
  return (
    <NativeBaseProvider>
      <Homepage />
    </NativeBaseProvider>
  );
}