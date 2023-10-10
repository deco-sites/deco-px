import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

import { useId } from "$store/sdk/useId.ts";
import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";

export interface Props {
  title: string;
  brands: BrandProps[];
}

function FavoriteBrands({ title, brands }: Props) {
  const id = useId();

  return (
    <div class="py-9 flex flex-col items-center justify-center gap-6 text-white">
      <h3 class="font-bold text-subtitle tracking-widest">{title}</h3>

      <div class="container grid grid-cols-[48px_1fr_48px] max-w-[90%]" id={id}>
        <Slider class="carousel carousel-center sm:carousel-end gap-4 col-span-full row-start-2 row-end-5">
          {brands?.map((brand, index) => (
            <Slider.Item index={index} class="carousel-item">
              <Brand {...brand} />
            </Slider.Item>
          ))}
        </Slider>

        {
          /* <Slider.PrevButton class="absolute left-[25px] top-1/2">
          <Icon size={24} id="ChevronLeft" strokeWidth={3} />
        </Slider.PrevButton>

        <Slider.NextButton class="absolute right-[25px] top-1/2">
          <Icon size={24} id="ChevronRight" strokeWidth={3} />
        </Slider.NextButton> */
        }
        <SliderJS rootId={id} scroll="smooth" />
      </div>
    </div>
  );
}

export default FavoriteBrands;

interface BrandProps {
  /**
   * @title Brand Name
   */
  label: string;

  link: string;

  /**
   * @description Brand Logo
   */
  logo: {
    src: ImageWidget;
    width: number;
    height: number;
  };

  /**
   * @description Image for square background
   */
  background: ImageWidget;
  lcp?: boolean;
}

function Brand({ label, link, logo, background, lcp }: BrandProps) {
  return (
    <a
      href={link}
      aria-label={`Clique e acesse produtos da marca: ${label}`}
      class="rounded-xl overflow-hidden relative flex items-center justify-center w-[137px] h-[137px]"
    >
      <Image
        alt={`Logo da marca: ${label}`}
        src={logo.src}
        width={logo.width}
        height={logo.height}
        loading={!lcp ? "lazy" : "eager"}
        class="flex z-10"
      />
      <Image
        alt={`Image de background da marca: ${label}`}
        src={background}
        width={130}
        height={130}
        loading={!lcp ? "lazy" : "eager"}
        class="object-cover w-full h-full absolute top-0 left-0 z-0"
      />
    </a>
  );
}
