import { getThemeConfig } from "@/themes";
import { GiFoodTruck } from 'react-icons/gi';
import { BsBook } from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi';
import Link from "next/link";
import nl2br from "nl2br";

const theme = getThemeConfig();

const icons = {
    "food-truck": GiFoodTruck,
    "book": BsBook,
    "user-group": HiUserGroup
};
const imageBlock = (config) => <div className={`bg-[url('/images/${theme?.themeName}/${config.image}')] bg-cover h-96 section-image`} />
const multiTextBlock = (config) => (
    <div className="h-full px-8 py-8 text-center md:text-left">
        {config.content.map(item => (
            <>
                <h2 className={theme?.section?.header?.class}>
                    {item.title}
                </h2>
                <p className=" text-base/loose text-2xl md:text-2xl lg:text-2xl dark:text-white mb-4">
                    {item.text}
                </p>
            </>
        ))}
    </div>
)

const articleElementBuilders = {
    "image-block": imageBlock,
    "multi-text-blocks": multiTextBlock,
    
}

const articleBuilder = (article) => {
    const { elements } = article;
    return (
        <div className="container">
            <div className={`grid md:grid-cols-${elements.length} grid-cols-1`}>
                {elements.map(e => {
                    console.log(e, "element type", e.type)
                    return articleElementBuilders[e.type](e)
                })}
            </div>
        </div>

    )
}

const spaBuilder = (spa) => {
    return (
        <div className={`h-full w-full px-10 py-10 px-10 text-center md:text-left ${spa?.bg} ${spa?.fg} text-center`}>
            <h2 className=" text-6xl mb-4 text-center mt-4 font-extrabold leading-none tracking-tight dark:text-white">
                {spa?.title}
            </h2>
            <br />
            <div className={`grid md:grid-cols-${spa?.elements?.length} grid-cols-1 flex flex-col justify-center items-center section-image `}>
                {spa.elements.map(e => {
                    const Icon = icons[e.icon];
                    return (
                        <div className="py-4 flex flex-col justify-center items-center text-center">
                            <div className="flex flex-col justify-center items-center">
                                <Icon size="5em" />
                                <h2 className="text-4xl py-4 font-bold">{e.title}</h2>
                            </div>

                            <p className="text-2xl text-base/loose md:text-4xl">
                                {e.text}
                            </p>
                        </div>)
                })}
            </div>
        </div>

    )
}
const heroBuilder = (config) => {
    return (
        <div className={`container h-full bg-[url('/images/${theme?.themeName}/${config.image}')] home-page-header flex flex-col justify-center items-center`}>
            <div className="grid md:grid-cols-2 grid-cols-1 flex flex-col justify-center items-center">
                <div className="h-full px-8 py-8 text-center md:text-left">
                    <h1 className="white-text text-red-700 text-4xl mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
                        {config?.header}
                    </h1>
                    {config?.subHeader && (
                        <h2 className="white-text text-2xl mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
                            {config?.subHeader}
                        </h2>
                    )}
                    <p className="text-white text-base/loose text-2xl md:text-2xl lg:text-2xl dark:text-white mb-6">
                        {config?.text}
                    </p>
                    <Link
                        href={config.cta.link}
                        className={theme?.heroButton?.class}
                    >
                        {config.cta.title}
                    </Link>
                </div>
            </div>
        </div>
    );
}

const fullWidthTextBlock = (config) => (
    <div key={`section-${config.title}`}>
            <h1 class="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white mb-2">{config?.title}</h1>
            <div class="text-left text-2xl dark:text-gray-400 mt-2 mb-12" dangerouslySetInnerHTML={{ __html: nl2br(config?.text) }} />
    </div>
)

const builders = {
    article: articleBuilder,
    "spa-block": spaBuilder,
    "hero": heroBuilder,
    "full-width-text-block": fullWidthTextBlock
}

const buildArtifacts = (artifacts) => {
    const built = artifacts.map(a => builders[a.type](a))
    return built;
}

export default buildArtifacts;