import { cordinateList } from "@/data/cordinate";
import { IDropdownItems } from "@/interfaces/Iui";

const DropdownItems: IDropdownItems = [];
cordinateList.map(data => {
  console.log(data);
  const { cordinate, id, logo, name } = data;

  const DropdownItem = {
    key: id,
    icons: logo,
    context: `go to ${name}`,
    cordinate: cordinate,
  };
  DropdownItems.push(DropdownItem);
});

export { DropdownItems };
