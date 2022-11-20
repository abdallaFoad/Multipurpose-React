import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const useScroll = (limit = .4) => {
  const controls = useAnimation();
  const [element, view] = useInView({ limited: limit });

  view ? controls.start('show') : controls.start('hidden');
  
  return [element, controls];
}