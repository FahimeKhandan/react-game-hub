import { Image, HStack } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import SwitchColorMode from "./SwitchColorMode";
import SearchInput from "./SearchInput";

interface Props {
  onSearchTermSubmit: (searchTerm: string) => void;
}

const Navbar = ({ onSearchTermSubmit }: Props) => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSubmit={(searchTerm) => onSearchTermSubmit(searchTerm)} />
      <SwitchColorMode />
    </HStack>
  );
};

export default Navbar;
