document.querySelectorAll('.gender-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.gender-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    document.getElementById('genderInput').value = this.dataset.gender;
  });
});

document.getElementById('genderForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const gender = document.getElementById('genderInput').value;
  const email = document.getElementById('email').value;
  if (!gender || !email) {
    alert('Please select a gender and enter your email.');
    return;
  }
  if (gender === 'female') {
    window.location.href = 'preview-female.html';
  } else {
    window.location.href = 'preview-male.html';
  }
});
