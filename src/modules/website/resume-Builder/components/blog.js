import { Separator } from "@/shared";
import Image from "next/image";
import { blogData } from "@/assets/mockData";

const BlogCard = ({ image, title, description }) => {
    return (
        <div className="relative flex flex-col rounded-lg overflow-hidden bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <div className="relative h-74 p-2 h-full overflow-hidden">
                <Image src={image} alt={title} className="object-cover h-full w-full rounded-lg" priority />
            </div>

            <div className="flex flex-col py-3 pl-4 pr-0">
                <p className="text-dark-blue font-bold text-lg md:text-xl lg:text-2xl leading-tight"> {title} </p>
                <p className="text-sm font-normal md:text-base lg:text-lg text-[#737373] mt-2 truncate"> {description}  </p>
                <p className="text-brand-blue text-sm md:text-base font-bold mt-2 cursor-pointer underline decoration-1"> Read More </p>
            </div>
        </div>
    )
};

export default function Blog() {
    return (
        <section className="relative">
            <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 lg:py-8 py-6">
                <h2 className="text-base md:text-2xl font-bold text-dark-blue text-center mb-4">Blog</h2>
                <Separator className="bg-separtor-line" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 md:mt-14 pb-12">
                    {blogData.map((blog, index) => (
                      <BlogCard key={index} {...blog} />
                    ))}
                </div>
            </div>
        </section>
    )
};
