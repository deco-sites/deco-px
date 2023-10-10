import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @titleBy title
 */
export interface Props {
  /** @description Title */
  title: string;

  /** @description Description */
  description: string;

  /** @description Image one */
  imageOne: ImageWidget;

  /** @description Image two */
  imageTwo: ImageWidget;

  /** @description Image Three */
  imageThree: ImageWidget;

  /** @description Image Four */
  imageFour: ImageWidget;

  /** @description Image's alt text */
  alt: string;
}

export default function ImageGallery({
  title,
  description,
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  alt,
}: Props) {
  return (
    <section class="container max-w-[1080px] h-full text-white bg-black mx-14 px-14 lg:m-20">
      <h1 class="  text-4xl text-center mt-10 mb-4 lg:text-6xl lg:mb-6">
        {title}
      </h1>
      <p class="text-center text-2xl leading-7">
        {description}
      </p>
      <div class="grid grid-cols-2 grid-rows-2 gap-8 mt-11 mb-[2rem] px-14 lg:flex lg:gap-10 lg:mt-20">
        <Image
          title={title}
          class="min-w-full object-cover max-w-[156px] max-h-[156px] "
          src={imageOne}
          alt={alt}
          width={156}
          height={156}
        />
        <Image
          title={title}
          class="min-w-full object-cover max-w-[156px] max-h-[156px] "
          src={imageTwo}
          alt={alt}
          width={156}
          height={156}
        />
        <Image
          title={title}
          class="min-w-full object-cover max-w-[156px] max-h-[156px] "
          src={imageThree}
          alt={alt}
          width={156}
          height={156}
        />
        <Image
          title={title}
          class="min-w-full object-cover max-w-[156px] max-h-[156px] "
          src={imageFour}
          alt={alt}
          width={156}
          height={156}
        />
      </div>
    </section>
  );
}
