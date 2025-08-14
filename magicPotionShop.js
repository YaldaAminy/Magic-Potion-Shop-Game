// ------------------------
// فروشگاه معجون جادویی 
// ------------------------

// 1️⃣ شروع بازی
let playerName = prompt("🪄 سلام شاگرد افسون‌کوتوله! اسم شما چیه؟");
let playerAge = parseInt(prompt("🎂 چند سالته؟"));
let favoriteElement = prompt("🌟 عاشق کدوم عنصر هستی؟ (آتش، آب، خاک، هوا)").toLowerCase();

alert(`✨ خوش آمدی ${playerName}! در سن ${playerAge}، آماده‌ای تا قدرت‌های ${favoriteElement} را یاد بگیری! 🐉`);

// شروع سکه‌ها
let gold = 0;

// 2️⃣ موجودی معجون‌ها
let potions = ['معجون شفا', 'اکسیر مانا', 'نوشیدنی نامرئی', 'محافظ آتش'];
let potionStock = {
    'معجون شفا': { quantity: 5, price: 10 },
    'اکسیر مانا': { quantity: 3, price: 15 },
    'نوشیدنی نامرئی': { quantity: 2, price: 25 },
    'محافظ آتش': { quantity: 4, price: 20 }
};

// 3️⃣ توابع بامزه
function displayPotionMenu() {
    let menu = potions.map((p, i) => `${i+1}. 🧪 ${p} - ${potionStock[p].price} 💰 (موجودی: ${potionStock[p].quantity})`).join('\n');
    alert(`🧙‍♂️✨ منوی معجون‌ها ✨🧙‍♂️\n====================\n${menu}\n====================`);
}

function soldPotion(potionName) {
    alert(`🎉 تبریک! شما یک ${potionName} فروختید! 💰\nکل سکه‌ها: ${gold}`);
}

function brewPotion(potionName, amount) {
    potionStock[potionName].quantity += amount;
    alert(`🔮 شما ${amount} عدد ${potionName} پختید!\n🧪 حالا موجودی: ${potionStock[potionName].quantity}`);
}

// 4️⃣ سفارش مشتری
let customersHelped = 0;

for (let i = 0; i < 3; i++) {
    let customerArrives = prompt("👤 یک مشتری آمده! سفارش بگیری؟ (yes/no)").toLowerCase();
    customerArrives === "yes"
        ? (() => {
            displayPotionMenu();
            let order = prompt("کدوم معجون می‌خوای؟").toLowerCase();
            let potionName = potions.find(p => p.toLowerCase() === order);

            if (potionName) {
                if (potionStock[potionName].quantity > 0) {
                    potionStock[potionName].quantity--;
                    gold += potionStock[potionName].price;
                    soldPotion(potionName);
                    customersHelped++;
                } else {
                    alert(`😢 متاسفم! ${potionName} موجود نیست.`);
                }
            } else {
                alert("❌ متاسفم، همچین معجونی نداریم!");
            }
        })()
        : alert("🛑 هیچ مشتری‌ای نیست.");
}

// 5️⃣ پخت معجون
let brews = 0;
while (brews < 3) {
    let brew = prompt("⚗️ میخوای معجون بسازی؟ (yes/no)").toLowerCase();
    if (brew !== "yes") break;

    displayPotionMenu();
    let potionToBrew = prompt("کدوم معجون رو بسازی؟").toLowerCase();
    let amount = parseInt(prompt("چند عدد بسازی؟"));

    let potionName = potions.find(p => p.toLowerCase() === potionToBrew);
    if (potionName && !isNaN(amount) && amount > 0) {
        brewPotion(potionName, amount);
        brews++;
    } else {
        alert("❌ نام یا تعداد نامعتبر است!");
    }
}

// 6️⃣ کتاب جادویی
let magicBook = {
    "گلوله آتش": () => alert("🔥 گلوله آتش! یک انفجار آتشین ظاهر شد!"),
    "شفا": () => alert("✨ افسون شفا! حالا احساس قدرت و شادابی داری!"),
    "نامرئی شدن": () => alert("🌀 افسون نامرئی شدن! برای لحظه‌ای ناپدید شدی!"),
    "سپر": () => alert("🛡️ افسون سپر! محافظت شدی!")
};

let useMagic = prompt("📖 میخوای یکی از افسون‌ها رو امتحان کنی؟ (yes/no)").toLowerCase();
if (useMagic === "yes") {
    let spells = Object.keys(magicBook).join(", ");
    let chosenSpell = prompt(`کدوم افسون؟ (${spells})`);
    magicBook[chosenSpell] ? magicBook[chosenSpell]() : alert("❌ افسون موجود نیست!");
}

// 7️⃣ ساعت جادویی
let startTime = new Date();
alert(`🕰️ ساعت جادویی: بازی از ${startTime.getHours()}:${startTime.getMinutes()} شروع شد.`);

// 8️⃣ گزارش پایان روز
let totalPotionsLeft = Object.values(potionStock).reduce((sum, p) => sum + p.quantity, 0);
alert(`🎉 روز خوبی بود، ${playerName}!\nکمک به مشتری‌ها: ${customersHelped}\nموجودی باقی مانده: ${totalPotionsLeft} معجون\n💰 کل سکه‌ها: ${gold}`);