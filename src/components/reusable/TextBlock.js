'use client';

import { Heading, Box } from '@chakra-ui/react';
const TextBlock = ({
  children,
  bgcolor,
  color,
  title,
  width,
  textAlign,
  flex,
  flexGrow,
  flexBasis,
  flexShrink,
  hasPadding = true
}) => {
  return (

    <Box
      flex={flex}
      width={width}
      flexGrow={flexGrow}
      flexBasis={flexBasis}
      flexShrink={flexShrink}
      bgColor={bgcolor}
      h="100%"
      overflowY="auto"
      textAlign={textAlign}
      wordBreak="break-word"
      pb={hasPadding ? ['4%', '4%', '3%'] : 0}
      pt={['4%', '4%', '3%', hasPadding ? ['2%'] : 0]} // TODO: zu dirty
      px={hasPadding ? ['5%', '4%', '3%'] : 0}
      color={color}>
      {title && (
        <Heading
          variant="title"
          color={color}
        >
          {title}
        </Heading>
      )}
      {children}
    </Box>
  );
};

export default TextBlock;
