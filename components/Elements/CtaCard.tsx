import Image from "next/image";

export function CtaCard() {
  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Thank you for subscribe our travel')
  }

  return (
    <div className="px-6 py-10 rounded-md bg-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/95 via-white/70 to-white/30" />
      <Image
        fill
        alt="CTA Card Image"
        className="object-cover object-center"
        src="https://images.unsplash.com/photo-1672600830594-ae4ccc159578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1263&q=80"
      />
      <div className="relative z-20">
        <div className="text-lg font-medium">#exploretheworld</div>
        <h3 className="mt-3 text-4xl font-semibold">Explore the world with me!</h3>
        <p className="max-w-lg mt-2 text-lg">
          Explore the world with me! Bla bla bla bla bla
          bla bla bla bal alblala alasl aslassf aslassf
          asgk kefek asj
        </p>
        <form
          className="flex items-center w-full gap-2 mt-6"
          onSubmit={onSubmit}
        >
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 text-base rounded-md outline-none md:w-auto placeholder:text-sm bg-white/80 focus:ring-2 ring-neutral-600"
          />
          <button
            type="submit"
            className="px-3 py-2 rounded-md whitespace-nowrap bg-neutral-900 text-neutral-200"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  )
}