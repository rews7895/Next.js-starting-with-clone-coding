/*
 * _document : 일반적으로 응용프로그램 <html> 및 <body>태그를 보강하는데 사용됨.
 *             도큐먼트를 이용하여 <title>,<description>,<meta>등 프로젝트의 정보를 제공하는 HTML코드를 작성할 수 있고, 폰트나 외부 api, cdn등을 불러오도록 할 수 있다.
 *             또한 CSS-in-JS의 서버사이드 렌더링을 위한 설정을 할 때 사용.
 */

 import Document, {Html, Head, Main, NextScript} from 'next/document'

 class MyDocument extends Document {
     render() {
         return (
             <Html lang='ko'>
                <Head>
                    <meta title='title' content='깃허브 레파지토리'/>
                    <meta title='description' content='깃허브 레파지토리 리스트입니다.'/>
                    <link href='https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=swap' rel='stylesheet'/>
                    <link href='https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap&subset=korean' rel='stylesheet'/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
             </Html>
         )
     }
 }

 export default MyDocument