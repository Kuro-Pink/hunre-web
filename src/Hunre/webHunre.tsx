export const WebHunre = () => {
    return (
        <div>
            {/* <!-- ===Header=== --> */}
            <header>
                {/* <!-- Container --> */}
                <div className="container mx-auto">
                    <nav className="flex items-center justify-between py-5">
                        {/* <!-- Logo --> */}
                        <div className="z-20 w-[32rem]">
                            <img src="https://hunre.edu.vn/media/data/logo-hunre.png" alt="Logo" className="logo" />
                        </div>
                        {/* <!-- Side bar --> */}
                        <div className="text-sm">
                            {/* <!-- Home tool --> */}
                            <div className="flex items-center font-medium md:justify-end">
                                <span>Trang chủ</span>
                                {/* <!-- Language --> */}
                                <div className="flex items-center pl-6">
                                    <img
                                        src="data:image/png;base64,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"
                                        alt="Language"
                                        className="mr-2 h-3 w-5"
                                    />
                                    <span>English</span>
                                </div>
                                {/* <!-- Search --> */}
                                <div className="border-green ml-20 flex border">
                                    <input type="text" placeholder="Tìm kiếm..." className="px-2" />
                                    {/* <!-- icon search --> */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="mx-1 size-6 bg-green-500 text-white"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            {/* <!-- Link tools --> */}
                            <ul className="flex w-auto justify-between py-5 font-bold text-green-500">
                                <li>
                                    <a href="#">Tin tức</a>
                                </li>
                                <li>
                                    <a href="#">Thông báo</a>
                                </li>
                                <li>
                                    <a href="#">Sự kiện</a>
                                </li>
                                <li>
                                    <a href="#">Lịch tuần</a>
                                </li>
                                <li>
                                    <a href="#">Thư viện ảnh</a>
                                </li>
                                <li>
                                    <a href="#">Video</a>
                                </li>
                                <li>
                                    <a href="#">Liên hệ</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    {/* <!-- Navbar --> */}
                    <ul className="flex w-auto justify-between bg-green-500 font-bold text-white">
                        <li className="mx-6">
                            <a href="#">Giới thiệu</a>
                        </li>
                        <li className="mx-6">
                            <a href="#">Đơn vị trực thộc</a>
                        </li>
                        <li className="mx-6">
                            <a href="#">Hợp tác và phát triển</a>
                        </li>
                        <li className="mx-6">
                            <a href="#">Thông tin đào tạo</a>
                        </li>
                        <li className="mx-6">
                            <a href="#">Biểu mẫu học sinh</a>
                        </li>
                        <li className="mx-6">
                            <a href="#">E-LEARNING</a>
                        </li>
                        <li className="mx-6">
                            <a href="#">HUNRE AI</a>
                        </li>
                    </ul>
                </div>
            </header>
            {/* <!-- === Content === --> */}
            <section>
                {/* <!-- List items --> */}
                <div className="container relative mx-auto grid grid-cols-5 grid-rows-2 gap-4 py-4">
                    {/* <!-- Item 1--> */}
                    <div className="relative h-[360px] bg-white px-2">
                        <h2 className="ml-4 rounded-lg py-1 font-bold text-green-500 hover:underline">
                            <a href="#">Tin mới nhất</a>
                        </h2>
                        <img
                            src="https://hunre.edu.vn/media/cache/data/Cac-Khoa/Khoa-CNTT/11111-cr-425x200.jpg"
                            alt=""
                        />
                        <p className="py-4 text-sm font-normal">
                            BẢN MÔ TẢ CHƯƠNG TRÌNH ĐÀO TẠO TRÌNH ĐỘ ĐẠI HỌC - HÌNH THỨC CHÍNH QUY NGÀNH QUẢN TRỊ DỊCH VỤ
                            DU LỊCH VÀ LỮ HÀNH NĂM 2024
                        </p>
                        <div className="absolute bottom-4 left-0 rounded-sm bg-green-500 px-2 text-xs font-medium text-white">
                            + Xem thêm
                        </div>
                    </div>
                    {/* <!-- Item 2--> */}
                    <div className="relative row-span-2 h-full bg-white px-2">
                        <h2 className="ml-4 rounded-lg py-1 font-bold text-green-500 hover:underline">
                            <a href="#">Tin mới nhất</a>
                        </h2>
                        <img
                            src="https://hunre.edu.vn/media/cache/data/Cac-Khoa/Khoa-CNTT/11111-cr-425x200.jpg"
                            alt=""
                        />
                        <p className="py-4 text-sm font-normal">
                            Thực hiện nhiệm vụ công tác đoàn và phong trào thanh niên của Chi đoàn Khối Phòng Ban -
                            Trung tâm năm 2019. Được sự đồng ý của BCH Đoàn TNCS Hồ Chí Minh Trường Đại học Tài nguyên
                            và Môi trường Hà Nội. Ngày 07/12/2019 Chi đoàn Khối Phòng Ban - Trung tâm tổ chức chuyến
                            thăm quan về nguồn tại Lăng Chủ tịch Hồ Chí Minh, đây là chuyến thăm quan hết sức ý nghĩa
                            thể hiện lòng tôn kính đến vị lãnh tụ của đất nước, giúp các đoàn viên trong Chi đoàn có dịp
                            tìm hiểu về tiểu sử của Bác và học tập tấm gương đạo đức, phong cách Hồ Chí Minh. Đây cũng
                            là dịp để tăng cường giao lưu, trao đổi kinh nghiệm giữa các đoàn viên thanh niên trong Chi
                            đoàn, tạo không khí vui tươi, phấn khởi, hăng hái thi đua phấn đấu hoàn thành xuất sắc các
                            chỉ tiêu, kế hoạch, nhiệm vụ công tác đã đề ra trong năm 2019.
                        </p>
                        <div className="absolute bottom-4 left-0 rounded-sm bg-green-500 px-2 text-xs font-medium text-white">
                            + Xem thêm
                        </div>
                    </div>
                    {/* <!-- Item 3--> */}
                    <div className="relative h-[360px] bg-white px-2">
                        <h2 className="ml-4 rounded-lg py-1 font-bold text-green-500 hover:underline">
                            <a href="#">Tin mới nhất</a>
                        </h2>
                        <img
                            src="https://hunre.edu.vn/media/cache/data/Cac-Khoa/Khoa-CNTT/11111-cr-425x200.jpg"
                            alt=""
                        />
                        <p className="py-4 text-sm font-normal">
                            BẢN MÔ TẢ CHƯƠNG TRÌNH ĐÀO TẠO TRÌNH ĐỘ ĐẠI HỌC - HÌNH THỨC CHÍNH QUY NGÀNH QUẢN TRỊ DỊCH VỤ
                            DU LỊCH VÀ LỮ HÀNH NĂM 2024
                        </p>
                        <div className="absolute bottom-4 left-0 rounded-sm bg-green-500 px-2 text-xs font-medium text-white">
                            + Xem thêm
                        </div>
                    </div>
                    {/* <!-- Item 4--> */}
                    <div className="relative h-[360px] bg-white px-2">
                        <h2 className="ml-4 rounded-lg py-1 font-bold text-green-500 hover:underline">
                            <a href="#">Tin mới nhất</a>
                        </h2>
                        <img
                            src="https://hunre.edu.vn/media/cache/data/Cac-Khoa/Khoa-CNTT/11111-cr-425x200.jpg"
                            alt=""
                        />
                        <p className="py-4 text-sm font-normal">
                            BẢN MÔ TẢ CHƯƠNG TRÌNH ĐÀO TẠO TRÌNH ĐỘ ĐẠI HỌC - HÌNH THỨC CHÍNH QUY NGÀNH QUẢN TRỊ DỊCH VỤ
                            DU LỊCH VÀ LỮ HÀNH NĂM 2024
                        </p>
                        <div className="absolute bottom-4 left-0 rounded-sm bg-green-500 px-2 text-xs font-medium text-white">
                            + Xem thêm
                        </div>
                    </div>
                    {/* <!-- Item 6--> */}
                    <div className="relative h-[360px] bg-white px-2">
                        <h2 className="ml-4 rounded-lg py-1 font-bold text-green-500 hover:underline">
                            <a href="#">Tin mới nhất</a>
                        </h2>
                        <img
                            src="https://hunre.edu.vn/media/cache/data/Cac-Khoa/Khoa-CNTT/11111-cr-425x200.jpg"
                            alt=""
                        />
                        <p className="py-4 text-sm font-normal">
                            BẢN MÔ TẢ CHƯƠNG TRÌNH ĐÀO TẠO TRÌNH ĐỘ ĐẠI HỌC - HÌNH THỨC CHÍNH QUY NGÀNH QUẢN TRỊ DỊCH VỤ
                            DU LỊCH VÀ LỮ HÀNH NĂM 2024
                        </p>
                        <div className="absolute bottom-4 left-0 rounded-sm bg-green-500 px-2 text-xs font-medium text-white">
                            + Xem thêm
                        </div>
                    </div>
                    {/* <!-- Item 6--> */}
                    <div className="relative h-[360px] bg-white px-2">
                        <h2 className="ml-4 rounded-lg py-1 font-bold text-green-500 hover:underline">
                            <a href="#">Tin mới nhất</a>
                        </h2>
                        <img
                            src="https://hunre.edu.vn/media/cache/data/Cac-Khoa/Khoa-CNTT/11111-cr-425x200.jpg"
                            alt=""
                        />
                        <p className="py-4 text-sm font-normal">
                            BẢN MÔ TẢ CHƯƠNG TRÌNH ĐÀO TẠO TRÌNH ĐỘ ĐẠI HỌC - HÌNH THỨC CHÍNH QUY NGÀNH QUẢN TRỊ DỊCH VỤ
                            DU LỊCH VÀ LỮ HÀNH NĂM 2024
                        </p>
                        <div className="absolute bottom-4 left-0 rounded-sm bg-green-500 px-2 text-xs font-medium text-white">
                            + Xem thêm
                        </div>
                    </div>
                    {/* <!-- Item 7--> */}
                    <div className="relative h-[360px] bg-white px-2">
                        <h2 className="ml-4 rounded-lg py-1 font-bold text-green-500 hover:underline">
                            <a href="#">Tin mới nhất</a>
                        </h2>
                        <img
                            src="https://hunre.edu.vn/media/cache/data/Cac-Khoa/Khoa-CNTT/11111-cr-425x200.jpg"
                            alt=""
                        />
                        <p className="py-4 text-sm font-normal">
                            BẢN MÔ TẢ CHƯƠNG TRÌNH ĐÀO TẠO TRÌNH ĐỘ ĐẠI HỌC - HÌNH THỨC CHÍNH QUY NGÀNH QUẢN TRỊ DỊCH VỤ
                            DU LỊCH VÀ LỮ HÀNH NĂM 2024
                        </p>
                        <div className="absolute bottom-4 left-0 rounded-sm bg-green-500 px-2 text-xs font-medium text-white">
                            + Xem thêm
                        </div>
                    </div>
                    {/* <!-- Item 8--> */}
                    <div className="relative h-[360px] bg-white px-2">
                        <h2 className="ml-4 rounded-lg py-1 font-bold text-green-500 hover:underline">
                            <a href="#">Tin mới nhất</a>
                        </h2>
                        <img
                            src="https://hunre.edu.vn/media/cache/data/Cac-Khoa/Khoa-CNTT/11111-cr-425x200.jpg"
                            alt=""
                        />
                        <p className="py-4 text-sm font-normal">
                            BẢN MÔ TẢ CHƯƠNG TRÌNH ĐÀO TẠO TRÌNH ĐỘ ĐẠI HỌC - HÌNH THỨC CHÍNH QUY NGÀNH QUẢN TRỊ DỊCH VỤ
                            DU LỊCH VÀ LỮ HÀNH NĂM 2024
                        </p>
                        <div className="absolute bottom-4 left-0 rounded-sm bg-green-500 px-2 text-xs font-medium text-white">
                            + Xem thêm
                        </div>
                    </div>
                    {/* <!-- Item 9--> */}
                    <div className="relative h-[360px] bg-white px-2">
                        <h2 className="ml-4 rounded-lg py-1 font-bold text-green-500 hover:underline">
                            <a href="#">Tin mới nhất</a>
                        </h2>
                        <img
                            src="https://hunre.edu.vn/media/cache/data/Cac-Khoa/Khoa-CNTT/11111-cr-425x200.jpg"
                            alt=""
                        />
                        <p className="py-4 text-sm font-normal">
                            BẢN MÔ TẢ CHƯƠNG TRÌNH ĐÀO TẠO TRÌNH ĐỘ ĐẠI HỌC - HÌNH THỨC CHÍNH QUY NGÀNH QUẢN TRỊ DỊCH VỤ
                            DU LỊCH VÀ LỮ HÀNH NĂM 2024
                        </p>
                        <div className="absolute bottom-4 left-0 rounded-sm bg-green-500 px-2 text-xs font-medium text-white">
                            + Xem thêm
                        </div>
                    </div>
                </div>
            </section>
            {/* ===Contact=== */}
            <section>
                {/* List item */}
                <ul className="container mx-auto flex items-center justify-center gap-2 pb-4">
                    {/* Item 1 */}
                    <li>
                        <img
                            src="https://hunre.edu.vn/media/cache/data/banner/banner-quang-cao/app-youtube_1-cr-149x67.png"
                            alt=""
                        />
                    </li>
                    {/* Item 1 */}
                    <li>
                        <img src="https://hunre.edu.vn/media/cache/data/banner/facebook-icon-cr-149x67.png" alt="" />
                    </li>
                    {/* Item 1 */}
                    <li>
                        <img
                            src="https://hunre.edu.vn/media/cache/data/banner/cong-thong-tin-sinh-vien-cr-149x67.jpg"
                            alt=""
                        />
                    </li>
                    {/* Item 1 */}
                    <li>
                        <img src="https://hunre.edu.vn/media/cache/data/banner/thu-vien-dien-tu-cr-149x67.jpg" alt="" />
                    </li>
                    {/* Item 1 */}
                    <li>
                        <img src="https://hunre.edu.vn/media/cache/data/banner/2(9)-cr-149x67.jpg" alt="" />
                    </li>
                    {/* Item 1 */}
                    <li>
                        <img src="https://hunre.edu.vn/media/cache/data/banner/lich-tuan-cr-149x67.jpg" alt="" />
                    </li>
                    {/* Item 1 */}
                    <li>
                        <img src="https://hunre.edu.vn/media/cache/data/banner/ho-so-cong-viec-cr-149x67.jpg" alt="" />
                    </li>
                </ul>
            </section>
            {/* ===Footer=== */}
            <section>
                <div className="flex w-full justify-between bg-green-500 px-4 py-4 leading-7 text-white">
                    <div className="flex flex-col">
                        <h2 className="font-semibold uppercase">Trường Đại học Tài nguyên và Môi trường Hà Nội</h2>
                        <span>Địa chỉ: Số 41A đường Phú Diễn, Q. Bắc Từ Liêm, TP. Hà Nội</span>
                        <span>Điện thoại: 0902.130.130 | Email: DHTNMT@hunre.edu.vn</span>
                        <span>© 2024, Trường Đại học Tài nguyên và Môi trường Hà Nội . All rights reversed.</span>
                    </div>
                    <div>
                        <div className="flex gap-2">
                            <img
                                className="h-20 w-40"
                                src="https://hunre.edu.vn/media/data/banner/banner-quang-cao/survey.jpg"
                                alt=""
                            />
                            <img
                                className="size-20"
                                src="https://hunre.edu.vn/media/data/banner/banner-quang-cao/googlemap.png"
                                alt=""
                            />
                        </div>
                        <span className="font-sans text-sm">Online:1 / 6.484.592 lượt truy cập</span>
                    </div>
                </div>
            </section>
        </div>
    );
};
