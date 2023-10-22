import React, { useEffect } from "react"; // 리액트를 사용하기 위해 리액트 라이브러리를 불러오고 있다. 이렇게 하면 리액트의 기능과 컴포넌트를 사용할 수 있다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
// react-router-dom에서 필요한 모듈들을 불러오고 있다. BrowserRouter, Route, Routes는 라우팅을 구현하는 데 필요한 컴포넌트들이다.

import HomeView from "./views/HomeView";

// HomeView라는 이름으로, "./views/HomeView" 경로에 있는 컴포넌트를 불러오고 있다. 이는 HomeView 컴포넌트가 해당 경로에 있는 파일에서 정의되어 있다는 것을 의미한다.

import lenis from "./utils/lenis";
import link from "./utils/link";

const App = () => {
  // 화살표 함수로 정의된 함수형 컴포넌트. 리액트 애플리케이션의 최상위 컴포넌트로, 라우팅 설정을 포함하고 있다.
  useEffect(() => {
    lenis();
    link();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
};

/**
 *
 * BrowserRouter : 라우팅을 적용하기 위한 컴포넌트다. 애플리케이션의 최상위 컴포넌트인 App 컴포넌트를 감싸서 라우팅 설정을 적용할 수 있도록 한다.
 * Routes : 라우트들을 정의하는 컨테이너이다. 각각의 <Route> 컴포넌트들을 <Routes> 컴포넌트 내부에 정의하여 경로와 컴포넌트를 매핑한다.
 * <Route path="/" element={<HomeView />} /> : "/" 경로에 해당하는 <HomeView> 컴포넌트를 렌더링하도록 설정하는 것이다. path 속성에는 경로를 지정하고, element 속성에는 해당 경로에 렌더링할 컴포넌트를 JSX 문법으로 전달한다.
 *
 */

export default App;
