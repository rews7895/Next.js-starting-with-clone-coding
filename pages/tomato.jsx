/*
 * Link 컴포넌트
 * href: string 값으로 이동할 경로 또는 URL입니다.
 * as: string 값으로 브라우저의 URL에 표시될 값으로, Next 버전 9.5.3 이전에 동적 라우팅을 위하여 사용됩니다.
 * replace: boolean 값으로 브라우저의 history 스택에 url을 추가하지 않고 현재 상태를 변경합니다.
 * scroll: boolean 값으로 스크롤을 맨 위로 이동할지 설정하는 값입니다. 기본값을 true입니다.
 * shallow: boolean 값으로 서버에서 데이터를 불러오는 작업을 스킵할 때 사용합니다. 기본값은 false입니다.
 * passHref: boolean 값으로 자식에게 href를 전달하게 됩니다. 리액트 컴포넌트에 href를 전달할 수 있게 됩니다.
 * prefetch: boolean 값으로 백그라운드에서 페이지를 미리 가져오게 됩니다. 
 *           브라우저 화면의 Link 컴포넌트의 페이지들을 미리 가져오게 되며 기본값은 true입니다.
 */
import Link from 'next/link'

const Tomato = () => {
    return (
        <div>
            <h2>Link to 'main'</h2>
            <Link href="/">
                <a>Move to '/'</a>
            </Link>
        </div>
    )
}

export default Tomato