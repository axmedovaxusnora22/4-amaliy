const konteyner = document.getElementById("mahsulotlar");
const qidiruv = document.getElementById("qidiruv");
const kategoriya = document.getElementById("kategoriya");
const saralash = document.getElementById("saralash");
const soni = document.getElementById("soni");
const xabar = document.getElementById("xabar");
const statistika = document.getElementById("statistika");

function pul(narx) {
    return narx.toLocaleString("uz-UZ") + " so‘m";
}

// Mahsulot kartalarini DOM orqali yaratish
function chiqar(royxat) {
    konteyner.replaceChildren();

    royxat.forEach(mahsulot => {
        const karta = document.createElement("article");
        karta.className = "product-card";
        karta.dataset.id = mahsulot.id;

        const rasm = document.createElement("img");
        rasm.src = mahsulot.rasm;
        rasm.alt = mahsulot.nomi;

        const nom = document.createElement("h3");
        nom.textContent = mahsulot.nomi;

        const tur = document.createElement("p");
        tur.textContent = "Kategoriya: " + mahsulot.kategoriya;

        const narx = document.createElement("p");
        narx.className = "price";
        narx.textContent = "Narxi: " + pul(mahsulot.narx);

        const holat = document.createElement("p");
        holat.textContent = mahsulot.mavjud ? "Mavjud" : "Hozircha mavjud emas";

        const tugma = document.createElement("button");
        tugma.type = "button";
        tugma.className = "batafsil";
        tugma.textContent = "Batafsil";

        karta.append(rasm, nom, tur, narx, holat, tugma);
        konteyner.append(karta);
    });

    soni.textContent = royxat.length;
    xabar.textContent = royxat.length === 0 ? "Hech narsa topilmadi." : "";
}

// Statistika: reduce va find orqali hisoblash
const jami = mahsulotlar.reduce((sum, mahsulot) => sum + mahsulot.narx, 0);
const ortacha = jami / mahsulotlar.length;
const engQimmatNarx = Math.max(...mahsulotlar.map(mahsulot => mahsulot.narx));
const engQimmat = mahsulotlar.find(mahsulot => mahsulot.narx === engQimmatNarx);

statistika.textContent =
    "Jami mahsulot: " + mahsulotlar.length +
    " | O‘rtacha narx: " + pul(Math.round(ortacha)) +
    " | Eng qimmat mahsulot: " + engQimmat.nomi;

// Qidiruv, kategoriya filtri va saralashni birga bajarish
function yangila() {
    const matn = qidiruv.value.trim().toLocaleLowerCase("uz-UZ");

    let natija = mahsulotlar.filter(mahsulot =>
        mahsulot.nomi.toLocaleLowerCase("uz-UZ").includes(matn)
    );

    if (kategoriya.value !== "all") {
        natija = natija.filter(mahsulot => mahsulot.kategoriya === kategoriya.value);
    }

    if (saralash.value === "asc") {
        natija.sort((a, b) => a.narx - b.narx);
    } else if (saralash.value === "desc") {
        natija.sort((a, b) => b.narx - a.narx);
    } else if (saralash.value === "name") {
        natija.sort((a, b) => a.nomi.localeCompare(b.nomi, "uz"));
    }

    chiqar(natija);
}

qidiruv.addEventListener("input", yangila);
kategoriya.addEventListener("change", yangila);
saralash.addEventListener("change", yangila);

chiqar(mahsulotlar);
