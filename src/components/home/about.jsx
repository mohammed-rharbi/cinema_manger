import React from 'react'

export default function About() {
  return (


    <section class="py-24 bg-gray-900 text-white relative xl:mr-0 lg:mr-5 mr-0">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                    <div class="w-full flex-col justify-center items-start gap-8 flex">
                        <div class="flex-col justify-start lg:items-start items-center gap-4 flex">
                            <h6 class="text-gray-300 text-base font-normal leading-relaxed">About Us</h6>
                            <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <h2
                                    class="text-red-500 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                    The Tale of Our Achievement Story</h2>
                                <p
                                    class="font-normal leading-relaxed lg:text-start text-center">
                                    Our achievement story is a testament to teamwork and perseverance. Together, we've
                                    overcome challenges, celebrated victories, and created a narrative of progress and
                                    success.</p>
                            </div>
                        </div>
                        <div class="w-full flex-col justify-center items-start gap-6 flex">
                            <div class="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                <div
                                    class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                    <h4 class="text-2xl font-bold font-manrope leading-9">5+ Years</h4>
                                    <p class="text-gray-300 text-base font-normal leading-relaxed">Influencing Digital
                                        Landscapes Together</p>
                                </div>
                                <div
                                    class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                    <h4 class="text-2xl font-bold font-manrope leading-9">125+ Movies
                                    </h4>
                                    <p class="text-gray-300 text-base font-normal leading-relaxed">Excellence Achieved Through Success</p>
                                </div>
                            </div>
                            <div class="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                <div
                                    class="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                    <h4 class="text-2xl font-bold font-manrope leading-9">16+ Awards</h4>
                                    <p class="text-gray-300 text-base font-normal leading-relaxed">Our Dedication to
                                        Innovation Wins Understanding</p>
                                </div>
                                <div
                                    class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                    <h4 class=" text-2xl font-bold font-manrope leading-9">99% Happy
                                        Clients</h4>
                                    <p class="text-gray-300 text-base font-normal leading-relaxed">Mirrors our Focus on
                                        Client Satisfaction.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        class="sm:w-fit w-full group px-3.5 py-2 bg-red-500 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                        <span class="px-1.5 text-gray-900 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">Read More</span>
                        <svg class="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" stroke-width="1.6"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <div class="w-full lg:justify-start justify-center items-start flex">
                    <div
                        class="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-red-500 rounded-3xl sm:border border-gray-200 relative">
                        <img class="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                            src="./public/images/us.webp" alt="about Us image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
                                            
  )
}
