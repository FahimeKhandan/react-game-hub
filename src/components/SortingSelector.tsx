import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronBarDown } from "react-icons/bs";

const orderList = [
  "Relevance",
  "Date added",
  "Name",
  "Release Date",
  "Popularity",
];

const SortingSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order by:
      </MenuButton>
      <MenuList>
        {orderList.map((item) => (
          <MenuItem key={item}>{item}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortingSelector;
