export const Collections = () => {
    const TAGS: string[] = ['Profile', 'New York', 'Relax', 'Person', 'Fashion'];
    return (
        <div className="mx-auto w-full rounded-lg bg-[#9fc4f5] p-12 shadow-lg">
            {/* title */}
            <h1 className="text-3xl font-medium">Popula collections</h1>
            {/* tags */}
            <div className="my-6 space-x-2">
                {TAGS.map((tag) => (
                    <a
                        id={tag}
                        className="mt-4 rounded-md bg-white px-4 py-3 transition-all hover:cursor-pointer hover:border-2 hover:border-white hover:bg-transparent hover:text-white"
                    >
                        {tag}
                    </a>
                ))}
            </div>
            {/* ===Container=== */}
            <div className="grid grid-cols-1 gap-4 transition-all md:grid-cols-2 lg:grid-cols-3">
                {/* item-1 */}
                <div className="rounded-lg bg-white p-6">
                    {/* img */}
                    <div>
                        <img
                            src="https://png.pngtree.com/background/20230427/original/pngtree-beauty-cosmetic-products-on-dark-background-picture-image_2496070.jpg"
                            alt=""
                            className="aspect-video w-full rounded-lg"
                        />
                    </div>
                    {/* imgs */}
                    <div className="mt-4 grid grid-cols-3 gap-4">
                        <img
                            src="https://png.pngtree.com/background/20230519/original/pngtree-grouping-of-gold-and-pink-cosmetics-on-a-black-surface-picture-image_2662540.jpg"
                            alt=""
                            className="aspect-video w-full rounded-lg"
                        />
                        <img
                            src="https://png.pngtree.com/background/20230520/original/pngtree-set-of-cosmetics-and-cosmetic-containers-with-palm-leaves-and-a-picture-image_2680151.jpg"
                            alt=""
                            className="aspect-video w-full rounded-lg"
                        />
                        <img
                            src="https://png.pngtree.com/background/20230414/original/pngtree-marble-scene-cosmetic-set-beauty-makeup-advertisement-background-picture-image_2424144.jpg"
                            alt=""
                            className="aspect-video w-full rounded-lg"
                        />
                    </div>
                    {/* contents */}
                    <div className="mt-4 flex">
                        <p className="grow text-2xl font-medium">People </p>
                        <p className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="mr-2 size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                />
                            </svg>
                            144
                        </p>
                    </div>
                </div>
                {/* item-2 */}
                <div className="rounded-lg bg-white p-6">
                    {/* img */}
                    <div>
                        <img
                            src="https://png.pngtree.com/background/20230427/original/pngtree-beauty-cosmetic-products-on-dark-background-picture-image_2496070.jpg"
                            alt=""
                            className="aspect-video w-full rounded-lg"
                        />
                    </div>
                    {/* imgs */}
                    <div className="mt-4 grid grid-cols-3 gap-4">
                        <img
                            src="https://png.pngtree.com/background/20230519/original/pngtree-grouping-of-gold-and-pink-cosmetics-on-a-black-surface-picture-image_2662540.jpg"
                            alt=""
                            className="aspect-video w-full rounded-lg"
                        />
                        <img
                            src="https://png.pngtree.com/background/20230520/original/pngtree-set-of-cosmetics-and-cosmetic-containers-with-palm-leaves-and-a-picture-image_2680151.jpg"
                            alt=""
                            className="aspect-video w-full rounded-lg"
                        />
                        <img
                            src="https://png.pngtree.com/background/20230414/original/pngtree-marble-scene-cosmetic-set-beauty-makeup-advertisement-background-picture-image_2424144.jpg"
                            alt=""
                            className="aspect-video w-full rounded-lg"
                        />
                    </div>
                    {/* contents */}
                    <div className="mt-4 flex">
                        <p className="grow text-2xl font-medium">People </p>
                        <p className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="mr-2 size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                />
                            </svg>
                            144
                        </p>
                    </div>
                </div>
                {/* item-3 */}
                <div className="rounded-lg bg-white p-6">
                    {/* img */}
                    <div>
                        <img
                            src="https://png.pngtree.com/background/20230427/original/pngtree-beauty-cosmetic-products-on-dark-background-picture-image_2496070.jpg"
                            alt=""
                            className="aspect-video w-full rounded-lg"
                        />
                    </div>
                    {/* imgs */}
                    <div className="mt-4 grid grid-cols-3 gap-4">
                        <img
                            src="https://png.pngtree.com/background/20230519/original/pngtree-grouping-of-gold-and-pink-cosmetics-on-a-black-surface-picture-image_2662540.jpg"
                            alt=""
                            className="aspect-video w-full rounded-lg"
                        />
                        <img
                            src="https://png.pngtree.com/background/20230520/original/pngtree-set-of-cosmetics-and-cosmetic-containers-with-palm-leaves-and-a-picture-image_2680151.jpg"
                            alt=""
                            className="aspect-video w-full rounded-lg"
                        />
                        <img
                            src="https://png.pngtree.com/background/20230414/original/pngtree-marble-scene-cosmetic-set-beauty-makeup-advertisement-background-picture-image_2424144.jpg"
                            alt=""
                            className="aspect-video w-full rounded-lg"
                        />
                    </div>
                    {/* contents */}
                    <div className="mt-4 flex">
                        <p className="grow text-2xl font-medium">People </p>
                        <p className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="mr-2 size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                />
                            </svg>
                            144
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
