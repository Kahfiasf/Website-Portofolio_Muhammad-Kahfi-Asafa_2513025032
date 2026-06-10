// Fungsi untuk Navigasi Antar Halaman
function navigate(pageId, navElement) {
  // 1. Sembunyikan semua section
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.classList.remove("active");
  });

  // 2. Hapus class active dari semua list navigasi
  const navItems = document.querySelectorAll("#nav-list li");
  navItems.forEach((item) => {
    item.classList.remove("active");
  });

  // 3. Tampilkan section target
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add("active");
  }

  // 4. Tambahkan class active ke navigasi yang diklik untuk efek shift/geser shape
  if (navElement) {
    navElement.classList.add("active");
  }

  // Scroll ke atas setiap pindah halaman
  window.scrollTo(0, 0);
}

// Fungsi Buka Tutup Modal (Pop-up Pendidikan)
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("show");
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("show");
  }
}

// Menutup modal apabila user klik di luar kotak modal
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.classList.remove("show");
  }
};
