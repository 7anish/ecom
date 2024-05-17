import { Box, Button, HStack, Text, VStack, ButtonGroup } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import data from './JsonFiles/Product.json'

const Home = () => {
    const [category, setcategory] = useState('all');

    return (
        <VStack>
            <ButtonGroup  borderBottom={'3px solid #4299E1'} mt={'40px'} spacing={4} w={'fit-content'} h={'fit-content'} >
                <Button variant={'ghost'} colorScheme='blue' onClick={() => setcategory('all')}>All</Button>
                <Button variant={'ghost'} colorScheme='blue' onClick={() => setcategory('elec')}>Electronics Assories</Button>
                <Button variant={'ghost'} colorScheme='blue' onClick={() => setcategory('skin')}>Skin Care</Button>
                <Button variant={'ghost'} colorScheme='blue' onClick={() => setcategory('gros')}>Groceries</Button>
                <Button variant={'ghost'} colorScheme='blue' onClick={() => setcategory('deco')}>Home Decroation</Button>
            </ButtonGroup>

            {/* displaying items */}

            <Box display={'grid'} gap={'40px'} gridTemplateColumns={'repeat(auto-fill, minmax(250px, 1fr))'} gridColumn={'3'} w={'full'} h={'fit-content'} paddingInline={'30px'} paddingBlock={'50px'}>
                {
                    data.map((item) => {
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
                        else if(category === 'all'){
                            return <ItemCard key={item.id} name={item.title} price={item.price} img={item.thumbnail} desc={item.description} id={item.id} ></ItemCard>
                        }
                    })
                }
            </Box>
        </VStack>
    )
}

export default Home
