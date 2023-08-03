import { SlideMotion } from '@/shared/ui';
import { Card, Flex, Heading, Image } from '@chakra-ui/react';

import cardImage from '@/shared/assets/img/example-card.png';
import { motion } from 'framer-motion';
const AdminCard = () => {
  const cards = [cardImage, cardImage, cardImage, cardImage, cardImage, cardImage, cardImage, cardImage, cardImage, cardImage];
  return (
        <SlideMotion>
            <Heading>
                Card
            </Heading>
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
        </SlideMotion>
  );
};

export default AdminCard;