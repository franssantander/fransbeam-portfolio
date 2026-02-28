export default function Hero() {
  return (
    <div className="w-full space-y-12">
      <div className="space-y-6 text-center lg:text-left">
        <div className="uppercase font-black text-5xl space-y-2 lg:text-7xl leading-[0.85]">
          <h1 className="text-neutral-400">Full-Stack</h1>
          <h1>Software Engineer</h1>
          <h1>& UI/UX Designer</h1>
        </div>
        <p className="text-neutral-500 text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          I specialize in building high quality application that applies good
          practices, principles, architecture and user-friendly web applications
          that deliver outstanding end user.
        </p>
      </div>

      <div className="h-[500px] bg-neutral-100 rounded-3xl flex items-center justify-center text-neutral-400">
        Work Experience / Portfolio Items
      </div>
      <div className="h-[500px] bg-neutral-50 rounded-3xl flex items-center justify-center text-neutral-400">
        Another Project Section
      </div>
    </div>
  );
}
