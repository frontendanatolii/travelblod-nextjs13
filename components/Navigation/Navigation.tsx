import Link from "next/link";
import PaddingContainer from "../Layout/Padding-container";

export function MainNavigation() {
  return (
    <div className="border-b sticky top-0 left-0 right-0 bg-white bg-opacity-50 backdrop-blur-md z-30">
      <PaddingContainer>
        <div className="py-6 flex items-center justify-between">
          <Link href='/' className="text-lg font-bold">Explore</Link>
          <nav>
            <ul className="flex items-center gap-4 text-neutral-600">
              <li>
                <Link href='/cities'>Cities</Link>
              </li>
              <li>
                <Link href='/experiences'>Experiences</Link>
              </li>
            </ul>
          </nav>
        </div>
      </PaddingContainer>
    </div>
  )
}