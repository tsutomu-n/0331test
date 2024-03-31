// 要素の取得
const totalSavingsInput = document.querySelector('#total-savings');
const normalPriceInput = document.querySelector('#normal-price');
const discountPriceInput = document.querySelector('#discount-price');
const formClearButton = document.querySelector('.form-clear-button');

// イベントリスナーの登録
normalPriceInput.addEventListener('input', calculateSavings);
discountPriceInput.addEventListener('input', calculateSavings);
formClearButton.addEventListener('click', clearForm);

// 節約額の計算
function calculateSavings() {
  const normalPrice = parseFloat(normalPriceInput.value);
  const discountPrice = parseFloat(discountPriceInput.value);

  // 入力値のバリデーション
  if (Number.isNaN(normalPrice) || Number.isNaN(discountPrice)) {
    alert('正しい数値を入力してください。');
    return;
  }

  const savings = normalPrice - discountPrice;
  totalSavingsInput.value = `¥${savings.toFixed(0)}`;
}

// フォームのクリア
function clearForm() {
  normalPriceInput.value = '';
  discountPriceInput.value = '';
  totalSavingsInput.value = '¥0';
}