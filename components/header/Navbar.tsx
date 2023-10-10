import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { MenuButton, SearchButton } from "$store/islands/Header/Buttons.tsx";
import CartButtonLinx from "$store/islands/Header/Cart/linx.tsx";
import CartButtonShopify from "$store/islands/Header/Cart/shopify.tsx";
import CartButtonVDNA from "$store/islands/Header/Cart/vnda.tsx";
import CartButtonVTEX from "$store/islands/Header/Cart/vtex.tsx";
import CartButtonWake from "$store/islands/Header/Cart/wake.tsx";
import Searchbar from "$store/islands/Header/Searchbar.tsx";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { NavItem as INavItem } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import CampaignTimer, {
  Props as CampaignTimerProps,
} from "./CampaignTimer.tsx";

function Navbar({ items, searchbar, logo, campaignTimer }: {
  items: INavItem[];
  searchbar?: SearchbarProps;
  logo?: { src: string; alt: string };
  campaignTimer?: CampaignTimerProps;
}) {
  const platform = usePlatform();

  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class="md:hidden flex flex-row justify-between items-center drop-shadow-md w-full px-5 py-6 gap-2"
      >
        {logo && (
          <a
            href="/"
            class="inline-flex items-center w-[100px]"
            style={{ minHeight: navbarHeight }}
            aria-label="Vtex-EXP logo"
          >
            <Image src={logo.src} alt={logo.alt} width={100} height={40} />
          </a>
        )}

        <CampaignTimer {...campaignTimer} />

        <div class="flex items-center justify-center">
          <MenuButton />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center drop-shadow-md w-full px-6">
        <div class="flex gap-4 w-full">
          {logo && (
            <a
              href="/"
              aria-label="Store logo"
              class="block px-4 w-[230px]"
            >
              <Image src={logo.src} alt={logo.alt} width={210} height={45} />
            </a>
          )}
          {
            /* <div class="md:hidden lg:flex">
            {items.map((item) => <NavItem item={item} />)}
          </div> */
          }
        </div>

        <div>
          <CampaignTimer {...campaignTimer} />
        </div>

        <div class="w-28 flex items-center justify-end gap-2">
          <MenuButton />
        </div>
      </div>
    </>
  );
}

export default Navbar;
