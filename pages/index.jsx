/*
 * router
 * 1. 라우터 객체 안에 push, replace, back등의 함수를 이용하여 주소를 이동할 수 있습니다.
 * 2. 'pages'폴더를 사용하여 정적 페이지와 동적 페이지의 라우팅 설정
 * 3. Link 컴포넌트와 라우터 객체를 이용하여 주소 이동을 할 수 있음.
 * 
 * 정적 파일
 * 1. 루트 경로의 /public에서 정적 파일을 제공
 */
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

const App = () => {
    const [name, setName] = useState('')
    const router = useRouter()

    return (
        <div>
            <img src="/yoona.png" alt="윤아"/>
            <h2>Link to 'tomato' Page</h2>
            <Link href="/tomato">
                <a>Move to '/tomato'</a>
            </Link>
            <br/>
            <Link href='/vegetable/potato'>
                <a>Move to '/vegetable/potato'</a>
            </Link>
            <button type='button' onclick={() => router.push('/tomato')}>
                tomato로 가기
            </button>
            <p>이름</p>
            <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{marginRight: '12px'}}
            />
            <button 
                type='button' 
                onClick={() => router.push(`/vegetable/${name}`)}
            >
                {name}으로 가기
            </button>
        </div>
    )
}

export default App