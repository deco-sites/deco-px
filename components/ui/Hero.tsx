import type { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

export interface Props {
  backgroundImage: {
    desktop: ImageWidget;
    mobile: ImageWidget;
    alt: string;
    lcp?: boolean;
  };
}

export default function Hero({ backgroundImage }: Props) {
  if (!backgroundImage) return null;

  return (
    <div class="w-full h-[95vh]">
      <a
        href={"#"}
        aria-label="Banner"
        class="relative h-[600px] overflow-y-hidden w-full"
      >
        <Picture preload={backgroundImage.lcp}>
          <Source
            media="(max-width: 767px)"
            fetchPriority={backgroundImage.lcp ? "high" : "auto"}
            src={backgroundImage.mobile}
            width={360}
            height={600}
          />
          <Source
            media="(min-width: 768px)"
            fetchPriority={backgroundImage.lcp ? "high" : "auto"}
            src={backgroundImage.desktop}
            width={1440}
            height={600}
          />
          <img
            class="object-cover w-full h-full"
            loading={backgroundImage.lcp ? "eager" : "lazy"}
            src={backgroundImage.desktop}
            alt={backgroundImage.alt}
          />
        </Picture>
      </a>
    </div>
  );
}
