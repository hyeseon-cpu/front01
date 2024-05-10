import Post  from './compo/Post'
//import info from './assets/mymind.json' // 기존 파일은 이제 API로 외부에서 가져올거라 주석처리
import React, { useState, useEffect } from 'react'; //리액트에서 무언가 가져옴 [REACT]
import './App.css'


function App() {
  // 데이터를 저장할 상태 변수 [REACT]
  const [info, setData] = useState(null);

  useEffect(() => {
    fetch('https://mutsafeapi.jeje.work/mutsa/Introduction')
        .then(response => {
            if (response.ok) {
                console.log(response)
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(jsonData => { 
            setData(jsonData);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
  }, []);

  console.log(info) //처리된 응답을 한번 확인한다.
  return (
    <>
      {info ? info.map((post, index) => (
        <Post
          key={index} // 고유한 key 사용을 권장 (예: post의 고유 ID)
          src={post.src}
          article={post.article}
          like={post.like}
          commentCnt={post.comment ? post.comment.length : 0}
        />
      )) : <p>Loading...</p>}
    </>
  );
}

export default App