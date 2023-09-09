export function TwitterCard({children})
{
    return(
        <section className="bg-gray-900 p-6 max-sm:w-screen flex flex-col gap-5 rounded-xl">
            <header className=" text-gray-50">
                <h1 className="text-3xl font-black">A quién seguir</h1>
            </header>

            <article className="flex flex-col gap-3 ">
                {children}
            </article>
        </section>
    )
}