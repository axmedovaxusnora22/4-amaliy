// Barcha sahifalarda ishlaydigan tungi rejim
const rejimTugma = document.getElementById("rejim");

if (localStorage.getItem("rejim") === "qorongu") {
    document.body.classList.add("qorongu");
}

if (rejimTugma) {
    rejimTugma.addEventListener("click", function () {
        document.body.classList.toggle("qorongu");

        const qorongu = document.body.classList.contains("qorongu");
        localStorage.setItem("rejim", qorongu ? "qorongu" : "kunduz");
        rejimTugma.textContent = qorongu ? "Kunduzgi rejim" : "Tungi rejim";
    });

    rejimTugma.textContent =
        document.body.classList.contains("qorongu") ? "Kunduzgi rejim" : "Tungi rejim";
}

// Modal va Event Delegation: faqat katalog sahifasida ishlaydi
const mahsulotKonteyneri = document.getElementById("mahsulotlar");

if (mahsulotKonteyneri && typeof mahsulotlar !== "undefined") {
    const modal = document.createElement("div");
    modal.className = "modal-overlay";
    modal.hidden = true;

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    const yopish = document.createElement("button");
    yopish.className = "modal-close";
    yopish.type = "button";
    yopish.textContent = "Yopish ×";

    const modalBody = document.createElement("div");
    modalContent.append(yopish, modalBody);
    modal.append(modalContent);
    document.body.append(modal);

    function modalYop() {
        modal.hidden = true;
    }

    function modalOch(mahsulot) {
        modalBody.replaceChildren();

        const nom = document.createElement("h2");
        nom.textContent = mahsulot.nomi;

        const kategoriya = document.createElement("p");
        kategoriya.textContent = "Kategoriya: " + mahsulot.kategoriya;

        const narx = document.createElement("p");
        narx.textContent = "Narxi: " + mahsulot.narx.toLocaleString("uz-UZ") + " so‘m";

        const holat = document.createElement("p");
        holat.textContent = mahsulot.mavjud ? "Mahsulot mavjud" : "Mahsulot hozircha mavjud emas";

        const teglar = document.createElement("p");
        teglar.textContent = "Teglar: " + mahsulot.teglar.join(", ");

        modalBody.append(nom, kategoriya, narx, holat, teglar);
        modal.hidden = false;
    }

    mahsulotKonteyneri.addEventListener("click", function (e) {
        const tugma = e.target.closest(".batafsil");
        if (!tugma) return;

        const karta = tugma.closest(".product-card");
        if (!karta) return;

        const id = Number(karta.dataset.id);
        const tanlangan = mahsulotlar.find(mahsulot => mahsulot.id === id);

        if (tanlangan) modalOch(tanlangan);
    });

    yopish.addEventListener("click", modalYop);

    modal.addEventListener("click", function (e) {
        if (e.target === modal) modalYop();
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !modal.hidden) modalYop();
    });
}

// Aloqa formasini tekshirish: faqat aloqa sahifasida ishlaydi
const aloqaForm = document.getElementById("aloqaForm");

if (aloqaForm) {
    aloqaForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const ism = document.getElementById("ism").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefon = document.getElementById("telefon").value.trim();
        const xabar = document.getElementById("xabarMatni").value.trim();

        const ismXato = document.getElementById("ismXato");
        const emailXato = document.getElementById("emailXato");
        const telefonXato = document.getElementById("telefonXato");
        const xabarXato = document.getElementById("xabarXato");
        const natija = document.getElementById("natija");

        ismXato.textContent = "";
        emailXato.textContent = "";
        telefonXato.textContent = "";
        xabarXato.textContent = "";
        natija.textContent = "";

        let xato = false;

        if (ism.length < 3) {
            ismXato.textContent = "Ism kamida 3 ta belgidan iborat bo‘lsin.";
            xato = true;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            emailXato.textContent = "Email manzilini to‘g‘ri kiriting.";
            xato = true;
        }

        if (!/^\+998\d{9}$/.test(telefon)) {
            telefonXato.textContent = "Telefon +998XXXXXXXXX ko‘rinishida bo‘lsin.";
            xato = true;
        }

        if (xabar.length < 10 || xabar.length > 500) {
            xabarXato.textContent = "Xabar 10 dan 500 tagacha belgidan iborat bo‘lsin.";
            xato = true;
        }

        if (!xato) {
            natija.textContent = "Xabaringiz muvaffaqiyatli yuborildi!";
            aloqaForm.reset();
        }
    });
}
