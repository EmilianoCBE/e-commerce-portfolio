import { ShareIcon } from "@/icons/Share";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Flex, Heading, Link, ListIcon, ListItem, Text, UnorderedList } from "@chakra-ui/react";
// import { title } from "process";
import { Rating } from "./Rating";

export function PDPHeader({id, title, rating, category}) {
    return (
        <Box bg="gray.100" p="1rem">
          <Container>
            <Flex justifyContent="space-between" alignItems="center">
              <Flex fontSize="sm" as={UnorderedList} listStyleType="none" m="0" gap={"2"}>
                <ListItem whiteSpace="nowrap">
                  <Link href="#">Home</Link>
                  <ListIcon w="18" h="18" as={ChevronRightIcon} color="gray.700" ml="2" mr="0" />
                </ListItem>
                <ListItem whiteSpace="nowrap" textTransform="capitalize">
                  <Link href={`${category}`}>{category}</Link>
                  <ListIcon w="18" h="18" as={ChevronRightIcon} color="gray.700" ml="2" mr="0" />
                </ListItem>
                <ListItem>
                  <Text noOfLines={1}>{title}</Text>
                </ListItem>
              </Flex>
              <Button color="gray" leftIcon={<ShareIcon w={18} h={18} />}>Share</Button>
            </Flex>
            <Heading as="h1" fontSize="2xl" textAlign="center" my="1.5rem">
              {title}
            </Heading>
            <Flex justifyContent="space-between" alignItems="center">
              <Text>
                <Flex gap="0.5rem" alignItems="baseline">
                  <Rating rate={rating.rate} />
                  <Text fontSize="sm">2 reviews</Text>
                </Flex>
              </Text>
              <Flex gap="1rem" fontSize="sm">
                <Text fontWeight="bold">Sku: {id}</Text>
                <Text fontWeight="bold">Availabiliti: In Stock</Text>
              </Flex>
            </Flex>
          </Container>
        </Box>
    );
}