
const listOfFilms = [{
    id: 1,
    image: "assets/images/1.jpg",
    title: "One Piece Live Action",
    year: "2023",
    nation: "USA",
    description: `Đảo Hải Tặc – One Piece Live Action (Netflix) với chiếc mũ rơm và nhóm bạn đủ thành phần, hải tặc trẻ Monkey Monkey D. Luffy có hành trình săn kho báu hoành tráng trong bản chuyển thể người đóng này của bộ manga nổi tiếng.`,
    trailer: `https://www.youtube.com/embed/kbkeAJwR2pc`
}, {
    id: 2,
    image: "assets/images/2.jpg",
    title: "Elemental",
    year: "2023",
    nation: "USA",
    description: 'Xứ Sở Các Nguyên Tố – Elemental trong một thành phố mà các cư dân lửa, nước, đất, và khí cùng sinh sống. Một cô gái nóng nảy và một chàng trai gió-chiều-nào-xoay-chiều-ấy sẽ khám phá ra rằng họ có nhiều điểm giống nhau.',
    trailer: `https://www.youtube.com/embed/hXzcyx9V0xw`
}, {
    id: 3,
    image: "assets/images/3.jpg",
    title: "Lật Mặt 6",
    year: "2023",
    nation: "Vietnam",
    description: `
    Lật Mặt 6: Tấm Vé Định Mệnh một nhóm bạn thân lâu năm bất ngờ nhận được cơ hội đổi đời khi biết tấm vé của cả nhóm trúng giải độc đắc 136.8 tỷ. Đột nhiên An, người nắm giữ tấm vé bất ngờ gặp tai nạn không qua khỏi.
    
    Đứng trước món tiền trúng số đáng mơ ước lẽ ra sẽ dễ dàng có được trong tầm tay, nhóm bạn bước chân vào hành trình đi tìm tờ vé số. Nhưng đó chỉ là khởi đầu của vô số những sự kiện không ngờ đến. Liệu hành trình tìm kiếm và chia chác món tiền trong mơ béo bở này sẽ thực sự dẫn đưa cả nhóm đến đâu?`,
    trailer: `https://www.youtube.com/embed/1ZSytvp2I0I`
}, {
    id: 4,
    image: "assets/images/4.jpg",
    title: "The Boogeyman",
    year: "2023",
    nation: "USA",
    description: `Ông Kẹ – The Boogeyman từ nguyên tác truyện ngắn của bậc thầy truyện kinh dị Stephen King, “Ông Kẹ” kể về câu chuyện của gia đình Harper khi một thực thể siêu nhiên bám theo và liên tục phá rối gia đình họ. Khi mà con quái vật này lấp ló trong bóng tối và chực chờ làm hại cô bé Sawyer như chực chờ một con mồi, chị gái Sadie và bố Will sẽ phải hành động để ngăn chặn điều này trước khi quá muộn.`,
    trailer: `https://www.youtube.com/embed/w_on4rb_KBY`
}, {
    id: 5,
    image: "assets/images/5.jpg",
    title: "The Childe",
    year: "2023",
    nation: "South Korea",
    description: `Quý Công Tử – The Childe xoay quanh người đàn ông bí ẩn được biết đến với tên gọi “Quý Công Tử”. Gã đột nhiên xuất hiện trước mắt Marco, một thanh niên người Philippines mơ ước trở thành vận động viên boxing chuyên nghiệp, lang thang khắp các sàn đấu bất hợp pháp tại đây.`,
    trailer: `https://www.youtube.com/embed/B_uThkfbPZQ`
}, {
    id: 6,
    image: "assets/images/6.jpg",
    title: "Hidden Blade",
    year: "2023",
    nation: "China",
    description: `Vô Danh – Hidden Blade (2023) câu chuyện bắt đầu với sự kiện ngày 7 tháng 12 năm 1941, khi mà Nhật Bản tấn công Trân Châu Cảng. Ngày hôm sau, chính phủ bù nhìn Vương theo chân Nhật Bản tuyên chiến với Anh và Mỹ, và Nhật Bản chiếm đóng toàn bộ lãnh thổ Thượng Hải một cách tượng trưng. `,
    trailer: `https://www.youtube.com/embed/yzZ_oHR5wRE`
}, {
    id: 7,
    image: "assets/images/7.jpg",
    title: "The Lake 2022",
    year: "2022",
    nation: "Thailand",
    description: `The Lake đặt bối cảnh tại làng Buengkan, một tỉnh thuộc miền Bắc Thái Lan, Quái Vật Sông Mekong chính thức trở thành cơn ác mộng đối với dân làng và được coi là khơi nguồn của thảm họa ngay khi nó phá hủy mọi thứ và khiến mọi người bị mất kết nối hoàn toàn với thế giới bên ngoài.`,
    trailer: `https://www.youtube.com/embed/Uux_6u-q1Rg`
}, {
    id: 8,
    image: "assets/images/8.jpg",
    title: "Nhà Bà Nữ",
    year: "2023",
    nation: "Vietnam",
    description: `Tóm tắt
    Nhà Bà Nữ xoay quanh gia đình bà Nữ gồm ba thế hệ sống cùng nhau trong một ngôi nhà. Bà Nữ một tay cáng đáng mọi sự, nổi tiếng với quán bánh canh cua và cũng khét tiếng với việc kiểm soát cuộc sống của tất cả mọi người, từ con gái đến con rể. Mọi chuyện diễn ra bình thường cho đến khi cô con gái út si mê anh chàng điển trai xuất thân từ một gia đình giàu có.`,
    trailer: `https://www.youtube.com/embed/IkaP0KJWTsQ`
}, {
    id: 9,
    image: "assets/images/9.jpg",
    title: "Loki Season 2 ",
    year: "2023",
    nation: "USA",
    description: `Loki Season 2 khi Steve Rogers, Tony Stark và Scott Lang quay trở về cột mốc 2012, ngay khi trận chiến ở New York kết thúc, để “mượn tạm” quyền trượng của Loki. Nhưng một tai nạn bất ngờ xảy đến, khiến Loki nhặt được khối lặp phương Tesseract và tiện thể tẩu thoát.`,
    trailer: `https://www.youtube.com/embed/dug56u8NN7g`
},
{
    id: 10,
    image: "assets/images/10.jpg",
    title: "Án Mạng Ở Venice",
    year: "2023",
    nation: "USA",
    description: `Án Mạng Ở Venice – A Haunting in Venice (2023) lấy bối cảnh năm 1947 tại Venice, khi này thám tử tài ba Hercule Poirot đã lui về ở ẩn và rời xa các vụ án dù liên tục nhận được nhiều lời mời gọi.`,
    trailer: `https://www.youtube.com/embed/q1Aah6OuEv8`
},
{
    id: 11,
    image: "assets/images/11.jpg",
    title: "The Moon",
    year: "2023",
    nation: "South Korea",
    description: `
    The Moon lấy bối cảnh vào năm 2029, khi Hàn Quốc trở thành quốc gia thứ hai đặt chân lên Mặt trăng. Tuy nhiên, một thảm họa không gian đã xảy ra và các phi hành gia bị mắc kẹt trên Mặt trăng. Họ phải tìm cách sống sót và tìm cách quay trở lại Trái đất.`,
    trailer: `https://www.youtube.com/embed/YC6L7G28U4w`
}, {
    id: 12,
    image: "assets/images/12.jpg",
    title: "The Little Mermaid",
    year: "2023",
    nation: "USA",
    description: `The Little Mermaid (2023) là câu chuyện được yêu thích về Ariel – một nàng tiên cá trẻ xinh đẹp và mạnh mẽ với khát khao phiêu lưu. Ariel là con gái út của Vua Triton và cũng là người ngang ngạnh nhất, nàng khao khát khám phá về thế giới bên kia đại dương.`,
    trailer: `https://www.youtube.com/embed/kpGo2_d3oYE`
}
]

export default listOfFilms