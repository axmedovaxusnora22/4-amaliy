// MahallaMarket mahsulotlari massivi
const mahsulotlar = [
    { id: 1, nomi: "Guruch", kategoriya: "Oziq-ovqat", narx: 18000, mavjud: true, rasm: "rasmlar/guruch.svg", teglar: ["don", "oziq-ovqat"] },
    { id: 2, nomi: "Shakar", kategoriya: "Oziq-ovqat", narx: 14000, mavjud: true, rasm: "rasmlar/shakar.svg", teglar: ["shirinlik", "oziq-ovqat"] },
    { id: 3, nomi: "Sut", kategoriya: "Ichimliklar", narx: 12000, mavjud: true, rasm: "rasmlar/sut.svg", teglar: ["sut", "ichimlik"] },
    { id: 4, nomi: "Choy", kategoriya: "Ichimliklar", narx: 25000, mavjud: true, rasm: "rasmlar/choy.svg", teglar: ["choy", "ichimlik"] },
    { id: 5, nomi: "Sovun", kategoriya: "Gigiyena", narx: 7000, mavjud: true, rasm: "rasmlar/sovun.svg", teglar: ["tozalik", "gigiyena"] },
    { id: 6, nomi: "Shampun", kategoriya: "Gigiyena", narx: 30000, mavjud: true, rasm: "rasmlar/shampun.svg", teglar: ["soch", "gigiyena"] },
    { id: 7, nomi: "Kir yuvish kukuni", kategoriya: "Maishiy", narx: 35000, mavjud: true, rasm: "rasmlar/kukun.svg", teglar: ["tozalash", "uy"] },
    { id: 8, nomi: "O‘simlik yog‘i", kategoriya: "Oziq-ovqat", narx: 22000, mavjud: true, rasm: "rasmlar/yog.svg", teglar: ["yog", "oziq-ovqat"] },
    { id: 9, nomi: "Pechenye", kategoriya: "Oziq-ovqat", narx: 16000, mavjud: false, rasm: "rasmlar/pechenye.svg", teglar: ["shirinlik", "pechenye"] },
    { id: 10, nomi: "Idish yuvish vositasi", kategoriya: "Maishiy", narx: 18000, mavjud: true, rasm: "rasmlar/idish.svg", teglar: ["tozalash", "idish"] }
];

// map: mahsulot nomlarini alohida massivga olish
const mahsulotNomlari = mahsulotlar.map(mahsulot => mahsulot.nomi);

// filter: mavjud mahsulotlarni ajratish
const mavjudMahsulotlar = mahsulotlar.filter(mahsulot => mahsulot.mavjud);

// reduce: barcha mahsulotlar narxining yig‘indisi
const jamiNarx = mahsulotlar.reduce((sum, mahsulot) => sum + mahsulot.narx, 0);

// sort: mahsulotlarni narx bo‘yicha o‘sish tartibida saralash
const arzonidan = [...mahsulotlar].sort((a, b) => a.narx - b.narx);

// find: id raqami 1 bo‘lgan mahsulotni topish
const birinchiMahsulot = mahsulotlar.find(mahsulot => mahsulot.id === 1);
