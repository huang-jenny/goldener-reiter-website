import { dbxlnightfever } from '@/app/fonts';
import formatDate from '@/lib/formatDate';
import { Box, Divider, Text, Heading, VStack, Link } from '@chakra-ui/react';

import { v4 } from 'uuid';

const Program = ({ events }) => {
  return (
    <VStack w="100%" align="left" spacing={[3, 5, 6, 7, 8]}>
      <Divider borderColor="blue" />
      {events?.map((event) => (
        <Box key={v4()}>
          <Heading textTransform="uppercase" variant="date" mb={2}>
            {formatDate(event.date)}
          </Heading>
          <Box>
            {event.eventname && (
              <>
                <Heading mt={4} variant="eventname">
                  <Text as="span" textTransform="uppercase">
                    {event.eventname}
                  </Text>
                  <Text as="span" fontSize="0.7em">
                    {event.lineupCollection.items.length > 0 && <> with</>}{' '}
                  </Text>
                </Heading>
                <Box></Box>
              </>
            )}
            {event.lineupCollection?.items?.map((lineup) => (
              <Box key={v4()} my={2}>
                <Heading variant="lineup">
                  <Link
                    // textDecoration={lineup.link ? 'underline' : 'none'}
                    href={lineup.link}
                    textTransform="uppercase"
                    isExternal
                    pointerEvents={lineup.link ? '' : 'none'}>
                    {lineup.artistName}{' '}
                  </Link>
                </Heading>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </VStack>
  );
};

export default Program;
