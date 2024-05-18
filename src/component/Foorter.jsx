import { Box, HStack, Heading,Text } from '@chakra-ui/react'
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailLock } from "react-icons/md";



const Foorter = () => {
  return (
    <HStack bgColor={'blue.400'} w={'full'} h={['20vh','18vh']} justifyContent={'space-between'} alignItems={'center'} paddingInline={['20px','70px']}>
    <Box>
      <Text fontSize={'3xl'} fontFamily={'serif'} fontWeight={'900'}>E-com</Text>
    </Box>
    <Box borderLeft={'1px solid black'} pl={'20px'}>
      <Heading fontSize={['2xl','3xl']}>Contact info</Heading>
      <Text fontSize={['sm','md']} display={'flex'} justifyContent={'start'} align={'center'}><FaPhoneAlt />123-456-1890</Text>
      <Text fontSize={['sm','md']} display={'flex'} justifyContent={'start'} align={'center'}><MdOutlineMailLock />xyz@gmail.com</Text>
    </Box>

    </HStack>
  )
}

export default Foorter
