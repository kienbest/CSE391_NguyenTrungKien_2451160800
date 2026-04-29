Câu A1
I. 5 bước truy cập :
1. DNS Lookup : Trình duyệt liên hệ với máy chủ DNS để chuyển đổi tên miền Shopee.vn thành đại chỉ IP của máy chủ chứa trang web
2. TCP/TLS Handshake : Trình duyệt thiết lập kết nối an toàn với máy chủ thông qua giao thức TCP và TLS để đảm bảo dữ liệu truyền đi được mã hóa (HTTPS)
3. HTTP Request/Response : Trình duyệt gửi một yêu cầu HTTP GET đến máy chủ để lấy HTML . Máy chủ phản hồi bằng cách gửi nội dung mã nguồn HTML về.
4. Parsing và DOM Tree Construction : Trình duyệt đọc mã HTML và xây dựng cấu trúc DOM (Document Object Model) . Trong quá trình này , nếu gaowj các thẻ <link> (CSS) hoặc <img> , trình duyệt sẽ tiếp tục gửi yêu cầu tải các tài liệu đó
5. Rendering : Trình duyệt kết hợp DOM và CSS (đã được tải) để tạo ra cây khung nhìn (Render Tree ) và vẽ các phân tử lên màn hình người dùng

II.tab NetWork Trong Chrome DevTool
+ Trong DevTool , teb Network  cho ta thấy thông tin về tất cả các tài nguyên mà trang web đang tải về . Điều này bao gồm các tệp HTML , CSS, JavaScript , hình ảnh và các lời gọi API

+ Trang web được chọn để chụp và đánh dấu là Wikipedia
--Hình ảnh screenshot và đánh dấu Status Code của request đầu tiên:

<img width="952" height="1278" alt="Image" src="https://github.com/user-attachments/assets/54f2aadb-7b13-4b4b-966f-1560acf86f58" />

Câu A2 
Trang web phía dưới bị Google đánh giá thấp vì các lí do sau:
+Mã nguồn không semantic -> bot tìm kiếm khó hiểu cấu trúc và mức độ quan trọng nội dung
+Google đánh giá trang web sử dụng quá nhiều thẻ <div> gây ra sự vô nghĩa

Sửa lại đoạn mã như sau :
<header>
          <div class = "logo">ShopTLU</div>
          <nav>
                  <ul>
                        <li><a href="/">Trang chủ </li>
                        <li><a href="/"products" >Sản phẩm</li>
         </ul>
</nav>
</header>

<main>
          <article class ="product">
                             <h1> iPhone 16 Pro</h1>
                            <p class ="price">25.990.000</P>
                            <figure>
                                  <img src= "iphone .jpg" alt ="Điện thoại iphone 26 pro màu titan">
                             </figure>
           </article >
</main>
<footer> @ 2026 ShopTLU</footer>

Câu A3
 
Vẽ tay kết quả hiển thị HTML :
BODY
├── DIV
│    └── "Hộp 1"
├── #text("\n")
├── SPAN
│    └── "Text A"
├── #text("\n")
├── SPAN
│    └── "Text B"
├── #text("\n")
├── DIV
│    └── "Hộp 2"
├── #text("\n")
├── SPAN
│    └── "Text C"
├── #text("\n")
├── STRONG
│    └── "Text D"
├── #text("\n")
└── DIV
     └── "Hộp 3"    

Giải thích hình vẽ:
Đây là 1 cây DOM bao gồm:
+BODY : vùng chứa tất cả nội dung
+DIV,SPAN,STRONG : các thẻ HTML được browser biến thành node phần tử
+Chữ bên trong nhu "Hộp 1", "Text A" = text node con của các thẻ đó

