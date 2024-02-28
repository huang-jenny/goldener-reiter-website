import { Heading, Box, useTheme } from '@chakra-ui/react';
const TextBlock = ({
  children,
  bgcolor,
  color,
  title,
  width,
  textAlign,
  textShadow,
  flex,
  flexGrow,
  flexBasis,
  flexShrink,
  hasPadding = true
}) => {
  return (
    // <Box flex={width ? 'none' : 'auto'} width={width}>
    // <Box>

    <Box
      flex={flex}
      width={width}
      flexGrow={flexGrow}
      flexBasis={flexBasis}
      flexShrink={flexShrink}
      bgColor={bgcolor}
      // id="test"
      h="100%"
      // w="100%"
      overflowY="auto"
      textAlign={textAlign}
      wordBreak="break-word"
      pb={hasPadding ? ['2%'] : 0}
      pt={['18px', '7px', hasPadding ? ['2%'] : 0]} // TODO: zu dirty
      px={hasPadding ? ['5%', '4%', '3%'] : 0}
      color={color}>
      {title && (
        <Heading
          variant="title"
          // mb={[4, 6, 8]}
          // color="yellow"
          // textShadow={textShadow}
          color={color}
          // textShadow={`2px -2px 0px yellow`}
        >
          {title}
        </Heading>
      )}
      {children}
    </Box>
    // </Box>
  );
};

export default TextBlock;
