import { ShareIcon } from "@/icons/Share";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Container, Flex, Heading, Link} from "@chakra-ui/react";

export function HeaderSecondary({children, breadcrumb}) {
    const title = breadcrumb[breadcrumb.length - 1].text

    return (
      <Box bg="gray.100" p="1rem">
        <Container>
            <Flex justifyContent="space-between" alignItems="center">
              <Breadcrumb textTransform='capitalize' fontSize='sm' separator={<ChevronRightIcon />}>
                <BreadcrumbItem>
                  <BreadcrumbLink as={Link} href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                {breadcrumb.map(({href, text}, index)=>{
                  return(
                    <BreadcrumbItem key={index}>
                      <BreadcrumbLink as={Link} href={href}>
                        {text}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  )
                })}
              </Breadcrumb>

              <Button color="gray" leftIcon={<ShareIcon w={18} h={18} />}>
                Share
              </Button>
            </Flex>
            <Heading textTransform="capitalize" as="h1" fontSize="2xl" textAlign="center" my="1.5rem">
              {title}
            </Heading>
            {children}
          </Container>
      </Box>
    );
}