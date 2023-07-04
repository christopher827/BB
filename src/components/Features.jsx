import React from 'react'
import {DesktopComputerIcon,GlobeAltIcon,LightningBoltIcon,ChartBarIcon,UserGroupIcon,CurrencyDollarIcon,EmojiHappyIcon,FireIcon,} from "@heroicons/react/outline";

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
<div className="py-2 bg-green-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:text-center">
<p className="mt-2 text-3xl leading-8 font-bold  sm:text-4xl text-blue-600">Every School Benefits! </p>
        </div>

<div className="mt-10">
<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
{features.map((feature) => (
<div key={feature.name} className="relative">
  <dt>
<div className="absolute flex items-center justify-center h-12 w-12 rounded-md  text-zinc-800">
<feature.icon className="h-6 w-6" aria-hidden="true" />
 </div>
<p className="ml-16 text-lg leading-6 font-medium text-blue-600 ">
 {feature.name}
 </p>
      </dt>
<dd className="mt-2 ml-16 text-base text-gray-500">
  {feature.description}
</dd>
 </div>
 ))}
</dl>
</div>
</div>
</div>  )
}

export default Features
