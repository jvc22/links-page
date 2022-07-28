import { InstagramLogo } from "phosphor-react";

export function InstaCard() {
    return(
        <div className="flex w-full justify-center">
            <a href="https://www.instagram.com/_jvc22_/" target="_blank" className="h-12 mb-5">
                <button className="flex items-center justify-center h-12 w-[200px] bg-gray-600 rounded p-4 border-2 border-violet-500 hover:bg-green-500 hover:border-green-500 transition-colors">
                    <span className="flex gap-2 font-bold">Instagram <InstagramLogo size={25}/></span>
                </button>
            </a>
        </div>
    )
}