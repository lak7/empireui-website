"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  let pathname = usePathname();
  return (
    <>
      <header
        className={cn(
          "sticky top-1 z-50 w-full px-8 text-white",
          pathname?.includes("/docs")
            ? "-mb-12 bg-black  text-white backdrop-blur lg:backdrop-blur-xl dark:bg-white"
            : "-mb-14"
        )}
      >
        {/* <header className="sticky top-0 z-50 w-full -mb-12  lg:backdrop-blur-xl backdrop-filter bg-gradientTopRightLightHeaderSm/70  md:bg-gradientTopRightLightHeader  backdrop-blur supports-[backdrop-filter]:bg-background/60 "> */}
        <div className="container flex h-14 max-w-screen-2xl items-center ">
          <MainNav />
          <MobileNav />
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            {!pathname?.includes("/docs") ? (
              <div className="hidden lg:block lg:w-full"></div>
            ) : null}
            <nav className="flex items-center ">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "w-9 px-0"
                  )}
                >
                  <Icons.gitHub className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "w-9 px-0"
                  )}
                >
                  <Icons.twitter className="h-3 w-3 fill-current" />
                  <span className="sr-only">Twitter</span>
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      {/* <div className="animate-slide-up fixed inset-x-1/2 top-0 z-50 md:absolute">
        <div className=" flex w-full flex-col items-center justify-center">
          <DistortedGlass></DistortedGlass>
        </div>
      </div> */}
    </>
  );
}
