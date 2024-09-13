export default function About() {
  return (
    <div className="p-7 text-white font-serif font-semibold flex flex-col gap-2 items-center justify-around  sm:h-screen bg-gradient-to-tr from-orange-700 to-purple-700" >
        {/* <h1 className="text-6xl" >ABOUT</h1> */}
        <div className="flex flex-col sm:text-lg sm:justify-center  sm:flex-row sm:gap-16  gap-3 items-center">
            <img className="w-3/5  sm:w-3/12  rounded-full " src="https://portfolio-sahil18.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpr-d.731b8bd4.jpeg&w=1200&q=75" alt="Profile" />
            <p className="sm:w-2/4  " >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>
  )
}
