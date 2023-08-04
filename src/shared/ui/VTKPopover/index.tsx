import { FC, ReactNode } from 'react';
import {
  Popover,
  PopoverArrow, PopoverBody,
  PopoverCloseButton,
  PopoverContent, PopoverHeader,
  PopoverProps,
  PopoverTrigger,
} from '@chakra-ui/react';

interface VTKPopoverProp extends PopoverProps {
  triggerNode: ReactNode;
  children: ReactNode;
  title?: string;
}

export const VTKPopover:FC<VTKPopoverProp> = ({ triggerNode, children, title,  ...rest }) => {
  return (
        <Popover {...rest}>
            <PopoverTrigger>
                { triggerNode }
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                {title && <PopoverHeader>{title}</PopoverHeader>}
                <PopoverBody>{ children }</PopoverBody>
            </PopoverContent>
        </Popover>
  );
};