import { create } from 'zustand';

const buyData = [
    {
        name: "Chainge",
        icon: "/images/exchanges/chainge-logo.png",
        url: "https://dapp.chainge.finance/?fromChain=ETH&toChain=ETH&fromToken=USDT&toToken=KOIN",
        type: "Bridge"
    },
    {
        name: "Uniswap",
        icon: "/images/exchanges/uniswap-logo.png",
        url: "https://app.uniswap.org/explore/tokens/ethereum/0xed11c9bcf69fdd2eefd9fe751bfca32f171d53ae",
        type: "DEX"
    },
    {
        name: "MEXC",
        icon: "/images/buy/mexc-logo.png",
        url: "https://www.mexc.com/exchange/KOIN_USDT",
        type: "CEX"
    },
    {
        name: "BingX",
        icon: "/images/buy/bingx-logo.png",
        url: "https://bingx.com/en/spot/KOINUSDT/",
        type: "CEX"
    },
    {
        name: "Biconomy",
        icon: "/images/buy/biconomy-logo.png",
        url: "https://www.biconomy.com/exchange/KOIN_USDT",
        type: "CEX"
    },
    {
        name: "Coinstore",
        icon: "/images/buy/coinstore-logo.png",
        url: "https://www.coinstore.com/#/spot/KOINUSDT",
        type: "CEX"
    },
    {
        name: "LCX",
        icon: "/images/buy/lcx-logo.png",
        url: "https://exchange.lcx.com/trade/KOIN-EUR",
        type: "CEX"
    },
    {
        name: "KoinDX",
        icon: "/images/buy/koindx-logo.png",
        url: "https://app.koindx.com/swap",
        type: "DEX"
    },
];

export const useBuyStore = create((set) => ({
    buyData: buyData,  
    
    updateBuyOption: (index, updatedOption) => 
        set((state) => {
            const newData = [...state.buyData];
            newData[index] = { ...newData[index], ...updatedOption };
            return { buyData: newData };
        }),
        
    addBuyOption: (newOption) =>
        set((state) => ({
            buyData: [...state.buyData, newOption]
        })),
        
    removeBuyOption: (index) =>
        set((state) => ({
            buyData: state.buyData.filter((_, i) => i !== index)
        }))
}));

export const initialBuyData = buyData;