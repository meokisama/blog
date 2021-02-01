---
title: "Gõ tiếng Việt trên Kali Linux 2020.4"
category: "linux"
date: "2020-12-28 12:00:00 +09:00"
desc: "Hướng dẫn chi tiết cách cài đặt và cấu hình bộ gõ tiếng Việt Ibus Bamboo trên Kali Linux 2020.4."
thumbnail: "./images/go-tieng-viet-kali-linux/kali.png"
alt: "Kali Linux"
---

## Tổng quan

Với những người là tín đồ công nghệ thì sự tiện lợi của **Linux** trong công việc là không thể bàn cãi. Với những con người đến từ Việt Nam thì *"sự tiện lợi"* này trắc trở hơn một chút, là do người Việt mình sử dụng hệ thống ngôn ngữ hơi đặc biệt hơn.

Nhưng không sao, có bug thì cũng có fix bug. Chúng ta có thể cài đặt bộ gõ tiếng Việt trên các distro Linux để khắc phục vấn đề đó.

Mình có thấy nhiều người than phiền trên các diễn đàn về việc không cài đặt được, hoặc cài bị lỗi khi setup các bộ gõ tiếng Việt, nên mình mạo muội viết một bài cụ thể về vấn đề này. **Distro mình sử dụng trong bài viết là Kali Linux 2020.4**.

## Bộ gõ?

Tương tự với người anh em trên Windows là **Unikey**, bên Linux cũng có một bộ gõ tiếng Việt gọi là **ibus-unikey** (<a href="https://github.com/vn-input/ibus-unikey">Github</a>), tuy nhiên chức năng của nó là không nhiều, và quan trọng hơn, **bộ gõ này đã không còn được hỗ trợ.** Một số bộ gõ khác như *ibus-teni* hay *ibus-bogo* cũng gặp tình trạng chung như vậy.

Vì vậy, mình xin giới thiệu một bộ gõ mới hơn, xịn hơn, chức năng đầy đủ hơn, đó là **IBus Bamboo** (<a href="https://github.com/BambooEngine/ibus-bamboo">Github</a>).

