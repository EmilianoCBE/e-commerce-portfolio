import Image from 'next/image'

import { CenteredLabel } from '@/components/CenteredLabel'

import { slugify } from '@/utils/slugify'

import { Grid, GridItem } from '@chakra-ui/react'

export function HomeCategories(props) {
    return (
        <Grid templateColumns="540px 255px 255px" gap="1rem" templateRows="200px 260px">
            {props.categories.map((cat, key) => {
                    const slug = slugify(cat);
                    const imageUrl = `/pic-categories-${slug}.jpg`;
                    let props = {
                        position: 'relative',
                        w: '100%',
                        h: '100%'
                    };

                    if (key === 0) {
                        props.rowSpan = 2;
                    }

                    if (key === props.categories.length - 1) {
                        props.colSpan = 2;
                    }

                    return (
                        <GridItem {...props} key={key}>
                            <Image src={imageUrl} fill={true} alt={cat} />
                            <CenteredLabel>{cat}</CenteredLabel>
                        </GridItem>
                    )
                })
            }
        </Grid>
    );
}