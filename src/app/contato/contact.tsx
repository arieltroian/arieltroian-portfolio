import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import Footer from "../footer/footer";

const ContactPage = () => {
  return (
    <section
      id="contato"
      className="flex flex-col justify-between lg:pt-24 md:pt-8"
    >
      <div className="gap-4 items-center justify-center flex flex-col mt-8">
        <h1 className="text-2xl font-semibold mt-2 p-2 flex items-center justify-center">
          Entre em contato comigo!
        </h1>
        <h2 className="text-lg font-semibold lg:mb-2 ">Vamos conectar?</h2>
        <div className="flex flex-row gap-3 mt-4 mt-4">
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
      </div>

      <div className="mt-2">
        <Footer />
      </div>
    </section>
  );
};

export default ContactPage;