Câu C1

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Chi tiết sản phẩm | E-commerce</title>
</head>
<body>

    <!-- header: Chứa logo và điều hướng chính của toàn website -->
    <header>
        <div class="logo">Logo</div>
        <nav aria-label="Main Navigation"> <!-- nav: Khu vực điều hướng chính -->
            <ul>
                <li><a href="#">Trang chủ</a></li>
                <li><a href="#">Danh mục</a></li>
                <li><a href="#">Giỏ hàng</a></li>
            </ul>
        </nav>
    </header>

    <!-- nav: Breadcrumb là một dạng điều hướng nên dùng thẻ nav -->
    <nav aria-label="breadcrumb">
        <ol> <!-- ol: Danh sách có thứ tự vì Breadcrumb thể hiện cấp độ từ lớn đến nhỏ -->
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/mobile">Điện thoại</a></li>
            <li aria-current="page">iPhone 16</li> <!-- aria-current: Xác định đây là trang hiện tại -->
        </ol>
    </nav>

    <!-- main: Chứa nội dung chính, duy nhất của trang này (Sản phẩm) -->
    <main>
        
        <!-- article: Dùng để bao bọc một nội dung độc lập, có thể tái sử dụng (một sản phẩm cụ thể) -->
        <article id="product-detail">
            
            <!-- section: Chia nhỏ các khu vực chức năng bên trong article -->
            <section class="product-visuals">
                <figure> <!-- figure: Dùng cho ảnh hoặc sơ đồ đi kèm chú thích -->
                    <img src="main-product.jpg" alt="Ảnh chính iPhone 16">
                    <figcaption>Hình ảnh thực tế sản phẩm</figcaption>
                    
                    <!-- div: Nhóm các ảnh phụ (thumbnail) -->
                    <div class="thumbnails">
                        <img src="img1.jpg" alt="Góc nghiêng">
                        <img src="img2.jpg" alt="Mặt sau">
                        <img src="img3.jpg" alt="Cổng sạc">
                        <img src="img4.jpg" alt="Hộp đựng">
                    </div>
                </figure>
            </section>

            <section class="product-summary">
                <h1>Tên sản phẩm iPhone 16 Pro Max</h1> <!-- h1: Tên sản phẩm là tiêu đề quan trọng nhất trang -->
                
                <div class="rating" aria-label="4.5 trên 5 sao"> <!-- div: Chứa cụm đánh giá sao -->
                    <span>★★★★☆</span>
                    <span>(120 đánh giá)</span>
                </div>

                <p class="price"> <!-- p: Thể hiện một đoạn văn bản hoặc thông tin đơn lẻ (giá) -->
                    <ins>30.000.000đ</ins> <!-- ins: Thể hiện giá hiện tại -->
                    <del>35.000.000đ</del> <!-- del: Thể hiện giá cũ đã bị gạch bỏ -->
                </p>

                <div class="description">
                    <h2>Mô tả sản phẩm</h2> <!-- h2: Tiêu đề phụ cấp 2 -->
                    <p>Đây là bản tóm tắt các tính năng nổi bật của iPhone 16...</p>
                </div>
            </section>

            <section id="specifications">
                <h2>Thông số kỹ thuật</h2>
                <table> <!-- table: Dùng để hiển thị dữ liệu dạng bảng/đối soát -->
                    <thead> <!-- thead: Nhóm các tiêu đề bảng -->
                        <tr>
                            <th>Đặc tính</th>
                            <th>Chi tiết</th>
                        </tr>
                    </thead>
                    <tbody> <!-- tbody: Nhóm nội dung chính của bảng -->
                        <tr>
                            <td>Màn hình</td>
                            <td>6.7 inch, OLED</td>
                        </tr>
                        <tr>
                            <td>Chipset</td>
                            <td>Apple A18 Pro</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section id="reviews">
                <h2>Đánh giá từ khách hàng</h2>
                <!-- section: Mỗi bình luận có thể coi là một phần nội dung nhỏ -->
                <section class="comment">
                    <h3>Nguyễn Văn A</h3> <!-- h3: Tên người dùng trong khu vực đánh giá -->
                    <time datetime="2024-10-20">20/10/2024</time> <!-- time: Thể hiện thời gian máy có thể đọc được -->
                    <p>Sản phẩm rất tuyệt vời!</p>
                </section>
            </section>

        </article>

        <!-- aside: Sidebar chứa thông tin liên quan nhưng không phải nội dung chính của article -->
        <aside id="related-products">
            <h2>Sản phẩm tương tự</h2>
            <ul> <!-- ul: Danh sách không thứ tự vì các sản phẩm liên quan có vai trò ngang nhau -->
                <li>
                    <a href="#">iPhone 15 Pro</a>
                </li>
                <li>
                    <a href="#">Samsung S24 Ultra</a>
                </li>
            </ul>
        </aside>

    </main>

    <!-- footer: Chứa thông tin cuối trang như bản quyền, liên hệ -->
    <footer>
        <p>&copy; 2024 Cửa hàng điện thoại. All rights reserved.</p>
        <address> <!-- address: Thẻ dùng cho thông tin liên hệ -->
            Liên hệ: <a href="mailto:contact@store.com">contact@store.com</a>
        </address>
    </footer>

