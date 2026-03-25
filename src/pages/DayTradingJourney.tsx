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
          <p className="text-xl leading-relaxed">Applying Data Analytics and Strategic Thinking to Financial Markets</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <Card className="p-8">
              <CardContent className="space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">My Day Trading Journey - Initial Research & Strategy</h2>
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
                  <h3 className="text-2xl font-bold text-gray-900">Introduction: Why I Started Day Trading</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The first time I saw someone day trade was in the movie Paranormal Activity. Very scary movie, but I was intrigued by the concept of day trading. It's an overwhelming experience getting into day trading because of so much information and graphs are thrown at you and you need to figure out what each of these things are.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    At the time of writing this, I started my learning journey on being a successful day trader. I have been working on learning as much as I can for about 2 months now. That might not seem like a long time, but I have been dabbling in swing trading (investing in a stock and letting it sit there for long term) for over 10 years.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    <strong>What makes my approach different?</strong> I'm treating this like any complex skill worth mastering, with systematic learning, data analysis, and yes, even AI assistance. Call me crazy, but I'm using everything from traditional books to ChatGPT and Claude to accelerate my learning curve.
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Learning Materials & Systematic Approach</h3>
                  <p className="text-gray-700 leading-relaxed">
                    With my background established, let me detail the systematic learning approach I've developed over these past months.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    In these past months, I have now read these books on day trading in this order:
                  </p>
                  <ol className="list-decimal pl-6 space-y-1 text-gray-700">
                    <li><em>How to Day Trade: The Plain Truth</em> by Ross Cameron</li>
                    <li><em>How to Day Trade for a Living</em> by Andrew Aziz</li>
                    <li><em>Advanced Techniques in Day Trading</em> by Andrew Aziz</li>
                    <li><em>Trading: Technical Analysis Masterclass</em> by Rolf Schlotmann and Moritz Czubatinski</li>
                  </ol>
                  
                  <p className="text-gray-700 leading-relaxed">
                    To supplement these books, I also acquired:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><em>Candlestick Trading Bible</em> by Delbert Conley</li>
                    <li><em>Python for Algorithmic Trading Cookbook</em> by Jason Strimpel</li>
                    <li><em>Machine Learning for Algorithmic Trading</em> by Stefan Jansen</li>
                  </ul>
                  
                  <Card className="bg-blue-50 border border-blue-200">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">AI-Assisted Learning</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Learning from books can be difficult as you have no one to ask questions to. This is where I use ChatGPT and Claude to answer specific questions and clarify concepts. It's like having a college professor's office hours for discussion on specific topics. I know first-hand that these chat bots can lie and get information wrong. Use them as a starting point, but always verify with reliable sources. There have even been times when I get so frustrated by having to repeat myself to the chatbot and clarify what I mean that I feel like I'm losing my mind. There are entire concepts and best practices around prompt engineering that I won't get into in this writing.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Platform Selection & Technical Setup</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Once I had absorbed the foundational knowledge from books and AI assistance, the next critical step was selecting the right tools to put theory into practice.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Choosing the right broker and trading platform was a critical first decision. I wanted to follow along with the material that I was reading. I learn best by doing and visually seeing all the steps. I needed to get hands on with the material. There are a lot out there to choose from and you need a broker and a trading platform. One is your bank, and the other is where you interact with the market. Here were my key requirements on choosing the right setup:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border border-gray-200">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Broker Requirements:</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Commission Free</li>
                          <li>Quick trade ordering</li>
                          <li>Level 2 data available</li>
                          <li>Margin Account</li>
                          <li>IRA & Roth IRA options</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-gray-200">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Trading Platform Requirements:</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Advanced scanners and filters</li>
                          <li>Real-time Level 2 data</li>
                          <li>Custom dashboards</li>
                          <li>Hot keys for rapid execution</li>
                          <li>Advanced charting with indicators</li>
                          <li>Paper / Simulation trading</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">My Platform Journey</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      While searching what I was going to use, I looked to see what I already had would work or not. I had a Fidelity Individual Broker account and a Fidelity Managed account. From all of the readings and experts I listened to, Fidelity was never an option they suggested. So, I first started out with TD Ameritrade's platform, thinkorSwim. The broker behind this is now Charles Schwab, who acquired TD Ameritrade. I opened a margin account since that was required to even download the thinkorSwim platform. I originally went with this route because it came up in a couple books as an option and I didn't know what to look for at this point. The only reasons I chose this over the others that I read about were: 1. Commission Free Trades on Stocks and 2. They offered Paper / Simulation Trading.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      After watching a YouTube clip by Ross Cameron (one of the authors from the books I read and founder of Warrior Trader), that goes into the pros and cons of all the major brokers and trading platforms and lists the key features that he looks for and uses. At this point, I don't even remember all the facets but what I do recall is speed of executing an order, hot key assignments, level 2 trade data, and cost.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      From this and other reviews, I switched to Webull, which is both broker and trading platform. I have been with Webull since and have now transferred money into my individual broker account.
                    </p>
                  </div>
                </section>

                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Understanding Charts and Indicators</h3>
                  <p className="text-gray-700 leading-relaxed">
                    With my platform selected and account funded, it was time to dive deep into the technical analysis that forms the foundation of day trading decisions.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Before we get into finding stocks to trade, we need to understand what we are looking at and for when trading stocks. The first thing I learned was how to read the graphs for day trading.
                  </p>
                  
                  <Card className="bg-green-50 border border-green-200">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Reading Candlestick Charts</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        The most common graph is based on candles set to certain intervals of time. Each candle represents 4 specific data points of all the orders that were filled in that bucket of time. For example, if I have a candle graph going from 9:30 am to 10:30am set at a 1-minute interval. I would see 60 candles, one for each minute. Time is on the x-axis while price is on the y-axis.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed mb-2">Now, like I mentioned, a candle shows 4 data points:</p>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>The opening price for that period (the first filled trade price for that bin)</li>
                        <li>The closing price for that period (the last filled trade price for that bin)</li>
                        <li>The highest price traded for that period</li>
                        <li>The lowest price traded for that period</li>
                      </ul>
                      
                      <p className="text-gray-700 leading-relaxed mt-4">
                        The candle will have a box for the opening and closing price, have a wick (or sometimes called a shadow) going up to the highest price, and then a wick going down to the lowest price.
                      </p>
                    </CardContent>
                  </Card>

                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-gray-900">Technical Indicators</h4>
                    
                    <div className="space-y-4">
                      <Card className="border border-gray-200">
                        <CardContent className="p-6">
                          <h5 className="text-lg font-bold text-gray-900 mb-2">VWAP (Volume Weighted Average Price)</h5>
                          <p className="text-gray-700 leading-relaxed">
                            This is your Volume Weighted Average Price. It is an intraday metric, meaning it resets every morning at 9:30am and will give the average price of the day taking volume into consideration. When this is graphed on the chart, there are 3 lines. One line is the VWAP and then 1 standard deviation on each side. This can be useful to know for breakthrough momentums either up or down if it crosses one of the lines. It can also look for rebounds, support or resistance lines, if the price gets close to one of the lines and "bounces" back the other way.
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card className="border border-gray-200">
                        <CardContent className="p-6">
                          <h5 className="text-lg font-bold text-gray-900 mb-2">EMA (Exponential Moving Average)</h5>
                          <p className="text-gray-700 leading-relaxed">
                            This is similar and is the Exponential Moving Average. This is a type of moving average that assigns more weight to recent price data compared to older data. This makes it more responsive to price changes. You will typically see EMA followed by a number. That number refers to how many candles back that it is looking at to calculate the moving average.
                          </p>
                          <p className="text-gray-700 leading-relaxed mt-2">
                            Don't get EMA confused with SMA (Simple Moving Average), as EMA weighs closer to real time data exponentially more than its historical data. If you look online for the most common number to use with EMA, you will get a lot of variety from 4 to 200. The common ones though are 4,5, 8, 9, 10, 12, 20, 26, 50, 100, 200. The smaller the number the shorter term it is and will be quicker to catch movements and identify trends. Then the middle numbers like 20 to 50 are used for trend confirmation. Finally, the longer ones of 100 and 200 are for a broader direction and not really used for day trading but usually used for swing traders.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border border-gray-200">
                        <CardContent className="p-6">
                          <h5 className="text-lg font-bold text-gray-900 mb-2">MACD (Moving Average Convergence Divergence)</h5>
                          <p className="text-gray-700 leading-relaxed">
                            This is a trend momentum indicator that compares the relationship between two EMAs price. This is in its own chart and has 3 components, the MACD line, the signal line, and a histogram. The MACD line is calculated by subtracting the EMA-26 from the EMA-12, showing you the difference between the two moving averages. The signal line is the EMA-9 line. The histogram will then show you the difference between the MACD line and the signal line. It visually highlights the convergence or divergence of the moving averages.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border border-gray-200">
                        <CardContent className="p-6">
                          <h5 className="text-lg font-bold text-gray-900 mb-2">RSI (Relative Strength Index)</h5>
                          <p className="text-gray-700 leading-relaxed">
                            The last indicator that I look at is the RSI. This is also a momentum indicator that measures the speed and magnitude of the price changes. It evaluates whether the stock is overbought or oversold. The evaluation ranges from 0 to 100. Above 70 indicates overbought conditions and a potential price correction or downward trend could be coming. Below 30 is the opposite, it indicates an oversold condition, and a potential price rebound or an upward trend. When the RSI is between 30 and 70, it is considered the neutral zone, with 50 meaning it is lacking any trend. This indicator is subjective on if it is a leading or lagging measure.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">The Reality of Real vs. Simulation Trading</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Understanding charts and indicators is crucial, but nothing prepared me for the harsh reality of transitioning from theory to actual trading.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Paper trading or Simulation trading (used interchangeably), is a way to practice trading with real data but without using money or having risk. You are simulating "what would happen if I executed an order at this time." It then tracks it on "paper" for you to see your potential results.
                  </p>
                  <p className="text-gray-700 font-semibold text-red-600">
                    The Critical Lesson: Paper trading creates dangerous habits because it doesn't account for real market conditions.
                  </p>
                  
                  <Card className="bg-red-50 border border-red-200">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        <strong>Price Slippage Reality:</strong> In simulation, you get filled at exactly the displayed price. In real trading, you might see $10.50 but get filled at $10.52-$10.53, especially on volatile stocks. This slippage completely changes your risk management calculations.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Emotional Component:</strong> The fear, greed, and FOMO don't exist with fake money. You make completely different decisions when your actual capital is at risk.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <p className="text-gray-700 leading-relaxed">
                    I paper traded for two days thinking I understood the mechanics, then put real money in and realized I had learned nothing about the most important aspects: managing emotions AND accounting for real market conditions.
                  </p>
                </section>

                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Order Types and Risk Management</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This reality check forced me to focus intensively on the mechanical aspects of trading and risk management before placing another trade.
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
                  <h3 className="text-2xl font-bold text-gray-900">Early Performance & Pattern Day Trader Status</h3>
                  <p className="text-gray-700 leading-relaxed">
                    With my screening criteria established and risk management framework in place, it was time to put real money to work and track actual performance.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Capital Requirements:</strong> I deposited $28K total ($26K bank transfer + $2K debit card) to meet Pattern Day Trader requirements. Anyone making more than a certain number of daily trades needs $25K minimum to avoid account restrictions.
                  </p>
                  
                  <Card className="bg-green-50 border border-green-200">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">First Three Days Performance:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li><strong>Friday June 6th:</strong> -$142.76 (learning curve)</li>
                        <li><strong>Monday:</strong> +$39.38 (breakthrough)</li>
                        <li><strong>Tuesday:</strong> +$166.03 (building consistency)</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <p className="text-gray-700 font-semibold text-blue-600">
                    Key Lesson: "You trade the market you are in, not the one you want." The market doesn't care about your expectations - successful trading requires adapting to current conditions, not forcing preconceived strategies.
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">The Software Engineering Advantage</h3>
                  <p className="text-gray-700 leading-relaxed">
                    While exploring various journaling solutions, I realized my technical background provided a unique opportunity to solve this problem more effectively than existing tools.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Python Automation Solution:</strong> I developed a custom Python application that processes Webull CSV exports and enriches them with historical data from Yahoo Finance.
                  </p>
                  
                  <Card className="bg-purple-50 border border-purple-200">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Automated Data Collection Includes:</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Symbol, P/L, cap category, entry/exit timing</li>
                        <li>Float, average volume, relative volume, gap percent</li>
                        <li>RSI, EMA 9, VWAP, MACD signals</li>
                        <li>Intraday volatility and price range analysis</li>
                        <li>Trade quality scoring algorithm</li>
                        <li>Entry/exit timing analysis</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <p className="text-gray-700 leading-relaxed">
                    <strong>AI-Powered Analysis:</strong> I export the processed data to Claude and OpenAI with the prompt: "As an expert financial day trader who specializes in small and micro-cap intraday trading, analyze and provide insights from this trading journal."
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Even with just 3 days of data, the AI analysis has identified key patterns and scenarios where I'm most profitable, as well as situations to avoid.
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Next Steps & Strategic Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Looking ahead, this journey has evolved from simple curiosity about day trading into a comprehensive research project that combines financial markets, data science, and systematic analysis.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Systematic Development:</strong> The goal isn't to get rich quick, but to develop a systematic, data-driven approach to day trading that can generate consistent returns. My background in software engineering and data science provides unique analytical tools to accelerate learning.
                  </p>
                  
                  <Card className="bg-blue-50 border border-blue-200">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Continuing Journey:</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Daily trading with systematic documentation</li>
                        <li>AI-powered performance analysis</li>
                        <li>Pattern recognition and strategy refinement</li>
                        <li>Risk management optimization</li>
                        <li>Potential algorithmic trading exploration</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Market Humility:</strong> The market is humbling, but I'm approaching it with the same methodical mindset I bring to complex technical problems. Time will tell if this systematic approach pays off, but I'm committed to the journey.
                  </p>
                  
                  <blockquote className="border-l-4 border-blue-500 pl-6 py-4 bg-gray-50 rounded-r-lg">
                    <p className="text-lg text-gray-700 font-medium italic">
                      "You trade the market you're in, not the one you want."
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      <em>Now let's see if I can master trading the market I'm actually in.</em>
                    </p>
                  </blockquote>
                </section>

                <div className="bg-gray-100 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Research Areas</h3>
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
                  <h3 className="text-xl font-bold text-gray-900">References & Sources</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Books Referenced:</h4>
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
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Research & Data Sources:</h4>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
                        <li><strong>fivehundred.co</strong> - Candlestick pattern predictive power study across 40 years of market data on major stock indices and large cap stocks.</li>
                        <li><strong>Warrior Trading</strong> (Ross Cameron) - Educational content on broker selection and trading platform analysis.</li>
                        <li><strong>Yahoo Finance API</strong> - Historical market data for automated analysis and backtesting.</li>
                        <li><strong>Webull Trading Platform</strong> - Real-time market data, Level 2 quotes, and trade execution.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">AI Tools Used for Analysis:</h4>
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
            <h3 className="text-2xl font-bold text-gray-900">Continue Following the Journey</h3>
            <p className="text-gray-700">This is the first post in my day trading research series. Stay tuned for more insights, analysis, and lessons learned.</p>
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