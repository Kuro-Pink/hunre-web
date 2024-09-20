export const UserProfile = () => {
    return (
        <div className="flex w-[36rem] gap-x-4 rounded-lg bg-white p-12">
            <img
                src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-1/431325679_1056068265489531_451417081805028817_n.jpg?stp=dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHpAGU3Ty0upSNzoROQOKD7SQQtmaqeFpFJBC2Zqp4WkSfOGZt7m3-R-1KbVxO2YFcLHPYSVeRg88ZFD_lPSCA5&_nc_ohc=sgDi7fZrYqoQ7kNvgFiv3Zm&_nc_ht=scontent.fhan15-2.fna&oh=00_AYD8AhQs2n7cIxLFn3Wv69BryNTFpoJFFZcTuQpFiQn7EQ&oe=66A68FCE"
                alt="Anh crush"
                className="w-32 self-start rounded-full border-[10px] border-[#E6EFFA]"
            />
            <div className="space-y-8 text-[#1C2B62]">
                <div>
                    <h1 className="text-3xl font-bold">Pham Nga</h1>
                    <h2 className="mt-1">Infomation Technology</h2>
                </div>
                <div className="space-y-2">
                    <p className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="mr-2 inline-block size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                            />
                        </svg>
                        4.9 Rating
                    </p>
                    <p className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="mr-2 inline-block size-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                            />
                        </svg>
                        26 900 Reviews
                    </p>
                    <p className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="mr-2 inline-block size-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                        </svg>
                        269 Students
                    </p>
                </div>
                <p className="text-lg">
                    Take advantages of sales skills & experience and understanding of market to become a professional
                    Sales Staff and bring a lot value to Customers. From that, I will contribute to development of TOPCV
                    Company.
                </p>
                <button className="rounded-md border-2 border-[C4CADF] p-2">See more</button>
            </div>
        </div>
    );
};
