import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Link2, ArrowRight } from "lucide-react";

export default function CustomBento() {
  const images = [
    {
      id: 1,
      src: "/pc1.gif",
      alt: "Foggy house on a lake",
      author: "njorthbjorn",
      likes: 905,
      comments: 327,
      views: 93,
      tips: 48,
      awards: 22,
      size: "large",
    },
    {
      id: 2,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-miyAC6qHgw4FK6yjF1bHEmekDpY1QU.png",
      alt: "Pikachu with a soda",
      author: "HaiSenHI",
      likes: 598,
      comments: 225,
      views: 150,
      tips: 36,
      awards: 179,
      size: "medium",
    },
    {
      id: 3,
      src: "/pc2.gif",

      alt: "Ship in a stormy sea",
      author: "Crimson Intellect",
      likes: 221,
      comments: 90,
      views: 4,
      tips: 3,
      awards: 158,
      size: "small",
    },
    {
      id: 4,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-miyAC6qHgw4FK6yjF1bHEmekDpY1QU.png",
      alt: "Fantasy landscape",
      author: "DreamWeaver",
      likes: 1024,
      comments: 156,
      views: 789,
      tips: 42,
      awards: 31,
      size: "wide",
    },
    {
      id: 4,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-miyAC6qHgw4FK6yjF1bHEmekDpY1QU.png",
      alt: "Fantasy landscape",
      author: "DreamWeaver",
      likes: 1024,
      comments: 156,
      views: 789,
      tips: 42,
      awards: 31,
      size: "wide",
    },
    // {
    //   id: 5,
    //   src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-miyAC6qHgw4FK6yjF1bHEmekDpY1QU.png",
    //   alt: "Futuristic cityscape",
    //   author: "NeonDreamer",
    //   likes: 876,
    //   comments: 234,
    //   views: 567,
    //   tips: 89,
    //   awards: 45,
    //   size: "tall",
    // },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      <main className="container mx-auto px-52 py-8 mb-16">
        <h2 className="text-5xl text-center font-bold mb-4">
          Featured Components
        </h2>
        <p className="mb-6 text-gray-400 text-center">
          All sorts of cool components created by our community, from simple to
          detailed and complex components.{" "}
          <span className="text-zinc-200 font-bold">
            Your ultimate AI components library.
          </span>
        </p>
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
          {images.map((image) => (
            <Card
              key={image.id}
              className={`bg-zinc-800 border-zinc-700 max-h-[20rem] overflow-hidden ${
                image.size === "large"
                  ? "sm:col-span-2 sm:row-span-1"
                  : image.size === "wide"
                  ? "sm:col-span-2"
                  : image.size === "tall"
                  ? "row-span-2"
                  : image.size === "medium"
                  ? "sm:col-span-1 sm:row-span-1"
                  : ""
              }`}
            >
              <CardContent className="p-3 relative h-full">
                <div className="">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={` h-[15rem] rounded-lg object-cover ${
                      image.size === "large" && "w-[30rem]"
                    }`}
                  />
                  w-[15rem]
                </div>
                {/* <div className="text-4xl my-4 shadow-yellow-300  text-zinc-300 font-semibold">
                  Dynamic Components
                </div>
                <p className="text-zinc-200">
                  Explore our collection of beautiful, responsive, and
                  customizable UI components. Perfect for building modern web
                  applications with ease.
                </p> */}
                <Button className="w-5/6 ml-2 m-5 flex justify-center items-center absolute bottom-0 bg-white text-zinc-800 font-bold">
                  View Component
                </Button>
                {/* <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-ful rounded-lg object-cover"
                />
                Bitch*/}
                {/* <Card className="w-full max-w-md mx-auto overflow-hidden">
                  <div className="relative aspect-video">
                    <img
                      alt="Animated component preview"
                      className="object-cover w-full h-full"
                      src="/placeholder.svg?height=300&width=400"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                      Dynamic Components
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Explore our collection of beautiful, responsive, and
                      customizable UI components. Perfect for building modern
                      web applications with ease.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      View Components
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card> */}
              </CardContent>
              <CardFooter className="flex flex-col p-4">
                <div className="flex justify-between items-center w-full mb-3">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>{image.author[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-lg font-bold text-white">
                      {image.author}
                    </span>
                  </div>
                  <Button size="icon" variant="ghost" className="text-gray-400">
                    <MoreHorizontal className="w-6 h-6" />
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-base text-gray-300">
                  <span className="flex items-center">👍 {image.likes}</span>
                  <span className="flex items-center">❤️ {image.comments}</span>
                  <span className="flex items-center">👁️ {image.views}</span>
                  <span className="flex items-center">🍪 {image.tips}</span>
                  <span className="flex items-center">🏆 {image.awards}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <footer className="fixed bottom-0 left-0 right-0 bg-zinc-800 text-white py-2 px-6 text-xs font-bold">
        <div className="container mx-auto flex justify-between items-center">
          <div>© Empire 2024</div>
          <div className="flex space-x-4">
            <Button
              variant="link"
              size="sm"
              className="text-white hover:text-gray-300 p-0 text-xs font-bold"
            >
              Creators
            </Button>
            <Button
              variant="link"
              size="sm"
              className="text-white hover:text-gray-300 p-0 text-xs font-bold"
            >
              Terms of Service
            </Button>
            <Button
              variant="link"
              size="sm"
              className="text-white hover:text-gray-300 p-0 text-xs font-bold"
            >
              Privacy
            </Button>
            <Button
              variant="link"
              size="sm"
              className="text-white hover:text-gray-300 p-0 text-xs font-bold"
            >
              Safety
            </Button>
            <Button
              variant="link"
              size="sm"
              className="text-white hover:text-gray-300 p-0 text-xs font-bold"
            >
              Newsroom
            </Button>
            <Button
              variant="link"
              size="sm"
              className="text-white hover:text-gray-300 p-0 text-xs font-bold"
            >
              API
            </Button>
            <Button
              variant="link"
              size="sm"
              className="text-white hover:text-gray-300 p-0 text-xs font-bold"
            >
              Status
            </Button>
            <Button
              variant="link"
              size="sm"
              className="text-white hover:text-gray-300 p-0 text-xs font-bold"
            >
              Wiki
            </Button>
            <Button
              variant="link"
              size="sm"
              className="text-white hover:text-gray-300 p-0 text-xs font-bold"
            >
              Education
            </Button>
            <Button
              variant="link"
              size="sm"
              className="text-white hover:text-gray-300 p-0 text-xs font-bold"
            >
              Residency
            </Button>
          </div>
          <div className="flex space-x-2">
            {["A", "F", "O", "R", "A", "I"].map((icon) => (
              <Button
                key={icon}
                size="icon"
                variant="ghost"
                className="w-6 h-6 p-0"
              >
                <span className="text-xs">{icon[0]}</span>
              </Button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
