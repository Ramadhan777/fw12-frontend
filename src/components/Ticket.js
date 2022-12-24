import React from "react";
import logo from "../assets/images/tickitz 1.svg";

class Ticket extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="px-36 py-10 bg-[#E5E5E5]">
        <div className="bg-white pt-12 px-10 pb-20 text-center">
          <div className="text-2xl font-bold mb-5">Proof of Payment</div>

          <div className="overflow-x-auto">
            <div className="flex mx-10 border-2 border-[#DEDEDE] rounded-2xl min-w-[800px]">
              <div className="flex flex-col basis-8/12">
                <div className="h-15 w-full flex items-center bg-[#1b30cf] rounded-tl-2xl">
                  <div className="flex grow py-3 pl-10">
                    <img className="h-10 w-32" src={logo} alt="logo" />
                  </div>
                  <div className="text-lg text-white pr-10">Admit One</div>
                </div>

                <div className="p-10 text-start">
                  <div className="mb-5">
                    <div className="text-[#AAAAAA] text-sm mb-3">Movie</div>
                    <div className="text-[#14142B] font-bold">Spider-Man: Homecoming</div>
                  </div>

                  <div className="grid grid-cols-3 mb-5">
                    <div>
                      <div className="text-[#AAAAAA] text-sm mb-3">Date</div>
                      <div className="text-[#14142B] font-bold">07 July</div>
                    </div>
                    <div>
                      <div className="text-[#AAAAAA] text-sm mb-3">Time</div>
                      <div className="text-[#14142B] font-bold">02:00p.m</div>
                    </div>
                    <div>
                      <div className="text-[#AAAAAA] text-sm mb-3">Category</div>
                      <div className="text-[#14142B] font-bold">Action</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3">
                    <div>
                      <div className="text-[#AAAAAA] text-sm mb-3">Count</div>
                      <div className="text-[#14142B] font-bold">3 pieces</div>
                    </div>
                    <div>
                      <div className="text-[#AAAAAA] text-sm mb-3">Seats</div>
                      <div className="text-[#14142B] font-bold">C4, C5, C6</div>
                    </div>
                    <div>
                      <div className="text-[#AAAAAA] text-sm mb-3">Price</div>
                      <div className="text-[#14142B] font-bold text-2xl">$30.00</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col basis-4/12 border-dashed border-l-2 border-[#DEDEDE]">
                <div className="h-15 w-full flex justify-center bg-[#1b30cf] rounded-tr-2xl">
                  <div className="flex py-3">
                    <img className="h-10 w-32" src={logo} alt="logo" />
                  </div>
                </div>
                <div className="flex items-center justify-center h-full">
                  {this.props.QRcode ? (
                    <img src={this.props.QRcode} alt="" />
                  ) : (
                    <div className="py-20 px-10 text-center bg-[#F5F6F8]">
                      <div className="max-w-[120px] font-bold">{this.props.status}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ticket;
