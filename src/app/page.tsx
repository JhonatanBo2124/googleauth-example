'use client'

import { GoogleOAuthProvider } from '@react-oauth/google'
import Login from './components/Login'

export default function Home() {
  return (
    <GoogleOAuthProvider clientId='830167185295-o5s3b8hnjae0gk3f69ga3kbbipav0dfg.apps.googleusercontent.com'>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col gap-20 items-center">
          <h1 className='font-bold text-6xl'>Google Oauth</h1>
          <Login/>
        </div>
      </main>
    </GoogleOAuthProvider>
  )
}
