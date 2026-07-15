# Sổ Thu Trọ — Hướng dẫn cài đặt & sử dụng

## Đây là gì?

Một ứng dụng thay thế cho file Excel `_Nhà_Trọ_2024.xlsm` bạn đang dùng: quản lý phòng, ghi số điện/nước hàng tháng, tự động tính tiền phòng — theo đúng công thức bạn đã dùng trong file Excel (kể cả quy tắc tính tiền nước tối thiểu khi không đọc được số nước, phụ thu người ở thêm từ người thứ 3, tiền rác, tiền mạng...), và tạo hoá đơn để gửi/thu tiền khách thuê.

**Toàn bộ dữ liệu lưu ngay trên điện thoại của bạn** (bộ nhớ của trình duyệt), không upload lên đâu cả, không cần mạng để dùng hàng ngày.

## Một điều cần biết trước

Mình không thể tự biên dịch ra file `.apk` (không có công cụ Android SDK trong môi trường của mình). Thay vào đó mình đã làm một **ứng dụng web chạy ngay trên điện thoại**, mở bằng Chrome, có thể "Thêm vào Màn hình chính" để dùng gần như app thật — bấm vào biểu tượng là mở ngay, dữ liệu lưu offline trên máy.

Nếu bạn muốn một file `.apk` thật để cài như app từ Google Play, mình đã chuẩn bị sẵn mọi thứ cần thiết — xem mục **"Đóng gói thành app Android thật (.apk)"** ở cuối file này, chỉ còn 2 bước thao tác tay (khoảng 10-15 phút, không cần biết lập trình).

## Cài đặt lên điện thoại Android (làm 1 lần)

1. Tải file **`index.html`** về điện thoại (chuyển qua Zalo gửi cho chính mình, Google Drive, email, hoặc cáp USB — cách nào tiện thì dùng).
2. Vào ứng dụng **Files/Tệp** trên điện thoại, tìm file vừa tải, bấm mở → chọn **Chrome** để mở.
3. Ứng dụng hiện ra ngay trong Chrome. Bấm nút **⋮** (góc trên bên phải Chrome) → **"Thêm vào Màn hình chính"** (Add to Home screen).
4. Từ giờ có biểu tượng riêng ngoài màn hình chính, bấm vào là mở thẳng ứng dụng, giống một app bình thường.

> Lưu ý: luôn mở đúng file `index.html` đó (đừng tải lại/copy thành file khác), vì dữ liệu được Chrome lưu gắn với đúng file đó. Nếu xoá file hoặc xoá dữ liệu Chrome, dữ liệu trong app cũng mất — vì vậy hãy **sao lưu định kỳ** (xem mục bên dưới).

## Cách dùng

### 1. Thêm phòng
Tab **Phòng** → bấm nút **+** → nhập tên phòng, tên khách thuê, số người ở, và **số điện/nước ban đầu** (chỉ số đồng hồ hiện tại, để tính số dùng cho tháng đầu tiên). Có thể để giá phòng/điện/nước theo mặc định, hoặc bấm "Tuỳ chỉnh giá riêng cho phòng này" nếu phòng đó có giá khác.

### 2. Hàng tháng: nhập số điện nước
Tab **Tổng quan** → chọn đúng tháng → bấm vào phòng cần nhập → nhập **số điện mới** và **số nước mới** (số cũ đã tự điền từ tháng trước). Xem trước tiền phòng/điện/nước/tổng cộng ngay khi gõ số → bấm **Lưu**.

### 3. Xem / gửi hoá đơn
Sau khi lưu số, hoá đơn hiện ra ngay — có thể:
- **In / PDF**: in trực tiếp hoặc "Lưu thành PDF" qua hộp thoại in của điện thoại.
- **Chia sẻ**: gửi nội dung hoá đơn qua Zalo/tin nhắn.
- **Đánh dấu đã thu tiền**: nhập số tiền thực nhận (nếu khách trả thiếu/thừa/có trừ khoản gì thì ghi chú lại), app tự nhớ còn thiếu bao nhiêu.

### 4. Xem lại lịch sử một phòng
Tab **Phòng** → bấm vào phòng → xem toàn bộ các tháng đã thu, bấm vào 1 tháng để xem lại hoá đơn hoặc sửa số nếu nhập nhầm. Có ô tìm kiếm theo tên phòng, tên hoặc **số điện thoại** người thuê khi có nhiều phòng.

### 5. Nhập số hàng loạt (nhanh hơn)
Ở tab **Tổng quan**, bấm icon lưới ở góc trên hoặc "Nhập hàng loạt" → hiện bảng tất cả các phòng, gõ số điện/nước mới cho từng phòng rồi bấm **Lưu tất cả** một lần — không cần bấm vào từng phòng.

