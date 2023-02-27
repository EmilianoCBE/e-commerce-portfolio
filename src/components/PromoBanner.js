import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import bannerSeason from '/public/banner-new-season.jpg'

import {CenteredLabel} from './CenteredLabel'

export function PromoBanner({image, children}) {
    return (
        <Box position='relative'>
          <Image src={image} alt='' />
          <Box position='absolute' left='50%' top='50%' transform='translate(-50%, -50%)'>               
            <CenteredLabel>
              {children}
            </CenteredLabel>              
          </Box>
        </Box>
    );
}