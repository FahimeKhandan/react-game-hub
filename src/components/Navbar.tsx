import { Image, HStack, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import SwitchColorMode from "./SwitchColorMode";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} boxSize="60px" />
      <SwitchColorMode />
    </HStack>
  );
};

export default Navbar;
