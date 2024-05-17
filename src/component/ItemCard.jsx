import React from 'react'
import { Image, Card, CardHeader, CardBody, CardFooter, Stack, Text, Button, ButtonGroup, Heading, Divider } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import cartitem from '../Store/Room'
import { addtocart } from '../Store/Room'





const ItemCard = ({ name, desc, price, img, id }) => {
    const dispatch = useDispatch();

    const addnewitem =(payload)=>{
        dispatch(addtocart(payload));
    }
    return (
        <Card shadow={'lg'} transition={'all .3s'} _hover={{
            shadow:'2xl',
            border:'3px solid #4299E1'
        }}>
            <CardBody>
                <Image
                    src={img}
                    alt={name}
                    borderRadius='lg'
                    w={'100%'}
                    h={'200px'}
                    objectFit={'contain'}
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{name}</Heading>
                    <Text>
                        {desc}
                    </Text>
                    <Text  color='blue.600' fontSize='2xl' >
                        {`$${price}`}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                    <Button alignSelf={'end'} colorScheme='blue' onClick={()=>{
                        addnewitem(id)
                    }}>
                        Add to cart
                    </Button>
            </CardFooter>
        </Card>
    )
}

export default ItemCard
