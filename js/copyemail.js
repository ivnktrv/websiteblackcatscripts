document.querySelector('#copyemail').addEventListener(
    'click',
    async (event) => {
      const code = event.target.innerText;
      await navigator.clipboard.writeText(code);
      alert('Скопировано в буфер обмена');
    }
  );