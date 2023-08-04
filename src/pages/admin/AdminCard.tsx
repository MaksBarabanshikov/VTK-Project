import { SlideMotion, VTKPopover } from '@/shared/ui';
import { Box, Card, Flex, Grid, GridItem, Heading, IconButton, Image, Spacer, Stack, Text } from '@chakra-ui/react';

import cardImage from '@/shared/assets/img/example-card.png';
import { motion } from 'framer-motion';
import { Search } from '@/feature/Search';
import { VTKDeckIcon, VTKHumbIcon } from '@/app/libs/icons.tsx';
import { Pagination } from '@/feature/Pagination';
import { useState } from 'react';
const AdminCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cards = [cardImage, cardImage, cardImage, cardImage, cardImage, cardImage, cardImage, cardImage, cardImage, cardImage];
  return (
        <SlideMotion>
            <Flex alignItems={'center'} pr={20} mb={10}>
                <Stack>
                    <Heading>
                        Card
                    </Heading>
                    <Text>
                        Ищу и редачу
                    </Text>
                </Stack>
                <Spacer />
                <Grid gridTemplateColumns={'10fr 1fr 1fr'} alignItems={'center'} gap={'24px'}>
                    <GridItem h={'full'}>
                        <Search variant={'shadowed'} />
                    </GridItem>
                    <GridItem>
                        <VTKPopover triggerNode={
                            <IconButton aria-label={'hmb'} size={'lg'} variant={'shadowed'}><VTKHumbIcon/></IconButton>
                        }>
                            test test test
                            test test test
                            test test test
                            test test test
                            test test test
                            test test test
                        </VTKPopover>
                    </GridItem>
                    <GridItem>
                        <IconButton aria-label={'hmb'} size={'lg'} color={'red.base'} variant={'shadowed'}><VTKDeckIcon/></IconButton>
                    </GridItem>
                </Grid>
            </Flex>
            <Flex flexWrap={'wrap'} gap={51}>
                { cards.map((item) => (
                    <Card
                        as={motion.div}
                        whileHover={{ scale: 1.05 }}
                        filter={'blur(0px)'}
                        cursor={'pointer'}
                        key={Math.random()}
                        maxWidth={'33%'}
                        borderRadius={'20px'}
                        overflow={'hidden'}
                    >
                        <Image  src={item} />
                    </Card>
                )) }
            </Flex>
            <Pagination totalCount={20} currentPage={currentPage} pageSize={5} onPageChange={(page: number) => setCurrentPage(page)} />
            <Box w={'full'} h={'50px'} opacity={0}/>
        </SlideMotion>
  );
};

export default AdminCard;