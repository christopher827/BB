import React from "react";
import {
  DesktopComputerIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ChartBarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  EmojiHappyIcon,
  FireIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Free Membership Registration to Project Blue Bin ",
    description:
      "Participating schools will automatically be registered on to our School’s  portal and given login details",
    icon: LightningBoltIcon,
  },
  {
    name: "Certificate of Recognition",
    description:
      "Participating schools will receive a Certificate of Recognition as Recycling  Ambassadors and a beautiful brightly coloured Ambassadors sticker for their school gate.",
    icon: GlobeAltIcon,
  },
  {
    name: "Free Curriculum to get your recycling club started",
    description:
      "Pupils / students will learn about the importance of waste reduction and  proper waste disposal practices through access to our International Standard Curriculum which can be used to establish a  Recycling Club and generate additional income for your school.",
    icon: ChartBarIcon,
  },
  {
    name: "Win Fantastic Prizes",
    description:
      "Your school will have the opportunity to win fantastic prizes such as laptops and tablets worth over N1,000,000 in our annual School’s Recycling Competition.",
    icon: DesktopComputerIcon,
  },
  {
    name: "Free Interactive Educational Games",
    description:
      "Exciting games online across all themes regarding recycling, our environment and waste management for students, teachers and parents too!",
    icon: UserGroupIcon,
  },
  {
    name: "Free DIY School Beautification Ideas",
    description:
      "Instant access to our Academy’s portal where you can access low cost DIY School Beautification ideas using recycled materials,  educational resources, and interactive games for students.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Free Recyclable Waste Pick Up",
    description:
      "Periodically, your school’s recyclable waste will be collected free of charge!",
    icon: EmojiHappyIcon,
  },
  {
    name: "GitHub Trophies",
    description:
      "Got any trophies/medals but oops! how can you show them on your profile? Don't worry, GitHub Trophies are the virtual trophies for you. Showcase them by adding it to your profile.",
    icon: FireIcon,
  },
];
function Features() {
  return (
    <div className="py-[4rem] bg-[#a8c8ff25] pb-[4rem] px-6 lg:px-36 ">
      <div className="">
        <div className="lg:text-center">
          <p className="mt-2 text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold ">
            Every School Benefits!{" "}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative bg-white shadow-[10px_32px_71px_1px_rgba(0,0,0,0.02)] px-6 py-4 rounded-md">
                <dt className=" flex items-center gap-x-2">
                  <div className="flex items-center justify-center h-[2.5rem] w-[2.5rem] rounded-md text-white bg-[#4483f3]">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className=" sm:text-lg text-base leading-6 font-medium  ">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 text-sm sm:text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>


      </div>
    </div>
  );
}

export default Features;
