# lanista

## 프로젝트 소개

이 저장소는 `lanista` 프로젝트를 위한 공간입니다.

> 현재 저장소에는 실행 가능한 소스 코드나 패키지 설정 파일(`package.json`, `requirements.txt`, `pyproject.toml` 등)이 포함되어 있지 않아, 정확한 실행 명령어는 아직 확정할 수 없습니다.

소스 코드와 실행 환경 설정 파일을 추가한 뒤, 아래 실행 방법을 프로젝트 구조에 맞게 업데이트하면 됩니다.

---

## 실행 전 준비 사항

프로젝트를 실행하기 전에 아래 항목을 확인하세요.

- Git 설치
- 프로젝트에서 사용하는 런타임 설치
  - Node.js 프로젝트라면 Node.js 설치
  - Python 프로젝트라면 Python 설치
- 패키지 매니저 확인
  - Node.js: `npm`, `yarn`, `pnpm` 중 하나
  - Python: `pip`, `poetry`, `uv` 중 하나

---

## 프로젝트 내려받기

```bash
git clone https://github.com/lanista-boop/lanista.git
cd lanista
```

---

## 프로젝트 실행 방법

### 1. 의존성 설치

프로젝트 설정 파일이 추가되면, 사용하는 환경에 맞춰 의존성을 설치합니다.

#### Node.js 프로젝트 예시

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

#### Python 프로젝트 예시

```bash
pip install -r requirements.txt
```

---

### 2. 개발 서버 실행

웹 프로젝트라면 일반적으로 아래와 같은 명령어로 개발 서버를 실행합니다.

#### Node.js 프로젝트 예시

```bash
npm run dev
```

또는

```bash
npm start
```

#### Python 웹 프로젝트 예시

Flask 예시:

```bash
flask run
```

Django 예시:

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

| 환경 | 브라우저 주소 예시 |
| --- | --- |
| Vite | `http://localhost:5173` |
| Next.js | `http://localhost:3000` |
| React 개발 서버 | `http://localhost:3000` |
| Django | `http://127.0.0.1:8000` |
| Flask | `http://127.0.0.1:5000` |

> 정확한 주소는 개발 서버 실행 후 터미널에 출력되는 값을 기준으로 확인하세요.

---

## 실행이 안 될 때 확인할 것

아래 항목을 차례대로 확인해보세요.

1. 의존성을 설치했는지 확인
2. 실행 명령어가 프로젝트 설정 파일과 맞는지 확인
3. 터미널에 표시된 에러 메시지 확인
4. 이미 사용 중인 포트가 있는지 확인
5. 브라우저 주소가 터미널에 출력된 주소와 같은지 확인

---

## 다음에 업데이트하면 좋은 내용

프로젝트 소스가 추가되면 README에 아래 내용을 보완하는 것을 추천합니다.

- 프로젝트 기능 설명
- 사용 기술 스택
- 정확한 설치 명령어
- 정확한 실행 명령어
- 환경 변수 설정 방법
- 배포 방법
- 스크린샷 또는 화면 예시