### 6. Xem hoá đơn tháng trước/sau
Khi đang xem hoá đơn của 1 phòng, **vuốt sang trái/phải** để chuyển qua hoá đơn tháng kế tiếp/trước đó của phòng đó (chỉ trong các tháng đã có số liệu).

### 7. Chia sẻ hoá đơn qua Zalo (dạng ảnh)
Trong hoá đơn, bấm **"Chia sẻ ảnh"** → điện thoại sẽ hiện bảng chọn ứng dụng để gửi (Zalo, Tin nhắn, Gmail...). Android/iOS không cho web app tự động chọn sẵn Zalo — bạn chọn Zalo trong bảng đó là được (đa số điện thoại sẽ nhớ lựa chọn lần sau).

## Cài đặt chung (tab Cài đặt)

- Thông tin chủ trọ, giá phòng/điện/nước mặc định, ngày chốt số hàng tháng, giới hạn xem lịch chỉ đến tháng sau tháng hiện tại (tránh nhập nhầm quá xa).
- **Quy tắc tính tiền nước tối thiểu**: giữ đúng như file Excel cũ — nếu số nước dùng trong tháng ít hơn hoặc bằng (số m³ tính vô × số người ở), app tính tiền nước tối thiểu theo đầu người thay vì theo số thực tế (dùng cho tháng không đọc được đồng hồ).
- Phụ thu mỗi người ở thêm (áp dụng từ người thứ 3 trở lên) — **tách riêng** tiền rác và tiền mạng thành 2 khoản độc lập.

## Thông tin thanh toán

- **Người thuê chính**: lưu tên + số điện thoại khi thêm/sửa phòng — hiện ngay trên hoá đơn kèm nút gọi nhanh.
- **Chuyển khoản + mã QR**: vào Cài đặt → chọn đúng ngân hàng, nhập số tài khoản → app tự tạo mã QR VietQR đúng số tiền cho từng hoá đơn (cần có mạng lúc xem/in để tải mã QR).
- **WiFi trên hoá đơn**: nếu "Tiền mạng/phòng" trong Cài đặt = 0đ, WiFi coi như miễn phí và luôn hiện. Nếu > 0đ, mỗi phòng có thể bật "Phòng này không dùng WiFi" (trong phần sửa phòng) để ẩn thông tin WiFi và không bị tính phí mạng.
- **Thu thừa/thiếu**: khi đánh dấu đã thu tiền, nếu số tiền nhận nhiều hơn tổng phải thu, hoá đơn tự hiện dòng "Trả lại khách: …".

## Sao lưu dữ liệu — rất quan trọng

Vì dữ liệu chỉ nằm trên điện thoại này, hãy **xuất file sao lưu định kỳ** (Cài đặt → "Xuất file sao lưu"), rồi lưu file đó vào Google Drive/Zalo Cloud/email cho chắc. Khi cần khôi phục (đổi điện thoại, lỡ xoá app...), dùng "Nhập file sao lưu" và chọn lại đúng file đã xuất.

## Lưu thêm ra 1 file riêng trên máy (an toàn hơn bộ nhớ trình duyệt)

Trong Cài đặt có mục **"Tệp sao lưu tự động trên máy"**. Đây là lớp an toàn bổ sung, tách biệt hẳn khỏi bộ nhớ Chrome:

1. Bấm **"Chọn / tạo file trên máy"** → chọn nơi lưu (khuyên chọn thư mục **Downloads**) → đặt tên file (mặc định `so-thu-tro-du-lieu.json`).
2. Từ giờ, **mỗi khi bạn thêm/sửa gì trong app, nó sẽ tự động ghi đè vào đúng file đó** — không cần bấm xuất file thủ công nữa. File này nằm thật sự trong bộ nhớ máy (xem được bằng ứng dụng Files/Quản lý tệp), không bị ảnh hưởng nếu Chrome bị xoá dữ liệu/gỡ cài đặt app.
3. Thỉnh thoảng trình duyệt sẽ tự thu hồi quyền ghi file (bình thường, vì lý do bảo mật) — khi đó Cài đặt sẽ hiện thông báo, chỉ cần bấm **"Cấp lại quyền"** một cái là tiếp tục lưu tự động bình thường, dữ liệu không mất gì trong lúc chờ.