</body>
</html>

Câu C2
Nói rằng chỉ cần dùng <div> cho mọi thứ là đủ là một cách làm nhanh trước mắt nhưng gây nhiều hạn chế về kỹ thuật lâu dài. Thứ nhất, **về SEO, các công cụ tìm kiếm như Google không chỉ đọc nội dung văn bản mà còn phân tích cấu trúc trang. Khi dùng các thẻ semantic như <header>, <nav>, <main>, <article>, <footer>, bot tìm kiếm dễ xác định đâu là nội dung chính, đâu là menu hay thông tin phụ, từ đó lập chỉ mục hiệu quả hơn. Nếu tất cả đều là <div>, cấu trúc tài liệu trở nên mơ hồ và giảm khả năng tối ưu tìm kiếm.

Thứ hai, semantic HTML rất quan trọng với accessibility. Các trình đọc màn hình dành cho người khiếm thị dựa vào ý nghĩa của thẻ để điều hướng. Ví dụ, khi dùng <nav>, người dùng có thể nhảy ngay tới vùng menu; dùng <main> giúp bỏ qua phần lặp lại để vào nội dung chính. Nếu chỉ dùng <div>, trình hỗ trợ không hiểu được vai trò của từng khối, khiến trải nghiệm truy cập khó khăn hơn.

Ví dụ cụ thể: một bài viết tin tức nếu được bao bởi <article> và tiêu đề dùng <h1> sẽ giúp cả Google lẫn screen reader hiểu đây là một nội dung độc lập quan trọng. Điều này tốt hơn nhiều so với việc bọc tất cả bằng <div class="news">.

Tuy nhiên, <div> vẫn rất phù hợp trong những trường hợp chỉ cần chia layout hoặc gom nhóm để CSS/JavaScript xử lý, chẳng hạn tạo một khối card sản phẩm hoặc container flex/grid không mang ý nghĩa nội dung riêng. Vì vậy, <div> không vô dụng, nhưng semantic HTML mới là nền tảng đúng chuẩn cho web hiện đại.

Câu B3 
phần liệt kê lỗi:
Lỗi 1 : Dòng 1 - Thiếu khai báo `html` trong DOCTYPE - Cách sửa : Đổi thành <!DOCTYPE html>
Lỗi 2: Dòng 4 - Thẻ `<title>` chưa được đóng - Cách sửa : Thêm thẻ đóng </title>
Lỗi 3 : Dòng 5 - Giá trị thuộc tính `charset` sai chuẩn - Cách sửa : `utf8` -. `UTF-8`
Lỗi 4 : Dòng 8 - Thẻ `<h1>` đóng sai cú pháp - Cách sửa :<h1> -> </h1>
Lỗi 5: Dòng 12 - Thẻ <a> đóng sai cú pháp - Cách sửa :<a> -> </a>
Lỗi 6: Dòng  20 - Thiếu dấu ngoặc kép cho thuộc tính `src` và thiếu thuộc tính `alt` - Cách sửa : thêm dấu ngoặc kép `src="iphone.jpg" ` và thêm `alt ="iphone 16 Pro`
Lỗi 7: Dòng 22 - Sai thứ tự lồng thẻ - Cách sửa : Đòng thẻ <b> trước khi đóng thẻ <p>:`<b>...<b></p>`
Lỗi 8: Dòng 40 - Sử dụng nhiều thẻ `<main>` trên cùng 1 trang -Cách sửa : Thẻ `<main>` là duy nhất nội dung phụ nên dùng thẻ `<aside>` hoặc gồm <main> duy nhất
Lỗi 9 : Dòng 45 - Thẻ `<p>` trong footer chưa được đóng - Cách sửa : Thêm thẻ đóng </p> sau "CopyRight 2026" 
Lỗi 10: Dòng 48 - Thiếu thẻ đóng toàn bộ tài liệu - Cách sửa : Thêm thẻ đóng </html> ở cuối file.
