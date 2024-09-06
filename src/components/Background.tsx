import { ReactNode } from "react"

function Background({ children }: { children: ReactNode }) {
    return (
        <div className="relative w-full h-full min-h-screen">
            {/* <div className="absolute inset-0 bg-gradient-to-bl from-[#1b0854] to-[#754ee7]" /> */}
            <div className="absolute inset-0 bg-gradient-to-bl  from-[#1b0854] to-blue-500" />

            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+CiAgPHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')]" >
            <div className="relative z-10">
                {children}
            </div>
            </div>
        </div>
    )
}

export default Background