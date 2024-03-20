import { Icon } from "@bfirst/components-icon";
import { Button, Input, Popover, PopoverContent, PopoverHandler, Typography } from "@bfirst/material-tailwind";
import { useState } from "react";
import { useForm } from "react-hook-form";


interface UpdateModalProps{
  itemName: string;
  onSubmit: (data:any)=> void;
}

export function UpdateModal({onSubmit, itemName}: UpdateModalProps){
  const [open, setOpen] = useState<boolean | undefined>();
  const { register, handleSubmit } = useForm();
  const handleUpdate = function(data:any){
    onSubmit(data);
    setOpen(false);
  }

  return  <Popover placement="left" open={open}>
  <PopoverHandler>
    <button>
    <Icon name="pencil"/>
    </button>
  </PopoverHandler>
  <PopoverContent className="w-96">
    <Typography variant="h6" color="blue-gray" className="mb-6 text-center">
    Update the {itemName}
    </Typography>
    
        <Typography variant="small" color="blue-gray" className="mb-1 font-bold">
          Edit {itemName}
        </Typography>
        <form onSubmit={handleSubmit(handleUpdate)} className="flex gap-2">
          <Input
          {...register("updatedInput",{required: "Input value is required !"} )}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Button type="submit" variant="gradient" className="flex-shrink-0">
            Update
          </Button>
        </form>
  </PopoverContent>
</Popover>
}