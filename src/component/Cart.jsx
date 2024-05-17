import { Box, Card, VStack,Image, Stack, CardBody, Heading ,Text, CardFooter, HStack, InputGroup, InputLeftAddon, InputRightAddon, Input, Button, Center, CardHeader, Divider} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deletefromcart } from '../Store/Room';




const Cart = () => {

  const data = useSelector((state)=>{
    return state.carteditems
  })
  const cartitem = data.allcartitems;
  const Shiping = (data.itemprice >= 500 ?  0  : 40)


  return (
    <Box w={'full'} display={'inline'} h={'100vh'}>
      <VStack overflowY={'scroll'} p={'50px'} gap={'20px'} w={'70%'} h={'100vh'} float={'left'} >
      {
        cartitem.map((i)=>{
          return <CartCard key={i.id} name={i.title} desc={i.description} img={i.thumbnail} price={i.price} id={i.id}></CartCard>
        })
      }
      </VStack>
      <Box  display={'grid'} placeContent={'center'} w={'30%'} h={'100vh'} >
      <Card w={'400px'} h={'350px'}>
        <CardHeader>
        <Heading>Order Summary</Heading>
        </CardHeader>
        <CardBody>
          <HStack justifyContent={'space-between'}><Text fontSize={'2xl'} fontWeight={'700'}>Item price :</Text><Text fontSize={'2xl'} fontWeight={'700'} >{`$${data.itemprice}`}</Text></HStack>
          <HStack justifyContent={'space-between'}><Text fontSize={'2xl'} fontWeight={'700'}>Shiping Charges :</Text><Text fontSize={'2xl'} fontWeight={'700'}>{`$${Shiping}`}</Text></HStack>
          <Divider />
          <HStack justifyContent={'space-between'}><Text fontSize={'2xl'} fontWeight={'700'}>Total price :</Text><Text fontSize={'2xl'} fontWeight={'700'}>{`$${data.totalprice}`}</Text></HStack>
        </CardBody>
        <CardFooter >
          <Button w={'full'} colorScheme='blue'>Place order</Button>
        </CardFooter>
      </Card>
      </Box>

    </Box>
  )
}

const CartCard =({name , desc ,img ,price ,id})=>{
  const dispatch = useDispatch()

  const deleteitem = (payload)=>{
    dispatch(deletefromcart(payload))
  }

  return(
    <Card w={'100%'} minH={'250px'} 
      direction={{base:'column', sm:'row'}} overflow={'hidden'}  variant={'outline'}>
      <Image w={'250px'} h={'250px'} objectFit={'contain'} src={img}></Image>
      <Stack >
        <CardBody >
          <Heading mb={'10px'} fontSize={'xl'}>{name}</Heading>
          <Text mb={'10px'}>{desc}</Text>
          <Heading fontSize={'md'}>{`$${price}`}</Heading>
        </CardBody>
        <CardFooter >
          <HStack>
            <InputGroup>
              <InputLeftAddon cursor={'pointer'}>-</InputLeftAddon>
              <Input w={'10px'} placeholder='1'  type='number'></Input>
              <InputRightAddon cursor={'pointer'}>+</InputRightAddon>
            </InputGroup>
            <Button fontSize={'24px'} onClick={()=>{
              deleteitem(id)
            }}><MdDelete /></Button>
          </HStack>
        </CardFooter>
      </Stack>
      </Card>
  )
}

export default Cart
