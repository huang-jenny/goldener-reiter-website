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
  hasPadding = true
}) => {
  return (
    // <Box flex={width ? 'none' : 'auto'} width={width}>
    <Box flex={flex} width={width}>
      <Box
        bgColor={bgcolor}
        id="test"
        h="100%"
        overflowY="auto"
        textAlign={textAlign}
        wordBreak="break-word"
        py={hasPadding ? '6%' : 0}
        px={hasPadding ? ['4%', '5%', '6%', '7%', '8%'] : 0} //{[2, 3, 5, 7, 10]}
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
    </Box>
  );
};

export default TextBlock;
