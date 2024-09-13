import Card from "./Card"

export default function Experience() {

    const expr = [

        {
            position: "sde intern",
            company: "marketyfyall",
            date: "Nov-24 - Dec-24",
            points: [
                "ascwcwefefrdfvedvrebverbverb",
                "erdferdververfbverfb",
                "erdvevrfvrbferrtbbhrtbnrtfb"
            ]
        },
        {
            position: "sde intern",
            company: "marketyfyall",
            date: "Nov-24 - Dec-24",
            points: [
                "ascwcwefefrdfvedvrebverbverb",
                "erdferdververfbverfb",
                "erdvevrfvrbferrtbbhrtbnrtfb"
            ]
        }

    ]



    return (
        <div className="flex text-white  flex-col gap-5 items-center p-5 bg-gradient-to-br w-full from-orange-700 to-purple-700 " >
            {/* <h1 className="text-5xl" >Experience</h1> */}
            <ul className="sm:w-3/5 flex flex-col gap-5 " >
                {expr.map( ele => <Card key={Math.random()} data={ele} /> )}
            </ul>

        </div>
    )
}