Lưu ý: tính năng này cần Chrome khá mới và chỉ hoạt động khi mở qua địa chỉ https (đã host), mục này sẽ **tự ẩn đi** nếu điện thoại/trình duyệt chưa hỗ trợ — khi đó bạn dùng "Xuất file sao lưu" thủ công + Google Drive ở dưới là đủ an toàn rồi, không bắt buộc phải có mục này.

**Nếu không thấy mục này hiện ra** (bản mới sẽ hiện ra kèm gợi ý ngay trong Cài đặt thay vì ẩn hẳn), thử theo thứ tự:
1. Cập nhật Chrome lên bản mới nhất qua Google Play.
2. Mở app **Chrome** (mở trực tiếp, không phải qua icon app đã cài) → gõ `chrome://flags` vào thanh địa chỉ → tìm "experimental web platform features" → chọn **Enabled** → bấm **Relaunch** → mở lại app.

Đây là API còn khá mới trên Android nên không phải máy nào cũng bật được, kể cả sau khi thử 2 cách trên — không sao, các cách sao lưu khác vẫn đủ dùng.

## Đồng bộ qua Google Drive (dùng chung nhiều điện thoại)

Đây là tính năng nâng cao, có **2 điều kiện bắt buộc** vì quy định bảo mật của Google:

1. Trang phải mở qua địa chỉ web `https://…` — **không** mở trực tiếp file `index.html` từ máy. Cách dễ nhất và miễn phí: tải file lên **GitHub Pages** (mình có thể làm hộ nếu bạn có tài khoản GitHub, hoặc hướng dẫn từng bước).
2. Bạn cần một **Google Client ID** riêng (miễn phí, Google không cho dùng chung của người khác vì lý do bảo mật):
   - Vào https://console.cloud.google.com/ → tạo một dự án mới (bất kỳ tên gì).
   - Vào **APIs & Services → Credentials** → **Create Credentials → OAuth client ID** → chọn loại **Web application**.
   - Ở mục "Authorized JavaScript origins", thêm đúng địa chỉ https:// nơi bạn host file (ví dụ `https://tenban.github.io`).
   - Bật API **Google Drive API** trong mục **Library**.
   - Copy **Client ID** vừa tạo, dán vào Cài đặt → "Google Client ID" trong app.

Sau khi có đủ 2 điều kiện trên: vào Cài đặt → **Đăng nhập Google** → **Tải lên Drive** (từ điện thoại chính) → sang điện thoại khác, mở cùng địa chỉ https đó → Đăng nhập cùng tài khoản Google → **Tải về từ Drive**. Dữ liệu sẽ giống nhau trên cả hai máy tại thời điểm đồng bộ (đây không phải đồng bộ real-time tự động, mà là "tải lên/tải về" theo yêu cầu — đơn giản và ít lỗi hơn cho việc quản lý phòng trọ).

Nếu bạn chỉ dùng 1 điện thoại, không cần mục này — sao lưu file JSON như mục trên là đủ.

## Về việc tự động đọc số điện/nước từ ảnh chụp

Mình chưa làm tính năng này trong bản này, vì nó cần gọi một dịch vụ AI đọc ảnh (OCR) có trả phí và cần API key riêng của bạn — không thể chạy "miễn phí, offline" như phần còn lại của app. Nếu bạn muốn, mình có thể làm thêm ở bản sau: bạn tự đăng ký một API key (ví dụ Google Cloud Vision hoặc OpenAI/Anthropic), dán vào Cài đặt, app sẽ gọi dịch vụ đó để đọc số từ ảnh khi có mạng. Cứ nói khi bạn cần.

## App vẫn hiện giao diện cũ sau khi cập nhật — làm sao xoá cache?

Đây là lỗi khá phổ biến với app kiểu này, và **nguyên nhân không nằm ở file .apk** — nhiều người (kể cả mình lúc đầu) hay lầm tưởng cài lại .apk là sẽ được bản mới, nhưng thực ra:

> App cài trên máy chỉ là "vỏ" mở ra đúng địa chỉ web của bạn. Giao diện thật sự được Chrome tải về và **lưu tạm (cache)** ngay trên chính website đó — gỡ/cài lại app không đụng gì đến bộ nhớ cache này cả, vì nó nằm ở phía Chrome/website, không nằm trong file .apk.

Mình đã sửa file `sw.js` (service worker) để từ nay **mỗi lần bạn tải bản mới lên GitHub, app sẽ tự nhận bản mới ngay** khi có mạng, không bị kẹt ở bản cũ nữa (trước đây service worker cũ lỡ ưu tiên bản lưu tạm hơn bản mới — đã sửa lại thành ưu tiên tải bản mới nhất khi có mạng, chỉ dùng bản lưu tạm lúc mất mạng).

