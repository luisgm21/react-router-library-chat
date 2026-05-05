import { Suspense , lazy } from "react"
// Spinner con Tailwind CSS
const Spinner = () => (
  <div className="flex flex-col items-center justify-center min-h-[200px]">
    <div className="w-14 h-14 border-8 border-muted border-t-primary rounded-full animate-spin" />
    <div className="mt-4 text-muted-foreground text-base font-medium">Cargando...</div>
  </div>
);
import { BrowserRouter, Routes, Route, Navigate } from "react-router"

import { AuthLayout } from "./auth/layout/AuthLayout"
import { LoginPage } from "./auth/pages/LoginPage"
import { RegisterPage } from "./auth/pages/RegisterPage"

// import ChatLayout from "./chat/layout/ChatLayout"
const ChatLayout = lazy(async () => {
    await sleep(1500) 
    return import("./chat/layout/ChatLayout")})
// import ChatPage from "./chat/pages/ChatPage"

const ChatPage = lazy(async () => {
    return import("./chat/pages/ChatPage")})

    import { sleep } from "./lib/sleep"



export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<AuthLayout />}>
                    <Route index element={<LoginPage />} />
                    <Route path="/auth/register" element={<RegisterPage />} />
                </Route>
                <Route path="/chat" element={
                    <Suspense fallback={<Spinner />}>
                        <ChatLayout />
                    </Suspense>
                } >
                    <Route index element={<ChatPage />} />
                </Route>
                
                
                <Route path="/" element={<Navigate to="/auth" />} />
                <Route path="*" element={<Navigate to="/auth" />} /> 
            </Routes>
        </BrowserRouter>
    )
}