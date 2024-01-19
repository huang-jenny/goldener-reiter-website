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
      pt={['15px', '7px', hasPadding ? ['2%'] : 0]}
      px={hasPadding ? ['3%'] : 0} //{[2, 3, 5, 7, 10]}
      color={color}>
      {title && (
        <Heading
          variant="title"
          mb={8}
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
