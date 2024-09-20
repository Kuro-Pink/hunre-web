import { ReactNode } from 'react';

export interface JobProps {
    title: string;
    icon: ReactNode;
    bgClass: string;
}

export const Job: React.FC<JobProps> = ({ title, icon, bgClass: bgColor }) => {
    return (
        <div className={`${bgColor} flex aspect-square flex-col items-center justify-center rounded-lg`}>
            {icon}
            <p className="pt-2 font-medium">{title}</p>
        </div>
    );
};
