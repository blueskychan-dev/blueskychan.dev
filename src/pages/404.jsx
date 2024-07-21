// Have center box like index.jsx but instead of showing profile, it will show 404 error message
import Head from "next/head"

export default function Custom404() {
    return (
        <>
        <Head>
            <title>404 Not Found</title>
        </Head>
        <main className="flex min-h-screen items-center justify-center">
            <div className="backdrop-blur-md bg-[#1b1327]/50 rounded-lg p-3 max-w-md md:max-w-lg overflow-hidden overflow-ellipsis">
            <h1 className="center text-lg font-bold text-red-500 center">404 Not Found :(</h1>
            <p className="text-lg font-bold text-white">The page you're looking for is not found, Sorry ;-;</p>
            </div>
        </main>
        </>
    )
    }
    