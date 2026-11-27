import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, TrendingUp, BarChart3, Shield, Brain, Bot, Search, MessageCircle } from 'lucide-react';

const DayTradingJourney = () => {
  return (
    <main>
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Day Trading Journey</h1>
          <p className="text-xl leading-relaxed">Learning to day trade the way I'd learn any technical skill</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <Card className="p-8">
              <CardContent className="space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">My day trading journey, part 1: research and first trades</h2>
                  <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      June 2025
                    </span>
                    <span className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Research & Analysis
                    </span>
                  </div>
                </div>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Why I started day trading</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The first time I saw anyone day trade was in Paranormal Activity. The movie scared me, but the trading stuck with me. Getting started is overwhelming: news, charts, brokers and apps all come at you at once, and you have to work out what each one is before you can see how they fit together.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    As I write this, I've spent about two months learning to day trade. That isn't long, but I've been swing trading (buying a stock and holding it for the longer term) for more than 10 years.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    I'm approaching it the way I'd learn any hard skill: read a lot, practice, track the results and ask a lot of questions. For the questions, I lean on ChatGPT and Claude as much as on books.
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">What I read</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Over the past two months I have read these books on day trading, in this order:
                  </p>
                  <ol className="list-decimal pl-6 space-y-1 text-gray-700">
                    <li><em>How to Day Trade: The Plain Truth</em> by Ross Cameron</li>
                    <li><em>How to Day Trade for a Living</em> by Andrew Aziz</li>
                    <li><em>Advanced Techniques in Day Trading</em> by Andrew Aziz</li>
                    <li><em>Trading: Technical Analysis Masterclass</em> by Rolf Schlotmann and Moritz Czubatinski</li>
                  </ol>
                  
                  <p className="text-gray-700 leading-relaxed">
                    I also bought these to read next:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><em>Candlestick Trading Bible</em> by Delbert Conley</li>
                    <li><em>Python for Algorithmic Trading Cookbook</em> by Jason Strimpel</li>
                    <li><em>Machine Learning for Algorithmic Trading</em> by Stefan Jansen</li>
                  </ul>
                  
                  <Card className="bg-blue-50 border border-blue-200">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Asking AI the questions books can't answer</h4>
                      <p className="text-gray-700 leading-relaxed">
                        A book can't answer a follow-up question, so I use ChatGPT and Claude to explain the parts I don't get. It's a bit like a professor's office hours. They do get things wrong, sometimes confidently, so I treat their answers as a starting point and check them against a reliable source. And some days I spend more time rephrasing my question than reading the answer, which is its own kind of frustrating.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Choosing a broker and a platform</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I learn by doing, so I wanted to follow along in a real platform while I read. You need two things: a broker, which holds your money and places the trades, and a trading platform, which is where you read charts and send orders. Sometimes one company provides both. Here's what I wanted from each:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border border-gray-200">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Broker</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Commission free</li>
                          <li>Quick trade ordering</li>
                          <li>Level 2 data available</li>
                          <li>Margin account</li>
                          <li>IRA & Roth IRA options</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-gray-200">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Trading platform</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Advanced scanners and filters</li>
                          <li>Real-time Level 2 data</li>
                          <li>Custom dashboards</li>
                          <li>Hot keys for rapid execution</li>
                          <li>Advanced charting with indicators</li>
                          <li>Paper (simulation) trading</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Where I ended up</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      I already had a Fidelity individual brokerage account and a Fidelity managed account, but none of the books or traders I followed recommended Fidelity for day trading. I started with thinkorSwim, TD Ameritrade's platform, which now belongs to Charles Schwab since it acquired TD Ameritrade. You need a margin account just to download it, so I opened one. I picked it because a couple of the books mentioned it, it had commission-free stock trades and it offered paper trading. At that point I didn't know what else to look for.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Then I watched a YouTube video by Ross Cameron, one of the authors I'd read and the founder of Warrior Trading, comparing the major brokers and platforms and the features he cares about. The ones I remember are order execution speed, hot keys, Level 2 data and cost.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      After that video and a few other reviews, I switched to Webull, which is both a broker and a platform. I've used it since and have funded my individual account there.
                    </p>
                  </div>
                </section>

                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Charts and indicators</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Before picking stocks, you need to know how to read a chart. That was the first thing I learned.
                  </p>
                  
                  <Card className="bg-green-50 border border-green-200">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Reading candlestick charts</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        The most common chart is made of candles, each covering a fixed slice of time. A candle summarizes every order filled during its slice with four numbers. A chart from 9:30 to 10:30 a.m. at a 1-minute interval has 60 candles, one per minute, with time on the x-axis and price on the y-axis.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed mb-2">The four numbers are:</p>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>The opening price for that period (the first filled trade price for that bin)</li>
                        <li>The closing price for that period (the last filled trade price for that bin)</li>
                        <li>The highest price traded for that period</li>
                        <li>The lowest price traded for that period</li>
                      </ul>
                      
                      <p className="text-gray-700 leading-relaxed mt-4">
                        The body of the candle spans the open and close. A thin line called a wick (or shadow) runs up to the high and down to the low.
                      </p>
                    </CardContent>
                  </Card>

                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-gray-900">Technical indicators</h4>
                    
                    <div className="space-y-4">
                      <Card className="border border-gray-200">
                        <CardContent className="p-6">
                          <h5 className="text-lg font-bold text-gray-900 mb-2">VWAP (Volume Weighted Average Price)</h5>
                          <p className="text-gray-700 leading-relaxed">
                            VWAP is the day's average price, weighted by volume. It's an intraday measure that resets at 9:30 every morning. On the chart it shows as three lines: the VWAP itself and one standard deviation on either side. When the price breaks through a line, that can signal momentum in that direction. When the price nears a line and "bounces" back, the line is acting as support or resistance.
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card className="border border-gray-200">
                        <CardContent className="p-6">
                          <h5 className="text-lg font-bold text-gray-900 mb-2">EMA (Exponential Moving Average)</h5>
                          <p className="text-gray-700 leading-relaxed">
                            The EMA is a moving average that gives recent prices more weight than older ones, so it reacts faster to price changes. The number after it (EMA 9, EMA 20) is how many candles back it averages.
                          </p>
                          <p className="text-gray-700 leading-relaxed mt-2">
                            A simple moving average (SMA) weights every candle equally; the EMA weights recent candles exponentially more. Search for the best EMA length and you'll find anything from 4 to 200. The common ones are 4, 5, 8, 9, 10, 12, 20, 26, 50, 100 and 200. Short ones catch moves and new trends quickly. Lengths from 20 to 50 are used to confirm a trend. 100 and 200 show the broad direction and matter more to swing traders than day traders.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border border-gray-200">
                        <CardContent className="p-6">
                          <h5 className="text-lg font-bold text-gray-900 mb-2">MACD (Moving Average Convergence Divergence)</h5>
                          <p className="text-gray-700 leading-relaxed">
                            MACD is a momentum indicator built from two EMAs. It gets its own chart with three parts. The MACD line is the 12-period EMA minus the 26-period EMA. The signal line is a 9-period EMA. The histogram shows the gap between the MACD line and the signal line, so you can see the averages converge or diverge.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border border-gray-200">
                        <CardContent className="p-6">
                          <h5 className="text-lg font-bold text-gray-900 mb-2">RSI (Relative Strength Index)</h5>
                          <p className="text-gray-700 leading-relaxed">
                            The last indicator I watch is RSI, another momentum indicator. It measures how fast and how far the price has moved, on a scale of 0 to 100, to judge whether a stock is overbought or oversold. Above 70 means overbought, and a pullback may be coming. Below 30 means oversold, and a rebound may be coming. Between 30 and 70 is neutral, and 50 means no trend. Traders disagree on whether RSI leads or lags the price.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Paper trading vs. real money</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Paper trading, also called simulation trading, lets you practice on live market data without risking money. You place orders as if they were real, and the platform tracks how they would have done.
                  </p>
                  <p className="text-gray-700 font-semibold text-red-600">
                    Paper trading taught me bad habits, because it leaves out two things real trading has.
                  </p>
                  
                  <Card className="bg-red-50 border border-red-200">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        <strong>Slippage.</strong> In simulation, you get filled at exactly the displayed price. In real trading, you might see $10.50 but get filled at $10.52 or $10.53, especially on volatile stocks. That throws off every risk calculation you made.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Emotions.</strong> Fear, greed and FOMO don't show up when the money is fake. You make very different decisions when your own money is at risk.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <p className="text-gray-700 leading-relaxed">
                    I paper traded for two days and thought I understood the mechanics. Once I put real money in, I realized I hadn't learned to handle either of these.
                  </p>
                </section>

                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Order types</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Before placing another trade, I went back and learned the order types properly.
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left font-bold">TYPE</th>
                          <th className="border border-gray-300 p-3 text-left font-bold">BUY</th>
                          <th className="border border-gray-300 p-3 text-left font-bold">SELL</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 font-bold">LIMIT</td>
                          <td className="border border-gray-300 p-3">Buy at this exact price</td>
                          <td className="border border-gray-300 p-3">Sell at this exact price</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3 font-bold">MARKET</td>
                          <td className="border border-gray-300 p-3">Buy at the current market price</td>
                          <td className="border border-gray-300 p-3">Sell at the current market price</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-bold">STOP-LOSS</td>
                          <td className="border border-gray-300 p-3">Buy when the price reaches a specific price. (Usually used on short positions)</td>
                          <td className="border border-gray-300 p-3">Sell when the price reaches a specific price. Can be used to take profit at certain targets, or to get out of a position to lower your loss.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">My first real trades</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I deposited $28K in total: $26K by bank transfer and $2K by debit card. If your broker flags you as a pattern day trader, which happens once you make more than a few day trades in a short window, you need at least $25K in the account or it gets restricted.
                  </p>
                  
                  <Card className="bg-green-50 border border-green-200">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">My first three days</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li><strong>Friday, June 6:</strong> -$142.76</li>
                        <li><strong>Monday:</strong> +$39.38</li>
                        <li><strong>Tuesday:</strong> +$166.03</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <p className="text-gray-700 font-semibold text-blue-600">
                    "You trade the market you are in, not the one you want." The market doesn't care what you expected. You adjust to what it's doing that day.
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Automating my trade journal</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every trade needs to go in a journal so you can learn from it. I tried a spreadsheet and a few journaling tools, then built my own.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    It's a Python app that reads Webull's CSV export and fills in market data from Yahoo Finance for the moment of each trade.
                  </p>
                  
                  <Card className="bg-purple-50 border border-purple-200">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">What it records for each trade</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Symbol, P/L, cap category, entry/exit timing</li>
                        <li>Float, average volume, relative volume, gap percent</li>
                        <li>RSI, EMA 9, VWAP, MACD signals</li>
                        <li>Intraday volatility and price range analysis</li>
                        <li>A trade quality score</li>
                        <li>Entry/exit timing analysis</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Then I hand the results to Claude and ChatGPT with this prompt: "As an expert financial day trader who specializes in small and micro-cap intraday trading, analyze and provide insights from this trading journal."
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    With only three days of data, they've already pointed out the setups where I make money and the ones I should avoid.
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">What's next</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This started as curiosity and has turned into a research project that uses the same data skills I use at work.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    I'm not trying to get rich quick. I want a repeatable, data-driven way to trade that makes money consistently.
                  </p>
                  
                  <Card className="bg-blue-50 border border-blue-200">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">The plan from here</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Trade daily and journal every trade</li>
                        <li>Have AI review the journal</li>
                        <li>Find the patterns that work and adjust my strategy</li>
                        <li>Tighten up risk management</li>
                        <li>Maybe try algorithmic trading</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <p className="text-gray-700 leading-relaxed">
                    The market is humbling, and I don't know yet whether this approach will pay off. I'll keep trading, keep the journal and report back.
                  </p>
                  
                  <blockquote className="border-l-4 border-blue-500 pl-6 py-4 bg-gray-50 rounded-r-lg">
                    <p className="text-lg text-gray-700 font-medium italic">
                      "You trade the market you're in, not the one you want."
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      <em>Now to learn to trade the market I'm actually in.</em>
                    </p>
                  </blockquote>
                </section>

                <div className="bg-gray-100 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Research areas</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center space-y-2">
                      <BarChart3 className="w-8 h-8 text-blue-600 mx-auto" />
                      <span className="text-sm text-gray-700">Technical Analysis</span>
                    </div>
                    <div className="text-center space-y-2">
                      <Bot className="w-8 h-8 text-green-600 mx-auto" />
                      <span className="text-sm text-gray-700">Algorithmic Trading</span>
                    </div>
                    <div className="text-center space-y-2">
                      <Brain className="w-8 h-8 text-purple-600 mx-auto" />
                      <span className="text-sm text-gray-700">Market Psychology</span>
                    </div>
                    <div className="text-center space-y-2">
                      <Shield className="w-8 h-8 text-red-600 mx-auto" />
                      <span className="text-sm text-gray-700">Risk Management</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900">References and sources</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Books</h4>
                      <ol className="list-decimal pl-6 space-y-1 text-sm text-gray-700">
                        <li>Cameron, R. (2017). <em>How to Day Trade: The Plain Truth</em>. Warrior Trading.</li>
                        <li>Aziz, A. (2016). <em>How to Day Trade for a Living: A Beginner's Guide to Trading Tools and Tactics, Money Management, Discipline and Trading Psychology</em>. CreateSpace Independent Publishing Platform.</li>
                        <li>Aziz, A. (2017). <em>Advanced Techniques in Day Trading: A Practical Guide to High Probability Strategies and Methods</em>. CreateSpace Independent Publishing Platform.</li>
                        <li>Schlotmann, R., & Czubatinski, M. (2019). <em>Trading: Technical Analysis Masterclass: Master the Financial Markets</em>. Independently Published.</li>
                        <li>Conley, D. (2020). <em>Candlestick Trading Bible: The Ultimate Guide to Mastering Candlestick Techniques, Chart Analysis, and Trader Psychology for Market Success</em>. Independently Published.</li>
                        <li>Strimpel, J. (2023). <em>Python for Algorithmic Trading Cookbook: Recipes for designing, building, and deploying algorithmic trading strategies with Python</em>. Packt Publishing.</li>
                        <li>Jansen, S. (2020). <em>Machine Learning for Algorithmic Trading: Predictive Models to extract signals from market and alternative data for systematic trading strategies with Python, 2nd Edition</em>. Packt Publishing.</li>
                      </ol>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Research and data sources</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
                        <li><strong>fivehundred.co</strong> - Candlestick pattern predictive power study across 40 years of market data on major stock indices and large cap stocks.</li>
                        <li><strong>Warrior Trading</strong> (Ross Cameron) - Educational content on broker selection and trading platform analysis.</li>
                        <li><strong>Yahoo Finance API</strong> - Historical market data for automated analysis and backtesting.</li>
                        <li><strong>Webull Trading Platform</strong> - Real-time market data, Level 2 quotes, and trade execution.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">AI tools</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
                        <li><strong>OpenAI ChatGPT</strong> - Trade journal analysis and pattern recognition insights.</li>
                        <li><strong>Anthropic Claude</strong> - Cross-validation of trading analysis and strategy refinement.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Day Trading</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Financial Analytics</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">Data Science</span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">Risk Management</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">Strategic Research</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="p-8 text-center bg-gradient-to-r from-blue-50 to-purple-50">
          <CardContent className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Follow along</h3>
            <p className="text-gray-700">This is the first post in my day trading series. I'll post more as the journal grows.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/research">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Search className="w-4 h-4 mr-2" />
                  View All Research
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Discuss Strategy
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default DayTradingJourney;