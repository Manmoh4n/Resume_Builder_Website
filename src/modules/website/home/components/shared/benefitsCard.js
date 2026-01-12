import React from 'react'

export default function BenefitsCard() {
    return (
        <div className="inline-flex items-center gap-1 rounded-full backdrop-blur-sm px-2 py-1.5 shadow-glass-inset">
            <div className="flex flex-col items-center justify-center bg-white rounded-full lg:w-[45] lg:h-[45] w-[25] h-[25]">
                <p className="font-bold text-[8px] lg:text-base text-[#34C759]">₹15</p>
                <p className="font-bold text-[8px] lg:text-xs text-[#34C759]">LPA</p>
            </div>
            <div className="flex flex-col gap-[1px] text-white leading-none">
                <h5 className="font-bold text-[8px] lg:text-xs">Aptitude Test 85/100</h5>
                <div className="flex items-center gap-1 text-[6px] font-semibold md:text-extra-small md:font-semibold leading-none">
                    <span className="font-bold text-[8px] lg:text-xs">Interview</span>
                    <p className="flex items-center gap-1 rounded-md bg-white px-1 py-[1px] lg:text-extra-small text-[6px] font-semibold text-brand-blue-light">
                        Confidence
                        <span className="rounded bg-[#C5E8E4] px-1 text-[#34C759]">50%</span>
                    </p>
                    <p className="flex items-center gap-1 rounded-md bg-white px-1 py-[1px] lg:text-extra-small text-[6px] font-semibold text-brand-blue-light">
                        Clarity
                        <span className="rounded bg-[#C5E8E4] px-1 text-[#34C759]">50%</span>
                    </p>
                </div>
                <h5 className="font-bold text-[8px] lg:text-xs"><span className="font-medium">Offered:</span> Juspay</h5>
            </div>
        </div>
    )
}
