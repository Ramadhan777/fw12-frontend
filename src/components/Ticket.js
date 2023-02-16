import React from "react";
import logo from "../assets/images/tickitz 1.svg";
import { format } from "fecha";

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
                    <div className="text-[#14142B] font-bold">{this.props.transaction.movieTitle || "-"}</div>
                  </div>

                  <div className="grid grid-cols-3 mb-5">
                    <div>
                      <div className="text-[#AAAAAA] text-sm mb-3">Date</div>
                      <div className="text-[#14142B] font-bold">{this.props.transaction?.bookingDate ? format(new Date(this.props.transaction?.bookingDate), "mediumDate") : "-"}</div>
                    </div>
                    <div>
                      <div className="text-[#AAAAAA] text-sm mb-3">Time</div>
                      <div className="text-[#14142B] font-bold">{this.props.transaction?.bookingTime || "-"}</div>
                    </div>
                    <div>
                      <div className="text-[#AAAAAA] text-sm mb-3">Category</div>
                      <div className="text-[#14142B] font-bold"> {this.props.transaction?.genre?.length ? this.props.transaction?.genre[0] : "-"}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3">
                    <div>
                      <div className="text-[#AAAAAA] text-sm mb-3">Count</div>
                      <div className="text-[#14142B] font-bold">{this.props.transaction?.seatNum ? (this.props.transaction?.seatNum?.length > 2 ? this.props.transaction.seatNum.split(", ").length : Array(this.props.transaction.seatNum).length) : "-"} pcs</div>
                    </div>
                    <div>
                      <div className="text-[#AAAAAA] text-sm mb-3">Seats</div>
                      <div className="text-[#14142B] font-bold"> {this.props.transaction?.seatNum || "-"}</div>
                    </div>
                    <div>
                      <div className="text-[#AAAAAA] text-sm mb-3">Price</div>
                      <div className="text-[#14142B] font-bold text-2xl">Rp{Number(this.props.transaction.totalPrice).toLocaleString('id-ID') || '-'}</div>
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
                  {
                    format(new Date(), "isoDate") < this.props.transaction?.bookingDate ? <img src={this.props.QRcode} alt="" /> : (
                      <div className="py-20 px-10 text-center bg-[#F5F6F8]">
                        <div className="max-w-[120px] font-bold">Ticket Already Used</div>
                      </div>
                    )
                  }
        
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
