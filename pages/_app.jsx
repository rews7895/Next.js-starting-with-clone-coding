/*
 * _app : 모든 페이지의 공통 페이지 역할을 한다. 
 * 1. 페이지들의 공통도니 레이아웃
 * 2. 페이지를 탐색할 때 상태 유지
 * 3. 추가 데이터를 페이지에 주입
 * 4. 글로벌 css 추가
 */
import '../styles/globals.css'
import Header from '../components/Header'

 const MyApp = ({ Component, pageProps }) => {
     return (
         <>
            <Header/>
            <Component {...pageProps}/>
            <style jsx global>
                {`
                    body {
                        margin: 0;
                        font-family: Noto Sans, Noto Sans KR;
                    }
                `}
            </style>
         </>
     )
 }

 export default MyApp