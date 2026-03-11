import { SlideDeck } from '@/components/SlideDeck';
import { Slide1 } from '@/components/slides/Slide1';
import { Slide2 } from '@/components/slides/Slide2';
import { Slide3 } from '@/components/slides/Slide3';
import { Slide4 } from '@/components/slides/Slide4';
import { Slide5 } from '@/components/slides/Slide5';
import { Slide6 } from '@/components/slides/Slide6';
import { Slide7 } from '@/components/slides/Slide7';
import { Slide8 } from '@/components/slides/Slide8';
import { Slide9 } from '@/components/slides/Slide9';
import { Slide10 } from '@/components/slides/Slide10';

export default function Home() {
  const slides = [
    <Slide1 key="1" />,
    <Slide2 key="2" />,
    <Slide3 key="3" />,
    <Slide4 key="4" />,
    <Slide5 key="5" />,
    <Slide6 key="6" />,
    <Slide7 key="7" />,
    <Slide8 key="8" />,
    <Slide9 key="9" />,
    <Slide10 key="10" />,
  ];

  return <SlideDeck slides={slides} />;
}