**Để xử lý ngay tình trạng hiện tại của bạn:**
1. Cập nhật lại 2 file `index.html` và `sw.js` (bản mới nhất mình gửi kèm) lên đúng chỗ cũ trong GitHub repo (Add file → Upload files, chọn Commit để ghi đè file cũ).
2. Mở app trên điện thoại → vào **Cài đặt → cuộn xuống cuối → bấm "Buộc cập nhật phiên bản mới nhất"**. Nút này chỉ xoá bộ nhớ đệm hiển thị, **không đụng đến dữ liệu phòng trọ bạn đã nhập**.
3. Nếu vẫn chưa thấy đổi: đóng hẳn app (không chỉ bấm về màn hình chính, mà vuốt tắt hẳn khỏi danh sách app đang chạy) rồi mở lại.

Từ lần cập nhật này về sau, mỗi khi mình gửi bạn bản mới, bạn chỉ cần: tải file mới đè lên GitHub → mở app → bấm "Buộc cập nhật phiên bản mới nhất" 1 lần là xong, không cần đóng gói/cài lại .apk mỗi lần (chỉ cần đóng gói lại .apk khi bạn muốn đổi icon hoặc tên app hiển thị ngoài màn hình).

## Đóng gói thành app Android thật (.apk) để cài như từ Google Play

Mình không có công cụ Android SDK để tự biên dịch ra file `.apk` trong môi trường của mình — nhưng mình đã chuẩn bị sẵn đầy đủ "vỏ app" (icon, `manifest.json`, `sw.js` để chạy offline như app thật). Bạn chỉ cần làm 2 bước sau, không cần biết lập trình, mất khoảng 10-15 phút:

### Bước 1: Đưa các file lên một địa chỉ web (miễn phí, dùng GitHub Pages)

1. Vào https://github.com → tạo tài khoản miễn phí nếu chưa có.
2. Bấm **New repository** → đặt tên bất kỳ (ví dụ `so-thu-tro`) → chọn **Public** → Create repository.
3. Bấm **Add file → Upload files** → kéo thả **tất cả** các file: `index.html`, `manifest.json`, `sw.js`, `privacy.html`, `.nojekyll`, và cả thư mục `icons` (4 file .png bên trong) → Commit changes.
   - Quan trọng: giữ nguyên đúng tên file và cấu trúc thư mục `icons/` như đã tải về. File `.nojekyll` là file rỗng, không có nội dung — cứ tải lên như các file khác (một số trình duyệt ẩn file có dấu chấm ở đầu, nếu không kéo thả được thì dùng "Create new file" trên GitHub và gõ tên `.nojekyll`, để trống nội dung, Commit).
4. Vào **Settings → Pages** → mục "Branch" chọn `main` → Save. Đợi 1-2 phút, GitHub sẽ cho bạn một địa chỉ dạng `https://<tên-bạn>.github.io/so-thu-tro/`.
5. Mở thử địa chỉ đó trên điện thoại — app phải chạy y như file mở trực tiếp, nhưng giờ đã là một trang web thật (https).

### Bước 2: Dùng PWABuilder để tạo file APK/AAB

1. Vào https://www.pwabuilder.com
2. Dán địa chỉ `https://<tên-bạn>.github.io/so-thu-tro/index.html` vào ô tìm kiếm → bấm Start.
3. PWABuilder sẽ quét và chấm điểm (Manifest, Service Worker, Security) — nếu thiếu gì nó sẽ gợi ý ngay trên trang.
4. Bấm **Package for stores → Android** → để mặc định các tuỳ chọn → **Generate** → tải về một file `.zip` (bên trong có file `.apk` để cài thử, file `.aab` để nộp Google Play, và một file quan trọng tên `assetlinks.json`).

### Bước 2.5 — Bắt buộc: xác thực để app mở toàn màn hình, không hiện thanh địa chỉ trình duyệt

Đây là bước hay bị bỏ sót nhất, và là lý do khiến app trông giống như "chỉ mở trình duyệt" thay vì mở như app thật: Android cần xác nhận rằng chính bạn là chủ của cả website lẫn app, thông qua một file gọi là **Digital Asset Links**. Nếu thiếu bước này, app vẫn chạy được nhưng sẽ hiện thanh địa chỉ ở trên giống trình duyệt.

