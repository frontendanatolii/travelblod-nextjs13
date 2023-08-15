import { Facebook, Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

interface Props {
  platform: string,
  link: string,
  isShareLink?: boolean
}

export function SocialLink({ platform, link, isShareLink }: Props) {
  const getIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <Facebook size="18" />;
      case "twitter":
        return <Twitter size="18" />;
      case "instagram":
        return <Instagram size="18" />;
      case "youtube":
        return <Youtube size="18" />;
      case "linkedin":
        return <Linkedin size="18" />;
      case "github":
        return <Github size="18" />;
    }
  };

  return (
    <Link href={link}>
      <div className={`${
          isShareLink
            ? "py-2 px-3 w-full bg-neutral-200 rounded-md text-neutral-600 hover:bg-neutral-600 hover:text-neutral-100 duration-100 ease-in-out transition-colors"
            : ""
        }`}
      >
        {getIcon(platform)}
      </div>
    </Link>
  )
}