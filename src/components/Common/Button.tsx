import React from 'react';
import Link from "next/link";

interface ButtonProps {
    label: string;
    url: string;
}

const Button: React.FC<ButtonProps> = ({ label,url}) => {
    return (
        <div>
            <Link
                href={url}
                className="border-none text-white rounded-full px-[16px] py-[8px] bg-black text-xl font-normal"
            >
                {label}
            </Link>
        </div>
    )
}

export default Button
