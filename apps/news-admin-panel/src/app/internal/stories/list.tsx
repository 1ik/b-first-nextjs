import { Icon } from "@bfirst/components-icon";
import { HCF } from "@bfirst/components-layout";
import { FeatureStoryList } from "@bfirst/components-stories";
import { Breadcrumbs, Button, Input } from "@bfirst/material-tailwind";
import { Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function List() {
  const [searchInput, setSearchInput] = useState("");

  let debounceTimer: string | number | NodeJS.Timeout | undefined;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
      setSearchInput(e.target.value);
    }, 500);
  };

  return (
    <HCF>
      <HCF.Header>
        <div className="flex flex-row w-full justify-between items-center">
          <Breadcrumbs>
            <Link to="/">
              <Icon name="home" variant="text" />
            </Link>
            <Link to="/stories">Stories</Link>
          </Breadcrumbs>
          <div className="flex items-center gap-x-4">
            <div className="relative hidden md:block">
              <Input onChange={handleInputChange} label="Search" className="pr-8" />
              <div className="absolute top-1/2 -translate-y-1/2 right-1">
                <Icon size={20} name="search" variant="text" />
              </div>
            </div>

            {/* Drop Down Input  */}
            <div className="block md:hidden">
              <Menu
                dismiss={{
                  itemPress: false,
                }}
                placement="left"
              >
                <MenuHandler>
                  <Button className="bg-white m-0 p-0">
                    <Icon size={20} name="search" variant="text" />
                  </Button>
                </MenuHandler>
                <MenuList className="p-0.5 m-0">
                  <input onChange={handleInputChange} type="text" placeholder="Search" />
                </MenuList>
              </Menu>
            </div>

            <Link to="/stories/create-story">
              <div className="block md:hidden">
                <Icon size={20} name="create" variant="gradient" />
              </div>
              <div className="hidden md:block">
                <Button size="sm"> Create Story</Button>
              </div>
            </Link>
          </div>
        </div>
      </HCF.Header>
      <HCF.Content>
        <FeatureStoryList searchInput={searchInput} />
      </HCF.Content>
    </HCF>
  );
}
