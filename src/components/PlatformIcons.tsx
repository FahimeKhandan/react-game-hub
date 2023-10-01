import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGame";
import {
  FaWindows,
  FaLinux,
  FaApple,
  FaPlaystation,
  FaXbox,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

const PlatformIcons = ({ platforms }: { platforms: Platform[] }) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <HStack>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} key={platform.slug} color={"gray.500"}/>
      ))}
    </HStack>
  );
};

export default PlatformIcons;
