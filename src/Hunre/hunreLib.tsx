export const HunreLib = () => {
    return (
        <div>
            {/* ===HEADER=== */}
            <header>
                <img
                    src="http://elib.hunre.edu.vn/pages/cms/images/20192/79ac89cb-9ffb-4758-bacf-d79fcd3fc3edTopbanner-2.png"
                    alt="Thu vien"
                />
                {/* Navbar */}
                <ul className="flex gap-x-1 border bg-[#337ab7] text-sm font-bold text-white">
                    <li className="border-r-2 px-4 py-2">
                        <a href="#">Trang chủ</a>
                    </li>
                    <li className="flex items-center border-r-2 px-4 py-2">
                        <a href="#">Giới thiệu</a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="ml-1 size-3"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </li>
                    <li className="border-r-2 px-4 py-2">
                        <a href="#">Tin tức hoạt động</a>
                    </li>
                    <li className="flex items-center border-r-2 px-4 py-2">
                        <a href="#">Nghiệp vụ thư viện</a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="ml-1 size-3"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </li>
                    <li className="border-r-2 px-4 py-2">
                        <a href="#">Tra cứu thư viện</a>
                    </li>
                    <li className="px-4 py-2">
                        <a href="#">Tài liệu mở</a>
                    </li>
                </ul>
            </header>
            {/* ===CONTENT=== */}
            <div>
                {/* Container */}
                <div className="container relative mx-auto my-6 grid grid-cols-4">
                    {/* Content */}
                    <div className="col-span-3">
                        {/* Toolbar */}
                        <div className="flex grow items-center bg-gray-200 px-4 pb-6 pt-2">
                            <select
                                className="w-[13rem] border border-gray-400 p-2"
                                title="selectAll"
                                name="selectAll"
                                id="selectAll"
                            >
                                <option value="" selected>
                                    -- Chọn tất cả ---
                                </option>
                                <option value="ilib">Thư viện điện tử</option>
                                <option value="dlib">Thư viện số</option>
                                <option value="cms">Tin bài</option>
                            </select>
                            <input
                                className="w-[18rem] border border-gray-400 p-2"
                                type="text"
                                placeholder="Nhập từ khóa..."
                            />
                            <select
                                className="w-[13rem] border border-gray-400 p-2"
                                title="random"
                                name="random"
                                id="random"
                            >
                                <option value="" selected>
                                    Từ khóa bất kì
                                </option>
                                <option value="ilib">Nhan đề</option>
                                <option value="dlib">Tác giả</option>
                                <option value="cms">Chủ đề</option>
                                <option value="cms">Số ISBN</option>
                                <option value="cms">Chỉ số phân loại</option>
                                <option value="cms">Năm xuất bản</option>
                            </select>
                            <button className="ml-2 flex items-center border border-gray-400 bg-white p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="mx-1 size-5"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                                Tìm kiếm
                            </button>
                        </div>
                        {/* Time & Noti */}
                        <div className="mt-2 rounded-sm bg-yellow-200 px-4 py-2">
                            <span>Thứ 6, ngày 20 tháng 9 năm 2024 10 15 38 PM</span>
                            <span>🎁📚📖 Thư cảm ơn cá nhân tặng sách Thư Viện !❤️💞💖💝</span>
                        </div>
                        <h2 className="ml-2 border-b-2 border-gray-300 py-4">
                            <a className="border-b-2 border-blue-500 py-4 text-sm font-bold" href="#">
                                GIỚI THIỆU SÁCH MỚI
                            </a>
                        </h2>
                        {/* List book */}
                        <div className="mt-4 grid grid-cols-2 gap-4">
                            {/* Book1 */}
                            <div className="relative flex">
                                <img
                                    src="http://elib.hunre.edu.vn/pages/cms/images/20246/a7b853c2-5e04-4bea-887f-32a05f20a69a1.jpg"
                                    alt=""
                                    className="h-[12.5rem] w-[9.5rem] bg-auto bg-no-repeat"
                                />
                                <div className="mx-2 flex flex-col py-2">
                                    <h3 className="font-bold">Thế giới trong mắt tôi</h3>
                                    <span className="text-sm font-normal text-gray-500">
                                        Thế giới trong mắt tôi” của tác giả Đoàn Văn Bình chứa đụng nhiều thông tin vô
                                        cùng phong phú
                                    </span>
                                </div>
                            </div>
                            {/* Book02 */}
                            <div className="relative flex">
                                <img
                                    src="http://elib.hunre.edu.vn/pages/cms/images/20246/a7b853c2-5e04-4bea-887f-32a05f20a69a1.jpg"
                                    alt=""
                                    className="h-[12.5rem] w-[9.5rem] bg-auto bg-no-repeat"
                                />
                                <div className="mx-2 flex flex-col py-2">
                                    <h3 className="font-bold">Thế giới trong mắt tôi</h3>
                                    <span className="text-sm font-normal text-gray-500">
                                        Thế giới trong mắt tôi” của tác giả Đoàn Văn Bình chứa đụng nhiều thông tin vô
                                        cùng phong phú
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Magarine */}
                        <h2 className="ml-2 mt-12 border-b-2 border-gray-300 py-4">
                            <a className="border-b-2 border-blue-500 py-4 text-sm font-bold" href="#">
                                GIỚI THIỆU TẠP CHÍ MỚI
                            </a>
                        </h2>
                        {/* List book */}
                        <div className="mt-4 grid grid-cols-3 gap-4">
                            {/* Book1 */}
                            <div className="flex justify-center">
                                <img
                                    src="http://elib.hunre.edu.vn/pages/cms/images/20246/a7b853c2-5e04-4bea-887f-32a05f20a69a1.jpg"
                                    alt=""
                                    className="h-[12.5rem] w-[9.5rem] bg-auto bg-no-repeat"
                                />
                            </div>
                            {/* Book02 */}
                            <div className="flex justify-center">
                                <img
                                    src="http://elib.hunre.edu.vn/pages/cms/images/20246/a7b853c2-5e04-4bea-887f-32a05f20a69a1.jpg"
                                    alt=""
                                    className="h-[12.5rem] w-[9.5rem] bg-auto bg-no-repeat"
                                />
                            </div>
                            {/* Book03 */}
                            <div className="flex justify-center">
                                <img
                                    src="http://elib.hunre.edu.vn/pages/cms/images/20246/a7b853c2-5e04-4bea-887f-32a05f20a69a1.jpg"
                                    alt=""
                                    className="h-[12.5rem] w-[9.5rem] bg-auto bg-no-repeat"
                                />
                            </div>
                        </div>
                        {/* New activities */}
                        <h2 className="ml-2 mt-12 border-b-2 border-gray-300 py-4">
                            <a className="border-b-2 border-blue-500 py-4 text-sm font-bold" href="#">
                                HOẠT ĐỘNG MỚI
                            </a>
                        </h2>
                        {/* List book */}
                        <div className="mt-4 grid grid-cols-2 gap-4">
                            {/* Book1 */}
                            <div className="relative flex">
                                <img
                                    src="http://elib.hunre.edu.vn/pages/cms/images/20246/a7b853c2-5e04-4bea-887f-32a05f20a69a1.jpg"
                                    alt=""
                                    className="h-[6rem] w-[6rem] bg-auto bg-no-repeat"
                                />
                                <div className="mx-2 flex flex-col py-2">
                                    <h3 className="font-bold">
                                        🎁📚📖 Thư cảm ơn cá nhân tặng sách Thư Viện !❤️💞💖💝
                                    </h3>
                                </div>
                            </div>
                            {/* Book02 */}
                            <div className="relative flex">
                                <img
                                    src="http://elib.hunre.edu.vn/pages/cms/images/20246/a7b853c2-5e04-4bea-887f-32a05f20a69a1.jpg"
                                    alt=""
                                    className="h-[6em] w-[6rem] bg-auto bg-no-repeat"
                                />
                                <div className="mx-2 flex flex-col py-2">
                                    <h3 className="font-bold">
                                        🎁📚📖 Thư cảm ơn cá nhân tặng sách Thư Viện !❤️💞💖💝
                                    </h3>
                                </div>
                            </div>
                            {/* Book3 */}
                            <div className="relative flex">
                                <img
                                    src="http://elib.hunre.edu.vn/pages/cms/images/20246/a7b853c2-5e04-4bea-887f-32a05f20a69a1.jpg"
                                    alt=""
                                    className="h-[6rem] w-[6rem] bg-auto bg-no-repeat"
                                />
                                <div className="mx-2 flex flex-col py-2">
                                    <h3 className="font-bold">
                                        🎁📚📖 Thư cảm ơn cá nhân tặng sách Thư Viện !❤️💞💖💝
                                    </h3>
                                </div>
                            </div>
                            {/* Book04 */}
                            <div className="relative flex">
                                <img
                                    src="http://elib.hunre.edu.vn/pages/cms/images/20246/a7b853c2-5e04-4bea-887f-32a05f20a69a1.jpg"
                                    alt=""
                                    className="h-[6em] w-[6rem] bg-auto bg-no-repeat"
                                />
                                <div className="mx-2 flex flex-col py-2">
                                    <h3 className="font-bold">
                                        🎁📚📖 Thư cảm ơn cá nhân tặng sách Thư Viện !❤️💞💖💝
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* foobar */}
                        <ul className="mx-auto mt-12 flex border-b-2 border-gray-300">
                            <li className="bg-yellow-400 px-4 py-2 text-white">Tài liệu mới nhất</li>
                            <li className="px-4 py-2 md:hover:bg-gray-400 md:hover:text-white">
                                Tài liệu mượn nhiều nhất
                            </li>
                            <li className="px-4 py-2 md:hover:bg-gray-400 md:hover:text-white">
                                Tài liệu xem nhiều nhất
                            </li>
                        </ul>
                        <table className="mt-6">
                            <thead></thead>
                            <tbody>
                                <tr className="border border-gray-300">
                                    <td className="border-r-2 border-gray-300 p-2">1</td>
                                    <td className="p-2">
                                        <a href="../opac/wpid-detail-id-21445.html">
                                            Chuyển đổi số tại khách sạn Biển Bắc (vie)
                                        </a>
                                    </td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <td className="border-r-2 border-gray-300 p-2">2</td>
                                    <td className="p-2">
                                        <a href="../opac/wpid-detail-id-21443.html"> Tin học đại cương (Vie) </a>
                                    </td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <td className="border-r-2 border-gray-300 p-2">3</td>
                                    <td className="p-2">
                                        <a href="../opac/wpid-detail-id-21441.html">
                                            Hướng dẫn học tập học phần lịch sử Đảng Cộng sản Việt Nam (vie)
                                        </a>
                                    </td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <td className="border-r-2 border-gray-300 p-2">4</td>
                                    <td className="p-2">
                                        <a href="../opac/wpid-detail-id-21439.html">
                                            Nghiên cứu đề xuất mô hình dự báo thủy văn lưu vực sông nhỏ. Áp dụng thử
                                            nghiệm trên lưu vực sông Nậm La, Sơn La (vie)
                                        </a>
                                    </td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <td className="border-r-2 border-gray-300 p-2">5</td>
                                    <td className="p-2">
                                        <a href="../opac/wpid-detail-id-21436.html">
                                            Đánh giá thực trạng và đề xuất giải pháp nâng cao hiệu quả công tác đăng ký
                                            đất đai, cấp giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài
                                            sản khác gắn liền với đất trên địa bàn huyện Thanh Oai, thành phố Hà Nội
                                            (vie)
                                        </a>
                                    </td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <td className="border-r-2 border-gray-300 p-2">6</td>
                                    <td className="p-2">
                                        <a href="../opac/wpid-detail-id-21435.html">
                                            Ứng dựng GIS xây dựng bản đồ giá đất trên địa bàn phường Đức Thắng, quận Bắc
                                            Từ Liêm, thành phố Hà Nội (vie)
                                        </a>
                                    </td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <td className="border-r-2 border-gray-300 p-2">7</td>
                                    <td className="p-2">
                                        <a href="../opac/wpid-detail-id-21434.html">
                                            Đánh giá kết quả và đề xuất giải pháp thực hiện kế hoạch sử dụng đất hàng
                                            năm trên địa bàn huyện Tam Nông, tỉnh Phú Thọ (vie)
                                        </a>
                                    </td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <td className="border-r-2 border-gray-300 p-2">8</td>
                                    <td className="p-2">
                                        <a href="../opac/wpid-detail-id-21433.html">
                                            Đánh giá kết quả và đề xuất giải pháp thực hiện kế hoạch sử dụng đất hàng
                                            năm trên địa bàn quận Hoàng Mai, thành phố Hà Nội (vie)
                                        </a>
                                    </td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <td className="border-r-2 border-gray-300 p-2">9</td>
                                    <td className="p-2">
                                        <a href="../opac/wpid-detail-id-21432.html">
                                            Đánh giá thực trạng và đề xuất giải pháp nâng cao hiệu quả công tác đấu giá
                                            quyền sử dụng đất ở trên địa bàn huyện Phú Xuyên, thành phố Hà Nội (vie)
                                        </a>
                                    </td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <td className="border-r-2 border-gray-300 p-2">10</td>
                                    <td className="p-2">
                                        <a href="../opac/wpid-detail-id-21431.html">
                                            Đánh giá thực trạng hoạt động của Văn phòng Đăng ký đất đai tỉnh Bắc Ninh -
                                            Chi nhánh huyện Gia Bình (vie)
                                        </a>
                                    </td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <td className="border-r-2 border-gray-300 p-2">11</td>
                                    <td className="p-2">
                                        <a href="../opac/wpid-detail-id-21430.html">
                                            Ứng dụng ARCGIS chuẩn hóa cơ sở dữ liệu địa chính trên địa bàn phường Xuân
                                            Đỉnh, quận Bắc Từ Liêm, thành phố Hà Nội (vie)
                                        </a>
                                    </td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <td className="border-r-2 border-gray-300 p-2">12</td>
                                    <td className="p-2">
                                        <a href="../opac/wpid-detail-id-21429.html">
                                            Đánh giá việc thực hiện một số nội dung quản lý nhà nước về đất đai trên địa
                                            bàn huyện Văn Giang, tỉnh Hưng Yên (vie)
                                        </a>
                                    </td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <td className="border-r-2 border-gray-300 p-2">13</td>
                                    <td className="p-2">
                                        <a href="../opac/wpid-detail-id-21428.html">
                                            Đánh giá thực trạng và đề xuất giải pháp nâng cao hiệu quả hoạt động của Văn
                                            phòng Đăng ký quyền sử dụng đất thành phố Cẩm Phả, tỉnh Quảng Ninh (vie)
                                        </a>
                                    </td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <td className="border-r-2 border-gray-300 p-2">14</td>
                                    <td className="p-2">
                                        <a href="../opac/wpid-detail-id-21427.html">
                                            Đánh giá thực trạng hoạt động của Văn phòng Đăng ký đất đai tỉnh Hưng Yên -
                                            Chi nhánh thành phố Hưng Yên (vie)
                                        </a>
                                    </td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <td className="border-r-2 border-gray-300 p-2">15</td>
                                    <td className="p-2">
                                        <a href="../opac/wpid-detail-id-21438.html">
                                            Phân tích chính sách pháp luật về quản lý chất thải rắn sinh hoạt của Việt
                                            Nam và bài học cho Lào (vie)
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Info */}
                        {/* Info */}
                        <h2 className="ml-2 mt-12 border-b-2 border-gray-300 py-4">
                            <a className="border-b-2 border-blue-500 py-4 text-sm font-bold" href="#">
                                SẢN PHẨM THÔNG TIN
                            </a>
                        </h2>
                        {/* List info */}
                        <div className="mt-4 grid grid-cols-3 gap-4">
                            {/* Book1 */}
                            <div className="relative flex flex-col rounded-md bg-gray-100 pb-8 pl-8">
                                <h3 className="font-semibold">Thư mục chuyên đề</h3>
                                <ul className="ml-4 font-normal leading-6 text-gray-500">
                                    <li className="my-1">Nguồn gốc ý nghĩa</li>
                                    <li className="my-1">Nguồn gốc ý nghĩa</li>
                                    <li className="my-1">Nguồn gốc ý nghĩa</li>
                                    <li className="my-1">Nguồn gốc ý nghĩa</li>
                                    <li className="my-1">Nguồn gốc ý nghĩa</li>
                                </ul>
                                <a href="#" className="absolute bottom-2 right-4 flex items-center text-sm font-thin">
                                    Xem thêm
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="size-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                </a>
                            </div>
                            {/* Book1 */}
                            <div className="relative flex flex-col rounded-md bg-gray-100 pb-8 pl-6">
                                <h3 className="font-semibold">Thư mục thông báo tài liệu mới</h3>
                                <ul className="ml-4 font-normal leading-6 text-gray-500">
                                    <li className="my-1">Danh mục số các Sản phẩm</li>
                                    <li className="my-1">Danh mục số các Sản phẩm</li>
                                    <li className="my-1">Danh mục số các Sản phẩm</li>
                                    <li className="my-1">Danh mục số các Sản phẩm</li>
                                    <li className="my-1">Danh mục số các Sản phẩm</li>
                                </ul>
                                <a href="#" className="absolute bottom-2 right-4 flex items-center text-sm font-thin">
                                    Xem thêm
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="size-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                </a>
                            </div>
                            {/* Book1 */}
                            <div className="relative flex flex-col rounded-md bg-gray-100 pb-8 pl-6">
                                <h3 className="font-semibold">Tài liệu phục vụ nghiên cứu</h3>
                                <ul className="ml-4 font-normal leading-6 text-gray-500">
                                    <li className="my-1">BẢNG TIN TÀI NGUYÊN</li>
                                    <li className="my-1">BẢNG TIN TÀI NGUYÊN</li>
                                    <li className="my-1">BẢNG TIN TÀI NGUYÊN</li>
                                    <li className="my-1">BẢNG TIN TÀI NGUYÊN</li>
                                    <li className="my-1">BẢNG TIN TÀI NGUYÊN</li>
                                </ul>
                                <a href="#" className="absolute bottom-2 right-4 flex items-center text-sm font-thin">
                                    Xem thêm
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="size-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Sidebar */}
                    <div className="col-span-1 ml-6">
                        {/* Time */}
                        <div>
                            <h2 className="bg-gray-200 p-2 text-sm font-semibold">Giờ mở cửa</h2>
                            <div className="relative border border-gray-400 bg-white pb-6 pt-2">
                                <div className="my-2 flex text-sm font-semibold">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="mx-2 size-6 text-red-500"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                    </svg>

                                    <div className="flex flex-col">
                                        <span>Sáng: 8h00 – 12h00</span>
                                        <span>Chiều: 13h00 – 17h00</span>
                                    </div>
                                </div>
                                <div className="my-2 flex font-semibold">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="mx-2 size-6 text-red-500"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                                        />
                                    </svg>
                                    Thứ hai - Thứ sáu
                                </div>
                                <div className="my-2 flex font-semibold">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="mx-2 size-6 text-red-500"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                                        />
                                    </svg>
                                    Nghỉ: thứ 7, chủ nhật, ngày lễ
                                </div>
                                <a
                                    href="#"
                                    className="absolute bottom-0 right-0 pb-1 pr-2 text-gray-500 md:hover:text-blue-500"
                                >
                                    Xem thêm
                                </a>
                            </div>
                        </div>
                        {/* Login form */}
                        <div className="mt-4">
                            <h2 className="bg-gray-200 p-2 text-sm font-semibold">Giờ mở cửa</h2>
                            <div className="relative border border-gray-400 bg-white pb-6 pt-2">
                                <div className="">
                                    <div className="my-2 flex flex-col px-2 text-sm font-semibold">
                                        <label htmlFor="username">Tên truy cập</label>
                                        <div className="mt-1 border border-gray-400 py-2">
                                            <input
                                                className="ml-2"
                                                type="text"
                                                placeholder="Nhập vào tài khoản của bạn..."
                                            />
                                        </div>
                                        <label htmlFor="username">Mật khẩu</label>
                                        <div className="mt-1 border border-gray-400 py-2">
                                            <input
                                                className="ml-2"
                                                type="text"
                                                placeholder="Nhập vào mật khẩu của bạn..."
                                            />
                                        </div>

                                        <button className="mt-2 border bg-gray-400 py-2 text-white">Đăng nhập</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* News */}
                        <div className="mt-4">
                            <h2 className="bg-gray-200 p-2 text-sm font-semibold">LỊCH THÔNG BÁO</h2>
                            <div className="relative border border-gray-400 bg-white pb-6 pt-2">
                                <div className="">
                                    <div className="my-2 flex flex-col px-2 text-sm font-semibold">
                                        <span className="font-normal">
                                            Trang sách Báo Văn nghệ Quyết định Về việc công bố thủ tục hành chính bị bãi
                                            bỏ trong lĩnh vực biến đổi khí hậu thuộc phạm vi chức năng quản lý nhà nước
                                            của Bộ Tài nguyên và Môi trường: Số: 4273/QĐ-BTNMT, ngày 29 tháng 12 năm
                                            2023
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Image */}
                        <div className="mt-4">
                            <h2 className="bg-gray-200 p-2 text-sm font-semibold">Ảnh hoạt động</h2>
                            <div className="relative border border-gray-400 bg-white pb-6 pt-2">
                                <div className="">
                                    <div className="my-2 flex flex-col px-2 text-sm font-semibold">
                                        <img
                                            src="http://elib.hunre.edu.vn/pages/cms/Data/collections/201609231039-a281ef88-3668-41de-a737-9eeef3dab83d/441044060_10233562403271971_2880569306721075655_n.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Video */}
                        <div className="mt-4">
                            <h2 className="bg-gray-200 p-2 text-sm font-semibold">Video giới thiệu sách</h2>
                            <div className="relative border border-gray-400 bg-white pb-6 pt-2">
                                <div className="">
                                    <div className="my-2 flex flex-col px-2 text-sm font-semibold">
                                        <img
                                            src="https://th.bing.com/th/id/OIP.uDHBIqnVYoU9T5gc8tSzbwHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Link */}
                        <div className="mt-4">
                            <h2 className="bg-gray-200 p-2 text-sm font-semibold">Liên kết</h2>
                            <div className="relative border border-gray-400 bg-white pb-6 pt-2">
                                <div className="my-2 flex flex-col px-2 text-sm font-semibold">
                                    <select
                                        className="w-full border border-gray-400 p-2"
                                        title="selectAll"
                                        name="selectAll"
                                        id="selectAll"
                                    >
                                        <option value="" selected>
                                            -- Chọn liên kết ---
                                        </option>
                                        <option value="https://repository.vnu.edu.vn/handle/VNU_123/147515">
                                            CSDL Trung tâm tri thức số
                                        </option>
                                        <option value="https://db0.vista.gov.vn/">
                                            Thư viện Khoa học và Công nghệ Quốc gia
                                        </option>
                                        <option value="http://elib.monre.gov.vn/">
                                            Thư viện điện tử Tài nguyên Môi trường
                                        </option>
                                        <option value="https://sti.vista.gov.vn/Pages/Trang-chu.aspx">
                                            Cơ sở dữ liệu Nhiệm vụ và Công bố KH&amp;CN Việt Nam
                                        </option>
                                        <option value="http://nlv.gov.vn/">Thư viện Quốc gia Việt Nam</option>
                                        <option value="https://luanvan.moet.gov.vn/?page=1.5">
                                            CSDL Luận văn và Luận án tiến sỹ của Bộ Giáo dục và Đào tạo
                                        </option>
                                        <option value="http://lib.tlu.edu.vn/">Thư viện Đại học Thủy lợi</option>
                                        <option value="http://cli.hcmunre.edu.vn/donvi/trang-chu/index/">
                                            Thư viện Trường Đại Học Tài Nguyên và Môi Trường TPHCM
                                        </option>
                                        <option value="http://lic.humg.edu.vn/">
                                            Trung tâm Thông tin - Thư viện trường Đại học Mỏ Địa chất
                                        </option>
                                        <option value="https://thuvien.hvtc.edu.vn/">
                                            Thư viện Học viện Tài chính
                                        </option>
                                        <option value="https://www.vnua.edu.vn/">Thư viện Học viện Nông nghiệp</option>
                                        <option value="https://lic.vnu.edu.vn/vi/tim_kiem">
                                            Trung tâm Thông tin - Thư viện Đại học Quốc gia Hà Nội
                                        </option>
                                        <option value="http://lic.neu.edu.vn/">
                                            Trung tâm Thư viện Đại học Kinh tế Quốc dân
                                        </option>
                                        <option value="http://thuvien.hvnh.edu.vn/sites/hvnh/vie/home.aspx">
                                            Trung tâm Thông tin - Thư viện Học viện Ngân hàng
                                        </option>
                                    </select>
                                    <div className="mt-8">
                                        <h2>Thống kê truy cập website</h2>
                                        <div className="mt-2 flex items-center justify-between border-t-2 border-gray-200">
                                            <span className="mt-2 flex">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    className="mx-2 size-4 text-center"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                                    />
                                                </svg>
                                                Hôm nay
                                            </span>
                                            <span>225618</span>
                                        </div>
                                        <div className="mt-2 flex items-center justify-between border-t-2 border-gray-200">
                                            <span className="mt-2 flex">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    className="mx-2 size-4 text-center"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                                    />
                                                </svg>
                                                Hàng tháng
                                            </span>
                                            <span>765618</span>
                                        </div>
                                        <div className="mt-2 flex items-center justify-between border-t-2 border-gray-200">
                                            <span className="mt-2 flex">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    className="mx-2 size-4 text-center"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                                    />
                                                </svg>
                                                Trong năm
                                            </span>
                                            <span>725618</span>
                                        </div>
                                        <div className="mt-2 flex items-center justify-between border-t-2 border-gray-200">
                                            <span className="mt-2 flex">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    className="mx-2 size-4 text-center"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                                    />
                                                </svg>
                                                Trực tuyến
                                            </span>
                                            <span>525618</span>
                                        </div>
                                        <div className="mt-2 flex items-center justify-between border-t-2 border-gray-200">
                                            <span className="mt-2 flex">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    className="mx-2 size-4 text-center"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                                                    />
                                                </svg>
                                                Lượt truy cập thử
                                            </span>
                                            <span>435618</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 mx-4 flex text-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="mr-2 size-4"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                            />
                        </svg>
                        Lên đầu trang
                    </div>
                </div>
            </div>
            {/* ===Footer=== */}
            <div className="mt-12 flex flex-col items-center justify-center border-t-4 border-blue-700 leading-8">
                <h2 className="mt-4 py-2 text-xl font-semibold text-red-600">
                    TRƯỜNG ĐẠI HỌC TÀI NGUYÊN VÀ MÔI TRƯỜNG HÀ NỘI
                </h2>
                <p className="py-2"> Địa chỉ: Số 41A, Đường Phú Diễn, Quận Bắc Từ Liêm, TP. Hà Nội</p>
                <h2 className="py-2 text-xl font-semibold text-red-600">TRUNG TÂM THƯ VIỆN VÀ CÔNG NGHỆ THÔNG TIN</h2>
                <span className="py-2">
                    Tầng 1 - Tòa nhà B (7 tầng); Điện thoại: 024.38370598; Hotline: 0989059880; E-mail:
                    trungtamtv-cntt@hunre.edu.vn
                </span>
                <p className="py-2">
                    Bản quyền thuộc về Trung Tâm Thư Viện và Công nghệ thông tin Trường Đại Học Tài Nguyên và Môi Trường
                    Hà Nội
                </p>
            </div>
        </div>
    );
};
