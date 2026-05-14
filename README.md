# 체중 기록 웹앱

순수 **HTML, CSS, JavaScript**로 만든 초보자용 체중 기록 웹앱입니다.

## 기능

- 시작 체중 입력
- 현재 체중 입력
- 감량 kg 자동 계산
- 감량률(%) 자동 계산
- 날짜 + 체중 기록 저장
- 저장 기록 표 표시
- `localStorage` 저장으로 새로고침 후에도 데이터 유지
- 모바일 화면 대응

## 파일 구성

- `index.html`: 화면 구조(UI)
- `style.css`: 스타일(디자인)
- `script.js`: 기능(계산, 저장, 렌더링)
- `README.md`: 프로젝트 설명

## 실행 방법

1. 파일을 같은 폴더에 둡니다.
2. `index.html` 파일을 브라우저에서 엽니다.
3. 시작 체중/현재 체중을 입력하면 자동 계산됩니다.
4. 날짜와 체중을 입력하고 **기록 저장하기**를 누르면 표에 추가됩니다.

## 학습 포인트

- DOM 요소 선택 (`getElementById`)
- 이벤트 처리 (`addEventListener`)
- 숫자 변환 (`parseFloat`)
- 배열 다루기 (`push`, `sort`, `forEach`)
- 브라우저 저장소 (`localStorage`)
