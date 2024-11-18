import { flexRowSpaceBetweenCenter } from "@/styles/flex";
import { useState } from "react";
import navJson from "./nav.json";
import { Link } from "react-router-dom";
import { seaerchValueAtom } from "@/stores";
import { useSetAtom } from "jotai";

interface NavData {
    index: number;
    path: string;
    label: string;
    searchValue: string;
    isActive: boolean;
}

function Nav() {
    const [navMenu] = useState<NavData[]>(navJson);
    const setSearchValue = useSetAtom(seaerchValueAtom);

    const handleClickItem = (
        e: React.MouseEvent<HTMLAnchorElement>,
        value: string
    ) => {
        e.preventDefault();
        setSearchValue(value);
    };

    const NavLinks = navMenu.map((nav: NavData) => {
        return (
            <Link
                key={`nav-${nav.index}`}
                to={nav.path}
                className={`flex flex-col justify-center px-2 h-[50px] text-black text0base font-medium leading-none active:bg-slate-600`}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    handleClickItem(e, nav.searchValue)
                }
            >
                {nav.label}
            </Link>
        );
    });

    return (
        <nav
            className={`w-full h-[50px] px-24 ${flexRowSpaceBetweenCenter} gap-6 border-y-[1px]`}
        >
            {NavLinks}
        </nav>
    );
}
export { Nav };
