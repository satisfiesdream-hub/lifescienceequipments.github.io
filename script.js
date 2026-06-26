function toggleMenu() {
  document.getElementById('mobileNav').classList.toggle('open');
}

function handleSubmit(e) {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.textContent = '✅ Thank you! We will get back to you within 24 hours.';
  e.target.reset();
}
