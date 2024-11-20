document.querySelector('.follow-button').addEventListener('click', function() {
    const button = this;
    if (button.classList.contains('following')) {
      button.textContent = 'Follow';
      button.classList.remove('following');
    } else {
      button.textContent = 'Following';
      button.classList.add('following');
    }
  });