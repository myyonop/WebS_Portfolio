// app/page.tsx

import React, { Suspense } from 'react';
// AuthViews 컴포넌트가 있는 경로로 수정하세요.
import { AuthViews } from '@/components/AuthViews'; 

export default function Home() {
    return (
        <div className="min-h-100 flex flex-col items-center justify-center bg-gray-50 mt-20">
            <Suspense fallback={
                // Clerk 인증 및 AuthViews 로딩 중 보여줄 UI
                <div className="text-center">
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 animate-pulse">
                        Portfolio 로딩 중...
                    </h1>
                </div>
            }>
                <AuthViews />
            </Suspense>
        </div>
    );
}