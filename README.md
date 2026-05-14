# lanista

`lanista` 프로젝트 저장소입니다.

## 현재 상태

현재 저장소에는 실행 가능한 애플리케이션 코드나 프로젝트 설정 파일이 아직 포함되어 있지 않습니다.

확인된 상태:

- `package.json` 없음
- `requirements.txt` 없음
- `pyproject.toml` 없음
- 웹 서버 실행 파일 없음
- 프론트엔드 진입 파일 없음

따라서 지금 상태에서는 바로 실행할 수 있는 명령어가 없습니다.

프로젝트 소스 코드와 실행 환경 설정 파일이 추가되면 아래 방법에 따라 실행할 수 있습니다.

---

## 프로젝트 내려받기

```bash
git clone https://github.com/lanista-boop/lanista.git
cd lanista
```

---

## 실행 전 준비 사항

프로젝트 종류에 따라 필요한 도구를 설치합니다.

### Node.js 기반 프로젝트인 경우

- Node.js
- npm, yarn, pnpm 중 하나

### Python 기반 프로젝트인 경우

- Python
- pip, poetry, uv 중 하나

---

## 실행 방법

### 1. 의존성 설치

프로젝트 설정 파일이 추가된 뒤, 사용하는 환경에 맞는 명령어를 실행합니다.

#### Node.js 예시

```bash
npm install
```

또는

```bash
yarn install
```

또는

```bash
pnpm install
```

#### Python 예시

```bash
pip install -r requirements.txt
```

---

### 2. 개발 서버 실행

웹 프로젝트라면 일반적으로 개발 서버를 실행한 뒤 브라우저에서 확인합니다.

#### Vite / React / Next.js 계열 예시

```bash
npm run dev
```

또는

```bash
npm start
```

#### Flask 예시

```bash
flask run
```

#### Django 예시

```bash
python manage.py runserver
```

---

## 브라우저에서 확인하는 방법

개발 서버를 실행하면 터미널에 접속 가능한 주소가 표시됩니다.

예시:

```bash
Local: http://localhost:5173
```

또는

```bash
http://127.0.0.1:8000
```

브라우저에서 터미널에 표시된 주소를 열면 프로젝트 화면을 확인할 수 있습니다.

자주 사용되는 로컬 주소는 다음과 같습니다.

| 프로젝트 유형 | 브라우저 주소 예시 |
| --- | --- |
| Vite | `http://localhost:5173` |
| Next.js | `http://localhost:3000` |
| React 개발 서버 | `http://localhost:3000` |
| Flask | `http://127.0.0.1:5000` |
| Django | `http://127.0.0.1:8000` |

정확한 주소는 실행 후 터미널에 출력되는 값을 기준으로 확인합니다.

---

## 실행이 되지 않을 때 확인할 것

1. 프로젝트 설정 파일이 있는지 확인합니다.
   - `package.json`
   - `requirements.txt`
   - `pyproject.toml`
   - `manage.py`
2. 의존성을 설치했는지 확인합니다.
3. 실행 명령어가 프로젝트 설정 파일과 일치하는지 확인합니다.
4. 터미널에 출력된 에러 메시지를 확인합니다.
5. 이미 사용 중인 포트가 있는지 확인합니다.
6. 브라우저 주소가 터미널에 출력된 주소와 같은지 확인합니다.

---

## 추후 README에 추가하면 좋은 내용

프로젝트 코드가 추가되면 아래 내용을 함께 작성하는 것을 권장합니다.

- 프로젝트 소개
- 주요 기능
- 사용 기술 스택
- 정확한 설치 명령어
- 정확한 실행 명령어
- 환경 변수 설정 방법
- 브라우저 접속 주소
- 배포 방법
- 화면 예시 또는 스크린샷
