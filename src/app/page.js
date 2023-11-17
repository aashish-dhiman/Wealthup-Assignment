import Image from "next/image";
import { TfiCheckBox } from "react-icons/tfi";
import Button from "@/components/Button";
import Checkboxes from "@/components/Checkboxes";

export default function Home() {
    return (
        <main className="flex items-center justify-center w-full min-h-screen py-5">
            {/* Main Container */}
            <div className="relative overflow-hidden w-[700px] h-[650px]">
                <div className="bg-gradient-to-r from-[#0A5783] via-[#10768D] to-[#189E99] w-full h-[500px]">
                    {/* Content Container */}
                    <div className="px-10 py-6 flex flex-col items-center gap-2">
                        {/* Main Content */}
                        <div className="w-[80%] flex flex-col items-center gap-3">
                            <h1 className="text-white text-3xl font-bold">
                                Check your financial health
                            </h1>
                            <p className="text-center text-white text-xs font-extralight w-[60%] tracking-widest ">
                                Use WealthoMeter to get a free report card for
                                your finances- within minutes
                            </p>
                            {/* Get Started Button */}
                            <Button />
                        </div>

                        {/* Checkboxes Section */}
                        <div className="flex items-start justify-between text-white w-full relative">
                            {/* Left Checkboxes */}
                            <div className="flex flex-col items-start gap-3 pt-12">
                                {/* Checkbox Item 1 */}
                                <Checkboxes label="Expected Retirement Age" />
                                {/* Checkbox Item 2 */}
                                <Checkboxes label="Identify Mistakes" />
                            </div>

                            {/* Right Checkboxes */}
                            <div className="flex flex-col items-start gap-3 pt-12">
                                {/* Checkbox Item 3 */}
                                <Checkboxes label="Personalised Roadmap" />
                                {/* Checkbox Item 4 */}
                                <Checkboxes label="Tips To Improve" />
                            </div>
                        </div>

                        {/* Absolute Positioned Image */}
                        <div className="absolute bottom-[240px] left-[260px]">
                            <Image
                                src="/mobile.png"
                                width={250}
                                height={500}
                                alt="bg"
                            />
                        </div>
                    </div>
                </div>

                {/* Second Section with Wave Background */}
                <div className="-mt-[80px]">
                    <Image
                        src="/bg.png"
                        width={500}
                        height={400}
                        alt="bg"
                        className="absolute -bottom-[20px] left-0 w-full"
                    />
                    {/* Secondary Content */}
                    <div className="relative z-30 text-white flex flex-col items-center gap-5">
                        <h3 className="text-2xl font-bold">How it works?</h3>
                        {/* Steps Image */}
                        <div className="mx-auto">
                            <Image
                                src="/line.png"
                                width={400}
                                height={50}
                                alt="working"
                                className="-mt-[90px] ml-[10px]"
                            />
                            {/* Steps Section */}
                            <div className="flex items-center justify-between text-center gap-3 w-[110%] -ml-[10px] -mt-[80px] text-xs font-light tracking-wider">
                                <span className="w-[100px]">
                                    Answer few questions
                                </span>
                                <span className="w-[100px]">
                                    Register using phone and OTP
                                </span>
                                <span className="w-[120px]">
                                    Get report and personal roadmap
                                </span>
                            </div>
                        </div>
                        {/* Get Started Button */}
                        <Button />
                    </div>
                </div>
            </div>
        </main>
    );
}
