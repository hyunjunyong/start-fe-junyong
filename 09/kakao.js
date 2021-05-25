const $btn = document.querySelector('#search-btn');
const $text = document.querySelector('#search-text');
const $result = document.querySelector('#result');
const url = 'https://dapi.kakao.com/v2/search/web';
const headers = { Authorization: 'KakaoAK d31218ac34bbbf3c0861ad725ba4f24d' };

function success(data) {
  const { documents } = data;
  const li = documents.map((doc) => {
    return `<li class="list-group-item"><a href="${doc.url}" target="_blank">${doc.contents}</a></li>`;
  });

  $result.innerHTML = `<ul class="list-group list-group-flush">${li.join(
    '',
  )}</ul>`;
}
function error() {
  // eslint-disable-next-line no-alert
  alert('�����͸� �����ü� �����ϴ�');
}
function search() {
  const { value } = $text;

  if (value === '') {
    // eslint-disable-next-line no-alert
    alert('�˻�� �Է��ϼ���');
    return false;
  }

  fetch(`${url}?query=${value}`, { headers })
    .then((res) => res.json())
    .then(success)
    .catch(error);

  return true;
}

$btn.addEventListener('click', search);
