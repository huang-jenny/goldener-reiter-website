'use client';
import { Box } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useEffect } from 'react';

const About = ({ goreiInfo }) => {
  return (
    <>
      <Box>{documentToReactComponents(goreiInfo.informationen.json)}</Box>
      <div>{goreiInfo.instagramLink}</div>
    </>
  );
};

export default About;
