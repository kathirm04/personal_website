import type { RefObject } from "react";

interface BentoBoxProps {
  scrollRef: RefObject<HTMLDivElement | null>;
}

function BentoBox({ scrollRef }: BentoBoxProps) {
  return (

    <div className="h-[760px] mx-4 rounded-2xl bg-[#0A0A0A] overflow-hidden">
      <div
        ref={scrollRef}
        className="
          h-full
          overflow-x-auto overflow-y-auto
          scroll-smooth
          scrollbar-hide
        "
      >
    <div className="min-w-max flex justify-start xl:justify-center">
<div
  className="
    grid
    grid-flow-col
    auto-cols-[185px]
    grid-rows-8
    gap-6
    text-[#71717C]
    mt-4
    px-6
    pb-10
  "
>


        <div className="row-span-8 col-span-2 bg-[#18181B] rounded-xl
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40
                hover:ring-1 hover:ring-white/10">
            <div className="mx-3 mt-2">
                <p className="">about me</p>
                <img
  src="/img/pfp.JPG"
  className="rounded-xl mt-4 transition-transform duration-300
             hover:scale-[1.02]"
/>
                <p className="text-white text-base mt-4">Hi, I’m Kathir M! I’m a recent graduate from The Ohio State University in Computer Science Engineering. </p>
                <div className="flex justify-start gap-4 mt-4">
                    <a className="bg-[#27272A] h-10 w-10 p-2 rounded-xl
             transition-all duration-200
             hover:scale-110 hover:bg-[#3F3F46]" href="https://x.com/KathirMaar84659">
                        <img src="/img/x.png"></img>
                    </a>
                    <a className="bg-[#27272A] h-10 w-10 p-1.5 rounded-xl
             transition-all duration-200
             hover:scale-110 hover:bg-[#3F3F46]" href="https://www.linkedin.com/in/kathir-maari/">
                        <img src="/img/linkedin.png"></img>
                    </a>
                    <a className="bg-[#27272A] h-10 w-10 p-2 rounded-xl
             transition-all duration-200
             hover:scale-110 hover:bg-[#3F3F46]" href="mailto:kathir.maarik04@gmail.com">
                        <img src="/img/mail.png"></img>
                    </a>
                    <a className="bg-[#27272A] h-10 w-10 p-2 rounded-xl
             transition-all duration-200
             hover:scale-110 hover:bg-[#3F3F46]" href="https://open.spotify.com/user/kathir_m?si=a30e24a60c424b63">
                        <img src="/img/spotify.png"></img>
                    </a>
                </div>
                <div>
                    <div className="flex justify-start items-center mt-4">
                        <p className="mr-2 text-sm">role</p>
                        <hr className="w-full h-1 mt-1 opacity-30 "></hr>
                    </div>
                    <p className="text-white text-sm">Software Engineer @ Google</p>
                </div>
                <div>
                    <div className="flex justify-start items-center mt-4">
                        <p className="mr-2 text-sm">hobbies</p>
                        <hr className="w-full h-1 mt-1 opacity-30 "></hr>
                    </div>
                    <p className="text-white text-sm">Ohio State Football, Lakers, Tennis, Basketball, Football, Video games (CFB 26, Madden 26)</p>
                </div>
                <div>
                    <div className="flex justify-start items-center mt-4">
                        <p className="mr-2 text-sm">education</p>
                        <hr className="w-full h-1 mt-1 opacity-30 "></hr>
                    </div>
                    <div className="flex justify-start">
                        <div className="bg-white h-10 w-10 p-1.5 mt-2 rounded-xl">
                            <img src="/img/block_o.png"></img>
                        </div>
                        <div className="mt-2">
                            <p className="text-white text-sm ml-2">The Ohio State University</p>
                            <p className="ml-2 text-xs">B.S. in Computer Science Engineering, AI Specialization</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-start items-center mt-4">
                        <p className="text-sm mr-2">location</p>
                        <hr className="w-full h-1 mt-1 opacity-30 "></hr>
                    </div>
                    <p className="text-white text-sm">San Francisco, CA</p>
                </div>

            </div>
        </div>
        <div className="row-span-3 col-span-5 bg-[#18181B] rounded-xl pb-4
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40
                hover:ring-1 hover:ring-white/10">
            <p className="m-2">projects</p>
            <div className="flex justify-between ml-4 mr-4">
                <a
  href="https://github.com/natekep/itinera-bot"
  className="
    group bg-[#38383b] rounded-xl p-2
    transition-all duration-300 ease-out
    hover:-translate-y-1
    hover:shadow-xl hover:shadow-black/40
    hover:ring-1 hover:ring-white/10
  "
>
                    <img className=" w-70 h-36 rounded-xl"src="/img/itinera.png"></img>
                    <div className="mt-2 transition-all duration-300 group-hover:translate-y-[-2px]">
                        <p className="text-white font-medium">Itinera - AI Travel Assistant</p>
                        <p className="text-zinc-400 text-xs mt-0.5 truncate">Plan your perfect trip with AI</p>
                    </div>
                </a>
                <a className="
    group bg-[#38383b] rounded-xl p-2
    transition-all duration-300 ease-out
    hover:-translate-y-1
    hover:shadow-xl hover:shadow-black/40
    hover:ring-1 hover:ring-white/10
  " href="https://github.com/kathirm04/ZoomGage">
                    <img className=" w-70 h-36 rounded-xl"src="/img/zoomgage.jpeg"></img>
                    <div className="mt-2 transition-all duration-300 group-hover:translate-y-[-2px]">
                        <p className="text-white font-medium">ZoomGage</p>
                        <p className="text-zinc-400 text-xs mt-0.5 truncate">Analyze facial engagement in online meetings</p>
                    </div>
                </a>
                <a className="
    group bg-[#38383b] rounded-xl p-2
    transition-all duration-300 ease-out
    hover:-translate-y-1
    hover:shadow-xl hover:shadow-black/40
    hover:ring-1 hover:ring-white/10
  " href="https://github.com/akuppa9/Hyperpedia-Hypertro">
                    <img className=" w-70 h-36 rounded-xl"src="/img/hyperpedia.png"></img>
                    <div className="mt-2 transition-all duration-300 group-hover:translate-y-[-2px]">
                        <p className="text-white font-medium">Hyperpedia</p>
                        <p className="text-zinc-400 text-xs mt-0.5 truncate">One-stop shop for hypertrophy and weightlifting</p>
                    </div>
                </a>    
            </div>
        </div>
        <div className="row-span-5 col-span-2 bg-[#18181B] rounded-xl
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40
                hover:ring-1 hover:ring-white/10">
            <p className="m-2">experience</p>
            <div className="mx-4 group/list">
                <div className="relative flex justify-start mx-4 rounded-lg p-2
                transition-all duration-300 group-hover/list:opacity-35 hover:!opacity-100
                ">
                    <div className="absolute left-[28px] top-9 bottom-0 w-[1px] bg-zinc-700/50"></div>
                    <div className="relative z-10 bg-white h-10 w-10 p-1.5 mt-2 rounded-xl">
                        <img src="/img/google.webp"></img>
                    </div>
                    <div className="mt-2 ml-3">
                        <p className="text-white text-sm ">Google</p>
                        <p className="text-sm">Software Engineer</p>
                    </div>
                </div>
                <div className="relative flex justify-start mx-4 mt-4 rounded-lg p-2
                transition-all duration-300 group-hover/list:opacity-35 hover:!opacity-100
                ">
                    <div className="absolute left-[28px] -top-4 bottom-0 w-[1px] bg-zinc-700/50"></div>
                    <div className="relative z-10 bg-white h-10 w-10 p-1.5 mt-2 rounded-xl">
                        <img src="/img/google.webp"></img>
                    </div>
                    <div className="mt-2 ml-3">
                        <p className="text-white text-sm ">Google</p>
                        <p className="text-sm">Software Engineering Intern</p>
                    </div>
                </div>
                <div className="relative flex justify-start mx-4 mt-4 rounded-lg p-2
                transition-all duration-300 group-hover/list:opacity-35 hover:!opacity-100
                ">
                    <div className="absolute left-[28px] -top-4 bottom-0 w-[1px] bg-zinc-700/50"></div>
                    <div className="relative z-10 bg-[#ff1612] h-10 w-10 p-1.5 mt-2 rounded-xl">
                        <img src="/img/toyota_2.png"></img>
                    </div>
                    <div className="mt-2 ml-3">
                        <p className="text-white text-sm ">Toyota Research & Dev</p>
                        <p className="text-sm">Software Engineering Intern</p>
                    </div>
                </div>
                <div className="relative flex justify-start mx-4 mt-4 rounded-lg p-2
                transition-all duration-300 group-hover/list:opacity-35 hover:!opacity-100
                ">
                    <div className="absolute left-[28px] -top-4 bottom-0 w-[1px] bg-zinc-700/50"></div>
                    <div className="relative z-10 bg-[#ff1612] h-10 w-10 p-1.5 mt-2 rounded-xl">
                        <img src="/img/toyota_2.png"></img>
                    </div>
                    <div className="mt-2 ml-3">
                        <p className="text-white text-sm ">Toyota</p>
                        <p className="text-sm">Production Engineering Intern</p>
                    </div>
                </div>
                <div className="relative flex justify-start mx-4 mt-4 rounded-lg p-2
                transition-all duration-300 group-hover/list:opacity-35 hover:!opacity-100
                ">
                    <div className="absolute left-[28px] -top-4 h-[52px] w-[1px] bg-zinc-700/50"></div>
                    <div className="relative z-10 bg-[#fdc938] h-10 w-10 p-1.5 mt-2 rounded-xl">
                        <img src="/img/c.png"></img>
                    </div>
                    <div className="mt-2 ml-3">
                        <p className="text-white text-sm ">Central Insurance</p>
                        <p className="text-sm">Software Development Intern</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row-span-5 col-span-3 bg-[#18181B] rounded-xl
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40
                hover:ring-1 hover:ring-white/10">
            <p className="m-2">music</p>
            <div className="transition-transform duration-300 hover:scale-[1.01]">
                <iframe data-testid="embed-iframe" className="rounded-xl ml-4 mt-4" src="https://open.spotify.com/embed/playlist/1IuqFZbMNEcBD5RKxAQq1v?utm_source=generator" width="95%" height="100" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="transition-transform duration-300 hover:scale-[1.01]">
                <iframe data-testid="embed-iframe" className="rounded-xl ml-4" src="https://open.spotify.com/embed/playlist/37lVOeAszUAjpM8D38eRS0?utm_source=generator" width="95%" height="100" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="transition-transform duration-300 hover:scale-[1.01]">
                <iframe data-testid="embed-iframe" className="rounded-xl ml-4" src="https://open.spotify.com/embed/playlist/48kYc1ndgdPzULHGmfAeKf?utm_source=generator" width="95%" height="100" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="transition-transform duration-300 hover:scale-[1.01]">
                <iframe data-testid="embed-iframe" className="rounded-xl ml-4" src="https://open.spotify.com/embed/playlist/1TAouWboMykWfSOHLmRnVe?utm_source=generator" width="95%" height="100" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default BentoBox;
