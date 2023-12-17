import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <section className="flex flex-col items-center justify-center ">
      <Image
        src="/profile-image.png"
        height={0}
        width={0}
        alt="Imagem de perfil de Ariel Troian"
        sizes="100vw"
        className="h-auto w-52 rounded-full lg:w-56"
      />

      <h1 className="text-2xl text-center font-semibold mt-3">
        Desenvolvedor <br />
        <span className="text-primary font-bold"> Front-end </span>
      </h1>
      <p className="text-center mt-2 text-lg">
        Bem-vindos ao meu portfólio! Aqui, compartilho o meu progresso com a
        programação.
      </p>

      <div className="flex flex-row gap-3 mt-4">
        <Link href="https://www.linkedin.com/in/arieltroian/">
          <Button
            size="lg"
            variant="ghost"
            className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <LinkedinIcon />
          </Button>
        </Link>
        <Link href="https://github.com/arieltroian">
          <Button
            size="lg"
            variant="ghost"
            className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <GithubIcon />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
