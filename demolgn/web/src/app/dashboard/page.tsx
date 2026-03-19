import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { User, Settings, LayoutDashboard, LogOut } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <header className="flex justify-between items-center pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <LayoutDashboard className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              대시보드
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">환영합니다! 성공적으로 로그인하셨습니다.</p>
          </div>
          <Link href="/">
            <Button variant="outline" className="flex items-center gap-2">
              <LogOut className="h-4 w-4" />
              로그아웃
            </Button>
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          <Card className="border-0 shadow-lg bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <User className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                사용자 프로필
              </CardTitle>
              <CardDescription>개인정보 및 요금제를 관리하세요.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                현재 기본 플랜을 이용 중입니다. <span className="font-semibold text-indigo-600 dark:text-indigo-400 cursor-pointer hover:underline">업그레이드</span>
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Settings className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                환경 설정
              </CardTitle>
              <CardDescription>알림 및 보안 설정을 수정합니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                마지막 로그인 날짜: 오늘
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
