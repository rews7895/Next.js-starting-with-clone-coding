import fetch from 'isomorphic-unfetch'
import Profile from '../../components/Profile'

const name = ({user, repos}) => {
    if(!user) {
        return null;
    }
    return (
        <>
            <Profile user={user}/>
        </>
    )
}

// // getInitialProps: 서버 사이드 데이터 패치를 위해 사용되던 함수
// name.getInitialProps = async ({query}) => {
//     const {name} = query
//     try {
//         const res = await fetch(`https://api.github.com/users/${name}`)
//         if(res.status == 200) {
//             const user = await res.json()
//             return {props: {user}}
//         }
//         return {props: {user}}
//     } catch(e) {
//         console.log(e)
//         return {}
//     }
// }
// // getStaticProps : 빌드 시에 데이터를 불러와 결과를 json으로 저장하여 사용. -> 일관된 데이터를 보여주게 된다.
// export const getStaticProps = async ({params}) => {
//     try {
//         const res = await fetch(`https://api.github.com/users/${params.name}`)
//         const user = await res.json()
//         if(res.status === 200) {
//             const user = await res.json()
//             return {props: {user, time: new Date().toISOString()}}
//         }
//         return {props: {time: new Date().toISOString()}}
//     } catch(e) {
//         console.log(e)
//         return {props: {time: new Date().toISOString()}}
//     }
// }

// // getStaticPaths: 페이지의 경로가 외부 데이터에 의존할 때 사용된다.
// export async function getStaticPaths() {
//     return {
//         paths: [{params: {name: 'rews7895'}}],
//         // fallback이 false이면 이외의 경로는 404 error 페이지로 가게 된다.
//         fallback: true,
//     }
// }
// getServerSideProps : 페이지의 데이터를 서버로부터 제공받는 기능을 제공.
export const getServerSideProps = async ({query}) => {
    const {name} = query
    try {
        let user
        let repos

        const userRes = await fetch(`https://api.github.com/users/${name}`)
        if(userRes.status === 200) {
             user = await userRes.json()
        }
        const repoRes = await fetch(`https://api.github.com/users/${name}/repos?sort=updated&page=1&per_page=10`)
        if(repoRes.status === 200) {
             repos = await repoRes.json()
        }
        console.log(user)
        return {props: {user, repos}}
    } catch(e) {
        console.log(e)
        return {props: {}}
    }
}

export default name
