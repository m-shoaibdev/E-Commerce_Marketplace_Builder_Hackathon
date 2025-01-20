
export default function Contact() {
    return (
        <div className="lg:container lg:mx-auto px-4 lg:px-10 mt-10 md:mt-16 mb-6 md:mb-20">
            <div className="text-center">
            <h2 className="text-2xl md:text-5xl font-semibold mb-4">Get In Touch With Us</h2>
            <p className="text-mediumGray text-base md:w-1/2 md:mx-auto">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            <div className="flex flex-col md:flex-row-reverse gap-6 mt-10 mb-16">
                <div className="p-4 flex-1">
                    <div className="mb-4">
                        <label htmlFor="name" className="text-black text-base font-semibold">Your Name</label>
                        <input type="text" name="" id="name" placeholder="Your Name..." className="border border-gray-300 py-3 px-4 w-full rounded-lg mt-3" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="text-black text-base font-semibold">Email address</label>
                        <input type="text" name="" id="name" placeholder="Your Email address..." className="border border-gray-300 py-3 px-4 w-full rounded-lg mt-3" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="text-black text-base font-semibold">Subject</label>
                        <input type="text" name="" id="name" placeholder="This is an optional" className="border border-gray-300 py-3 px-4 w-full rounded-lg mt-3" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="text-black text-base font-semibold">Message</label>
                        <textarea name="" id="name" placeholder="Message..." className="border border-gray-300 py-3 px-4 w-full rounded-lg mt-3"></textarea>
                        
                    </div>
                    <div className="mb-4">
                        <button className="bg-primary text-white text-base md:text-lg py-2.5 md:py-3 px-4 md:px-6 rounded-lg outline-none focus:outline-none">Submit</button>
                    </div>
                </div>
                <div className="p-4 flex flex-col gap-12 mt-10">
                <div className="flex gap-4 md:w-80">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 md:size-16">
  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
</svg>
                    <div>
                        <div><h3 className="text-xl font-semibold">Address</h3>
                        <p>236 5th SE Avenue, New York NY10000, United States</p></div>
                    </div>
                </div>

                <div className="flex gap-4 md:w-80">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 md:size-16">
  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
</svg>
                    <div>
                        <div><h3 className="text-xl font-semibold">Phone</h3>
                        <p>236 5th SE Avenue, New York NY10000, United States</p></div>
                    </div>
                </div>
                <div className="flex gap-4 md:w-80">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 md:size-16">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
</svg>


                    <div>
                        <div><h3 className="text-2xl font-semibold">Working Time</h3>
                        <p className="font-medium text-lg">236 5th SE Avenue, New York NY10000, United States</p></div>
                    </div>
                </div>

                </div>
            
            </div>

            <div className="bg-lightGray p-6 flex flex-col md:flex-row gap-12 md:gap-8 pt-24 pb-20 justify-between">
            <div className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 md:size-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
</svg>

                    <div>
                        <div><h3 className="text-2xl font-semibold">High Quality
                        </h3>
                        <p className="font-medium text-xl text-mediumGray">crafted from top materials</p></div>
                    </div>
            </div>
            <div className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 md:size-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg>

                    <div>
                        <div><h3 className="text-2xl font-semibold">Warranty Protection</h3>
                        <p className="font-medium text-xl text-mediumGray">Over 2 years</p></div>
                    </div>
            </div>
            <div className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 md:size-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>



                    <div>
                        <div><h3 className="text-2xl font-semibold">24 / 7 Support</h3>
                        <p className="font-medium text-xl text-mediumGray">Dedicated support</p></div>
                    </div>
            </div>
            </div>
        </div>
    );
}