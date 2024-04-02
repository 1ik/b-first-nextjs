import { Link } from "react-router-dom";
import { HCF } from "@bfirst/components-layout";
import { Breadcrumbs, Button, Input } from "@bfirst/material-tailwind";
import { StoriesList } from "@bfirst/components-stories";
import { Icon } from "@bfirst/components-icon";
import { Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import {  useState } from "react";

export default function List() {
  const [searchInput,setSearchInput]= useState("")
  const [lastSearchTime, setLastSearchTime] = useState(0);
  const [timer, setTimer] = useState<number | undefined>(undefined);
  
  const handleInputChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
   setSearchInput(e.target.value);
  }

  const debounceDelay = 300;

  const throttledSearch = () => {
    const currentTime = Date.now();
    if (currentTime - lastSearchTime >= debounceDelay) {
      setLastSearchTime(currentTime);
    }
  };

  const handlePaste = (event: any) => {
    event.preventDefault();
    const pastedText = event.clipboardData.getData("text/plain");
    setSearchInput(pastedText);
    clearTimeout(timer);
    
    const newTimer = setTimeout(() => {
      throttledSearch();
    }, 100) as unknown as number;
    setTimer(newTimer);
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
              <Input onPaste={handlePaste} onChange={handleInputChange} label="Search" className="pr-8"/>
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
              <input onPaste={handlePaste} onChange={handleInputChange} type="text" placeholder="Search" />
              </MenuList>
            </Menu>

            </div>

            <Link to="/stories/create-story">
             <div className="block md:hidden">
             <Icon size={25} name="create" variant="text" />
             </div>
             <div className="hidden md:block">
               <Button size="sm"> Create Story</Button>
             </div>
            </Link>
          </div>
        </div>
      </HCF.Header>
      <HCF.Content>
        <StoriesList searchInput={searchInput}/>
      </HCF.Content>
    </HCF>
  );
}
