import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import clocordImage from "../public/Clocord.png";
import userProfile from "../public/UserPfp.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Clocord</title>
        <link rel="icon" type="image/png" href="/Logo.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="text-white">
        <div className="bg-indigo-500 opacity-25 m-8 mb-5 min-h-[85vh] relative">
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
            <h1 className="text-5xl m-3">Presets</h1>

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

          <div className="absolute right-0 top-0 bg-orange-600 min-h-full min-w-[50%]">
            <div className="bg-sky-300">
              <h1 className="text-2xl">Preview</h1>
              <div className="content flex space-x-4 p-2">
                <Image src={userProfile} alt="User Profile Picture" />

                <h1>Clordo</h1>
                <p>In 7 minutes</p>
              </div>
            </div>

            <div>
              <h1>Format</h1>
              <div className="grid grid-rows-2 grid-flow-col gap-4">
                <FormatButtons />
                <FormatButtons />
                <FormatButtons />
                <FormatButtons />
                <FormatButtons />
                <FormatButtons />
              </div>
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

const FormatButtons = () => {
  return <div className="bg-violet-900 min-h-[10%] m-3">hello</div>;
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
