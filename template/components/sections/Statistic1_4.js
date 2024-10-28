
import CounterUp from "../elements/CounterUp"
export default function Statistic1_4() {
    return (
        <>
            <div id="statistic-1" className="py-100 statistic-section division">
                <div className="container">
                    {/* STATISTIC-1 WRAPPER */}
                    <div className="statistic-1-wrapper">
                        <div className="row justify-content-md-center row-cols-1 row-cols-md-3">
                            {/* STATISTIC BLOCK #1 */}
                            <div className="col">
                                <div id="sb-1-1" className="wow fadeInUp">
                                    <div className="statistic-block">
                                        {/* Digit */}
                                        <div className="statistic-block-digit text-center">
                                            <h2 className="s-46 statistic-number"><CounterUp end={89} />k</h2>
                                        </div>
                                        {/* Text */}
                                        <div className="statistic-block-txt color--grey">
                                            <p className="p-md">Porta justo integer and velna vitae auctor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>	{/* END STATISTIC BLOCK #1 */}
                            {/* STATISTIC BLOCK #2 */}
                            <div className="col">
                                <div id="sb-1-2" className="wow fadeInUp">
                                    <div className="statistic-block">
                                        {/* Digit */}
                                        <div className="statistic-block-digit text-center">
                                            <h2 className="s-46 statistic-number"><CounterUp end={76} />%</h2>
                                        </div>
                                        {/* Text */}
                                        <div className="statistic-block-txt color--grey">
                                            <p className="p-md">Ligula magna suscipit vitae and rutrum</p>
                                        </div>
                                    </div>
                                </div>
                            </div>	{/* END STATISTIC BLOCK #2 */}
                            {/* STATISTIC BLOCK #3 */}
                            <div className="col">
                                <div id="sb-1-3" className="wow fadeInUp">
                                    <div className="statistic-block">
                                        {/* Digit */}
                                        <div className="statistic-block-digit text-center">
                                            <h2 className="s-46 statistic-number">
                                                <CounterUp end={4} />.<CounterUp end={93} />
                                            </h2>
                                        </div>
                                        {/* Text */}
                                        <div className="statistic-block-txt color--grey">
                                            <p className="p-md">Sagittis congue augue egestas an egestas</p>
                                        </div>
                                    </div>
                                </div>
                            </div>	{/* END STATISTIC BLOCK #3 */}
                        </div>  {/* End row */}
                    </div>	{/* END STATISTIC-1 WRAPPER */}
                </div>	 {/* End container */}
            </div>
        </>
    )
}
