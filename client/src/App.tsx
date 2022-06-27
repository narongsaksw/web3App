import React from "react";
import { SecondaryButton } from "./components/atoms/Button";
import {
  Banner,
  TopSellers,
  HotBids,
  Transactions,
} from "./components/molecules";
import { Navbar, Form, Footer } from "./components/organisms";

const App = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white dark:bg-[#24252D]">
      <Navbar />
      <div className="w-[90%] xl:w-auto">
        <Banner />
        <TopSellers />
        <HotBids />
        <SecondaryButton
          title="Load More"
          classProps="w-full md:w-[300px] my-[40px] md:my-[60px] mx-auto"
        />
        <Transactions />
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default App;
