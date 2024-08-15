import { Card } from "./card";
import { Button } from "./button";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "lucide-react";

import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="bg-white mt-1 flex flex-col items-center justify-center">
        <Image
          src="/images/logo_novo_tempo.png"
          alt="Logo Novo Tempo"
          width={120}
          height={100}
          className="pt-2"
        />

        <Card className="flex items-center justify-between py-[1.5rem] px-3 w-full">
          <Button size="icon">
            <MenuIcon />
          </Button>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              className="text-foreground hover:text-primary"
            >
              MINHA CONTA
            </Button>

            <div className="flex items-center gap-2 text-primary">
              <Button
                size="icon"
                variant="ghost"
                className="w-4 text-foreground"
              >
                <SearchIcon />
              </Button>

              <p>|</p>

              <Button
                size="icon"
                variant="ghost"
                className="w-4 text-foreground"
              >
                <ShoppingCartIcon />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Header;
