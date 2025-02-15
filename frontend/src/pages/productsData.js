const productsData = {
    home: [
        { id: 'phin-sua-da', name: 'PHIN SỮA ĐÁ', price: '29,000 VND', image: '/img/phinsuada.png', category: 'CAFE' },
        { id: 'phin-den-da', name: 'PHIN ĐEN ĐÁ', price: '29,000 VND', image: '/img/phindenda.png', category: 'CAFE' },
        { id: 'bac-xiu-da', name: 'BẠC XỈU ĐÁ', price: '29,000 VND', image: '/img/bacxiuda.png', category: 'CAFE' },
        { id: 'freeze-tra-xanh', name: 'FREEZE TRÀ XANH', price: '55,000 VND', image: '/img/freezematcha.png', category: 'FREEZE' },
        { id: 'caramel-phin-freeze', name: 'CARAMEL PHIN FREEZE', price: '55,000 VND', image: '/img/caramelphinfreeze.png', category: 'FREEZE' },
        { id: 'cookies-cream', name: 'COOKIES & CREAM', price: '55,000 VND', image: '/img/cookiescream.png', category: 'FREEZE' },
        { id: 'tra-sen-vang', name: 'TRÀ SEN VÀNG', price: '45,000 VND', image: '/img/trasenvang(cunang).png', category: 'TEA' },
        { id: 'tra-thach-dao', name: 'TRÀ THẠCH ĐÀO', price: '45,000 VND', image: '/img/trathachdao.png', category: 'TEA' },
        { id: 'tra-thach-vai', name: 'TRÀ THẠCH VẢI', price: '45,000 VND', image: '/img/trathachvai.png', category: 'TEA' },
    ],
    cafe: [
        { id: 'phin-sua-da', name: 'PHIN SỮA ĐÁ', price: '29,000 VND', image: '/img/phinsuada.png', category: 'CAFE' },
        { id: 'phin-den-da', name: 'PHIN ĐEN ĐÁ', price: '29,000 VND', image: '/img/phindenda.png', category: 'CAFE' },
        { id: 'phindi-choco', name: 'PHINDI CHOCO', price: '45,000 VNĐ', image: '/img/phindichoco.png', category: 'CAFE' },
        { id: 'bac-xiu-da', name: 'BẠC XỈU ĐÁ', price: '29,000 VND', image: '/img/bacxiuda.png', category: 'CAFE' },
        { id: 'phindi-hong-tra', name: 'PHIN DI HỒNG TRÀ', price: '45,000 VND', image: '/img/phindihongtra.png', category: 'CAFE' },
        { id: 'phindi-kem-sua', name: 'PHINDI KEM SỮA', price: '29,000 VND', image: '/img/phindikemsua.png', category: 'CAFE' },
        { id: 'phindi-hanh-nhan', name: 'PHINDI HẠNH NHÂN', price: '45,000 VND', image: '/img/phindihanhnhan.png', category: 'CAFE' },
        { id: 'phindi-hat-de-cuoi', name: 'PHINDI HẠT DẺ CƯỜI', price: '45,000 VND', image: '/img/phindipitaschio.png', category: 'CAFE' },
        { id: 'expresso', name: 'EXPRESSO', price: '45,000 VND', image: '/img/expresso.png', category: 'CAFE' },
        { id: 'caramel-macchiato', name: 'CARAMEL MACCHIATO', price: '69,000 VND', image: '/img/caramel-macchiatto.png', category: 'CAFE' },
        { id: 'cappuccino', name: 'CAPPUCCINO', price: '65,000 VND', image: '/img/capucchino.png', category: 'CAFE' },
        { id: 'latte', name: 'LATTE', price: '65,000 VND', image: '/img/latte.png', category: 'CAFE' },
        { id: 'mocha', name: 'MOCHA', price: '69,000 VND', image: '/img/mocha.png', category: 'CAFE' },
        { id: 'phin-den-nong', name: 'PHIN ĐEN NÓNG', price: '29,000 VND', image: '/img/phindennong.png', category: 'CAFE' },
        { id: 'phin-sua-nong', name: 'PHIN SỮA NÓNG', price: '29,000 VND', image: '/img/phinsuanong.png', category: 'CAFE' },


    ],
    freeze: [
        { id: 'freeze-tra-xanh', name: 'FREEZE TRÀ XANH', price: '55,000 VND', image: '/img/freezematcha.png', category: 'FREEZE' },
        { id: 'caramel-phin-freeze', name: 'CARAMEL PHIN FREEZE', price: '55,000 VND', image: '/img/caramelphinfreeze.png', category: 'FREEZE' },
        { id: 'cookies-cream', name: 'COOKIES & CREAM', price: '55,000 VND', image: '/img/cookiescream.png', category: 'FREEZE' },
        { id: 'freeze-berry', name: 'FREEZE BERRY', price: '59,000 VND', image: '/img/freezeberry.png', category: 'FREEZE' },
        { id: 'classic-freeze-phindi', name: 'CLASSIC FREEZE PHINDI', price: '55,000 VND', image: '/img/classicfreezephindi.png', category: 'FREEZE' },
        { id: 'freeze-socola', name: 'FREEZE SOCOLA', price: '55,000 VND', image: '/img/freezesocola.png', category: 'FREEZE' },
        { id: 'freeze-kem-may-dau-tam', name: 'FREEZE KEM MÂY DÂU TẰM', price: '59,000 VND', image: '/img/freezekemmaydautam.png', category: 'FREEZE' },
        { id: 'chanh-da-xay', name: 'CHANH ĐÁ XAY', price: '39,000 VND', image: '/img/chanhdaxay.png', category: 'FREEZE' },
        { id: 'socola-da', name: 'SOCOLA ĐÁ', price: '55,000 VND', image: '/img/socolada.png', category: 'FREEZE' },
    ],
    tea: [
        { id: 'tra-sen-vang', name: 'TRÀ SEN VÀNG', price: '45,000 VNĐ', image: '/img/trasenvang(cunang).png', category: 'TEA' },
        { id: 'tra-thach-dao', name: 'TRÀ THẠCH ĐÀO', price: '45,000 VND', image: '/img/trathachdao.png', category: 'TEA' },
        { id: 'tra-thach-vai', name: 'TRÀ THẠCH VẢI', price: '45,000 VND', image: '/img/trathachvai.png', category: 'TEA' },
        { id: 'tra-qua-mong-anh-dao', name: 'TRÀ QUẢ MỌNG ANH ĐÀO', price: '45,000 VND', image: '/img/teaberry.png', category: 'TEA' },
        { id: 'tra-thanh-dao', name: 'TRÀ THANH ĐÀO', price: '45,000 VND', image: '/img/trathanhdao.png', category: 'TEA' },
        { id: 'tra-xanh-dau-do', name: 'TRÀ XANH ĐẬU ĐỎ', price: '45,000 VND', image: '/img/traxanhdaudo.png', category: 'TEA' },
        { id: 'tra-ngoc-trai-dau-tam', name: 'TRÀ NGỌC TRAI DÂU TẰM', price: '45,000 VND', image: '/img/trangoctraidautam.png', category: 'TEA' },
        { id: 'tra-tuyet-phuc-bon-tu', name: 'TRÀ TUYẾT PHÚC BỒN TỬ', price: '45,000 VND', image: '/img/tratuyetphucbontu.png', category: 'TEA' },
        { id: 'tra-tuyet-xoai-dao', name: 'TRÀ TUYẾT XOÀI ĐÀO', price: '45,000 VND', image: '/img/socolada.png', category: 'TEA' },
    ],
    other: [
        { id: 'chanh-day-da-vien', name: 'CHANH DÂY ĐÁ VIÊN', price: '39,000 VND', image: '/img/chanh-day-da-vien.png', category: 'OTHER' },
        { id: 'chanh-da-vien', name: 'CHANH ĐÁ VIÊN', price: '39,000 VND', image: '/img/chanh-da-vien.png', category: 'OTHER' },
        { id: 'tac-da-vien', name: 'TẮC ĐÁ VIÊN', price: '39,000 VND', image: '/img/tac-da-vien.png', category: 'OTHER' },
        { id: 'sua-tuoi-nong', name: 'SỮA TƯƠI NÓNG', price: '39,000 VND', image: '/img/sua-tuoi-nong.png', category: 'OTHER' },
        { id: 'chanh-nong', name: 'CHANH NÓNG', price: '39,000 VND', image: '/img/chanh-nong.png', category: 'OTHER' },
        { id: 'socola-nong', name: 'SOCOLA NÓNG', price: '55,000 VND', image: '/img/socola-nong.png', category: 'OTHER' },
    ],
    cake: [
        { id: 'banh-mousse-cacao', name: 'BÁNH MOUSSE CACAO', price: '35,000 VND', image: '/img/MOUSSECACAO.png', category: 'CAKE' },
        { id: 'banh-mousse-dao', name: 'BÁNH MOUSSE ĐÀO', price: '35,000 VND', image: '/img/MOUSSEDAO.png', category: 'CAKE' },
        { id: 'banh-pho-mai-ca-phe', name: 'BÁNH PHÔ MAI CÀ PHÊ', price: '29,000 VND', image: '/img/PHOMAICAPHE.png', category: 'CAKE' },
        { id: 'banh-sua-chua', name: 'BÁNH SỮA CHUA', price: '39,000 VND', image: '/img/BANHSUACHUA.png', category: 'CAKE' },
        { id: 'banh-tiramisu', name: 'BÁNH TIRAMISU', price: '35,000 VND', image: '/img/TIRAMISU.png', category: 'CAKE' },
        { id: 'banh-chuoi', name: 'BÁNH CHUỐI', price: '29,000 VND', image: '/img/BANHCHUOI.png', category: 'CAKE' },
        { id: 'banh-pho-mai-tra-xanh', name: 'BÁNH PHÔ MAI TRÀ XANH', price: '35,000 VND', image: '/img/PHOMAITRAXANH.png', category: 'CAKE' },
        { id: 'banh-caramel-pho-mai', name: 'BÁNH CARAMEL PHÔ MAI', price: '35,000 VND', image: '/img/CARAMELPHOMAI.png', category: 'CAKE' },
        { id: 'banh-socola-highlands', name: 'BÁNH SOCOLA', price: '35,000 VND', image: '/img/SOCOLAHL.png', category: 'CAKE' },
    ],
    special: [
        { id: 'bac-xiu-culi', name: 'BẠC XỈU CULI', price: '55,000 VND', image: '/img/Bac_Xiu_Culi.png', category: 'MENU ĐẶC BIỆT' },
        { id: 'phin-culi-den-da', name: 'PHIN CULI ĐEN ĐÁ', price: '49,000 VND', image: '/img/Phin_Den_Da.png', category: 'MENU ĐẶC BIỆT' },
        { id: 'phin-culi-sua-da', name: 'PHIN CULI SỮA ĐÁ', price: '55,000 VND', image: '/img/Phin_Sua_Da.png', category: 'MENU ĐẶC BIỆT' },
        { id: 'cold-brew-milk-foam', name: 'COLD BREW MILK FOAM', price: '79,000 VND', image: '/img/Cold_Brew_Milk_Foam.png', category: 'MENU ĐẶC BIỆT' },
        { id: 'cold-brew-dao', name: 'COLD BREW ĐÀO', price: '79,000 VND', image: '/img/Cold_Brew_Peach.png', category: 'MENU ĐẶC BIỆT' },
        { id: 'cold-brew', name: 'COLD BREW', price: '69,000 VND', image: '/img/Cold_Brew_6.png', category: 'MENU ĐẶC BIỆT' },
        { id: 'citrus-coffee-deton', name: 'CITRUS COFFEE DETONIC', price: '69,000 VND', image: '/img/Citrus_Cafe_De_Tonic.png', category: 'MENU ĐẶC BIỆT' },
        { id: 'phindi-cassia', name: 'PHINDI CASSIA', price: '69,000 VND', image: '/img/PhinDi_Cassia.png', category: 'MENU ĐẶC BIỆT' },
        { id: 'cappuccino', name: 'CAPPUCINO', price: '99,000 VND', image: '/img/Cappuccino.png', category: 'MENU ĐẶC BIỆT' },
        { id: 'set-tra-cao-cap', name: 'SET TRÀ CAO CẤP', price: '159,000 VND', image: '/img/Hot_Tea_Set_22.png', category: 'MENU ĐẶC BIỆT' },
        { id: 'tra-qua-mong-anh-dao', name: 'TRÀ QUẢ MỌNG ANH ĐÀO', price: '79,000 VND', image: '/img/Tra_Qua_Mong_Anh_Dao.png', category: 'MENU ĐẶC BIỆT' },
        { id: 'tra-oi-hong', name: 'TRÀ ỔI HỒNG', price: '79,000 VND', image: '/img/Tra_Oi_Hong_21.png', category: 'MENU ĐẶC BIỆT' }

    ],
    original: [
        { id: 'latte', name: 'LATTE', price: '99,000 VND', image: '/img/Latte_12.png', category: 'MENU NGUYÊN BẢN' },
        { id: 'caramel-phin-freeze', name: 'CARAMEL PHIN FREEZE', price: '69,000 VND', image: '/img/Freeze_Caramel_18.png', category: 'MENU NGUYÊN BẢN' },
        { id: 'cookies-cream', name: 'COOKIES & CREAM', price: '69,000 VND', image: '/img/Freeze_Cookie.png', category: 'MENU NGUYÊN BẢN' },
        { id: 'tac-da-vien', name: 'TẮC ĐÁ VIÊN', price: '55,000 VND', image: '/img/Tac_Da_Vien_11.png', category: 'MENU NGUYÊN BẢN' },
        { id: 'chanh-da-vien', name: 'CHANH ĐÁ VIÊN', price: '55,000 VND', image: '/img/Chanh_Da_Vien_15.png', category: 'MENU NGUYÊN BẢN' },
        { id: 'chanh-da-xay', name: 'CHANH ĐÁ XAY', price: '55,000 VND', image: '/img/Chanh_Da_Xay_14.png', category: 'MENU NGUYÊN BẢN' },
        { id: 'tra-thach-dao', name: 'TRÀ THẠCH ĐÀO', price: '59,000 VND', image: '/img/Tra_Thach_Dao_17.png', category: 'MENU NGUYÊN BẢN' },
        { id: 'tra-thach-vai', name: 'TRÀ THẠCH VẢI', price: '59,000 VND', image: '/img/Tra_Thach_Vai_16.png', category: 'MENU NGUYÊN BẢN' },
        { id: 'tra-thanh-dao', name: 'TRÀ THANH ĐÀO', price: '55,000 VND', image: '/img/Tra_Thanh_Dao_10.png', category: 'MENU NGUYÊN BẢN' }
    ],
    food: [
        { id: 'muffin', name: 'MUFFIN', price: 'Call', image: '/img/Muffin_25.png', category: 'FOOD' },
        { id: 'pastry', name: 'PASTRY', price: 'Call', image: '/img/Pastry_24.png', category: 'FOOD' },
        { id: 'cheese-cakes', name: 'CHEESE CAKES', price: 'Call', image: '/img/Cheesecakes_26.png', category: 'FOOD' },
        { id: 'pizza-spaghetti', name: 'PIZZA/SPAGHETTI', price: 'Call', image: '/img/Pizza_23.png', category: 'FOOD' },
        { id: 'banh-mi', name: 'BÁNH MÌ', price: 'Call', image: '/img/BanhMi_27.png', category: 'FOOD' },
        { id: 'kemdi', name: 'KEMDI', price: '39,000 VNĐ', image: '/img/KemDi-13.png', category: 'FOOD' },
        { id: 'banh-mi-que-bo-xot-pho-mai', name: 'BÁNH MÌ QUE (BÒ XỐT PHÔ MAI)', price: '29,000 VNĐ', image: '/img/banhmiqueboxotphomai.png', category: 'FOOD' },
        { id: 'banh-mi-que-ga-pho-mai', name: 'BÁNH MÌ QUE (GÀ PHÔ MAI)', price: '19,000 VNĐ', image: '/img/banhmiquegaphomai.png', category: 'FOOD' },
        { id: 'banh-mi-que-pate', name: 'BÁNH MÌ QUE PATE', price: '19,000 VNĐ', image: '/img/banhmiquepate.png', category: 'FOOD' }

    ],

};


export default productsData;
