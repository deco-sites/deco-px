import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Banner {
  /** @description desktop otimized image */
  desktop: ImageWidget;
  /** @description mobile otimized image */
  mobile: ImageWidget;
  /** @description Image's alt text */
  alt: string;
}

export default function BannerItem(
  { image, lcp }: { image: Banner; lcp?: boolean },
) {
  const {
    alt,
    mobile,
    desktop,
  } = image;

  return (
    <div
      style={`background-image: url(${desktop});`}
      class="h-[200px] lg:h-[600px] bg-fixed bg-center bg-cover bg-no-repeat overflow-y-hidden w-full"
    />
  );
}
