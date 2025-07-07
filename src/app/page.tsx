
import Image from "next/image";
import { Cpu, HeartHandshake, Map, Server, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KristoryLogo } from "@/components/kristory-logo";
import { IpCopyButton } from "@/components/ip-copy-button";

export default function Home() {
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

  return (
    <div className="flex min-h-screen flex-col">
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
          <KristoryLogo className="mb-8 h-24 w-24 md:h-32 md:w-32" />
          <h1 className="font-headline text-5xl tracking-wider md:text-7xl lg:text-8xl">
            Kristory
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80 md:text-xl">
            Где каждая история сияет
          </p>
          <div className="my-10">
            <IpCopyButton ipAddress="kristory.fun" />
          </div>
          <p className="max-w-md text-sm text-foreground/60">
            Для входа на сервер необходимо подать заявку. Следите за новостями!
          </p>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto py-16 px-4 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-4xl text-gradient md:text-5xl">
              Что такое Kristory?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              ⚡ Участники творческих объединений threehearts, 10 ночей и xdmd решили создать свой собственный приватный сервер Minecraft! Мы создали совершенно новый ванильный опыт с модами, сюжетной линией на полностью кастомной карте. Чтобы по-настоящему увидеть красоту мира, вам предстоит пройти квестовую линию, основанную на социальном взаимодействии и погружении.
            </p>
          </div>
        </section>
        
        {/* Advantages Section */}
        <section id="advantages" className="container mx-auto py-16 px-4 md:py-24">
          <h2 className="text-center font-headline text-4xl text-gradient md:text-5xl">
            Ключевые преимущества
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((adv, index) => (
              <Card key={index} className="border-primary/20 bg-card/50 text-center transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
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
            ))}
          </div>
        </section>
        
        {/* Trailer Section */}
        <section id="trailer" className="container mx-auto py-16 px-4 md:py-24">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-center font-headline text-4xl text-gradient md:text-5xl">Наш мир</h2>
                <p className="mt-4 text-lg text-foreground/80">
                    Мы готовим кинематографический трейлер, чтобы показать всю красоту нашего мира. А пока - взгляните на небольшой тизер.
                </p>
                <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-xl border-2 border-primary/20 shadow-2xl shadow-primary/10">
                    <Image
                        src="https://placehold.co/1280x720.png"
                        alt="Cinematic trailer placeholder"
                        data-ai-hint="fantasy world cinematic"
                        layout="fill"
                        objectFit="cover"
                    />
                     <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white/70 transition-transform hover:scale-110" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                </div>
            </div>
        </section>

        {/* Performance Section */}
        <section id="performance" className="container mx-auto py-16 px-4 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-4xl text-gradient md:text-5xl">
              Производительность
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Многие беспокоились о производительности сервера, но мы рады сообщить, что используем лучшее возможное оборудование. Никаких лагов — только чистое погружение.
            </p>
          </div>
          <div className="mt-12 mx-auto max-w-4xl grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card className="border-primary/20 bg-card/50 flex flex-col items-center justify-center p-6 text-center">
                  <Cpu className="h-12 w-12 text-primary"/>
                  <h3 className="mt-4 font-headline text-2xl">Топовый процессор</h3>
                  <p className="mt-2 text-foreground/80">AMD Ryzen 9 9950x</p>
              </Card>
              <Card className="border-primary/20 bg-card/50 flex flex-col items-center justify-center p-6 text-center">
                  <Server className="h-12 w-12 text-primary"/>
                  <h3 className="mt-4 font-headline text-2xl">Низкая задержка</h3>
                  <p className="mt-2 text-foreground/80">Сервер в Москве, пинг ниже 10 мс</p>
              </Card>
          </div>
        </section>

        {/* Creators Section */}
        <section id="creators" className="container mx-auto py-16 px-4 text-center md:py-24">
            <h2 className="font-headline text-4xl text-gradient md:text-5xl">Создатели</h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
                <div className="font-headline text-3xl text-foreground/80 transition-colors hover:text-primary">threehearts</div>
                <div className="font-headline text-3xl text-foreground/80 transition-colors hover:text-primary">10 ночей</div>
                <div className="font-headline text-3xl text-foreground/80 transition-colors hover:text-primary">xdmd</div>
            </div>
        </section>
      </main>

      <footer className="py-8">
        <div className="container mx-auto text-center text-sm text-foreground/60">
            <p>&copy; {new Date().getFullYear()} Kristory.fun. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
