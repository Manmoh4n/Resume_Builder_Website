"use client"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

export default function AcrossCard({title, label}) {
    return (
        <Card className="relative overflow-hidden bg-about-card-gradient backdrop-blur-xl">
            <div className=" absolute inset-y-0 -top-6 -left-14 w-2/3 bg-[url('@/assets/images/home/aboutUs/Map.svg')] bg-no-repeat bg-cover opacity-70 z-0" />
            <CardContent className="relative z-10">
                <div className="flex items-center justify-between py-2">
                   <div>
                    <p className="text-xs md:text-sm text-black font-semibold">{title}</p>
                    <p className="text-brand-blue font-semibold md:text-lg text-base">{label}</p>
                   </div>
                    <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                        <Avatar key={i} className="border border-brand-blue w-8 h-8 md:h-10 md:w-10">
                            <AvatarImage src={`https://i.pravatar.cc/100?img=${i}`} />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
