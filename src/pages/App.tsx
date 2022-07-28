import { GithubCard } from "../components/GithubCard"
import { LinkedinCard } from "../components/LinkedinCard"
import { Atom, FileJs, FileJsx, FileTs, FileTsx, Student } from "phosphor-react";
import { InstaCard } from "../components/InstaCard";
import { CLattes } from "../components/CLattes";
import { BarButtons } from "../components/BarButtons";

function App() {
  return (
      <div className="min-h-screen bg-cover bg-no-repeat bg-blackwave flex flex-col items-center  ">
        <div>
          <div className="flex justify-center gap-8 mb-10 mt-10 bg-[#0A0909] bg-opacity-20 backdrop-blur-lg drop-shadow-lg w-[550px] border border-violet-500 rounded-lg">
            <div>
              <div className="absolute left-1 top-0">
                <BarButtons />
              </div>
              <img 
                className="flex items-center justify-center rounded-full mt-[42px] mb-5 w-44 border-[3px] border-violet-500 p-1 pl-[4.7px]"
                src="https://github.com/jvc22.png" alt="Character" />
            </div>
            <div className="flex flex-col items-center justify-center mt-5 gap-1 font-mont">
              <div className="border-b text-xl border-gray-500 mb-2 text-gray-100 font-mont font-bold">
                <p>João Victor Costa da Silva</p>
              </div>
              <p>Biomedical Informatics</p>
              <p className="text-sm leading-[0.8]">University of São Paulo</p>
              <p className="font-hsummit mt-5 text-2xl">JVC22</p>
            </div>
          </div>
        </div>
          <LinkedinCard />
          <CLattes />
          <GithubCard />
          <InstaCard />
      </div>
  )
}

export default App
