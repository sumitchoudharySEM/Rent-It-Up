import { Link as ChakraLink, Heading } from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";
import { Navbar as NiftoryNavbar } from "./Navbar";
import { BsDiscord, BsTwitter } from "react-icons/bs";

export const Navbar = ({ onOpen }) => {
  const menuItems = React.useMemo(() => {
    return [
      {
        label: "Home",
        href: "/home",
        isExternal: false,
      },
      {
        label: "Discord",
        href: "https://discord.com",
        isExternal: true,
        icon: <BsDiscord />,
      },
      {
        label: "Twitter",
        href: "https://twitter.com",
        isExternal: true,
        icon: <BsTwitter />,
      },
    ];
  }, []);

  return (
    <>
      <NiftoryNavbar
        leftComponent={
          <>
            <Link href="/" passHref>
              <Heading p="4"> Rent It Up </Heading>
            </Link>
          </>
        }
        menu={menuItems}
      />
    </>
  );
};
