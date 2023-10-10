import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Drawers from "$store/islands/Header/Drawers.tsx";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import type { NavItem } from "apps/commerce/types.ts";
import Alert from "./Alert.tsx";
import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";
import type { Props as CampaignTimerProps } from "./CampaignTimer.tsx";

export interface Props {
  alerts: string[];

  /** @title Search Bar */
  searchbar?: Omit<SearchbarProps, "platform">;

  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[] | null;

  campaignTimer?: CampaignTimerProps;

  /** @title Logo */
  logo?: { src: ImageWidget; alt: string };
}

function Header({
  alerts,
  searchbar,
  navItems,
  logo,
  campaignTimer,
}: Props) {
  const platform = usePlatform();
  const items = navItems ?? [];

  return (
    <>
      <Drawers
        menu={{ items }}
        searchbar={searchbar}
        platform={platform}
      >
        <div class="bg-transparent backdrop-blur-sm fixed w-full z-50 animate-slide-bottom text-white">
          <Alert alerts={alerts} />
          <Navbar
            items={items}
            searchbar={searchbar && { ...searchbar, platform }}
            logo={logo}
            campaignTimer={campaignTimer}
          />
        </div>
      </Drawers>
    </>
  );
}

export default Header;
