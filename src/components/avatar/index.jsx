import { twMerge } from "tailwind-merge";
// import { User } from 'lucide-react';

const Avatar = (props) => {
    const {
        variant = "white", // white, gray, primary, primary-light, dark
        size = "md", // xs, sm, md, lg
        type = "text", // text, icon, image
        text,
        icon,
        imageUrl,
    } = props;

    const baseClasses = "border border-solid rounded-full overflow-hidden flex items-center justify-center";

    const variantClasses = {
        white: "text-text-primary bg-background-primary border-border-subtle",
        gray: "text-text-primary bg-",
        primary: "text-text-on-color bg-background-brand border-border-interactive",
        primaryLight: "",
        dark: "",
    }?.[variant];

    const sizeClasses = {
        xs: "w-5 h-5 [&>svg]:h-3 [&>svg]:w-3 text-xs",
        sm: "w-6 h-6 [&>svg]:h-4 [&>svg]:w-4 text-sm",
        md: "w-8 h-8 [&>svg]:h-5 [&>svg]:w-5 text-base",
        lg: "w-10 h-10 [&>svg]:h-6 [&>svg]:w-6 text-lg",
    }?.[size];

    const renderContent = () => {
        switch (type) {
            case "text":
                return <span>{text}</span>;
            case "icon":
                return icon || (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                );
            case "image":
                return <img src={imageUrl} alt="avatar" className="w-full h-full object-cover" />;
            default:
                return null;
        }
    };

    return (
        <div className={twMerge(baseClasses, variantClasses, sizeClasses)}>
            {renderContent()}
        </div>
    )
}

export default Avatar;