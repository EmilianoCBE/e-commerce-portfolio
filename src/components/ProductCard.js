import { StarIcon } from "@chakra-ui/icons";
import { AspectRatio, Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export function ProductCard({image, title, price, rating}) {
    return (
        <Box width='100%'>
            <AspectRatio position="relative" ratio={1} maxWidth="100%" marginBottom='1rem'>
                <Image src={image} alt='' fill={true} style={{
                objectFit: 'contain'
                }} />   
            </AspectRatio>
            <Text color='gray.500' marginBottom='0.75rem' noOfLines={2}>{title}</Text>
            <Flex alignItems='center' justifyContent='space-between'>
                <Text fontWeight='bold'>{price}</Text>
                <Flex>
                <StarIcon color='orange' />
                <StarIcon color='orange' />
                <StarIcon color='orange' />
                <StarIcon color='orange' />
                <StarIcon color='gray.300' />
                </Flex>
            </Flex>
        </Box>
    );
}