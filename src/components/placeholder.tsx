import { LucideIcon, LucideMessageSquareWarning } from "lucide-react";

type PlaceholderProps = {
    label: string,
    icon?: LucideIcon,
    button?: React.ReactNode,
}
const Placeholder = ({ label, icon: Icon = LucideMessageSquareWarning, button = <div className="h-10" /> }: PlaceholderProps) => {
    return (
        <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
            <Icon className="w-16 h-16" />
            <h2 className="text-lg text-center">{label}</h2>
            {button}
        </div>
    );
}
export { Placeholder }