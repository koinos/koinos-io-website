import CounterUp from "../elements/CounterUp";
import { useEffect, useState, useRef } from "react";

export default function ChainStatistics() {
  // Static data instead of fetching from Koiner
  const accounts = "11.48k";
  const blocks = "22.62M";
  const transactions = "994.77k";

  const title = "Blockchain Statistics";
  const subtle = "A Powerful Decentralized Network for a Growing Ecosystem"

  return (
    <>
      <div id="statistic-5" className="pt-50 statistic-section division">
        <div className="container">
          {/* STATISTIC-1 WRAPPER */}
          <div className="statistic-5-wrapper">
            {/* SECTION TITLE */}
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="section-title mb-70">
                  {/* Title */}
                  <h2 className="s-50 w-700">{title}</h2>
                  {/* Text */}
                  <p className="s-21 color--grey">{subtle}</p>
                </div>
              </div>
            </div>
            <div className="data-wrapper">
              <div className="row row-cols-1 row-cols-md-3">
                {/* STATISTIC BLOCK #1 */}
                <div className="col">
                  <div id="sb-5-1" className="wow" data-aos='fade-up'>
                    <div className="statistic-block">
                      {/* Digit */}
                      <div className="statistic-digit">
                        <h2 className="s-44 w-700">
                          {accounts}
                        </h2>
                      </div>
                      {/* Text */}
                      <div className="statistic-txt">
                        <h5 className="s-19 w-700">Accounts</h5>
                        <p>Total number of activated accounts</p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* END STATISTIC BLOCK #1 */}
                {/* STATISTIC BLOCK #2 */}
                <div className="col">
                  <div id="sb-5-2" className="wow" data-aos='fade-up'>
                    <div className="statistic-block">
                      {/* Digit */}
                      <div className="statistic-digit">
                        <h2 className="s-44 w-700">
                          {blocks}
                        </h2>
                      </div>
                      {/* Text */}
                      <div className="statistic-txt">
                        <h5 className="s-19 w-700">Blocks</h5>
                        <p>Total number of blocks produced</p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* END STATISTIC BLOCK #2 */}
                {/* STATISTIC BLOCK #3 */}
                <div className="col">
                  <div id="sb-5-3" className="wow" data-aos='fade-up'>
                    <div className="statistic-block">
                      {/* Digit */}
                      <div className="statistic-digit">
                        <h2 className="s-44 w-700">
                          {transactions}
                        </h2>
                      </div>
                      {/* Text */}
                      <div className="statistic-txt">
                        <h5 className="s-19 w-700">Transactions</h5>
                        <p>Total number of transactions performed</p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* END STATISTIC BLOCK #3 */}
              </div>{" "}
            </div>
            {/* End row */}
          </div>{" "}
          {/* END STATISTIC-5 WRAPPER */}
        </div>{" "}
        {/* End container */}
      </div>
    </>
  );
} 