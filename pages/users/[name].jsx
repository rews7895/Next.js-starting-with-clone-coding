import fetch from 'isomorphic-unfetch'

const name = ({user}) => {
    const username = user && user.name
    return <div>{username}</div>
}

export const getServerSideProps = async ({query}) => {
    const {name} = query

    try {
        const res = await fetch(`https://api.github.com/users/${name}`)
        if(res.status === 200) {
            const user = await res.json()
            // 서버사이드 렌더이기 때문에 콘솔에서만 출력이 된다
            console.log(user)
            return {props: {user}}
        }
        return {props: {}}
    } catch(e) {
        console.log(e)
        return {props: {}}
    }
}

export default name
