document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const service = document.getElementById("service").value;
  const target = document.getElementById("target").value;
  const jumlah = document.getElementById("jumlah").value;

  const message = `ORDER BARU DARI halfculutre.%0A%0A` +
    `Layanan: ${service}%0A` +
    `Target: ${target}%0A` +
    `Jumlah: ${jumlah}`;

  const whatsappNumber = "6289635567128"; // GANTI DENGAN NOMOR LU
  const url = `https://wa.me/${6289635567128}?text=${message}`;

  window.open(url, "_blank");
});
