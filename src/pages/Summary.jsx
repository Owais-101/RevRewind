import React, { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import Audio from '../components/Audio';
import yay from '../assets/audio/yay.mp3';
import ride from '../assets/images/ride.png';

const Summary = () => {
  const [pieces, setPieces] = useState(300);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const timer = setTimeout(() => setPieces(0), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Audio summaryAudio={yay} />
      <Confetti numberOfPieces={pieces} width={width} height={height} />

      <div className="min-h-screen w-full flex flex-col items-center justify-between bg-bg-primary px-3 sm:px-4 md:px-6 lg:px-8 py-6 md:py-8 overflow-hidden">
        {/* HEADING */}
        <div className="flex flex-col items-center text-center w-full max-w-5xl">
          <h2 className="font-sans font-bold uppercase tracking-wide text-xs sm:text-sm md:text-base lg:text-xl text-white">
            your 2025 rewind
          </h2>
          <h1 className="font-bebas mt-1 sm:mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-shadow-3d text-text-primary leading-tight">
            congratulations
          </h1>
          <p className="font-bebas mt-2 sm:mt-3 md:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-shadow-3d text-text-primary">
            summary
          </p>
        </div>

        {/* CARD */}
        <div className="mt-6 md:mt-8 w-full max-w-6xl lg:max-w-7xl flex flex-col md:flex-row border-2 border-black shadow-[6px_6px_0px_0px_#000000] md:shadow-[8px_8px_0px_0px_#000000] overflow-hidden rounded-lg bg-black/30 backdrop-blur-sm flex-1">
          {/* IMAGE */}
          <div className="w-full md:w-2/5 lg:w-5/12 h-64 sm:h-80 md:h-auto relative shrink-0 overflow-hidden">
            <img
              src={ride}
              alt="rider"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.7)]" />
          </div>

          {/* CONTENT */}
          <div className="w-full md:w-3/5 lg:w-7/12 flex flex-col justify-center gap-5 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10 overflow-hidden">
            {[
              [
                { label: 'Name', value: 'Owais' },
                { label: 'Age', value: '25', align: 'text-right' },
              ],
              [
                { label: 'Nickname', value: '42 fj' },
                { label: 'Brand', value: 'Harley Davidson', align: 'text-right' },
              ],
              [
                { label: 'Total km', value: '2000km' },
                { label: 'Longest', value: '1000km', align: 'text-right' },
              ],
              [
                { label: 'Fav ride', value: '42 fj' },
                { label: 'Hard ride', value: 'Harley Davidson', align: 'text-right' },
              ],
              [
                { label: 'The word', value: 'fabulous' },
                { label: 'Fav location', value: 'hero', align: 'text-right' },
              ],
            ].map((pair, index) => (
              <div
                key={index}
                className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 min-w-0"
              >
                <div className="min-w-0">
                  <h3 className="font-sans font-medium uppercase text-[10px] sm:text-xs md:text-sm lg:text-base text-white/90 tracking-wider truncate">
                    {pair[0].label}
                  </h3>
                  <p className="font-bebas text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-shadow-3d text-text-primary mt-0.5 sm:mt-1 truncate">
                    {pair[0].value}
                  </p>
                </div>

                <div className={`min-w-0 ${pair[1].align || ''}`}>
                  <h3 className="font-sans font-medium uppercase text-[10px] sm:text-xs md:text-sm lg:text-base text-white/90 tracking-wider truncate">
                    {pair[1].label}
                  </h3>
                  <p className="font-bebas text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-shadow-3d text-text-primary mt-0.5 sm:mt-1 truncate">
                    {pair[1].value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-8 md:h-12" />
      </div>
    </>
  );
};

export default Summary;