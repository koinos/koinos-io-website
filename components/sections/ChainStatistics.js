import CounterUp from "../elements/CounterUp";
import { useEffect, useState } from "react";
import humanFormat from "human-format";
import { useTranslations } from "next-intl";

export default function ChainStatistics() {
  const [transactions, setTransactions] = useState(0);
  const [accounts, setAccounts] = useState(0);
  const [blocks, setBlocks] = useState(0);
  const t = useTranslations('ChainStatistics');

  const getData = () => {
    const url = "https://api.koiner.app/graphql";
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    };
    const request = new Request(url, options);
    fetch(request)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setBlocks(json?.data?.chain?.blockProductionStats?.blocksProduced);
        setAccounts(json?.data?.chain?.stats?.addressCount);
        setTransactions(json?.data?.chain?.stats?.transactionCount);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const getHuman = (value) => {
    const hf = humanFormat(value, { decimals: 2 });
    return [
      Number(hf.split(".")[0]),
      Number(hf.split(".")[1].split(" ")[0]),
      hf.split(".")[1].split(" ")[1],
    ];
  };

  useEffect(() => {
    getData();
  }, []);

  const humanAccounts = getHuman(accounts);
  const humanBlocks = getHuman(blocks);
  const humanTransactions = getHuman(transactions);

  return (
    <>
      <div id="statistic-5" className="pt-50 statistic-section division">
        <div className="container">
          <div className="statistic-5-wrapper">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="section-title mb-70">
                  <h2 className="s-50 w-700">{t('title')}</h2>
                  <p className="s-21 color--grey">{t('subtitle')}</p>
                </div>
              </div>
            </div>
            <div className="data-wrapper">
              <div className="row row-cols-1 row-cols-md-3">
                <div className="col">
                  <div id="sb-5-1" className="wow" data-aos='fade-up'>
                    <div className="statistic-block">
                      <div className="statistic-digit">
                        <h2 className="s-44 w-700">
                          <CounterUp end={humanAccounts[0]} duration={20} />.
                          <CounterUp end={humanAccounts[1]} duration={20} />
                          {humanAccounts[2]}
                        </h2>
                      </div>
                      <div className="statistic-txt">
                        <h5 className="s-19 w-700">{t('accounts.title')}</h5>
                        <p>{t('accounts.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div id="sb-5-2" className="wow" data-aos='fade-up'>
                    <div className="statistic-block">
                      <div className="statistic-digit">
                        <h2 className="s-44 w-700">
                          <CounterUp end={humanBlocks[0]} duration={20} />.
                          <CounterUp end={humanBlocks[1]} duration={20} />
                          {humanBlocks[2]}
                        </h2>
                      </div>
                      <div className="statistic-txt">
                        <h5 className="s-19 w-700">{t('blocks.title')}</h5>
                        <p>{t('blocks.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div id="sb-5-3" className="wow" data-aos='fade-up'>
                    <div className="statistic-block">
                      <div className="statistic-digit">
                        <h2 className="s-44 w-700">
                          <CounterUp end={humanTransactions[0]} duration={20} />.
                          <CounterUp end={humanTransactions[1]} duration={20} />
                          {humanTransactions[2]}
                        </h2>
                      </div>
                      <div className="statistic-txt">
                        <h5 className="s-19 w-700">{t('transactions.title')}</h5>
                        <p>{t('transactions.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
