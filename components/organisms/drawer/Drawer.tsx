import { FC } from "react";
import {Drawer,DrawerBody,DrawerCloseButton,DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure} from "@chakra-ui/react";

const FixedStackContent = ({})=>{
    
}

export const MainDrawer:FC = ()=>{
    const {isOpen, onClose} = useDisclosure(); 
    return (
        <>
        <Drawer isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>
                        Sample
                    </DrawerHeader>
                    <DrawerBody>
                        こんにちは
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
        </>
    )
}