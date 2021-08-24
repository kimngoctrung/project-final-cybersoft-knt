"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Movies",
      [
        {
          maPhim: 4284,
          tenPhim: "Avenger 2",
          biDanh: "avenger-2",
          trailer: "https://www.youtube.com/embed/tmeOjFno6Do",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/avenger-t-u-2_gp01.jpg",
          moTa: "king",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-08-17T11:51:33.49",
          danhGia: 10,
        },
        {
          maPhim: 4329,
          tenPhim: "Thép đã tôi thê đấy",
          biDanh: "thep-da-toi-the-day",
          trailer: "https://www.youtube.com/watch?v=p25V4fypHmg",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/thep-da-toi-the-day_gp01.jpg",
          moTa: "Chào mừng bạn đến với tab nội dung đang theo dõi mới! Khám phá ý tưởng từ những người bạn theo dõi...",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2020-12-10T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 4428,
          tenPhim: "Sky Toura",
          biDanh: "sky-toura",
          trailer: "https://www.youtube.com/embed/t7m1iqs_b-U",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/sky-toura_gp01.jpg",
          moTa: "Lần đầu tiên tại Việt Naam, một nghệ sĩ phát hành bộ phim tài liệu âm nhạc về tour diễn của mình trên màn ảnh rộng. Bộ phim hứa hẹn sẽ đem đến cho khán giả những khoảnh khắc đẹp đẽ nhất về sự kiện âm nhạc đình đám nhất năm 2019, khi Sơn Tùng M-TP hết mình cùng hàng nghìn người hâm mộ trong âm nhạc và cả những cảnh hậu trường ghi lại toàn bộ quá trình chuẩn bị và sản xuất SKY TOUR.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2020-06-12T00:00:00",
          danhGia: 8,
        },
        {
          maPhim: 4430,
          tenPhim: "Chị Mười Ba",
          biDanh: "chi-muoi-ba",
          trailer: "https://www.youtube.com/embed/zxvHV58lp6s",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/chi-muoi-ba_gp01.jpg",
          moTa: "Chị Mười Ba đưa Kẽm Gai, tay đàn em cũ vừa mới ra tù, lên Đà Lạt để làm việc cho tiệm Gara của mình. Tại đây, Kẽm Gai dường như đã tìm lại được sự bình yên và hạnh phúc. Tuy vậy, anh sớm trở thành đối tượng bị tình nghi giết hại Đức Mát - em trai của đại ca Thắng Khùng khét tiếng đất Đà Lạt - và phải trốn chạy.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-08-17T10:36:47.513",
          danhGia: 10,
        },
        {
          maPhim: 4431,
          tenPhim: "Vượt Qua Sóng Gió ",
          biDanh: "vuot-qua-song-gio",
          trailer: "https://www.youtube.com/embed/1HpZevFifuo",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/vuot-qua-song-gio_gp01.jpg",
          moTa: "HKT vượt qua sóng gió là bộ phim nói về vieecjj nhóm nhạc abcxyz",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-08-17T10:33:17.983",
          danhGia: 10,
        },
        {
          maPhim: 4643,
          tenPhim: "Ròm 20201",
          biDanh: "rom-20201",
          trailer: "https://www.youtube.com/watch?v=XRm1P7oGpMQ",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/rom-20201_gp01.jpg",
          moTa: "Lấy bối cảnh một khu chung cư cũ đang chờ giải tỏa tại Sài Gòn, Ròm kể câu chuyện về cuộc sống của những người dân lao động nơi đây. Họ đều chơi số đề với hy vọng kiếm được một khoản tiền lớn để đổi đời. Ròm là cậu bé làm “cò đề” để kiếm sống qua ngày, chuyên tư vấn cho người dân những con số may mắn để họ có cơ may trúng đề.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-07-28T22:50:08.62",
          danhGia: 10,
        },
        {
          maPhim: 4665,
          tenPhim: "Avatar 2",
          biDanh: "avatar-2",
          trailer: "https://www.youtube.com/embed/M8Mi0elohJw",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/avatar-2_gp01.jpg",
          moTa: "Avatar 2 là bộ phim khoa học viễn tưởng sắp ra mắt của Mỹ do James Cameron đạo diễn và 20th Century Studios sản xuất. Đây là bộ phim thứ hai trong loạt phim Avatar, sau Avatar.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-01-01T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 4666,
          tenPhim: "Joker",
          biDanh: "joker",
          trailer: "https://www.youtube.com/embed/zAGVQLHvwOY",
          hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/joker_gp01.jpeg",
          moTa: "Joker là một bộ phim điện ảnh giật gân tâm lý của Mỹ được ra mắt vào năm 2019 dựa trên nhân vật cùng tên của DC Comics. Đây là bộ phim đầu tiên trong loạt phim dựa trên DC Comics mà không thuộc trong DC Extended Universe. Bộ phim được phát hành bởi Warner Bros.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-08-04T21:39:52.573",
          danhGia: 10,
        },
        {
          maPhim: 4667,
          tenPhim: "Wanted",
          biDanh: "wanted",
          trailer: "https://www.youtube.com/watch?v=edpEspHOeVU",
          hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/wanted_gp01.jpg",
          moTa: "Wanted is a 2008 American action thriller film directed by Timur Bekmambetov and written by Michael Brandt, Derek Haas, and Chris Morgan, loosely based on the comic book miniseries by Mark Millar and J. G. Jones. The film stars James McAvoy, Morgan Freeman, Terence Stamp, Thomas Kretschmann, Common, and Angelina Jolie.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2020-10-10T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 4668,
          tenPhim: "Vệ Sĩ Sát Thủ: The Hitman's Bodyguard",
          biDanh: "ve-si-sat-thu-the-hitman-s-bodyguard",
          trailer: "https://www.youtube.com/embed/uiYbbPpobUs",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/ve-si-sat-thu-the-hitman-s-bodyguard_gp01.jpg",
          moTa: "Ryan Reynolds sẽ thủ vai một chuyên gia bảo vệ, được đánh giá hạng AAA còn Samuel Jackson thì hóa thân nhân vật sát thủ bị săn lùng nhất thế giới. Hai người, như hai kẻ không đội trời chung, nhưng lại bị ép phải “bảo vệ” nhau trong suốt 24 giờ. Thật trớ trêu khi một sát thủ “khét tiếng” mà cũng có lúc cần đến vệ sĩ riêng. Và trên hành trình đồng hành từ Anh đến Hague, họ sẽ phải đối mặt và “xử lý” rất nhiều tình huống nguy hiểm hay sự truy đuổi của nhiều nhóm khác nhau.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2020-10-10T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 4893,
          tenPhim: "Tenet",
          biDanh: "tenet",
          trailer: "https://www.youtube.com/embed/L3pk_TBkihU",
          hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/tenet_gp01.jpg",
          moTa: "Tenet là một bộ phim hành động - giật gân và khoa học viễn tưởng phát hành năm 2020 của Mỹ, do Christopher Nolan đạo diễn kiêm biên kịch. Phim có sự tham gia của John David Washington, Robert Pattinson, Elizabeth Debicki, Dimple Kapadia, Michael Caine, cùng Kenneth Branagh.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2020-12-17T15:13:45.953",
          danhGia: 10,
        },
        {
          maPhim: 4956,
          tenPhim: "Biệt đội diệt quỷ: Gretel & Hansel",
          biDanh: "biet-doi-diet-quy-gretel-hansel",
          trailer: "https://www.youtube.com/embed/QZblQLhKcZQ",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/biet-doi-diet-quy-gretel-hansel_gp01.jpg",
          moTa: 'Gretel & Hansel là một bộ phim kinh dị giả tưởng đen tối năm 2020 dựa trên câu chuyện dân gian Đức "Hansel và Gretel" của Anh em nhà Grimm. Phim do Oz Perkins đạo diễn, Fred Berger, Brian Kavanaugh-Jones và Dan Kagan sản xuất, với kịch bản của Rob Hayes.',
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2020-10-10T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 4972,
          tenPhim: "Bác sĩ Dolittle: Chuyến phiêu lưu thần thoại",
          biDanh: "bac-si-dolittle-chuyen-phieu-luu-than-thoai",
          trailer: "https://www.youtube.com/embed/JzDpEdkWBCg",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/bac-si-dolittle-chuyen-phieu-luu-than-thoai_gp01.jpg",
          moTa: "Dolittle là một bộ phim Mỹ năm 2020 có yếu tố giả tưởng và phiêu lưu của đạo diễn Stephen Gaghan, từ một kịch bản của Gaghan, Dan Gregor, Doug Mand và Chris McKay và một câu chuyện của Thomas Shepherd.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2020-12-17T14:37:27.087",
          danhGia: 10,
        },
        {
          maPhim: 4987,
          tenPhim: "Hobbs and Shaw",
          biDanh: "hobbs-and-shaw",
          trailer: "https://www.youtube.com/embed/b736ZM_KfEk",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/hobbs-and-shaw_gp01.jpeg",
          moTa: "Phim này max hay! luon",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-07-27T10:34:36.017",
          danhGia: 10,
        },
        {
          maPhim: 5029,
          tenPhim: "Nữ Thần Chiến Binh 1984 - Wonder Woman 1984",
          biDanh: "nu-than-chien-binh-1984-wonder-woman-1984",
          trailer: "https://www.youtube.com/embed/Vk-gqL3c5qU",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/nu-than-chien-binh-1984-wonder-woman-1984_gp01.png",
          moTa: "Lấy bối cảnh thời kỳ Chiến tranh Lạnh, Wonder Woman 1984 sẽ xoay quanh cuộc đối đầu giữa Nữ thần Chiến binh và Yêu nữ Báo đốm Cheetah.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-01-30T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 5030,
          tenPhim: "Hoa Phong Nguyệt Vũ - The Crawler",
          biDanh: "hoa-phong-nguyet-vu-the-crawler",
          trailer:
            "https://www.youtube.com/watch?v=IoyYAaORRrw&feature=emb_logo",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/hoa-phong-nguyet-vu-the-crawler_gp01.png",
          moTa: "Một chuyên viên khai vấn tâm lý đi tìm manh mối về cái chết của nữ khách hàng và đối diện với những thế lực kì bí đang che giấu một bí mật liên quan đến gia đình anh ta.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2020-12-04T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 5031,
          tenPhim: "Gia Đình Croods: Kỷ Nguyên Mới - The Croods: New Age",
          biDanh: "gia-dinh-croods-ky-nguyen-moi-the-croods-new-age",
          trailer:
            "https://www.youtube.com/watch?v=0qaStyeKpLo&feature=emb_logo",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/gia-dinh-croods-ky-nguyen-moi-the-croods-new-age_gp01.png",
          moTa: "Sinh tồn trong một thế giới tiền sử luôn rình rập hiểm nguy từ đủ loài quái thú hung dữ cho tới thảm họa ngày tận thế, Nhà Croods chưa từng một lần chùn bước. Nhưng giờ đây họ sẽ phải đối mặt với thử thách lớn nhất từ trước tới nay: chung sống với một gia đình khác. Để tìm kiếm một mái nhà an toàn hơn, Nhà Croods bắt đầu hành trình khám phá thế giới tiến tới những vùng đất xa xôi đầy tiềm năng. Một ngày nọ, họ tình cờ lạc vào một nơi yên bình có đầy đủ mọi tiện nghi hiện đại và biệt lập với tường vây bao quanh. Tưởng rằng mọi vấn đề trong cuộc sống sẽ được giải quyết thì Nhà Croods lại phải chấp nhận với sự thật rằng đã có một gia đình khác định cư ở đây đó chính là Nhà Bettermans.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-01-15T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 5032,
          tenPhim: "Cuộc Chiến Hủy Diệt - Skylines",
          biDanh: "cuoc-chien-huy-diet-skylines",
          trailer: "https://www.youtube.com/watch?v=mFgmcsRzvOo",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/cuoc-chien-huy-diet-skylines_gp01.jpg",
          moTa: "Khi một loại virus đe dọa biến những người ngoài hành tinh thân thiện đang sinh sống trên trái đất chống lại con người, Đội trưởng Rose Corley phải lãnh đạo một đội lính đánh thuê ưu tú đến thế giới ngoài hành tinh để cứu những gì còn lại của nhân loại",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-01-23T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 5044,
          tenPhim: "Birds of Prey: Cuộc lột xác huy hoàng của Harley Quinn",
          biDanh: "birds-of-prey-cuoc-lot-xac-huy-hoang-cua-harley-quinn",
          trailer: "https://www.youtube.com/embed/kGM4uYZzfu0",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/birds-of-prey-cuoc-lot-xac-huy-hoang-cua-harley-quinn_gp01.jpeg",
          moTa: "Birds of prey là một bộ phim siêu anh hùng năm 2020 của Mỹ. Đây là bộ phim thứ tám trong Vũ trụ Mở rộng DC do Cathy Yan đạo diễn, dựa trên kịch bản của Christina Hodson",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-12-23T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 5104,
          tenPhim: "How To Train Your Dragon",
          biDanh: "how-to-train-your-dragon",
          trailer: "https://youtu.be/oKiYuIsPxYk",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/how-to-train-your-dragon_gp01.jpg",
          moTa: "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-07-06T17:27:48.207",
          danhGia: 10,
        },
        {
          maPhim: 5125,
          tenPhim: "Người Cần Quên Phải Nhớ",
          biDanh: "nguoi-can-quen-phai-nho",
          trailer: "https://www.youtube.com/embed/RfLnQkiD3iQ",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/nguoi-can-quen-phai-nho_gp01.png",
          moTa: "Người Cần Quên Phải Nhớ xoay quanh Loan, một nữ phóng viên năng động và nhạy bén. Nghi ngờ cái chết đột ngột của cha mình, cô quyết tâm sử dụng kiến thức nghiệp vụ nhằm vén màn bí mật bằng mọi giá. Trên hành trình “phá án”, Loan đã vô ý khiến Bình, gã giang hồ tưởng ngầu mà dễ mến bị chấn thương rồi mất trí nhớ. Trải qua hàng loạt tình huống dở khóc dở cười, hai người họ dần nảy sinh tình cảm với nhau.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-12-01T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 5126,
          tenPhim: "Cuộc sống nhiệm màu - Soul",
          biDanh: "cuoc-song-nhiem-mau-soul",
          trailer: "https://www.youtube.com/embed/D6zVlPKn2AI",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/cuoc-song-nhiem-mau-soul_gp01.jpg",
          moTa: "Mỗi con người đều có một linh hồn trú ngụ, vậy tại sao linh hồn này lại chọn chúng ta? Điều gì khiến bạn là chính bạn?",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-07-27T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 5163,
          tenPhim: "Thợ Săn Quái Vật - Monster Hunter",
          biDanh: "tho-san-quai-vat-monster-hunter",
          trailer: "https://www.youtube.com/embed/puQyZsaTtqY",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/tho-san-quai-vat-monster-hunter_gp01.png",
          moTa: "Monster Hunter được chuyển thể từ series game nổi tiếng cùng tên của Capcom. Trong phim, đội trưởng Artemis của nữ diễn viên Milla Jovovich (Resident Evil) và đồng đội đã vô tình bước qua một cánh cửa bí ẩn dẫn tới thế giới khác. Tại đây, họ phải chiến đấu với nhiều loài quái vật khổng lồ trong hành trình trở về thế giới. Đồng hành với họ trong trận chiến là nhân vật “Thợ săn” của nam diễn viên Tony Jaa (Ong Bak). Monster Hunter hứa hẹn sẽ là bom tấn hành động với những màn săn quái vật khổng lồ hoành tráng nhất năm 2020.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2020-12-30T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 5178,
          tenPhim: "Josée, Nàng Thơ Của Tôi - Josée",
          biDanh: "josee-nang-tho-cua-toi-josee",
          trailer: "https://www.youtube.com/embed/PqNGHKLyPD0",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/josee-nang-tho-cua-toi-josee_gp01.png",
          moTa: "Bộ phim là câu chuyện tình nên thơ của cậu sinh viên Young Seok (Nam Joo Hyuk) và Josée (Han Ji Min), một cô gái khuyết tật phải ngồi xe lăn vào mùa đông lạnh lẽo. Cuộc gặp gỡ đã khiến thế giới của Josée thay đổi.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-02-25T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 5200,
          tenPhim: "Võ Sinh Đại Chiến",
          biDanh: "vo-sinh-dai-chien",
          trailer: "https://www.youtube.com/embed/mrNqbx4vUvA",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/vo-sinh-dai-chien_gp01.png",
          moTa: "Phim kể về “sự nghiệp” giải ngố của anh chàng Khoa từ Bình Định vào Sài Gòn nhập học. Thích võ thuật từ nhỏ, chân ướt chân ráo vào câu lạc bộ võ Ta của trường và phải lòng ngay “tiểu thư” danh giá của bao chàng theo đuổi.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-01-01T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 5240,
          tenPhim: "a lonely person",
          biDanh: "a-lonely-person",
          trailer: "https://www.youtube.com/embed/UMXATImg6e4",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/a-lonely-person_gp01.jpg",
          moTa: "Đây là bộ phim có thật !",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-07-06T17:29:32.507",
          danhGia: 10,
        },
        {
          maPhim: 5687,
          tenPhim: "kkk",
          biDanh: "kkk",
          trailer: "kkk",
          hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/kkk_gp01.jpg",
          moTa: "kkk",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-02-15T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 5748,
          tenPhim: "Vợ ba",
          biDanh: "vo-ba",
          trailer: "vo-ba",
          hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/vo-ba_gp01.jpg",
          moTa: "Vợ ba đánh ba vợ",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-02-26T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 5796,
          tenPhim: "avatar",
          biDanh: "avatar",
          trailer: "https://www.youtube.com/watch?v=6ziBFh3V1aM",
          hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/avatar_gp01.jpg",
          moTa: "hay lắm mọi ng ơi",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2020-01-01T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 5914,
          tenPhim: "vvvvvtttt",
          biDanh: "vvvvvtttt",
          trailer: "vvvvv",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/vvvvvtttt_gp01.png",
          moTa: "vvvvvttt",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-03-13T00:00:00",
          danhGia: 12,
        },
        {
          maPhim: 5918,
          tenPhim: "Death Stranding",
          biDanh: "death-stranding",
          trailer: "https://www.youtube.com/embed/tCI396HyhbQ",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/death-stranding_gp01.jpg",
          moTa: "From legendary game creator Hideo Kojima comes an all-new, genre-defying experience. Sam Bridges must brave a world utterly transformed by the Death Stranding. Carrying the disconnected remnants of our future in his hands, he embarks on a journey to reconnect the shattered world one step at a time.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-06-25T18:47:53.777",
          danhGia: 10,
        },
        {
          maPhim: 5930,
          tenPhim: "phimmoi khong sap",
          biDanh: "phimmoi-khong-sap",
          trailer: "trailer hay",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/phimmoi-khong-sap_gp01.jpg",
          moTa: "motataaa",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-03-17T06:47:00.96",
          danhGia: 10,
        },
        {
          maPhim: 5964,
          tenPhim: "Red dead redemtion 2",
          biDanh: "red-dead-redemtion-2",
          trailer: "https://www.youtube.com/embed/gmA6MrX81z4",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/red-dead-redemtion-2_gp01.jpg",
          moTa: "Red Dead Redemption 2[a] là một trò chơi hành động-phiêu lưu thuộc chủ đề cao bồi viễn Tây với góc nhìn thứ nhất và thứ ba, được phát triển bởi Rockstar Studios và xuất bản bởi Rockstar Games, phát hành vào ngày 26 tháng 10 năm 2018 cho PlayStation 4 và Xbox One và dự kiến phát hành vào tháng 11 năm 2019 cho Google Stadia và Microsoft Windows. Là trò chơi thứ ba trong sêri Red Dead, tiền truyện (chi tiết xem hậu truyện) và là phần hai của Red Dead Redemption. Đặt bối cảnh hư cấu quay về năm 1899 tại miền viễn Tây Hoa Kỳ, câu chuyện xoay quanh về kẻ ngoài vòng pháp luật Arthur Morgan, một thành viên của băng đảng Van der Line với kẻ đứng đầu là Dutch. Cả băng cố gắng đối phó với sự suy tàn của miền Tây hoang dã và chống lại chính quyền, cùng nhiều đối thủ khác. Câu chuyện cũng theo sau John Marston, nhân vật chính đến từ Red Dead Redemption.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2018-01-01T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 5967,
          tenPhim: "bố già",
          biDanh: "bo-gia",
          trailer: "https://www.youtube.com/embed/jluSu8Rw6YE",
          hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/bo-gia_gp01.jpg",
          moTa: "nghe đồn phim hay lắm đi xem đi",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-03-17T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 5984,
          tenPhim: "Duy Anh Đẹp Trai",
          biDanh: "duy-anh-dep-trai",
          trailer: "https://www.youtube.com/embed/zxvHV58lp6s",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/duy-anh-dep-trai_gp01.JPG",
          moTa: "pokemon",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2020-10-10T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 6018,
          tenPhim: "hành tinh hỗn loạn",
          biDanh: "hanh-tinh-hon-loan",
          trailer: "sdasda",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/hanh-tinh-hon-loan_gp01.jpg",
          moTa: "con gà có trước hay quả trứng có trước",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-10-02T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 6019,
          tenPhim: "palm spring",
          biDanh: "palm-spring",
          trailer: "dsasd",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/palm-spring_gp01.jpg",
          moTa: "ni hao ma??",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-07-20T15:15:54.073",
          danhGia: 10,
        },
        {
          maPhim: 6023,
          tenPhim: "Justice Luege",
          biDanh: "justice-luege",
          trailer: "https://www.youtube.com/embed/ZrdQSAX2kyw",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/justice-luege_gp01.jpg",
          moTa: "RestoreSnyderCut",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-03-22T20:07:26.357",
          danhGia: 10,
        },
        {
          maPhim: 6029,
          tenPhim: "Con Bò Xanh",
          biDanh: "con-bo-xanh",
          trailer: "https://www.youtube.com/embed/vOXZkm9p_zY",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/con-bo-xanh_gp01.jpg",
          moTa: "Con Bò Khóc",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-07-27T00:00:00",
          danhGia: 16,
        },
        {
          maPhim: 6098,
          tenPhim: " Bố Giá Victor 3",
          biDanh: "bo-gia-victor-3",
          trailer: "https://www.youtube.com/embed/WCCp0zbnR50",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/bo-gia-victor-3_gp01.jpg",
          moTa: "Phim sẽ xoay quanh lối sống thường nhật của một xóm lao động nghèo, ở đó có bộ tứ anh em Giàu - Sang - Phú - Quý với Ba Sang sẽ là nhân vật chính, hay lo chuyện bao đồng nhưng vô cùng thương con cái. Câu chuyện phim tập trung về hai cha con Ba Sang (Trấn Thành) và Quắn (Tuấn Trần). Dù yêu thương nhau nhưng khoảng cách thế hệ đã đem đến những bất đồng lớn giữa hai cha con. Liệu cả hai có thể cho nhau cơ hội thấu hiểu đối phương, thu hẹp khoảng cách và tạo nên hạnh phúc từ sự khác biệt?",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-07-20T15:09:09.39",
          danhGia: 10,
        },
        {
          maPhim: 6117,
          tenPhim: "What's wrong with secretary kim 2",
          biDanh: "what-s-wrong-with-secretary-kim-2",
          trailer: "https://youtu.be/uVa1lTvmVhs",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/what-s-wrong-with-secretary-kim-2_gp01.jpg",
          moTa: "What's Wrong with Secretary Kim? is a 2018 South Korean television series starring Park Seo-joon and Park Min-young. It is based on the novel of the same title by Jung Kyung-yoon which was first published in 2013, which was then serialized into a comic in 2015 via KakaoPage. The series aired on tvN from June 6 to July 26, 2018, on Wednesdays and Thursdays for 16 episodes.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-07-04T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 6644,
          tenPhim: "Hurricanger",
          biDanh: "hurricanger",
          trailer: "https://www.youtube.com/embed/UHQSbQIIJYA",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/hurricanger_gp01.jpg",
          moTa: "NINPUU SENTAI HURRICANEGER – CHIẾN ĐỘI NHẪN PHONG HURRICANEGER",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-07-29T09:19:48.42",
          danhGia: 10,
        },
        {
          maPhim: 7334,
          tenPhim: "Black Widow phần 3",
          biDanh: "black-widow-phan-3",
          trailer: "https://www.youtube.com/watch?v=Fp9pNPdNwjI&t=9s",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/black-widow-phan-3_gp01.jpg",
          moTa: "Điểm bất ngờ chỉ đến khi cú twist giữa phim xuất hiện khiến cho câu chuyện đột nhiên trở nên thú vị, gây thích thú cho khán giả. Đến đây, phim sẽ khá tương đồng với mạch phim của Spider-Man: Homecoming, nhưng khá khó hiểu Sony lại chọn một cách kết phim khá tầm thường so với phần còn lại đầy “ bốc lửa ”của bộ phim. Cách kết phá đi tính cao trào giống như Captain Marvel vô tình tạo một sự hụt hẫng trong cảm xúc của người xem và không rõ đây có phải là ý đồ của Sony nhằm tạo ra những điểm gợn, sự tò mò cho khán giả hay không",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-07-30T00:00:00",
          danhGia: 20,
        },
        {
          maPhim: 7504,
          tenPhim: "Black Widow2",
          biDanh: "black-widow2",
          trailer: "https://www.youtube.com/watch?v=ITlQ0oU7tDA",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/black-widow2_gp01.jpg",
          moTa: "Góa phụ đen là một bộ phim siêu anh hùng Mỹ sắp ra mắt dựa trên nhân vật cùng tên của Marvel Comics. Do Marvel Studios sản xuất và Walt Disney Studios Motion Pictures phân phối, dự định đây sẽ là bộ phim thứ 24 trong Vũ trụ Điện ảnh Marvel.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-11-20T00:00:00",
          danhGia: 160,
        },
        {
          maPhim: 7819,
          tenPhim: "30 NGÀY ĐÊM 2",
          biDanh: "30-ngay-dem-2",
          trailer: "https://www.youtube.com/watch?v=ZXyR2MwhKWo",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/30-ngay-dem-2_gp01.jpeg",
          moTa: "Vùng đất Alaska, tiểu bang rộng lớn nhất của Hoa Kỳ nằm ở phương Bắc xa xôi và lạnh giá, nơi có lúc mặt trời chói chang suốt cả ngày, có khi bóng đêm phủ dài bất tận. Theo chu kì của tự nhiên, thị trấn Barrow cũng sẽ trải qua 30 ngày với bóng đêm bao phủ trong năm nhưng lần này, cùng với bóng đêm tràn ngập khắp thị trấn là một đạo quân Ma cà rồng xuất hiện với cơn khát máu bất tận. ",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-07-30T14:13:57.987",
          danhGia: 10,
        },
        {
          maPhim: 7821,
          tenPhim: "Thần Điêu Hiệp Lữ",
          biDanh: "than-dieu-hiep-lu",
          trailer: "https://www.youtube.com/embed/y8ne_qPSf_8",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/than-dieu-hiep-lu_gp01.jpg",
          moTa: "Phim kiếm hiệp trung quốc dài tập",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-07-30T23:22:19.98",
          danhGia: 10,
        },
        {
          maPhim: 7822,
          tenPhim: "cuộc phiêu lưu vào lòng đất",
          biDanh: "cuoc-phieu-luu-vao-long-dat",
          trailer: "cuộc phiêu lưu vào lòng đất",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/cuoc-phieu-luu-vao-long-dat_gp01.JPG",
          moTa: "chú mèo máy Doremon cùng các bạn thực hiện chuyến phiêu lưu vào lòng đất",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-07-30T23:22:30.71",
          danhGia: 10,
        },
        {
          maPhim: 7825,
          tenPhim: "phim abc fe66",
          biDanh: "phim-abc-fe66",
          trailer: "https://www.youtube.com/embed/FKNmawBnOmA",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/phim-abc-fe66_gp01.jpeg",
          moTa: "phim abc fe66",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-07-30T23:22:51.873",
          danhGia: 10,
        },
        {
          maPhim: 7831,
          tenPhim: "Tần Số Chết",
          biDanh: "tan-so-chet",
          trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/tan-so-chet_gp01.jpeg",
          moTa: "Hố đen tử thần[4] (tựa gốc tiếng Anh: Interstellar) là một bộ phim khoa học viễn tưởng năm 2014 của đạo diễn Christopher Nolan. Với dàn diễn viên gồm Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn và Michael Caine, bộ phim kể về một nhóm nhà du hành vũ trụ đi xuyên qua hố đen. Nolan đã phát triển kịch bản phim dựa trên những ý tưởng mới của mình hòa trộn với kịch bản trước đó do người em trai Jonathan Nolan viết năm 2007 cho Paramount Pictures và nhà sản xuất Lynda Obst. Bộ phim được sản xuất bởi Nolan, Emma Thomas và Lynda Obst.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-08-16T20:11:13.947",
          danhGia: 10,
        },
        {
          maPhim: 7840,
          tenPhim: "Tran Thanh",
          biDanh: "tran-thanh",
          trailer: "https://www.youtube.com/embed/cN1xWjGqvzg",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/tran-thanh_gp01.jpg",
          moTa: 'Cái chết của một cô ca sĩ nổi tiếng dẫn đến sự thành công của một cô ca sĩ trẻ khác. Câu chuyện này có liên quan như thế nào đến sự giúp đỡ của một "thiên thần hộ mệnh"?',
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-08-02T10:35:46.927",
          danhGia: 10,
        },
        {
          maPhim: 7851,
          tenPhim: "The Gentlemen with new world",
          biDanh: "the-gentlemen-with-new-world",
          trailer: "https://www.youtube.com/embed/vaN8BtA8OJk",
          hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/122_gp01.jpg",
          moTa: "Mickey Pearson is an American expatriate who became rich by building a highly profitable marijuana empire in London",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-08-09T23:54:56.807",
          danhGia: 10,
        },
        {
          maPhim: 7852,
          tenPhim: "Người Tình Nguy Hiểm",
          biDanh: "nguoi-tinh-nguy-hiem",
          trailer: "https://www.youtube.com/embed/Eu9G8nO5-Ug",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/nguoi-tinh-nguy-hiem_gp01.jpeg",
          moTa: "Hunted by the fearsome warrior Sub-Zero, MMA fighter Cole Young finds sanctuary at the temple of Lord Raiden. Training with experienced fighters Liu Kang, Kung Lao and the rogue mercenary Kano, Cole prepares to stand with Earth's greatest champions to take on the enemies from Outworld in a high-stakes battle for the universe.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-08-12T20:56:54.733",
          danhGia: 10,
        },
        {
          maPhim: 7861,
          tenPhim: "Minion 3",
          biDanh: "minion-3",
          trailer: "https://youtu.be/v20G-Z1kKD8",
          hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/minion_gp01.jpg",
          moTa: "The Dialog variant is displayed in the center of the page, useful for mobile or small interfaces.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-08-03T12:17:14.843",
          danhGia: 10,
        },
        {
          maPhim: 7862,
          tenPhim: "Cruella",
          biDanh: "cruella",
          trailer: "https://www.youtube.com/embed/gmRKv7n2If8",
          hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/cruella_gp01.jpg",
          moTa: "Cruella là một bộ phim hài - chính kịch tội phạm đã được ra mắt của Mỹ dựa trên nhân vật Cruella de Vil, được giới thiệu trong tiểu thuyết Trăm linh một chú chó đốm của nhà văn Dodie Smith năm 1956 và bộ phim hoạt hình Một trăm linh một chú chó đốm của hãng Walt Disney ra mắt năm 1961 và được sản xuất bởi Walt Disney Pictures",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-08-08T14:47:44.097",
          danhGia: 10,
        },
        {
          maPhim: 7863,
          tenPhim: "GHAJINI",
          biDanh: "ghajini",
          trailer: "https://www.youtube.com/embed/-FmWuCgJmxo",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/ghajini_gp01.jpeg",
          moTa: "Bộ phim kể về Sanjay Ramasamy (Aamir Khan) - chủ tịch của 1 tập đoàn máy tính lớn đem lòng yêu cô gái tên Kalpana Shetty (Asin) - người tự tung tin đồn cô chính là bạn gái của anh, dù cả hai chưa từng gặp mặt nhau. Sau đó, hai người vô tình chạm mặt nhau và chuyện tình của hai người bắt đầu từ đây. Những tưởng câu chuyện tình của họ sẽ kết thúc với một đám cưới hạnh phúc, nhưng không...",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-08-08T14:48:59.037",
          danhGia: 10,
        },
        {
          maPhim: 7874,
          tenPhim: "Avatar 2",
          biDanh: "avatar-2",
          trailer: "https://www.youtube.com/embed/M8Mi0elohJw",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/avatar-2_gp01.jpg",
          moTa: "Avatar 2 là bộ phim khoa học viễn tưởng sắp ra mắt của Mỹ do James Cameron đạo diễn và 20th Century Studios sản xuất. Đây là bộ phim thứ hai trong loạt phim Avatar, sau Avatar.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-04-02T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 7875,
          tenPhim: "Bẩy thực tại kinh hoàng",
          biDanh: "bay-thuc-tai-kinh-hoang",
          trailer: "https://www.youtube.com/embed/2UYxgN-k6wk",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/chi-hang-mo-mat_gp01.png",
          moTa: 'Bà Nguyễn Phương Hằng (vợ đại gia Huỳnh Uy Dũng, biệt danh Dũng "lò vôi") là một nhà kinh doanh có tiếng, đã sát cánh cùng chồng để xây dựng và phát triển Công ty cổ phần Đại Nam.\nNgười phụ nữ chưa từng thất bại trên thương trường\n\nMới đây, bà Nguyễn Phương Hằng gây chú ý khi gửi đơn tố cáo “thần y” Võ Hoàng Yên (SN 1975, quê Cà Mau, tạm trú tỉnh Bình Thuận) đã chiếm đoạt của vợ chồng bà hơn 200 tỷ đồng thông qua hoạt động cứu trợ bà con miền Trung trong đợt bão lũ vừa qua, qua việc xây một cơ sở thờ tự tại Bình Thuận và các hoạt động khác.',
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-08-08T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 7938,
          tenPhim: "Hồn ma cô đơn",
          biDanh: "hon-ma-co-don",
          trailer: "ma",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/hon-ma-co-don_gp01.jpg",
          moTa: "phim hành động hấp dẫn lôi cuốn và thu hút được rất nhiều người xem khán giả thiếu nhi",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-08-13T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 7981,
          tenPhim: "Harry Potter and the Deathly Hallows",
          biDanh: "harry-potter-and-the-deathly-hallows",
          trailer: "https://www.youtube.com/embed/mObK5XD8udk",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/harry-potter-and-the-deathly-hallows_gp01.jpg",
          moTa: "In the epic finale, the battle between the good and evil forces of the wizarding world escalates into an all-out war.  The stakes have never been higher and no one is safe.  But it is Harry Potter who may be called upon to make the ultimate sacrifice as he draws closer to the climactic showdown with Lord Voldemort.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-08-15T00:00:00",
          danhGia: 10,
        },
        {
          maPhim: 8016,
          tenPhim: "34 Ngày Code 2",
          biDanh: "34-ngay-code-2",
          trailer: "https://www.youtube.com/embed/cN1xWjGqvzg",
          hinhAnh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/34-ngay-code-2_gp01.JPG",
          moTa: "Về già, tậu được túp lều tranh này, ở cùng với 2-3 em cờ-hó, nuôi vài chị gà mái, trồng thêm vài luống rau, xin thêm chiếc xe đạp cà tàng là ở bao vui rồi. Mà nếu Lý Thông có đến xin cho gà ăn, tưới rau và làm tất việc nhà giùm thì cho nhập bọn luôn.",
          createdAt: new Date(),
          updatedAt: new Date(),

          ngayKhoiChieu: "2021-08-16T00:00:00",
          danhGia: 10,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Movies", null, {});
  },
};