1. Mở file `.zip` PWABuilder vừa tải, tìm file **`assetlinks.json`** bên trong (thường ở thư mục gốc hoặc thư mục `android`).
2. Trong repo GitHub của bạn (`so-thu-tro`), tạo một thư mục tên đúng **`.well-known`** (có dấu chấm ở đầu), rồi tạo file `assetlinks.json` bên trong đó, dán đúng nội dung từ file PWABuilder vừa tải.
   - Trên giao diện web GitHub: **Add file → Create new file** → gõ tên `.well-known/assetlinks.json` (gõ luôn cả dấu `/`, GitHub sẽ tự tạo thư mục) → dán nội dung → Commit.
3. **Rất quan trọng với GitHub Pages**: tạo thêm một file rỗng tên đúng **`.nojekyll`** ở thư mục gốc của repo (file này mình đã đính kèm sẵn trong gói zip gửi kèm). Nếu thiếu file này, GitHub có thể tự động bỏ qua thư mục `.well-known` và không phục vụ được file `assetlinks.json`.
4. Đợi 1-2 phút cho GitHub Pages cập nhật, sau đó mở thử địa chỉ `https://<tên-bạn>.github.io/so-thu-tro/.well-known/assetlinks.json` trên trình duyệt máy tính — phải thấy nội dung JSON hiện ra (không phải trang lỗi 404).
5. Gỡ cài đặt app `.apk` cũ trên điện thoại (nếu đã cài) → cài lại file `.apk` mới → mở lại. Lúc này app sẽ mở toàn màn hình, không còn thanh địa chỉ nữa.

Nếu làm xong bước 4 mà vẫn thấy lỗi 404, khả năng cao là thiếu file `.nojekyll` hoặc gõ sai tên thư mục `.well-known` (rất dễ gõ nhầm vì có dấu chấm ở đầu) — kiểm tra lại chính xác tên file/thư mục.

### Bước 3 (tuỳ chọn): Đăng lên Google Play

Nếu muốn app xuất hiện thật trên Google Play, cần thêm:
- Đăng ký **Google Play Console** (phí một lần khoảng $25, trả cho Google chứ không phải cho mình).
- Điền form nội dung app (mô tả, ảnh chụp màn hình, phân loại độ tuổi).
- Dán link **Chính sách bảo mật**: dùng chính file `privacy.html` mình đã soạn sẵn, ví dụ `https://<tên-bạn>.github.io/so-thu-tro/privacy.html` (Google Play bắt buộc phải có mục này).
- Tải file `.aab` từ Bước 2 lên.

Nếu bạn không cần lên Google Play, chỉ cần file `.apk` ở Bước 2 để cài trực tiếp (bật "Cài đặt từ nguồn không xác định" trên điện thoại) là đủ giống một app thật rồi.

Nếu cần, cứ nói mình biết bạn đang vướng ở bước nào, mình hướng dẫn tiếp.

## Cập nhật mới nhất (15/07/2026)

- **Sửa "Phòng còn trống"**: giờ đúng nghĩa là phòng đã trả, chưa có người thuê mới (trước đó bị hiểu nhầm thành "chưa nhập số tháng này"). Bấm vào để xem danh sách và cập nhật người thuê mới.
- **Sắp xếp phòng dễ hơn trên điện thoại**: tay cầm kéo thả (⠿) đã to hơn, có tự cuộn màn hình khi kéo tới gần mép trên/dưới. Nếu vẫn thấy khó thao tác, bấm nút **"Đánh số thứ tự"** ở đầu tab Phòng — mỗi phòng sẽ có 1 ô số, gõ số thứ tự mong muốn rồi bấm ra ngoài là xếp lại ngay, không cần kéo thả.
- **Tab Thống kê** giờ có thêm biểu đồ **"Thanh toán"** (xanh = đã thu, đỏ = còn nợ) cho từng phòng, kèm dòng tổng kết "đã thu bao nhiêu / còn nợ bao nhiêu" trong khoảng thời gian đang xem. Có thể chọn xem 6 tháng hoặc 12 tháng gần nhất (nút chuyển ở đầu trang).
- Các tính năng đã có từ trước vẫn giữ nguyên: vuốt trái/phải ở Tổng quan để đổi tháng, khoá số điện/nước cũ (bấm "Sửa" để mở khoá riêng từng ô), xác nhận xoá phòng bằng cách gõ chữ OK, ghi chú riêng cho admin ở đầu trang Cài đặt.

## Có thể làm thêm gì sau này

- Nhắc lịch thu tiền hàng tháng (thông báo trên điện thoại).
- Xuất báo cáo doanh thu theo năm ra file Excel.
- Tự động đọc số điện/nước từ ảnh chụp (cần API key riêng, xem mục trên).

Cứ nói với mình khi cần chỉnh sửa hay thêm tính năng.
