import Image from "next/image";
import { LogInIcon } from "lucide-react";
import { Button } from "../_components/ui/button";

const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      {/* ESQUERDA */}
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image
          src="/logo.svg"
          width={173}
          height={39}
          alt="Finance AI"
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Bem-vindo</h1>
        <p className="mb-8 text-muted-foreground">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <Button variant="outline">
          <LogInIcon className="mr-2" />
          Fazer login ou criar conta
        </Button>
      </div>

      {/* DIREITA */}
      <div className="relative h-full w-full">
        <Image src="/login.png" alt="login" className="object-cover" fill />
      </div>
    </div>
  );
};

export default LoginPage;
