import * as React from "react";

import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import { useAtom } from "jotai";
import { seaerchValueAtom } from "@/stores";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const SearchBar = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref) => {
        const [searchValue, setSearchValue] = useAtom(seaerchValueAtom);

        const [inputValue, setInputValue] = React.useState("");
        const searchInputChage = (e: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
        };

        const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
                setSearchValue(inputValue);
                setInputValue(""); // 예시로 값 초기화
            }
        };

        return (
            <div
                className={cn(
                    "flex h-10 items-center rounded-md border border-input bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2",
                    className
                )}
            >
                <SearchIcon className="h-[18px] w-[18px]" />
                <input
                    {...props}
                    type="search"
                    ref={ref}
                    className="w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    onChange={searchInputChage}
                    onKeyDown={handleKeyDown}
                />
            </div>
        );
    }
);
SearchBar.displayName = "SearchBar";

export { SearchBar };
