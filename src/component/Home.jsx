import { Box, Button, HStack, Text, VStack, ButtonGroup , useMediaQuery } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import data1 from './JsonFiles/Product.json'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { setinitaldata } from '../Store/Room'
import { useDispatch } from 'react-redux'




const Home = () => {
    const dispatch = useDispatch()
    const[data , setdata] = useState(data1);
    const [category, setcategory] = useState('all');
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [isLargerThan750] = useMediaQuery('(min-width: 750px)')

    useEffect(()=>{

        const addthedata = (payload) =>{
            dispatch(setinitaldata(payload))
        }
        const fetchdata = async ()=>{
            const res  = await  fetch('https://dummyjson.com/products');
            const data =  await res.json()
            console.log(data.products)
            setdata(data.products)
            addthedata(data.products)
        }
        // fetchdata();
    },[])

    return (
        <VStack>
            { isLargerThan750  ?
            <ButtonGroup borderBottom={'3px solid #4299E1'} mt={'40px'} spacing={4} w={'fit-content'} h={'fit-content'} >
                <Button variant={'ghost'} colorScheme='blue' onClick={() => setcategory('all')}>All</Button>
                <Button variant={'ghost'} colorScheme='blue' onClick={() => setcategory('elec')}>Electronic Accessories</Button>
                <Button variant={'ghost'} colorScheme='blue' onClick={() => setcategory('skin')}>Skin Care</Button>
                <Button variant={'ghost'} colorScheme='blue' onClick={() => setcategory('gros')}>Grocery</Button>
                <Button variant={'ghost'} colorScheme='blue' onClick={() => setcategory('deco')}>Home Decoration</Button>
            </ButtonGroup>

             : 
             <>
             <Button variant={'outline'} mt={'30px'} w={'80%'} colorScheme='blue' onClick={onOpen}>Category</Button>
             <Drawer 
                isOpen={isOpen}
                onClose={onClose}
                placement='top'
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Category</DrawerHeader>
                    <DrawerBody>
                        <VStack>
                            <Button variant={'ghost'} colorScheme='blue' onClick={() => {
                                setcategory('all')
                                onClose()
                            }}>All</Button>
                            <Button variant={'ghost'} colorScheme='blue' onClick={() => {
                                setcategory('elec')
                                onClose()
                            }}>Electronic Accessories </Button>
                            <Button variant={'ghost'} colorScheme='blue' onClick={() => {
                                setcategory('skin')
                                onClose()
                            }}>Skin Care</Button>
                            <Button variant={'ghost'} colorScheme='blue' onClick={() => {
                                setcategory('gros')
                                onClose()
                            }}>Grocery</Button>
                            <Button variant={'ghost'} colorScheme='blue' onClick={() => {
                                setcategory('deco')
                                onClose()
                            }}>Home Decoration</Button>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            </> }

            {/* displaying items */}

            <Box display={'grid'} gap={'40px'} gridTemplateColumns={'repeat(auto-fill, minmax(250px, 1fr))'} gridColumn={'3'} w={'full'} h={'fit-content'} paddingInline={'30px'} paddingBlock={'50px'}>
                {
                    data[0].products.map((item) => {
                        if (category === 'elec') {
                            if (item.category === 'smartphones' || item.category === 'laptops') {
                                return <ItemCard key={item.id} name={item.title} price={item.price} img={item.thumbnail} desc={item.description} id={item.id} ></ItemCard>
                            }
                        }
                        else if (category === 'skin') {
                            if (item.category === 'fragrances' || item.category === 'skincare') {
                                return <ItemCard key={item.id} name={item.title} price={item.price} img={item.thumbnail} desc={item.description} id={item.id} ></ItemCard>
                            }
                        }
                        else if (category === 'gros') {
                            if (item.category === 'groceries') {
                                return <ItemCard key={item.id} name={item.title} price={item.price} img={item.thumbnail} desc={item.description} id={item.id} ></ItemCard>
                            }
                        }
                        else if (category === 'deco') {
                            if (item.category === 'home-decoration') {
                                return <ItemCard key={item.id} name={item.title} price={item.price} img={item.thumbnail} desc={item.description} id={item.id} ></ItemCard>
                            }
                        }
                        else if (category === 'all') {
                            return <ItemCard key={item.id} name={item.title} price={item.price} img={item.thumbnail} desc={item.description} id={item.id} ></ItemCard>
                        }
                    })
                }
            </Box>
        </VStack>
    )
}

export default Home
