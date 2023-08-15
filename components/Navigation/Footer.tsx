import siteConfig from "@/config/site";
import PaddingContainer from "../Layout/Padding-container";
import Link from "next/link";
import { SocialLink } from "../Elements/SocialLink";

export function Footer() {
  return (
    <div className="py-6 mt-10 border-t">
      <PaddingContainer>
        <div>
          <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
          <p className="max-w-md mt-2 text-neutral-700 text-lg">{siteConfig.description}</p>
          <div className="flex flex-wrap justify-between gap-4 mt-6">
            <div>
              <div className="text-lg font-medium">#exploretheworld</div>
              <div className="flex items-center gap-3 mt-2 text-neutral-600">
                <SocialLink platform="twitter" link={siteConfig.socialLinks.twitter} />
                <SocialLink platform="instagram" link={siteConfig.socialLinks.instagram} />
                <SocialLink platform="github" link={siteConfig.socialLinks.github} />
                <SocialLink platform="youtube" link={siteConfig.socialLinks.youtube} />
                <SocialLink platform="linkedin" link={siteConfig.socialLinks.linkedin} />
              </div>
            </div>
            <div>
              <div className="text-sm text-neutral-400">
                currently At
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-md shadow-md">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
                {siteConfig.currentlyAt}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 mt-16 border-t">
          <div className="text-sm text-neutral-400">
            All rights are reserved | Copyright {new Date().getFullYear()}
          </div>
          <div className="text-sm">
            Made with love by
            <Link
              className="underline underline-offset-4"
              href="https://github.com/frontendanatolii"
            >
              @anatoliipetras
            </Link>
          </div>
        </div>
      </PaddingContainer>    
    </div>
  )
}