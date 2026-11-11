
const clockElement = document.getElementById('clock');
const dateElement = document.getElementById('date');

const timeFormatter = new Intl.DateTimeFormat('id-ID', {
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23'
});

const dateFormatter = new Intl.DateTimeFormat('id-ID', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

function updateClock() {
  // Pastikan elemen HTML tersedia.
  if (!clockElement || !dateElement) return;

  const now = new Date();

  // Perbarui jam.
  clockElement.textContent = timeFormatter.format(now);

  // Perbarui tanggal dengan huruf awal kapital.
  const formattedDate = dateFormatter.format(now);

  dateElement.textContent =
    formattedDate.charAt(0).toLocaleUpperCase('id-ID') +
    formattedDate.slice(1);
}

function scheduleNextUpdate() {
  updateClock();

  // Jadwalkan pembaruan tepat pada pergantian menit.
  const now = new Date();

  const delay =
    (60 - now.getSeconds()) * 1000 -
    now.getMilliseconds();

  setTimeout(scheduleNextUpdate, delay);
}

// Jalankan jam.
scheduleNextUpdate();
