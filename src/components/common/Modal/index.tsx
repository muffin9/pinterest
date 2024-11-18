import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";

interface ModalProps {
    title: string;
    description?: string;
    children: React.ReactNode;
}

function Modal({ title, description, children }: ModalProps) {
    return (
        <Dialog>
            <DialogTrigger></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    {title && <DialogTitle>{title}</DialogTitle>}
                    {description && (
                        <DialogDescription>{description}</DialogDescription>
                    )}
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
}

export { Modal };
