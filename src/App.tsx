import { MapPin, Phone, Mail, Download, Blocks, Database, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EXPERIENCES, SKILLS } from "./const";
import { LinkedinIcon } from "./assets/icons/LinkedinIcon";
import { GithubIcon } from "./assets/icons/GithubIcon";
import AvatarImg from './assets/images/avatar-close.png';

export default function App() {

  return (
    <div className="min-h-screen bg-[#f7f8f6] font-sans pb-12 w-full">
      <header className="bg-[#2c3227] text-white pt-14 pb-28 w-full text-center px-6 md:px-12">
        <div className="w-full flex flex-col items-center">
          <div className="w-28 h-28 rounded-full border-4 border-[#8b9c73] overflow-hidden mb-5 bg-[#3f4736] shadow-lg">
            <img 
              src={AvatarImg}
              alt="Fikri Reformasi Gunawan" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            FIKRI REFORMASI GUNAWAN
          </h1>
          <h2 className="text-[#a3b388] font-medium tracking-widest text-sm">
            SOFTWARE ENGINEER / FRONTEND ARCHITECT
          </h2>

          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap justify-center gap-5 text-sm text-stone-300">
              <h3 className="flex items-center gap-1"><MapPin size={16} /> Bandung/Jakarta</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-5 text-sm text-stone-300 mb-10">
              <a href="mailto:fikrireformasig@gmail.com?subject=Hi%20Fikri&body=Hello%20Fikri," className="flex items-center gap-1 underline" target="_blank" rel="noopener noreferrer"><Mail size={16} /></a>
              <a href="https://www.linkedin.com/in/fikri-reformasi-gunawan/" className="flex items-center gap-1 underline" target="_blank" rel="noopener noreferrer"><LinkedinIcon size={16} /></a>
              <a href="https://www.github.com/holysix7" className="flex items-center gap-1 underline" target="_blank" rel="noopener noreferrer"><GithubIcon size={16} /></a>
            </div>
          </div>

          <a href="/cv/CV-FikriReformasiGunawan.pdf" download>
            <Button className="bg-[#8b9c73] hover:bg-[#73825d] text-white font-semibold rounded-full px-8 py-6 shadow-md transition-all cursor-pointer">
              <Download className="mr-2 h-5 w-5" /> DOWNLOAD CV
            </Button>
          </a>
        </div>
      </header>

      <main className="w-full px-6 md:px-12 lg:px-24 mx-auto -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          <div className="space-y-8 lg:col-span-1">
            <Card className="shadow-lg border-none rounded-xl">
              <CardHeader className="pb-3 text-center border-b border-stone-100 mb-4">
                <CardTitle className="text-lg font-extrabold tracking-wide text-[#2c3227]">ABOUT ME</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-stone-600 leading-relaxed text-justify px-6">
                <p>
                  I possess skills in several technologies, including PHP with frameworks such as CodeIgniter, Laravel, Lumen, and Phalcon. Additionally, I am proficient in Ruby with the RoR framework, as well as React JS, Typescript, NextJS, Remix, and React Native.
                </p>
                <p>
                  Throughout my career journey, I have become familiar with Linux, particularly CentOS. I also have hands-on experience working with PostgreSQL and MySQL databases. These skills enable me to develop reliable and efficient software solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-none rounded-xl">
              <CardHeader className="pb-3 text-center border-b border-stone-100 mb-4">
                <CardTitle className="text-lg font-extrabold tracking-wide text-[#2c3227]">CONTACT INFORMATION</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 px-6">
                <div className="flex items-center gap-4 text-sm text-stone-700">
                  <div className="bg-[#e8ebe3] p-2.5 rounded-full text-[#6b7b56]"><MapPin size={18} /></div>
                  <span className="font-medium">Bandung</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-stone-700">
                  <div className="bg-[#e8ebe3] p-2.5 rounded-full text-[#6b7b56]"><Mail size={18} /></div>
                  <span className="truncate font-medium">
                    <a href="mailto:fikrireformasig@gmail.com?subject=Hi%20Fikri&body=Hello%20Fikri," className="flex items-center gap-1 underline" target="_blank" rel="noopener noreferrer">
                    fikrireformasig@gmail.com
                    </a>
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="shadow-lg border-none h-full rounded-xl">
              <CardHeader className="pb-3 text-center border-b border-stone-100 mb-6">
                <CardTitle className="text-lg font-extrabold tracking-wide text-[#2c3227]">EXPERIENCE</CardTitle>
              </CardHeader>
              <CardContent className="px-8">
                <div className="relative border-l-2 border-stone-200 ml-4 mt-4">
                  {EXPERIENCES.map((exp, idx) => (
                    <div key={idx} className="mb-10 relative text-center lg:text-left">
                      <span className="absolute -left-[10px] top-1 h-4 w-4 rounded-full bg-[#8b9c73] ring-4 ring-white shadow-sm" />
                      
                      <div className="flex flex-col lg:items-center mb-4 relative -left-[10px]">
                         <h4 className="font-extrabold text-[#2c3227]">{exp.role}</h4>
                         <div className="text-sm font-semibold text-stone-600 mb-1">{exp.company}</div>
                         <div className="text-xs text-stone-400 font-medium">{exp.date}</div>
                      </div>
                      
                      <div className="relative -right-[80px]">
                        <ul className="list-disc text-sm text-stone-600 space-y-2 text-left ml-4 lg:ml-0 lg:list-inside lg:flex lg:flex-col">
                          {exp.descriptions.map((desc, i) => (
                            <li key={i} className="max-w-md">{desc}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8 lg:col-span-1">
            <Card className="shadow-lg border-none rounded-xl">
              <CardHeader className="pb-3 text-center border-b border-stone-100 mb-4">
                <CardTitle className="text-lg font-extrabold tracking-wide text-[#2c3227]">SKILLS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-7 px-6">
                <div>
                  <h4 className="text-sm font-bold mb-3 flex items-center justify-center gap-2 text-[#2c3227]">
                    <Blocks size={18} className="text-[#8b9c73]" /> Programming
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {SKILLS.Programming.map(skill => (
                      <Badge key={skill} variant="secondary" className="bg-[#e8ebe3] hover:bg-[#d5dacf] text-[#3f4736] font-medium border border-[#d5dacf]">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold mb-3 flex items-center justify-center gap-2 text-[#2c3227]">
                    <Database size={18} className="text-[#8b9c73]" /> Database
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {SKILLS.Database.map(skill => (
                      <Badge key={skill} variant="secondary" className="bg-[#e8ebe3] hover:bg-[#d5dacf] text-[#3f4736] font-medium border border-[#d5dacf]">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold mb-3 flex items-center justify-center gap-2 text-[#2c3227]">
                    <Layers size={18} className="text-[#8b9c73]" /> Others
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {SKILLS.Others.map(skill => (
                      <Badge key={skill} variant="secondary" className="bg-[#e8ebe3] hover:bg-[#d5dacf] text-[#3f4736] font-medium border border-[#d5dacf]">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-none rounded-xl text-center">
              <CardHeader className="pb-3 border-b border-stone-100 mb-4">
                <CardTitle className="text-lg font-extrabold tracking-wide text-[#2c3227]">EDUCATION</CardTitle>
              </CardHeader>
              <CardContent className="px-6 text-left">
                <h4 className="font-extrabold text-[#2c3227] text-sm text-center">Politeknik Pos Indonesia</h4>
                <p className="text-xs text-stone-400 mb-2 mt-1 text-center">Bandung, 2016-2019</p>
                <p className="text-sm text-stone-600">Diploma Informatics Engineering (D3)</p>
                <p className="text-sm text-[#8b9c73] font-bold mt-1">GPA 3.27</p>
              </CardContent>
            </Card>
          </div>

        </div>
      </main>
    </div>
  );
}