import { Box, HStack, Input, Text, InputGroup,InputRightAddon, Heading , useMediaQuery} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';



const Header = () => {

    const [isLargerThan900] = useMediaQuery('(min-width: 900px)')

    const total = useSelector((state)=>{
        return state.carteditems.totalquatity
    })
    return (
        <HStack w={'full'} h={'10vh'} bgColor={'blue.400'} justifyContent={'space-between'}  paddingInline={['20px','50px']} alignItems={'center'} >
            <Heading fontSize={'3xl'} fontFamily={'serif'}><Link to={'/'}>E-com</Link></Heading>
            <Box display={isLargerThan900 ? 'unset' : 'none'  }>
            <InputGroup>
                <Input type='text' placeholder='Seacrh Item' bgColor={'white'} w={'500px'}/>
                <InputRightAddon><FaSearch /></InputRightAddon>
            </InputGroup>
            </Box>
            <Heading fontSize={'4xl'} position={'relative'}><Link to={'./cart'} ><FaCartShopping  /></Link><Text position={'absolute'} top={'-30%'} right={'-30%'} bgColor={'red.500'} color={'white'} w={'20px'} h={'20px'} fontSize={'sm'}  fontWeight={'bolder'} display={'grid'} placeContent={'center'} borderRadius={'50%'}>{total}</Text></Heading>
            
        </HStack>
    )
}

export default Header
