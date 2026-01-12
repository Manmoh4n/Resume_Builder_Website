import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

export default function InfoCard({ title, label }) {
    return (
        <Card className="bg-about-info-gradient border-white/10 backdrop-blur-xl md:py-5 py-3 ">
            <CardContent className="px-2">
                <p className="text-white text-xs font-semibold md:text-lg">{title}</p>
                <p className="md:text-sm text-white pt-1 text-[8px] font-medium">{label}</p>
            </CardContent>
        </Card>
    )
}
