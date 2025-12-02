import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Signup from './components/pages/Signup'
import KakaoTalk from './components/pages/KakaoTalk'
import LatestPost from './components/pages/LatestPost';
import CommunityWrite from './components/pages/CommunityWrite';
import Comments from './components/pages/Comments';
import PostList from './components/pages/PostList';
import Secret2 from './components/pages/Secret2';
import Login from'./components/pages/Login';

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/Comments" element={<Comments />} />
      <Route path="/PostList" element={<PostList />} />
      <Route path="/Secret2" element={<Secret2 />} />
      <Route path="/Login" element={<Login />} />

      <Route path="/CommunityWrite" element={<CommunityWrite />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Kakao" element={<KakaoTalk />} />
        <Route path="/LatestPost" element={<LatestPost />} />
       </Routes>
  </BrowserRouter>
  );
};

export default App
