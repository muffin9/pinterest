import { Button } from "@/components/ui";
import { flexCenter, flexRow, flexRowSpaceBetweenCenter } from "@/styles/flex";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-separator";
import { BookMarked } from "lucide-react";
import { Link } from "react-router-dom";

function CommonHeader() {
    return (
        <header className={`w-full p-4 ${flexRowSpaceBetweenCenter}`}>
            <div className={`${flexCenter} gap-2`}>
                <Link to={"/"}>
                    <img
                        src="src/assets/logo.svg"
                        alt="logo image"
                        className="w-full h-[25px]"
                    />
                </Link>
                <p className="text-2xl">Pinterest</p>
            </div>
            <div className={`${flexRow} gap-2`}>
                <Link to="/bookmark">
                    <Button variant="ghost">
                        <BookMarked />
                        <span>북마크</span>
                    </Button>
                </Link>
                <Separator
                    orientation="vertical"
                    className="w-[1px] bg-slate-300"
                />
                <div className={`${flexCenter} gap-2`}>
                    <Avatar>
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            className="w-6 h-6 rounded-2xl"
                        ></AvatarImage>
                        <AvatarFallback>Loading..</AvatarFallback>
                    </Avatar>

                    <div className={`${flexRow} gap-1`}>
                        <small className="text-sm font-medium leading-none">
                            muffin9
                        </small>
                        <Separator
                            orientation="vertical"
                            className="w-[1px] bg-black"
                        />
                        <small className="text-sm font-medium leading-none">
                            Temu Pinterest
                        </small>
                    </div>
                </div>
            </div>
        </header>
    );
}
export { CommonHeader };
