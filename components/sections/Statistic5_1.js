
import CounterUp from "../elements/CounterUp"
import { useEffect, useState } from "react";
import humanFormat from "human-format";
import Link from "next/link";

export default function Statistic5_1() {

    const [transactions, setTransactions] = useState(0);
    const [accounts, setAccounts] = useState(0);
    const [blocks, setBlocks] = useState(0);

    const title = "";
    const subtle = "Proven Success in Numbers: Charting Our Impact and Growth";

    const getData = () => {
        const url = 'https://api.koiner.app/graphql';
        const query = `
            {
                chain {
                    stats {
                        addressCount
                        operationCount
                        transactionCount
                    }
                    blockProductionStats {
                        blocksProduced
                        rewarded
                    }
                    tokenStats {
                        transferCount
                    }
                    koinStats {
                        price
                    }
                }
            }
        `;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query })
        };
        const request = new Request(url, options);
        fetch(request)
            .then(response => {
                return response.json();
            })
            .then(json => {
                setBlocks(json?.data?.chain?.blockProductionStats?.blocksProduced);
                setAccounts(json?.data?.chain?.stats?.addressCount);
                setTransactions(json?.data?.chain?.stats?.transactionCount);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const getHuman = (value) => {
        const hf = humanFormat(value, { decimals: 2 });
        return [
            Number(hf.split('.')[0]),
            Number(hf.split('.')[1].split(' ')[0]),
            hf.split('.')[1].split(' ')[1]
        ];
    }

    useEffect(() => {
        getData()
    }, [])

    const humanAccounts = getHuman(accounts);
    const humanBlocks = getHuman(blocks);
    const humanTransactions = getHuman(transactions);

    return (
        <>
            <div id="statistic-5" className="pt-100 statistic-section division">
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

                                    <div className="more-btn text-center mt-60 wow fadeInUp">
                                        <Link href="https://koiner.app/" target="_blank" className="btn btn--tra-black hover--theme">Go to the explorer</Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row row-cols-1 row-cols-md-3">

                            {/* STATISTIC BLOCK #1 */}
                            <div className="col">
                                <div id="sb-5-1" className="wow fadeInUp">
                                    <div className="statistic-block">
                                        {/* Digit */}
                                        <div className="statistic-digit">
                                            <h2 className="s-44 w-700">
                                                <CounterUp end={humanAccounts[0]} duration={20} />.<CounterUp end={humanAccounts[1]} duration={20} />{humanAccounts[2]}
                                            </h2>
                                        </div>
                                        {/* Text */}
                                        <div className="statistic-txt">
                                            <h5 className="s-19 w-700">Accounts</h5>
                                            <p>Total number of activated accounts</p>
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
                                                <CounterUp end={humanBlocks[0]} duration={20} />.<CounterUp end={humanBlocks[1]} duration={20} />{humanBlocks[2]}
                                            </h2>
                                        </div>
                                        {/* Text */}
                                        <div className="statistic-txt">
                                            <h5 className="s-19 w-700">Blocks</h5>
                                            <p>Total number of blocks produced</p>
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
                                                <CounterUp end={humanTransactions[0]} duration={20} />.<CounterUp end={humanTransactions[1]} duration={20} />{humanTransactions[2]}
                                            </h2>
                                        </div>
                                        {/* Text */}
                                        <div className="statistic-txt">
                                            <h5 className="s-19 w-700">Transactions</h5>
                                            <p>Total number of transactions performed</p>
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
