import formatDate from '@/lib/formatDate';
import { Box, Divider, Text, Heading, VStack, Link } from '@chakra-ui/react';

import { v4 } from 'uuid';

const Program = ({ events }) => {
  return (
    <>
      <Heading variant="title" color="blue" mb={4}>
        Coming Up
      </Heading>
      <Divider borderColor="blue" />
      <VStack w="100%" align="left" spacing={[5, 5, 6, 7, 8]}>
        {events?.map((event) => (
          <Box key={v4()}>
            <Heading textTransform="uppercase" variant="date" mb={3}>
              {formatDate(event.date)}
            </Heading>
            <Box>
              {event.eventname && (
                <>
                  <Heading variant="eventname">
                    <Text as="span" textTransform="uppercase">
                      {event.eventname}
                    </Text>
                    <Text as="span" fontSize="0.7em">
                      {event.lineupCollection.items.length > 0 && <> with</>}{' '}
                    </Text>
                  </Heading>
                </>
              )}
              {event.lineupCollection?.items?.map((lineup) => (
                <Box key={v4()} my={2}>
                  <Heading variant="lineup">
                    <Link
                      href={lineup.link}
                      textTransform="uppercase"
                      isExternal
                      pointerEvents={lineup.link ? '' : 'none'}
                    >
                      {lineup.artistName}{' '}
                    </Link>
                  </Heading>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
        {events.length < 4 ? <Box mt={2}>more to be announced soon</Box> : null}
      </VStack>
    </>
  );
};

export default Program;
