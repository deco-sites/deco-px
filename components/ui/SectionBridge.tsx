export interface Props {
  title?: string;
  subTitle?: string;
  button?: {
    link?: string;
    titleButton?: string;
  };
}

export default function SectionBridge({
  title = "New Release Fashion",
  subTitle =
    "Our Latest Fashion that can add to your dress style for especial day. Discount applies to all products without any expection!",
  button,
}: Props) {
  return (
    <section class="flex items-center justify-center w-full h-full bg-black px-2">
      <div class="max-w-[1360px] h-full flex flex-col items-center justify-center my-20">
        <div class="flex flex-col text-center gap-4">
          <div class="w-full flex flex-col items-center justify-center">
            <h1 class="lg:max-w-[800px] text-white text-[80px] text-center leading-[80px] font-bold mb-4">
              {title}
            </h1>
            <span class="lg:max-w-[800px] text-white text-[20px] text-center leading-8 font-normal">
              {subTitle}
            </span>
          </div>
          {button &&
            (
              <button class="btn text-black bg-white hover:bg-black/70 hover:text-white hover:border-white">
                <a href={button.link}>{button.titleButton}</a>
              </button>
            )}
        </div>
      </div>
    </section>
  );
}
