import {
    Button,
    DialogHeader,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui";
import { useBookmark } from "@/hooks/use-bookmark";
import { flexRowSpaceBetweenCenter } from "@/styles/flex";
import { ImageCardType } from "@/types/image-type";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
    AlignLeft,
    Bookmark,
    ClipboardPenLine,
    FolderOpen,
    Heart,
    Pin,
} from "lucide-react";

interface BoxProps {
    data: ImageCardType;
}

function Box({ data }: BoxProps) {
    const { bookmarks, toggleBookmarks } = useBookmark();

    return (
        <div className="flex flex-col justify-between space-y-3 w-64 h-64 cursor-pointer">
            <div className="relative flex flex-col gap-3">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                            size={"icon"}
                            className="absolute top-2 right-4 z-10 bg-neutral-500 bg-opacity-50 hover:bg-opacity-50"
                        >
                            <FolderOpen className="h-5 w-5" />
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-xl">
                        <DialogHeader>
                            <DialogTitle>이미지 상세정보</DialogTitle>
                            <DialogDescription>
                                선택한 이미지의 상세정보를 확인하세요.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-col items-center space-x-2 gap-3">
                            <div className="relative">
                                <img
                                    src={data.urls.full}
                                    alt=""
                                    className="h-80 w-full rounded-xl object-cover"
                                />
                                <Bookmark
                                    color={
                                        bookmarks[data.id] ? "skyblue" : "white"
                                    }
                                    className="absolute top-4 right-4 cursor-pointer"
                                    onClick={() => toggleBookmarks(data)}
                                />
                            </div>
                            {/* <Skeleton className="h-80 w-full rounded-xl" /> */}
                            <div className="flex items-center justify-start w-full">
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage
                                            src={data.user.profile_image.small}
                                            alt="@shadcn"
                                            className="w-4 h-4 rounded-2xl"
                                        />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <small className="text-sm font-medium leading-none">
                                        스나이퍼팩토리
                                    </small>
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <div className="flex items-center">
                                    <Pin className="h-4 w-4 mt-[2px] mr-1" />
                                    <span className="text-sm">
                                        {data.alternative_slugs.ko}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <ClipboardPenLine className="h-4 w-4 mt-[2px] mr-1" />
                                    <span className="text-sm">
                                        {data.alt_description}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <AlignLeft className="h-4 w-4 mt-[2px] mr-1" />
                                    <span className="text-sm">
                                        {data.description
                                            ? data.description
                                            : "등록된 묘사 . 및 설명글이 없습니다."}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center justify-end w-full gap-4">
                                <div className="flex items-center gap-1 text-sm">
                                    <p className="leading-7">게시일:</p>
                                    {data.created_at}
                                </div>
                                <div className="flex items-center gap-1 text-sm">
                                    <Heart
                                        className="h-[14px] w-[14px] mt-[2px] text-rose-600"
                                        fill="#e11d48"
                                    />
                                    {data.likes}
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
                <div>
                    <img
                        src={data.urls.small}
                        alt={data.alt_description}
                        className="w-[250px] h-[200px] rounded-xl object-cover"
                    />
                </div>
                <div className={`${flexRowSpaceBetweenCenter}`}>
                    <p className="text-sm">
                        게시일: {data.created_at.split("T")[0]}
                    </p>
                    <div className={`${flexRowSpaceBetweenCenter} gap-1`}>
                        <Heart color="red" className="w-4 h-4" />
                        <span className="text-xs">
                            {data.likes
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Box };
