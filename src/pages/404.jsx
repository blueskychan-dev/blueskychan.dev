import Head from "next/head"

export default function notFoundPage() {
  return (
	<>
	  <Head>
		<title>404 Not Found ;-;</title>
	  </Head>
	  <main className="flex min-h-s creen items-center justify-center">
		<div className="backdrop-blur-md bg-[#2a154f]/50 rounded-lg p-3 max-w-md md:max-w-lg overflow-hidden overflow-ellipsis flex flex-col items-center justify-center">
		  <h1 className="text-lg font-bold text-red-500">404 Not Found :(</h1>
		  <p className="text-lg font-bold text-white">
			The page you're looking for is not found, Sorry ;-;
		  </p>
		</div>
	  </main>
	</>
  )
}