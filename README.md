### Project Setting

1. node version: 20.18.0
2. 리액트 라우터 설치: `npm install react-router-dom`
3. SASS/SCSS 설치: `npm install -D sass-embedded`

---

### 11.18 과제 작업

1. Pagination

페이지 네이션 쪽을 구현하면서 이상한 게, total_pages가 334개가 오는데, 실제로
저는 https://api.unsplash.com/search/photos/?query=korea&page=201&per_page=30&client_id=pi1ltYJOU7t58Gi7ZrWf3XF7lSbbZixCsT-4v7ZNLqA 와 같이 page에 200이 넘는 값을 넣어 조회해 보면 데이터를 받아올 수 없는 것 같습니다.

2. LocalStorage

북마크 관련 기능은 use-bookmark.ts 훅스로 분리하였으며 UI의 실시간 업데이트를 위해 bookmarks 상태를 하나 두었으며 [데이터 고유 아이디]: boolean 형태로 북마크들을 토글 할 때와 제거할 때 실시간적으로 재 렌더링을 위해 클라이언트 상태로 관리하였습니다.
로컬 스토리지에 영구적으로 key는 bookmark, value로는 api 요청 이후 전달받은 ImageCardType 타입의 객체를 그대로 담았습니다.
