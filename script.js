// localStorage에 저장할 때 사용할 키 이름
const STORAGE_KEY = "weight_records";

// HTML 요소를 변수로 가져옵니다.
const startWeightInput = document.getElementById("startWeight");
const currentWeightInput = document.getElementById("currentWeight");
const lossKgText = document.getElementById("lossKg");
const lossRateText = document.getElementById("lossRate");

const recordDateInput = document.getElementById("recordDate");
const recordWeightInput = document.getElementById("recordWeight");
const saveRecordButton = document.getElementById("saveRecordButton");
const recordTableBody = document.getElementById("recordTableBody");

// 시작 체중/현재 체중이 바뀔 때마다 감량 수치를 다시 계산합니다.
startWeightInput.addEventListener("input", updateLossInfo);
currentWeightInput.addEventListener("input", updateLossInfo);

// 저장 버튼을 누르면 기록을 저장합니다.
saveRecordButton.addEventListener("click", saveRecord);

// 페이지가 처음 열릴 때 오늘 날짜를 기본값으로 넣고, 저장된 기록을 불러옵니다.
initializePage();

function initializePage() {
  const today = new Date().toISOString().split("T")[0];
  recordDateInput.value = today;

  renderRecords();
  updateLossInfo();
}

// 감량 kg, 감량률 계산 함수
function updateLossInfo() {
  const startWeight = parseFloat(startWeightInput.value);
  const currentWeight = parseFloat(currentWeightInput.value);

  // 숫자가 아닌 값이 들어오면 0으로 표시합니다.
  if (isNaN(startWeight) || isNaN(currentWeight) || startWeight <= 0) {
    lossKgText.textContent = "0.0";
    lossRateText.textContent = "0.00";
    return;
  }

  const lossKg = startWeight - currentWeight;
  const lossRate = (lossKg / startWeight) * 100;

  // 소수점 자릿수를 맞춰서 보여줍니다.
  lossKgText.textContent = lossKg.toFixed(1);
  lossRateText.textContent = lossRate.toFixed(2);
}

// 기록을 localStorage에 저장하는 함수
function saveRecord() {
  const date = recordDateInput.value;
  const weight = parseFloat(recordWeightInput.value);

  if (!date || isNaN(weight) || weight <= 0) {
    alert("날짜와 올바른 체중을 입력해주세요.");
    return;
  }

  const records = getRecords();

  // 새 기록을 배열에 추가합니다.
  records.push({ date, weight: weight.toFixed(1) });

  // 날짜 기준 오름차순 정렬 (오래된 날짜 -> 최근 날짜)
  records.sort((a, b) => new Date(a.date) - new Date(b.date));

  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));

  recordWeightInput.value = "";
  renderRecords();
}

// localStorage에서 기록 배열을 가져오는 함수
function getRecords() {
  const rawData = localStorage.getItem(STORAGE_KEY);

  // 저장된 데이터가 없으면 빈 배열 반환
  if (!rawData) {
    return [];
  }

  // 문자열(JSON)을 다시 배열로 변환
  return JSON.parse(rawData);
}

// 저장된 기록을 표에 출력하는 함수
function renderRecords() {
  const records = getRecords();

  // 기존 표 내용을 지웁니다.
  recordTableBody.innerHTML = "";

  if (records.length === 0) {
    const emptyRow = document.createElement("tr");
    emptyRow.innerHTML = '<td colspan="2">저장된 기록이 없습니다.</td>';
    recordTableBody.appendChild(emptyRow);
    return;
  }

  // records 배열을 반복하면서 표 행을 만들어 추가합니다.
  records.forEach((record) => {
    const row = document.createElement("tr");

    const dateCell = document.createElement("td");
    dateCell.textContent = record.date;

    const weightCell = document.createElement("td");
    weightCell.textContent = record.weight;

    row.appendChild(dateCell);
    row.appendChild(weightCell);

    recordTableBody.appendChild(row);
  });
}
