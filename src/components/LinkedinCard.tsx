import { LinkedinLogo } from "phosphor-react";

export function LinkedinCard() {
    return(
        <div className="flex w-full justify-center">
            <a href="https://www.linkedin.com/in/joaovictorcostadasilva" target="_blank" className="h-12 mb-5">
                <button className="flex items-center justify-center h-12 w-[200px] bg-gray-600 rounded p-4 border-2 border-violet-500 hover:bg-green-500 hover:border-green-500 transition-colors">
                    <span className="flex font-bold gap-2">Linkedin <LinkedinLogo size={25}/></span>
                </button>
            </a>
        </div>
    )
}