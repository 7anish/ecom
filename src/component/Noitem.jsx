import { Box , Button, Heading, Image , Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Noitem = () => {
  return (
    <Box w={'100vw'} h={'80vh'} display={'grid'} placeContent={'center'}>
        <Image w={'500px'} h={'350px'} src='https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png'></Image>
        <Heading color={'gray'} textAlign={'center'}>Your Cart Is Empty!</Heading>
        <Heading textAlign={'center'} textDecoration={'underline'} fontSize={'2xl'} color={'blue.400'}><Link to={'/'}>Add Item</Link></Heading>
    </Box>
  )
}

export default Noitem
