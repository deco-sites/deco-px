import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  subTitle?: string;
  email?: string;
  linkEmail?: string;
  socialMedia?: {
    linkSocialMedia?: string;
    image: {
      titleImage: string;
      icon: ImageWidget;
      description?: string;
    };
  }[];
}

export default function FooterLP(
  { email, subTitle, linkEmail, socialMedia }: Props,
) {
  return (
    <section class="flex items-center justify-center w-full h-full bg-black">
      <div class="w-full h-[300px] pb-6 flex flex-col items-center justify-center">
        <div class="flex flex-col text-center m-2 gap-4">
          <h1 class="text-3xl font-medium underline">
            <a href={`mailto:${linkEmail}`}>{email}</a>
          </h1>
          <p class="text-xl font-normal">
            {subTitle}
          </p>
        </div>
        <div class="flex flex-row items-center justify-center gap-4">
          {socialMedia?.map((socialMedia) => (
            <div class="w-[40px] h-[40px] rounded-full flex flex-row items-center justify-center mt-4 pointer">
              <a href={socialMedia.linkSocialMedia}>
                <Image
                  title={socialMedia.image.titleImage}
                  class=""
                  src={socialMedia.image.icon}
                  alt={socialMedia.image.description}
                  loading="lazy"
                  width={40}
                  height={40}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
