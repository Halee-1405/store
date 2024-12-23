const datas = [
    {
        id: 'phin-sua-da',
        title: "PHIN SỮA ĐÁ",
        description:
            "Hương vị cà phê Việt Nam đích thực! Từng hạt cà phê hảo hạng được chọn bằng tay, phối trộn độc đáo giữa hạt Robusta từ cao nguyên Việt Nam, thêm Arabica thơm lừng. Cà phê được pha từ Phin truyền thống, hoà cùng sữa đặc sánh và thêm vào chút đá tạo nên ly Phin Sữa Đá – Đậm Đà Chất Phin.",
        image: "/img/phinsuada.png",
        basePrice: 29000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 16000 },
        ],
    },
    {
        id: "bac-xiu-da",
        title: "BẠC XỈU ĐÁ",
        description:
            "Nếu Phin Sữa Đá dành cho các bạn đam mê vị đậm đà, thì Bạc Xỉu Đá là một sự lựa chọn nhẹ 'đô' cà phê nhưng vẫn thơm ngon,chất lừ không kém!",
        image: "/img/bacxiuda.png",
        basePrice: 29000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 16000 },
        ],
    },
    {
        id: "tra-xanh-dau-do",
        title: "TRÀ XANH ĐẬU ĐỎ",
        description:
            "Trà Xanh Đậu Đỏ với vị trà xanh đăng đắng thơm ngát, thêm độ ngọt vừa và mềm mại của đậu đỏ. Ngon ngọt nhưng không ngấy.",
        image: "/img/traxanhdaudo.png",
        basePrice: 45000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 20000 },
        ],
    },
    {
        id: "tra-tuyet-phuc-bon-tu",
        title: "TRÀ TUYẾT PHÚC BỒN TỬ",
        description:
            "Trà tuyết cực mát lạnh với lớp đá tuyết độc đáo cùng trái cây tươi thơm ngon và thạch giòn dai! Thử ngay!",
        image: "/img/tratuyetphucbontu.png",
        basePrice: 45000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 20000 },
        ],
    },
    {
        id: "tra-thach-dao",
        title: "TRÀ THẠCH ĐÀO",
        description:
            "Vị trà đậm đà kết hợp cùng những miếng đào thơm ngon mọng nước cùng thạch đào giòn dai. Thêm vào ít sữa để gia tăng vị béo.",
        image: "/img/trathachdao.png",
        basePrice: 45000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 20000 },
        ],
    },
    {
        id: "tra-sen-vang",
        title: "TRÀ SEN VÀNG",
        description:
            "Thức uống chinh phục những thực khách khó tính! Sự kết hợp độc đáo giữa trà Ô long, hạt sen thơm bùi và củ năng giòn tan. Thêm vào chút sữa sẽ để vị thêm ngọt ngào.",
        image: "/img/trasenvang(cunang).png",
        basePrice: 45000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 20000 },
        ],
    },
    {
        id: "tra-ngoc-trai-dau-tam",
        title: "TRÀ NGỌC TRAI DÂU TẰM",
        description:
            "Tận hưởng vị trà thanh nhẹ hòa quyện thật hoàn hảo với vị chua ngọt từ dâu tằm. Sự mềm mại của trái dâu tằm mọng nước kết hợp kết cấu giòn vui miệng của trân châu ngọc trai sẽ đem đến cho bạn trải nghiệm thật thú vị. Đặt Highlands Coffee giao ngay bạn nhé.",
        image: "/img/trangoctraidautam.png",
        basePrice: 45000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 20000 },
        ],
    },
    {
        id: "tra-qua-mong-anh-dao",
        title: "TRÀ QUẢ MỌNG ANH ĐÀO",
        description:
            "Thức uống chinh phục những thực khách khó tính! Sự kết hợp độc đáo giữa trà Ô long, hạt sen thơm bùi và củ năng giòn tan. Thêm vào chút sữa sẽ để vị thêm ngọt ngào.",
        image: "/img/teaberry.png",
        basePrice: 45000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 20000 },
        ],
    },
    {
        id: "phin-sua-nong",
        title: "PHIN SỮA NÓNG",
        description:
            "Hương vị cà phê Việt Nam đích thực! Từng hạt cà phê hảo hạng được chọn bằng tay, phối trộn độc đáo giữa hạt Robusta từ cao nguyên Việt Nam, thêm Arabica thơm lừng. Kết hợp với nước sôi từng giọt cà phê được chiết xuất từ Phin truyền thống, hoà cùng sữa đặc sánh tạo nên ly Phin Sữa Nóng – Đậm đà chất Phin.",
        image: "/img/phinsuanong.png",
        basePrice: 29000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 16000 },
        ],
    },
    {
        id: "socola-da",
        title: "SOCOLA ĐÁ",
        description:
            "Sô Cô La Đá đậm đà vị sô-cô-la, thêm đá trung hoà vị đăng đắng đặc trưng",
        image: "/img/socolada.png",
        basePrice: 55000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 4000 },
            { label: "L", extraPrice: 10000 },
        ],
    },
    {
        id: "mocha",
        title: "MOCHA",
        description:
            "Một thức uống yêu thích được kết hợp bởi giữa sốt sô cô la ngọt ngào, sữa tươi và đặc biệt là cà phê espresso đậm đà mang thương hiệu Highlands Coffee. Bạn có thể tùy thích lựa chọn uống nóng hoặc dùng chung với đá.",
        image: "/img/mocha.png",
        basePrice: 69000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 16000 },
        ],
    },
    {
        id: "caramel-macchiato",
        title: "CARAMEL MACCHIATO",
        description:
            "Thỏa mãn cơn thèm ngọt! Ly cà phê Caramel Macchiato bắt đầu từ dòng sữa tươi và lớp bọt sữa béo ngậy, sau đó hòa quyện cùng cà phê espresso đậm đà và sốt caramel ngọt ngào. Thông qua bàn tay điêu luyện của các chuyên gia pha chế, mọi thứ hoàn toàn được nâng tầm thành nghệ thuật! Bạn có thể tùy thích lựa chọn uống nóng hoặc dùng chung với đá.",
        image: "/img/capucchino.png",
        basePrice: 69000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 16000 },
        ],
    },
    {
        id: "latte",
        title: "LATTE",
        description:
            "Ly cà phê sữa ngọt ngào đến khó quên! Với một chút nhẹ nhàng hơn so với Cappuccino, Latte của chúng tôi bắt đầu với cà phê espresso, sau đó thêm sữa tươi và bọt sữa một cách đầy nghệ thuật. Bạn có thể tùy thích lựa chọn uống nóng hoặc dùng chung với đá.",
        image: "/img/latte.png",
        basePrice: 65000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 14000 },
        ],
    },
    {
        id: "espresso",
        title: "ESPRESSO",
        description:
            "Đích thực là ly cà phê espresso ngon đậm đà! Được chiết xuất một cách hoàn hảo từ loại cà phê rang được phối trộn độc đáo từ những hạt cà phê Robusta và Arabica chất lượng hảo hạng.",
        image: "/img/expresso.png",
        basePrice: 45000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 4000 },
            { label: "L", extraPrice: 10000 },
        ],
    },
    {
        id: "cappuccino",
        title: "CAPPUCCINO",
        description:
            "Ly cà phê sữa đậm đà thời thượng! Một chút đậm đà hơn so với Latte, Cappuccino của chúng tôi bắt đầu với cà phê espresso, sau đó thêm một lượng tương đương giữa sữa tươi và bọt sữa cho thật hấp dẫn. Bạn có thể tùy thích lựa chọn uống nóng hoặc dùng chung với đá.",
        image: "/img/capucchino.png",
        basePrice: 65000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 14000 },
        ],
    },
    {
        id: "phindi-hat-de-cuoi",
        title: "PHINDI HẠT DẺ CƯỜI",
        description:
            "PhinDi Hạt Dẻ Cười - Cà phê Phin thế hệ mới với chất Phin êm hơn, kết hợp sốt phistiachio mang đến hương vị mới lạ, không thể hấp dẫn hơn!",
        image: "/img/phindipitaschio.png",
        basePrice: 45000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 4000 },
            { label: "L", extraPrice: 10000 },
        ],
    },
    {
        id: "phindi-kem-sua",
        title: "PHINDI KEM SỮA",
        description:
            "PhinDi Kem Sữa - Cà phê Phin thế hệ mới với chất Phin êm hơn, kết hợp cùng Kem Sữa béo ngậy mang đến hương vị mới lạ, không thể hấp dẫn hơn!",
        image: "/img/phindikemsua.png",
        basePrice: 45000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 4000 },
            { label: "L", extraPrice: 10000 },
        ],
    },
    {
        id: "phindi-hong-tra",
        title: "PHINDI HỒNG TRÀ",
        description:
            "PhinDi Kem Sữa - Cà phê Phin thế hệ mới với chất Phin êm hơn, lần đầu tiên kết hợp cùng Hồng Trà mang đến hương vị quyện êm, phiên bản giới hạn chỉ trong mùa lễ hội 2020!",
        image: "/img/phindihongtra.png",
        basePrice: 45000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 4000 },
            { label: "L", extraPrice: 10000 },
        ],
    },
    {
        id: "phindi-hanh-nhan",
        title: "PHINDI HẠNH NHÂN",
        description:
            "PhinDi Hạnh Nhân - Cà phê Phin thế hệ mới với chất Phin êm hơn, kết hợp cùng Hạnh nhân thơm bùi mang đến hương vị mới lạ, không thể hấp dẫn hơn!",
        image: "/img/phindihanhnhan.png",
        basePrice: 45000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 4000 },
            { label: "L", extraPrice: 10000 },
        ],
    },
    {
        id: "phindi-choco",
        title: "PHINDI CHOCO",
        description:
            "PhinDi Choco - Cà phê Phin thế hệ mới với chất Phin êm hơn, kết hợp cùng Choco ngọt tan mang đến hương vị mới lạ, không thể hấp dẫn hơn!",
        image: "/img/phindichoco.png",
        basePrice: 45000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 4000 },
            { label: "L", extraPrice: 10000 },
        ],
    },
    {
        id: "tac-da-vien",
        title: "TẮC ĐÁ VIÊN",
        description:
            "Tắc Đá Viên với vị tắc thơm mát, chua nhẹ cùng lượng đường đá vừa phải, mát lạnh tức thì.",
        image: "/img/tac-da-vien.png",
        basePrice: 39000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 16000 },
        ],
    },
    {
        id: "sua-tuoi-nong",
        title: "SỮA TƯƠI NÓNG",
        description:
            "Sữa Tươi Nóng vị thơm béo pha thêm đường. Độ ấm nóng vừa phải.",
        image: "/img/sua-tuoi-nong.png",
        basePrice: 39000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 16000 },
        ],
    },
    {
        id: "socola-nong",
        title: "SOCOLA NÓNG",
        description:
            "Sô Cô La Nóng đậm đà vị sô-cô-la, thêm đá trung hoà vị đăng đắng đặc trưng.",
        image: "/img/socola-nong.png",
        basePrice: 39000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 16000 },
        ],
    },
    {
        id: "chanh-nong",
        title: "CHANH NÓNG",
        description:
            "Chanh Nóng với sự kết hợp giữa vị chua thanh mát và đường ngọt. Thức uống ấm nóng tốt cho sức khoẻ.",
        image: "/img/chanh-nong.png",
        basePrice: 39000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 16000 },
        ],
    },
    {
        id: "chanh-day-da-vien",
        title: "CHANH DÂY ĐÁ VIÊN",
        description:
            "Chanh Dây Đá Viên với hương chanh dây thơm mát, vị chua ngọt quen thuộc và sắc vàng bắt mắt.",
        image: "/img/chanh-day-da-vien.png",
        basePrice: 39000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 16000 },
        ],
    },
    {
        id: "freeze-berry",
        title: "FREEZE BERRY",
        description:
            "Freeze Quả Mọng Anh Đào với kem béo đậm đà, hài hòa cùng vị chua của quả mọng và cherry, thỏa mãn vị giác.",
        image: "/img/freezeberry.png",
        basePrice: 59000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            //{ label: "L", extraPrice: 55000 },
        ],
    },
    {
        id: "freeze-socola",
        title: "FREEZE SOCOLA",
        description:
            "Thiên đường đá xay sô cô la! Từ những thanh sô cô la Việt Nam chất lượng được đem xay với đá cho đến khi mềm mịn, sau đó thêm vào thạch sô cô la dai giòn, ở trên được phủ một lớp kem whip beo béo và sốt sô cô la ngọt ngào. Tạo thành Freeze Sô-cô-la ngon mê mẩn chinh phục bất kì ai!",
        image: "/img/freezesocola.png",
        basePrice: 55000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 14000 },
        ],
    },
    {
        id: "freeze-tra-xanh",
        title: "FREEZE TRÀ XANH",
        description:
            "Thức uống rất được ưa chuộng! Trà xanh thượng hạng từ cao nguyên Việt Nam, kết hợp cùng đá xay, thạch trà dai dai, thơm ngon và một lớp kem dày phủ lên trên vô cùng hấp dẫn. Freeze Trà Xanh thơm ngon, mát lạnh, chinh phục bất cứ ai!",
        image: "/img/freezematcha.png",
        basePrice: 55000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 14000 },
        ],
    },
    {
        id: "freeze-kem-dau-tam",
        title: "FREEZE KEM DÂU TẰM",
        description:
            "Lớp kem mây mềm mịn của Freeze sẽ đưa bạn đến một mùa hè thật bay bổng, gác lại những bộn bề ngày thường. Đặt Highlands Coffee giao ngay bạn nhé.",
        image: "/img/freezekemmaydautam.png",
        basePrice: 59000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            //{ label: "L", extraPrice: 69000 },
        ],
    },
    {
        id: "phin-den-nong",
        title: "PHIN ĐEN NÓNG",
        description:
            "Dành cho những tín đồ cà phê đích thực! Hương vị cà phê truyền thống được phối trộn độc đáo tại Highlands. Cà phê đậm đà pha từ Phin, cho thêm 1 thìa đường, mang đến vị cà phê đậm đà chất Phin. ",
        image: "/img/phindennong.png",
        basePrice: 29000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 16000 },
        ],
    },
    {
        id: "phin-den-da",
        title: "PHIN ĐEN ĐÁ",
        description:
            "Dành cho những tín đồ cà phê đích thực! Hương vị cà phê truyền thống được phối trộn độc đáo tại Highlands. Cà phê đậm đà pha hoàn toàn từ Phin, cho thêm 1 thìa đường, một ít đá viên mát lạnh, tạo nên Phin Đen Đá mang vị cà phê đậm đà chất Phin.  ",
        image: "/img/phindenda.png",
        basePrice: 29000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 16000 },
        ],
    },
    {
        id: "cookies-cream",
        title: "COOKIES & CREAM",
        description:
            "Một thức uống ngon lạ miệng bởi sự kết hợp hoàn hảo giữa cookies sô cô la giòn xốp cùng hỗn hợp sữa tươi cùng sữa đặc đem say với đá viên, và cuối cùng không thể thiếu được chính là lớp kem whip mềm mịn cùng cookies sô cô la say nhuyễn.",
        image: "/img/cookiescream.png",
        basePrice: 55000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 14000 },
        ],
    },
    {
        id: "classic-phin-freeze",
        title: "CLASSIC PHIN FREEZE",
        description:
            "Thơm ngon đậm đà! Được kết hợp từ cà phê pha Phin truyền thống chỉ có tại Highlands Coffee, cùng với thạch cà phê và đá xay mát lạnh. Trên cùng là lớp kem tươi thơm béo và bột ca cao đậm đà. Món nước hoàn hảo để khởi đầu câu chuyện cùng bạn bè.",
        image: "/img/classicfreezephindi.png",
        basePrice: 55000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 14000 },
        ],
    },
    {
        id: "chanh-da-xay",
        title: "CHANH ĐÁ XAY",
        description:
            "Chanh Đá Xay vẫn vị chanh thơm, vị chua sảng khoái nhưng gấp đôi mát lạnh với đá xay.",
        image: "/img/chanhdaxay.png",
        basePrice: 39000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 16000 },
        ],
    },
    {
        id: "caramel-phin-freeze",
        title: "CARAMEL PHIN FREEZE",
        description:
            "Thơm ngon khó cưỡng! Được kết hợp từ cà phê truyền thống chỉ có tại Highlands Coffee, cùng với caramel, thạch cà phê và đá xay mát lạnh. Trên cùng là lớp kem tươi thơm béo và caramel ngọt ngào. Món nước phù hợp trong những cuộc gặp gỡ bạn bè, bởi sự ngọt ngào thường mang mọi người xích lại gần nhau.",
        image: "/img/caramelphinfreeze.png",
        basePrice: 55000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 14000 },
        ],
    },
    {
        id: "banh-tiramisu",
        title: "BÁNH TIRAMISU",
        description:
            "Tiramisu thơm béo, làm từ ca-cao Việt Nam đậm đà, kết hợp với phô mai ít béo, vani và chút rum nhẹ nhàng.",
        image: "/img/TIRAMISU.png",
        basePrice: 35000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 4000 },
            { label: "L", extraPrice: 10000 },
        ],
    },
    {
        id: "sukem",
        title: "SUKEM",
        description:
            "Bánh Su Kem với lớp vỏ mềm mịn, nhân kem thơm béo.",
        image: "/img/SUKEM.png",
        basePrice: 19000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 6000 },
            { label: "L", extraPrice: 10000 },
        ],
    },
    {
        id: "banh-sua-chua",
        title: "BÁNH SỮA CHUA",
        description:
            "Bánh Sữa Chua Phô Mai lớp bánh mềm mịn,tan chảy với độ chua nhẹ nhàng của sữa chua cùng phô mai thơm béo. ",
        image: "/img/BANHSUACHUA.png",
        basePrice: 45000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 15000 },
        ],
    },
    {
        id: "banh-socola-highlands",
        title: "BÁNH SOCOLA HIGHLANDS",
        description:
            "Một chiếc bánh độc đáo! Sô cô la ngọt ngào và kem tươi béo ngậy, được phủ thêm một lớp sô cô la mỏng bên trên cho thêm phần hấp dẫn. ",
        image: "/img/SOCOLAHL.png",
        basePrice: 35000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 4000 },
            { label: "L", extraPrice: 10000 },
        ],
    },
    {
        id: "banh-pho-mai-tra-xanh",
        title: "BÁNH PHÔ MAI TRÀ XANH",
        description:
            "Một sự sáng tạo mới mẻ, kết hợp giữa trà xanh đậm đà và phô mai ít béo.",
        image: "/img/PHOMAITRAXANH.png",
        basePrice: 35000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 4000 },
            { label: "L", extraPrice: 10000 },
        ],
    },
    {
        id: "banh-pho-mai-ca-phe",
        title: "BÁNH PHÔ MAI CÀ PHÊ",
        description:
            "Làm từ cà phê truyền thống của Highlands, kết hợp với phô mai thơm ngon! Chiếc bánh phù hợp đi cùng với bất cứ món cà phê nào!",
        image: "/img/PHOMAICAPHE.png",
        basePrice: 29000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 16000 },
        ],
    },
    {
        id: "banh-mi-que-pate",
        title: "BÁNH MÌ QUE PATE",
        description:
            "Bánh Mì Que Pate nóng hổi, vừa giòn giòn, vừa kết hợp cùng chút beo béo ngầy ngậy của pa tê.",
        image: "/img/banhmiquepate.png",
        basePrice: 19000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 6000 },
            { label: "L", extraPrice: 10000 },
        ],
    },
    {
        id: "banh-mi-que-ga-pho-mai",
        title: "BÁNH MÌ QUE GÀ PHÔ MAI",
        description:
            "Bánh Mì Que Gà Phô Mai nóng giòn, béo ngậy vị gà phô mai,  thích hợp nhâm nhi cùng trà. ",
        image: "/img/banhmiquegaphomai.png",
        basePrice: 19000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 6000 },
            { label: "L", extraPrice: 10000 },
        ],
    },
    {
        id: "banh-mi-que-bo-xot-pho-mai",
        title: "BÁNH MÌ QUE BÒ XỐT PHÔ MAI",
        description:
            "Bánh Mì Que Bò Xốt Phô Mai nóng giòn, béo ngậy vị bò phô mai,  thích hợp nhâm nhi cùng trà. ",
        image: "/img/banhmiqueboxotphomai.png",
        basePrice: 19000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 6000 },
            { label: "L", extraPrice: 10000 },
        ],
    },
    {
        id: "banh-mousse-dao",
        title: "BÁNH MOUSSE ĐÀO",
        description:
            "Một sự kết hợp khéo léo giữa kem và lớp bánh mềm, được phủ lên trên vài lát đào ngon tuyệt.",
        image: "/img/MOUSSEDAO.png",
        basePrice: 35000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 4000 },
            { label: "L", extraPrice: 10000 },
        ],
    },
    {
        id: "banh-mousse-cacao",
        title: "BÁNH MOUSSE CACAO",
        description:
            "Bánh Mousse Ca Cao, là sự kết hợp giữa ca-cao Việt Nam đậm đà cùng kem tươi.",
        image: "/img/MOUSSECACAO.png",
        basePrice: 35000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 4000 },
            { label: "L", extraPrice: 10000 },
        ],
    },
    {
        id: "banh-chuoi",
        title: "BÁNH CHUỐI",
        description:
            "Bánh chuối truyền thống, sự kết hợp của 100% chuối tươi và nước cốt dừa Việt Nam.",
        image: "/img/BANHCHUOI.png",
        basePrice: 29000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 16000 },
        ],
    },
    {
        id: "banh-caramel-pho-mai",
        title: "BÁNH CARAMEL PHÔ MAI",
        description:
            "Ngon khó cưỡng! Bánh phô mai thơm béo được phủ bằng lớp caramel ngọt ngào.",
        image: "/img/CARAMELPHOMAI.png",
        basePrice: 35000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 4000 },
            { label: "L", extraPrice: 10000 },
        ],
    },
    {
        id: "chanh-da-vien",
        title: "CHANH ĐÁ VIÊN",
        description:
            "Chanh Đá Viên với vị chanh thơm mát, chua nhẹ cùng lượng đá viên vừa phải, giải khát tức thì.",
        image: "/img/chanh-da-vien.png",
        basePrice: 39000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 16000 },
        ],
    },
    {
        id: "tra-tuyet-xoai-dao",
        title: "TRÀ TUYẾT XOÀI ĐÀO",
        description:
            "Trà tuyết cực mát lạnh với lớp đá tuyết độc đáo cùng trái cây tươi thơm ngon và thạch giòn dai! Thử ngay!",
        image: "/img/tratuyetxoaidao.png",
        basePrice: 45000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 20000 },
        ],
    },
    {
        id: "tra-thanh-dao",
        title: "TRÀ THANH ĐÀO",
        description:
            "Một trải nghiệm thú vị khác! Sự hài hòa giữa vị trà cao cấp, vị sả thanh mát và những miếng đào thơm ngon mọng nước sẽ mang đến cho bạn một thức uống tuyệt vời.",
        image: "/img/trathanhdao.png",
        basePrice: 45000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 20000 },
        ],
    },
    {
        id: "tra-thach-vai",
        title: "TRÀ THẠCH VẢI",
        description:
            "Một sự kết hợp thú vị giữa trà đen, những quả vải thơm ngon và thạch giòn khó cưỡng, mang đến thức uống tuyệt hảo!",
        image: "/img/trathachvai.png",
        basePrice: 45000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 20000 },
        ],
    },
    {
        id: "freeze-kem-may-dau-tam",
        title: "FREEZE KEM MÂY DÂU TẰM",
        description:
            "Lớp kem mây mềm mịn của Freeze sẽ đưa bạn đến một mùa hè thật bay bổng, gác lại những bộn bề ngày thường. Đặt Highlands Coffee giao ngay bạn nhé.",
        image: "/img/freezekemmaydautam.png",
        basePrice: 49000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 10000 },
            { label: "L", extraPrice: 20000 },
        ],
    },
    {
        id: "espresso",
        title: "ESPRESSO",
        description:
            "Đích thực là ly cà phê espresso ngon đậm đà! Được chiết xuất một cách hoàn hảo từ loại cà phê rang được phối trộn độc đáo từ những hạt cà phê Robusta và Arabica chất lượng hảo hạng.",
        image: "/img/expresso.png",
        basePrice: 45000,
        sizes: [
            { label: "S", extraPrice: 0 },
            { label: "M", extraPrice: 4000 },
            { label: "L", extraPrice: 10000 },
        ],
    },
    // Thêm sản phẩm khác nếu cần
];

export default datas;
