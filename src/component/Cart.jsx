import { Box, Card, VStack, Image, Stack, CardBody, Heading, Text, CardFooter, HStack, InputGroup, InputLeftAddon, InputRightAddon, Input, Button, Center, CardHeader, Divider } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast'
import Noitem from './Noitem';


import { useDispatch } from 'react-redux';
import { deletefromcart } from '../Store/Room';
import { incquantity } from '../Store/Room';
import { decquantity } from '../Store/Room';



const Cart = () => {

  const data = useSelector((state) => {
    return state.carteditems
  })
  const cartitem = data.allcartitems;
  const Shiping = (data.itemprice >= 500 ? 0 : 40)


  return (
    data.totalquatity ?  <Box w={'full'} display={'flex'} flexDirection={['column-reverse','column-reverse','column-reverse','column-reverse','row']} h={['auto','auto','auto','auto','100vh']}>
    <VStack overflowY={'scroll'} p={'50px'} gap={'20px'} w={['100%','100%','100%','100%','70%']} h={['auto','auto','auto','auto','100vh']} float={'left'} >
      {
        cartitem.map((i) => {
          return <CartCard key={i.id} name={i.title} desc={i.description} img={i.thumbnail} price={i.price} quantity={i.quantity} id={i.id}></CartCard>
        })
      }
    </VStack>
    <Box  p={'30px'} display={'grid'} placeContent={'center'} w={['100%','100%','100%','100%','30%']} h={['80%','80%','80%','80%','100%']} >
      <Card w={['300px','400px']} h={['auto','350px']}>
        <CardHeader>
          <Heading>Order Summary</Heading>
        </CardHeader>
        <CardBody>
          <HStack justifyContent={'space-between'}><Text fontSize={'2xl'} fontWeight={'700'}>Item price :</Text><Text fontSize={'2xl'} fontWeight={'700'} >{`$${data.itemprice}`}</Text></HStack>
          <HStack justifyContent={'space-between'}><Text fontSize={'2xl'} fontWeight={'700'}>Shipping  Charges :</Text><Text fontSize={'2xl'} fontWeight={'700'}>{`$${Shiping}`}</Text></HStack>
          <Divider />
          <HStack justifyContent={'space-between'}><Text fontSize={'2xl'} fontWeight={'700'}>Total price :</Text><Text fontSize={'2xl'} fontWeight={'700'}>{`$${data.totalprice}`}</Text></HStack>
        </CardBody>
        <CardFooter >
          <Button w={'full'} colorScheme='blue'>Place order</Button>
        </CardFooter>
      </Card>
    </Box>
  </Box> : <Noitem />
  )
}




const CartCard = ({ name, desc, img, price, quantity, id }) => {
  const dispatch = useDispatch()

  const deleteitem = (payload) => {
    dispatch(deletefromcart(payload))
  }

  const increasequantity = (payload) => {
    dispatch(incquantity(payload));
  }

  const decreasequantity = (payload) => {
    if (quant.current.value == 1) {
      deleteitem(payload);
    }
    else {
      dispatch(decquantity(payload));
    }
  }

  const quant = useRef()

  useEffect(() => {
    quant.current.value = quantity
  }, [quantity])

  return (
    <Card w={'100%'} minH={'250px'}
      direction={{ base: 'column', sm: 'row' }} overflow={'hidden'} variant={'outline'}>
      <Image w={['full','250px']} h={['auto','250px']} objectFit={'contain'} src={img}></Image>
      <Stack >
        <CardBody >
          <Heading mb={'10px'} fontSize={'xl'}>{name}</Heading>
          <Text mb={'10px'}>{desc}</Text>
          <Heading fontSize={'md'}>{`$${price}`}</Heading>
        </CardBody>
        <CardFooter >
          <HStack>
            <InputGroup>
              <InputLeftAddon onClick={() => decreasequantity(id)} w={'5px'} cursor={'pointer'} >-</InputLeftAddon>
              <Input w={'45px'} readOnly ref={quant} type='number'></Input>
              <InputRightAddon onClick={() => increasequantity(id)} cursor={'pointer'}>+</InputRightAddon>
            </InputGroup>
            <Button fontSize={'24px'} onClick={() => {
              deleteitem(id)
              toast.success('Item Added To Cart', {
                style: {
                  border: '1px solid #4299E1',
                  padding: '16px',
                  color: '#4299E1',
                },
                iconTheme: {
                  primary: '#4299E1',
                  secondary: '#FFFAEE',
                },
              });
            }}><MdDelete /></Button>
            <Toaster
              position='bottom-center'
            />
          </HStack>
        </CardFooter>
      </Stack>
    </Card>
  )
}

export default Cart
