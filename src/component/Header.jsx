import { Box, HStack, Input, Text, InputGroup,InputRightAddon } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";



const Header = () => {
    return (
        <HStack w={'full'} h={'10vh'} bgColor={'blue.400'} justifyContent={'space-between'}  paddingInline={'50px'} alignItems={'center'} >
            <Text fontSize={'3xl'} fontWeight={'900'} fontFamily={'serif'}>E-com</Text>
            <Box>
            <InputGroup>
                <Input type='text' placeholder='Seacrh Item' bgColor={'white'} w={'500px'}/>
                <InputRightAddon><FaSearch /></InputRightAddon>
            </InputGroup>
            </Box>
            <Text fontSize={'3xl'}><Link to={'./cart'} ><FaCartShopping /></Link></Text>
        </HStack>
    )
}

export default Header
