let file_loader = document.getElementById('form_file_loader');
let hidden_file_loader = document.getElementById('form_hidden_file_loader');
let file_name = document.getElementById('form_file_name');

//Открытие меню выбора и загрузки файла
file_loader.addEventListener('click', () => {
  hidden_file_loader.click();
})

//Отрисовка на странице имени выбранного файла
hidden_file_loader.addEventListener('change', (e) => {
  const [file] = e.target.files;

  if (file.name.length < 20) {
    file_name.textContent = `(${file.name})`;
  }

  else {
    file_name.textContent = `(${file.name.slice(0, 3)}...${file.name.slice(-7, file.name.length)})`;
  }
})