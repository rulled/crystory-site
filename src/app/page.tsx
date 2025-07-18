'use client';

import Image from "next/image";
import { Cpu, HeartHandshake, Map, Server, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IpCopyButton } from "@/components/ip-copy-button";
import { ServerStatus } from "@/components/server-status";
import { useEffect, useState } from "react";
import { LauncherDownloadButton } from "@/components/launcher-download-button";
import { CountdownTimer } from "@/components/countdown-timer";
import { Button } from "@/components/ui/button";
import { FAQButton } from "@/components/faq-button";

export default function Home() {
  const [year, setYear] = useState<number | null>(null);
  const targetDate = new Date('2025-07-20T20:00:00+03:00');

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const advantages = [
    {
      icon: <Map className="h-8 w-8 text-primary" />,
      title: "Уникальный мир",
      description: "Полностью кастомная карта шириной более 30,000 блоков с уникальной сюжетной линией.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Социальное взаимодействие",
      description: "Квесты, основанные на общении и погружении. Сможете ли вы разгадать все тайны Kristory?",
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-primary" />,
      title: "Играйте со звездами",
      description: "Возможность играть вместе с вашими любимыми артистами и продюсерами.",
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Для всех",
      description: "Мы рады всем, даже если у вас нет лицензионной версии Minecraft.",
    },
  ];

  const creators = [
    { name: "threehearts", url: "https://t.me/thr33hrts", icon: "/thr33hrts.png" },
    { name: "10 ночей", url: "https://t.me/uwusquadd", icon: "/uwusquadd.png" },
    { name: "xdmd", url: "https://t.me/xdmdgang", icon: "/xdmdgang.png" },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  
  const cardContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <div className="absolute inset-0 z-[-1] h-full w-full">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Mystical crystal landscape background"
          data-ai-hint="mystical crystal landscape"
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8"
          >
            <Image 
              src="/icon.png" 
              alt="Kristory Logo" 
              width={160} 
              height={160}
              className="h-32 w-auto md:h-44"
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <Image 
              src="/name.png" 
              alt="Kristory" 
              width={1000}
              height={200}
              className="w-auto h-32 md:h-48 lg:h-56 [filter:drop-shadow(0_0_40px_hsl(var(--primary)/0.35))]"
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="my-10"
          >
            <CountdownTimer targetDate={targetDate} />
          </motion.div>
          <div className="mb-10 flex flex-col items-center gap-2">
            <IpCopyButton ipAddress="play.kristory.ru" />
            <div className="flex flex-wrap items-center justify-center gap-3">
               <LauncherDownloadButton />
               <FAQButton />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <ServerStatus />
          </div>
        </section>

        {/* About Section */}
        <motion.section 
          id="about" 
          className="container mx-auto py-16 px-4 md:py-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline font-bold text-4xl text-gradient md:text-5xl">
              Что такое Kristory?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Участники творческих объединений threehearts, 10 ночей и xdmd решили создать свой собственный приватный сервер Minecraft! Мы создали совершенно новый ванильный опыт с модами, сюжетной линией на полностью кастомной карте. Чтобы по-настоящему увидеть красоту мира, вам предстоит пройти квестовую линию, основанную на социальном взаимодействии и погружении.
            </p>
          </div>
        </motion.section>
        
        {/* Advantages Section */}
        <motion.section 
          id="advantages" 
          className="container mx-auto py-16 px-4 md:py-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-center font-headline font-bold text-4xl text-gradient md:text-5xl">
            Ключевые преимущества
          </h2>
          <motion.div 
            className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {advantages.map((adv, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full rounded-2xl border-primary/20 bg-card/50 text-center transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader className="items-center">
                    <div className="rounded-full bg-primary/10 p-4">
                      {adv.icon}
                    </div>
                    <CardTitle className="mt-4 font-headline text-2xl">{adv.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{adv.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        
        {/* Trailer Section */}
        <motion.section 
          id="trailer" 
          className="container mx-auto py-16 px-4 md:py-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-center font-headline font-bold text-4xl text-gradient md:text-5xl mb-8">Наш мир</h2>
                <motion.div 
                  className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl border-2 border-primary/20 shadow-2xl shadow-primary/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                    <iframe
                        src="https://player.vimeo.com/video/1102249814?title=0&byline=0&portrait=0"
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </motion.div>
            </div>
        </motion.section>

        {/* Performance Section */}
        <motion.section 
          id="performance" 
          className="container mx-auto py-16 px-4 md:py-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline font-bold text-4xl text-gradient md:text-5xl">
              Производительность
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Многие беспокоились о производительности сервера, но мы рады сообщить, что используем лучшее возможное оборудование. Никаких лагов — только чистое погружение.
            </p>
          </div>
          <div className="mt-12 mx-auto max-w-4xl grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <Card className="h-full rounded-2xl border-primary/20 bg-card/50 flex flex-col items-center justify-center p-6 text-center">
                  <Cpu className="h-12 w-12 text-primary"/>
                  <h3 className="mt-4 font-headline text-2xl">Топовый процессор</h3>
                  <p className="mt-2 text-foreground/80">AMD Ryzen 9 9950x</p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <Card className="h-full rounded-2xl border-primary/20 bg-card/50 flex flex-col items-center justify-center p-6 text-center">
                  <Server className="h-12 w-12 text-primary"/>
                  <h3 className="mt-4 font-headline text-2xl">Низкая задержка</h3>
                  <p className="mt-2 text-foreground/80">Сервер в Москве, пинг ниже 10 мс</p>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Creators Section */}
        <motion.section
          id="creators"
          className="container mx-auto py-16 px-4 text-center md:py-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="font-headline font-bold text-4xl text-gradient md:text-5xl">Создатели</h2>
          <motion.div
            className="mt-10 grid grid-cols-1 items-center justify-items-center gap-8 md:grid-cols-3 md:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardContainerVariants}
          >
            {[creators[0], creators[1], creators[2]].map((creator, index) => (
              <motion.a
                key={creator.name}
                href={creator.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                className="group flex flex-col items-center gap-4 text-foreground/80 transition-all hover:text-primary hover:scale-105"
                style={{ gridColumn: index === 0 ? '1' : index === 1 ? '2' : '3', justifySelf: index === 0 ? 'end' : index === 2 ? 'start' : 'center' }}
              >
                <div 
                  className="h-24 w-24 rounded-full bg-foreground/80 icon-mask transition-colors group-hover:bg-primary"
                  style={{'--icon-url': `url(${creator.icon})`} as React.CSSProperties}
                 />
                <span className="font-headline text-xl font-semibold">
                  {creator.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.section>
      </main>

      <footer className="py-8">
        <div className="container mx-auto text-center text-sm text-foreground/60">
            {year && <p>© {year} kristory.fun</p>}
        </div>
      </footer>
    </div>
  );
}
