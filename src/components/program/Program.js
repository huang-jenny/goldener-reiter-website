import formatDate from '@/lib/formatDate';
import { Box, Divider, Heading, VStack, Link } from '@chakra-ui/react';
import { v4 } from 'uuid';

const Program = ({ events }) => {
  return (
    <VStack w="100%" align="left" spacing={6}>
      <Divider borderColor="blue" />
      {events?.map((event) => (
        <Box key={v4()}>
          <Heading textTransform="uppercase" variant="date" my={2}>
            {formatDate(event.date)}
          </Heading>
          <Box textTransform="uppercase">{event.eventname}</Box>
          {event.lineupCollection?.items?.map((lineup) => (
            <Link
              // textDecoration={lineup.link ? 'underline' : 'none'}
              key={v4()}
              href={lineup.link}
              isExternal
              pointerEvents={lineup.link ? '' : 'none'}>
              <Box>{lineup.artistName} </Box>
            </Link>
          ))}
        </Box>
      ))}
    </VStack>
  );
};

export default Program;
