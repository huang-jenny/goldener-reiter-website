import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { UnorderedList, ListItem, Text, Heading, Box } from '@chakra-ui/react';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

export const formatRichText = (text) => {
  const renderOptions = {
    renderText: (text) => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
    renderNode: {
      // eslint-disable-next-line react/no-unstable-nested-components
      [BLOCKS.PARAGRAPH]: (node, children) => <Text py={2}>{children}</Text>,
      [BLOCKS.DOCUMENT]: (node, children) => <Box>{children}</Box>,
      [BLOCKS.HEADING_1]: (node, children) => <Heading variant="title">{children}</Heading>,
      [BLOCKS.HEADING_2]: (node, children) => <Heading variant="subtitle">{children}</Heading>,
      // eslint-disable-next-line react/no-unstable-nested-components
      [BLOCKS.UL_LIST]: (node, children) => (
        <UnorderedList textAlign="start">{children}</UnorderedList>
      ),
      // eslint-disable-next-line react/no-unstable-nested-components
      [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>
    },
    renderMark: {
      [MARKS.BOLD]: (text) => (
        <Box py={2} fontWeight={800} as="span">
          {text}
        </Box>
      )
    }
  };
  return documentToReactComponents(text, renderOptions);
};
