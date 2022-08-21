import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import clocordImage from "../public/Clocord.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Clocord</title>
        <link rel="icon" type="image/png" href="/Logo.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="text-white">
        <div className="bg-indigo-500 opacity-25 m-8 mb-5 min-h-[85vh]">
          <div className="content flex bg-red-900 space-x-4 p-2">
            <Image src={clocordImage} alt="Clocord Logo" />

            <h1 className="text-3xl">Clocord</h1>
          </div>

          <div className="m-2">
            <h1 className="text-5xl m-3">Date Time</h1>

            <div className="flex space-x-3 m-3">
              <StyledInput />
              <StyledInput />
              <StyledInput />
            </div>

            <div className="flex space-x-3 m-3">
              <StyledInput />
              <StyledInput />
              <StyledInput />
            </div>
          </div>

          <div className="m-2">
            <h1 className="text-5xl m-3"> Presets</h1>
          </div>

          <div className="m-3 space-y-2">
            <div className="flex space-x-3">
              <Preset />
              <Preset />
              <Preset />
            </div>

            <div className="flex space-x-3">
              <Preset />
              <Preset />
            </div>
          </div>
        </div>

        <footer className="text-right mr-2 text-white">
          Clocord designed by Muatex and Coded by UltiRequiem
        </footer>
      </div>
    </>
  );
};

export default Home;

const Preset = () => {
  return <button className="bg-green-900 px-5 py-2">in a day</button>;
};

const StyledInput = () => {
  return (
    <select
      id="countries"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option selected>Choose a country</option>
      <option value="US">United States</option>
      <option value="CA">Canada</option>
      <option value="FR">France</option>
      <option value="DE">Germany</option>
    </select>
  );
};
