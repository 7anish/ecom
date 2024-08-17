import React from 'react'
import { Image, Card, CardHeader, CardBody, CardFooter, Stack, Text, Button, ButtonGroup, Heading, Divider } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { addtocart } from '../Store/Room'
import toast, { Toaster } from 'react-hot-toast'





const ItemCard = ({ name, desc, price, img, id }) => {
    const dispatch = useDispatch();

    const addnewitem = (payload) => {
        dispatch(addtocart(payload));
    }
    return (
        <Card shadow={'lg'} transition={'all .3s'} _hover={{
            shadow: '2xl',
            border: '3px solid #4299E1'
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
                    <Text color='blue.600' fontSize='2xl' >
                        {`$${price}`}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <Button alignSelf={'end'} colorScheme='blue' onClick={() => {
                    addnewitem(id)
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
                }}>
                    Add to cart
                </Button>
                <Toaster
                    position='bottom-center'
                />
            </CardFooter>
        </Card>
    )
}

export default ItemCard
