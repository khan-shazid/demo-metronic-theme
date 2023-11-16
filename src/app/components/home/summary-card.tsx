import { ReactNode, memo } from 'react';

type SummaryCardProps = {
    count: number;
    title: string;
    color: string;
    icon: ReactNode;
};

function SummaryCard({ count, title, color, icon }: SummaryCardProps) {
    return (
        <div className="box flex-1  bg-white rounded-md p-5 border-b-[3px]" style={{ borderBottomColor: color }}>
            <div className="number-container flex justify-between items-center">
                <div className="text-2xl font-bold">{count}</div>
                {icon}
            </div>
            <span className="text-[#5E6278] font-semibold text-xs">{title}</span>
        </div>
    );
}

export default memo(SummaryCard);
