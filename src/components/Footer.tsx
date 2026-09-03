export default function Footer() {
    return (
        <footer className="">
            {/* ===================================================
            FOOTER
        =================================================== */}

        <div
          className=" w-full h-[5rem] flex items-center justify-between px-6 md:px-24 bg-[#030712] text-white border-t-3 border-gray-800">

          <span className="text-cyan-400 text-lg font-bold tracking-wide">
            &gt; KIRBY BENJ GUTIERREZ
          </span>

          <div className=" flex items-center gap-3">

            <span text-gray-400  className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Kirby Benj Gutierrez. All Rights Reserved.
            </span>

          </div>

        </div>
        </footer>
    );
}