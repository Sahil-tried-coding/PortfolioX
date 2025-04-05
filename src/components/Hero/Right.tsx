import React from 'react'
import { Card } from '../ui/card'
import TiltedCard from '../ui/TIltedCard'

const Right = () => {
  return (
    <div className="relative  lg:h-[600px] flex items-center justify-center font-semibold mr-20 sm:mr-0">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />

                <TiltedCard
                clas

  rotateAmplitude={12}
  scaleOnHover={1.08}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    
                <Card className="relative bg-black/50 border-white/10 p-16 backdrop-blur-xl">
                  <code className="text-sm font-mono space-y-4 block animate-pulse">
                    <p className="text-purple-400">const</p>
                    <p className="pl-4">
                      <span className="text-pink-400">developer</span> <span className='text-white'> = {"{"}</span>
                    </p>
                    <p className="pl-8 text-white whitespace-nowrap">
                      name:{" "}
                      <span className="text-green-400">
                        &apos;SAHIL SHAIKH&apos;
                      </span>
                      ,
                    </p>
                    <p className="pl-8 text-white whitespace-nowrap">
                      degree:{" "}
                      <span className="text-orange-400">
                        &apos;Computer Science&apos;
                      </span>
                      ,
                    </p>
                    <p className="pl-8 text-white whitespace-nowrap">
                      skills: [
                      <span className="text-yellow-400">&apos;Web&apos;</span>,{" "}
                      <span className="text-yellow-400">&apos;UI/UX&apos;</span>
                      {/* ,{" "}
                      <span className="text-yellow-400">
                        &apos;Mobile&apos;
                      </span> */}
                      ],
                    </p>
                    <p className="pl-8 text-white whitespace-nowrap">
                      isAvailable: <span className="text-blue-400">true</span>
                    </p>
                    <p className="pl-4 text-white">{"}"}</p>
                  </code>
                </Card>
                }
                />
                {/* </TiltedCard> */}
              </div>
  )
}

export default Right