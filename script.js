// Ganti ID-nya menjadi ID si pembungkus (container)
let myWrapper = document.getElementById("wrapperNaik");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        // Gunakan flex agar tombol tetap di tengah saat muncul
        myWrapper.style.display = "flex";
    } else {
        myWrapper.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}





// Fungsi untuk mengganti bahasa lewat tombol kustom
function translateTo(langCode) {
    const googleCombo = document.querySelector('.goog-te-combo');
    if (googleCombo) {
        googleCombo.value = langCode;
        googleCombo.dispatchEvent(new Event('change'));
    } else {
        console.log("Widget Google belum siap. Coba lagi dalam sedetik.");
        // Jika belum siap, coba lagi otomatis setelah 500ms
        setTimeout(() => translateTo(langCode), 500);
    }
}

// Inisialisasi Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'id',
        includedLanguages: 'id,en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}







const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');
const currentTheme = localStorage.getItem('theme');

// Cek jika user sebelumnya sudah memilih dark mode
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.innerText = '☀️';

}

toggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        // Pindah ke Light
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeIcon.innerText = '🌙';
   
    } else {
        // Pindah ke Dark
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.innerText = '☀️';
    
    }
});