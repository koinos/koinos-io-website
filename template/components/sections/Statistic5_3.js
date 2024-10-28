
import CounterUp from "../elements/CounterUp"
export default function Statistic5_3() {
    return (
        <>
            <div id="statistic-5" className="py-100 statistic-section division">
                <div className="container">
                    {/* STATISTIC-1 WRAPPER */}
                    <div className="statistic-5-wrapper">
                        <div className="row row-cols-1 row-cols-md-3">
                            {/* STATISTIC BLOCK #1 */}
                            <div className="col">
                                <div id="sb-5-1" className="wow fadeInUp">
                                    <div className="statistic-block">
                                        {/* Digit */}
                                        <div className="statistic-digit">
                                            <h2 className="s-44 w-700">
                                                <CounterUp end={26} />.<CounterUp end={62} />k
                                            </h2>
                                        </div>
                                        {/* Text */}
                                        <div className="statistic-txt">
                                            <h5 className="s-19 w-700">Happy Customers</h5>
                                            <p>Porta justo integer and velna vitae auctor and magna quaerat ligula</p>
                                        </div>
                                    </div>
                                </div>
                            </div>	{/* END STATISTIC BLOCK #1 */}
                            {/* STATISTIC BLOCK #2 */}
                            <div className="col">
                                <div id="sb-5-2" className="wow fadeInUp">
                                    <div className="statistic-block">
                                        {/* Digit */}
                                        <div className="statistic-digit">
                                            <h2 className="s-44 w-700">
                                                <CounterUp end={13} />.<CounterUp end={54} />k
                                            </h2>
                                        </div>
                                        {/* Text */}
                                        <div className="statistic-txt">
                                            <h5 className="s-19 w-700">Positive Ratings</h5>
                                            <p>Porta justo integer and velna vitae auctor and magna quaerat ligula</p>
                                        </div>
                                    </div>
                                </div>
                            </div>	{/* END STATISTIC BLOCK #2 */}
                            {/* STATISTIC BLOCK #3 */}
                            <div className="col">
                                <div id="sb-5-3" className="wow fadeInUp">
                                    <div className="statistic-block">
                                        {/* Digit */}
                                        <div className="statistic-digit">
                                            <h2 className="s-44 w-700">
                                                <CounterUp end={4} />.<CounterUp end={87} />/5
                                            </h2>
                                        </div>
                                        {/* Text */}
                                        <div className="statistic-txt">
                                            <h5 className="s-19 w-700">Rating</h5>
                                            <p>Porta justo integer and velna vitae auctor and magna quaerat ligula</p>
                                        </div>
                                    </div>
                                </div>
                            </div>	{/* END STATISTIC BLOCK #3 */}
                        </div>  {/* End row */}
                    </div>	{/* END STATISTIC-5 WRAPPER */}
                </div>	 {/* End container */}
            </div>
        </>
    )
}
