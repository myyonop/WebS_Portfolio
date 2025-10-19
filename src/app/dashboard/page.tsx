import { auth, currentUser } from '@clerk/nextjs/server'

export default async function DashboardPage() {
    const { isAuthenticated } = await auth()

    // 로그인 전
    if (!isAuthenticated) {
        return <div>로그인 후 사용 가능한 페이지입니다.</div>
    }

    // 로그인 후
    const user = await currentUser()

    // 닉네임 가져오기
    const nickname = (user?.username as string) || user?.fullName || '사용자'
    return (
        <div>
            <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
            <div className="mb-5">
                <p>접속을 환영합니다, {nickname}!</p>
            </div>
        </div>
    )
}