import { ShareIcon } from "@/icons/Share";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Flex, Heading, Link, ListIcon, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { Rating } from "./Rating";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'

export function PDPHeader({id, title, rating, category}) {
    return (
      <Box bg="gray.100" p="1rem">
        <Container>
          <Flex justifyContent="space-between" alignItems="center">
            
            <Breadcrumb textTransform='capitalize' fontSize='sm' separator={<ChevronRightIcon />}>
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} href='/'>Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink as={Link} href={`/category/${category}`}>{category}</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage isLastChild>
                <BreadcrumbLink href={`/category/${category}`}>{title}</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>

            <Button color="gray" leftIcon={<ShareIcon w={18} h={18} />}>
              Share
            </Button>
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
              <Text fontWeight="bold">Availability: In Stock</Text>
            </Flex>
          </Flex>
        </Container>
      </Box>
    );
}