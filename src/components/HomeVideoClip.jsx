import React from 'react'

function HomeVideoClip() {
    const videoUrl="../assets/LawmaVideo.mp4"
  return (
<div className=" mx-auto flex flex-col items-center py-12 sm:py-24">
<div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
<iframe src="https://www.youtube.com/embed/2ASfj53wqxw" title="YouTube video player" class="w-11/12 sm:w-10/12 md:w-8/12 xl:w-6/12 aspect-[560/315] rounded-xl overflow-hidden" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0"></iframe>
</div>
</div>
    )
}

export default HomeVideoClip
