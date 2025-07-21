import { useBreakpointValue } from '@chakra-ui/react';

const useIsMobile = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return isMobile;
};

export default useIsMobile;
