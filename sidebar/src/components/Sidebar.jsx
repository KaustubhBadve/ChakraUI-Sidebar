import React from 'react'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    Box,
  } from '@chakra-ui/react'
  import { Icon } from '@chakra-ui/react'
  import { MdGroupWork, MdReceipt, MdSettings } from 'react-icons/md'
  import { FiAperture, FiDownloadCloud,} from "react-icons/fi"
export function Sidebr() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      
      <Drawer
        isOpen={onOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader fontWeight="600" fontSize="30px">Logo</DrawerHeader>

          <DrawerBody lineHeight="70px" fontSize="20px">
            <Box display="flex" alignItems="center"><FiDownloadCloud/>Home</Box>
            <Box><Icon as={MdReceipt} />Trending</Box>
            <Box display="flex" alignItems="center"><FiAperture/>Explore</Box>
            <Box><Icon as={MdGroupWork  } />Favourites</Box>
            <Box><Icon as={MdSettings} />Settings</Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