![](https://raw.githubusercontent.com/meokisama/blog/develop/src/posts/images/go-tieng-viet-kali-linux/demo.gif)

## Lưu ý

- Như các bạn có thể thấy tiêu đề của blog, mình cũng xin nhấn mạnh lại một lần nữa. Là bài viết này **hướng dẫn cài đặt** `ibus-bamboo` **trên Kali Linux**. Mà Kali thì không thể cài đặt Bamboo thông qua PPA như Ubuntu hay các distro tương tự. Nên mình sẽ hướng dẫn **build lại bộ gõ từ source code**.
- Đối với những anh em xài Ubuntu hoặc distro tương tự nếu muốn cài thông qua PPA có thể xem hướng dẫn trên trang <a href="https://github.com/BambooEngine/ibus-bamboo">Github</a> của tác giả.
- Phương pháp **build lại từ source code** có thể áp dụng **với mọi distro**, nên anh em cứ yên tâm đọc tiếp, không sao.
- Các tính năng của bộ gõ đã được giới thiệu rõ ở trang Github, mĩnh cũng khoong ghi lại làm gì, anh em có thể  ấn vô link Github bên trên để đọc chi tiết.

## OK, let's fucking go!
### Mã nguồn
 Đầu tiên muốn build được thì phải có mã nguồn cái đã, các bạn clone source của Bamboo về bằng cách nhập lệnh sau vào Terminal :

```bash
git clone https://github.com/BambooEngine/ibus-bamboo.git
```
**hoặc** tài từ file nén rồi giải nén như sau :
```bash {numberLines}
wget https://github.com/BambooEngine/ibus-bamboo/archive/master.zip -O ibus-bamboo.zip
unzip ibus-bamboo.zip
```
Xong bước đầu.
### Các gói bắt buộc
Để có thể build được, cần cài đặt các package gồm **make** để chạy Makefile, **golang** để build, **libx11-dev** và **libxtst-dev** cho chức năng *"Loại trừ ứng dụng"* của Bamboo.
Các bạn cài đặt theo hướng dẫn sau :
```bash {numberLines}
# Với Debian/Ubuntu:
sudo apt install make golang libx11-dev libxtst-dev

# Với Fedora, CentOS:
sudo yum install make go libX11-devel libXtst-devel

# Với openSUSE Tumbleweed:
sudo zypper install make go libX11-devel libXtst-devel
```
### Build
Sau khi cài đặt xong cac gói thì phần build rất đơn giản như sau:
```bash {numberLines}
cd ibus-bamboo
sudo make install
```
Cuối cùng là restart lại IBus:
```bash
ibus restart
```
\
**Vậy là xong phần build, tiếp theo là phần cấu hình.**

## Cấu hình
Để thêm **ibus-bamboo** vào danh sách bộ gõ của Linux, đầu tiên ta cần thêm source trong bảng cấu hình **IBus Preferences**.

Để mở **IBus Preferences**, nhập lệnh sau vào Terminal:
```bash
ibus-setup
```
Sau đó chọn tab **Input Method** → click vào **Add** → search **Vietnamese** → chọn **Bamboo** đỏ chói như hình.

![](https://raw.githubusercontent.com/meokisama/blog/develop/src/posts/images/go-tieng-viet-kali-linux/setup.png)

Tiếp theo, mở phần cài đặt **Settings** lên

![](https://raw.githubusercontent.com/meokisama/blog/develop/src/posts/images/go-tieng-viet-kali-linux/opensetting.png)

Chuyển đến tab **Region & Language** → click dấu **+** bên dưới phần **Input Source** → timf kiếm **Vietnamese** → chọn **Vietnamese (Bamboo)** như hình.
 
![](https://raw.githubusercontent.com/meokisama/blog/develop/src/posts/images/go-tieng-viet-kali-linux/setting.png)

OK xong rồi.

Cuối cùng, các bạn **Log out** rồi **Log in** lại và gõ thử và đường, **nếu suôn sẻ** thì công việc đến đây là xong hoàn toàn hê hê.

*Nhưng nếu không suôn thì sao?...*

## Fix bug
### Thiếu package

Nếu không tính các lỗi bất khả kháng như không tương thích hệ điều hành (hiếm) thì hầu như các lỗi **không gõ được tiếng Việt sau khi cài** ```ibus-bamboo``` thường là do thiếu một số package khác, thường gặp nhất là thiếu package ```ibus-gtk3```.

Thiếu thì cài thêm thôi, các bạn chạy lệnh sau trong Terminal :
```bash
sudo apt install ibus-gtk3
```
Rồi **Log out** và **Log in** lại xe đã được chưa nha.

Bạn đã cài đặt `ibus-bamboo` nhưng có vẻ như không gõ tiếng Việt? Hãy thực hiện một số bước test dưới đây.

### Chuyển sang chế độ gõ khác
Điểm khác biệt giữa `ibus-bamboo` và các bộ gõ khác là `ibus-bamboo` cung cấp nhiều chế độ gõ khác nhau (tránh nhầm lẫn **chế độ gõ** với **kiểu gõ**, các kiểu gõ bao gồm `telex`, `vni`, ...). Một số phần mềm có thể hoạt động tốt ở chế độ gõ này nhưng không hoạt động trong chế độ gõ khác.


Để chuyển đổi giữa các chế độ gõ, chỉ cần nhấn vào một khung nhập liệu (một cái hộp để nhập văn bản) nào đó, sau đó nhấn tổ hợp <kbd>Shift</kbd>+<kbd>~</kbd>, một bảng với những chế độ gõ hiện có sẽ xuất hiện, bạn chỉ cần nhấn phím số tương ứng để lựa chọn.
![](https://user-images.githubusercontent.com/26364140/61837037-28e23780-aead-11e9-9012-7e5a3499b0ec.png)

### Kiểm tra biến môi trường
Hiểu một cách nôm na, trong linux có những biến môi trường mà sẽ quyết định các phần mềm sẽ hoạt động như thế nào. Một số biến môi trường sẽ quyến định rằng input method server nào sẽ được dùng. Để kiểm tra những biến môi trường đó các bạn chạy.

```bash
env | grep "IM_MODULE\|XMODIFIERS"
```

Kết quả trả về sẽ có **dạng** kiểu như:
```bash
GTK_IM_MODULE=ibus
QT_IM_MODULE=xim
XMODIFIERS=@im=xim
QT4_IM_MODULE=xim
CLUTTER_IM_MODULE=xim
```

Việc cài đặt biến môi trường là để đảm bảo các phần mềm khác sẽ sử dụng ibus. Để cài đặt các bạn thêm những dòng sau vào trong file `~/.bashrc` và `~/.xprofile`

```bash {numberLines}
export GTK_IM_MODULE=ibus
export QT_IM_MODULE=ibus
export XMODIFIERS=@im=ibus
# Dành cho những phần mềm dựa trên qt4
export QT4_IM_MODULE=ibus
# Dành cho những phần mềm dùng thư viện đồ họa clutter/OpenGL
export CLUTTER_IM_MODULE=ibus
export GLFW_IM_MODULE=ibus
```
hoặc chạy lệnh sau
```bash
im-config -n ibus
```

Việc cài đặt trên chỉ có hiệu lực cho người dùng hiện tại, nếu muốn cài đặt cho toàn bộ hệ thống hãy để những dòng trên vào file `/etc/bash.bashrc` và `/etc/profile`. 

Sau khi thực hiện thay đổi, bạn cần thoát đăng nhập và vào lại để thay đổi có hiệu lực. Nếu bạn chạy phần mềm từ terminal thì thay đổi sẽ có hiệu lực ngay lập tức đối với các terminal mới mở.


**Lưu ý:** 
- Nếu bạn dùng bash khác như `zsh` thì thay vì `.bashrc`, hãy thêm vào `.zshrc`. Tương tự với `fish` hay những bash khác.
- Nếu setup như trên không được, bạn có thể thử chạy `ibus-daemon -rdx` (chạy ibus xim server).
- File `.profile` được thực thi khi bạn login vào hệ thống, còn file `.bashrc` được thực thi mỗi khi bạn mở terminal và chỉ có hiệu lực trong terminal đó.

### Làm hết các bước trên vẫn không gõ được tiếng Việt?

Nếu bạn vẫn chưa thể gõ trên một số ứng dụng, hãy thực hiện các bước dưới đây.

1. Đặt biến `XMODIFERS` như sau (nếu bạn mở 1 terminal mới hay chạy 1 bash mới sau khi chạy bước này thì phải chạy lại nhé)
```bash
export XMODIFERS=@im=ibus
```
2. Chạy lại `ibus-daemon` với tùy chọn sau:
```bash
ibus-daemon -rdx
```
3. Thay đổi thử các biến khác thành `ibus` hoặc `xim` xem ibus có hoạt động trên chương trình mà bạn dùng hay không, nhưng phải giữ nguyên biến `XMODIFERS`. Ví dụ, mình gặp vấn đề không gõ được trên `chromium` với `teams`. Do cả 2 ứng dụng trên dùng `chromium` và dùng GTK, mình sẽ thử trên terminal như sau:
```bash
GTK_IM_MODULE=ibus chromium # không gõ được tiếng việt với cửa sổ chromium mới hiện lên
# Nhấn Ctrl + C trên terminal để ngắt
GTK_IM_MODULE=xim # gõ được tiếng Việt
```
4. Sau khi thấy rằng việc thay đổi có hiệu lực, bạn thực hiện ghi lại các config vào trong file.
```bash
export GTK_IM_MODULE=xim # đổi thành xim
export QT_IM_MODULE=ibus
export XMODIFIERS=@im=ibus
# Dành cho những phần mềm dựa trên qt4
export QT4_IM_MODULE=ibus
# Dành cho những phần mềm dùng thư viện đồ họa clutter/OpenGL
export CLUTTER_IM_MODULE=ibus
export GLFW_IM_MODULE=ibus
```
5. Logout và login trở lại

Vấn đề biến môi trường thực chất là vấn đề của `ibus`, bạn có thể xem thêm tại [wiki về ibus của Arch Linux](https://wiki.archlinux.org/index.php/IBus#Initial_setup).