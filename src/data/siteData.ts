
// Types
import { NewsArticle } from "@/components/ui/NewsCard";
import { PodcastEpisode } from "@/components/ui/PodcastCard";

export interface CategoryData {
  name: string;
  subcategories: string[];
  description?: string;
  image?: string;
}

// Categories data
export const categories: CategoryData[] = [
  { 
    name: 'AI', 
    subcategories: ['Machine Learning', 'Natural Language', 'Computer Vision', 'OpenAI'],
    description: 'The latest developments in artificial intelligence, machine learning, and neural networks.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
  },
  { 
    name: 'Startups', 
    subcategories: ['Funding', 'Founders', 'Accelerators', 'IPOs'],
    description: 'From seed funding to IPOs, follow the journey of innovative startups changing the tech landscape.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
  },
  { 
    name: 'Venture', 
    subcategories: ['Series A', 'Series B', 'Angel Investing', 'VC News'],
    description: 'Investment trends, venture capital movements, and funding rounds in the tech ecosystem.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  { 
    name: 'Security', 
    subcategories: ['Data Breaches', 'Cybersecurity', 'Privacy', 'Hacking'],
    description: 'Cybersecurity news, data privacy developments, and the latest in digital protection.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
  },
  { 
    name: 'Apps', 
    subcategories: ['iOS', 'Android', 'Web Apps', 'Reviews'],
    description: 'Mobile and web application news, reviews, and development trends.',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80',
  },
  { 
    name: 'Events', 
    subcategories: ['Conferences', 'Hackathons', 'Meetups', 'Webinars'],
    description: 'Tech conferences, meetups, and industry events happening around the world.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
  },
  { 
    name: 'Podcasts', 
    subcategories: ['Equity', 'StrictlyVC', 'Tech News', 'Interviews'],
    description: 'Tech podcasts covering startups, venture capital, and the latest innovations.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
  },
  { 
    name: 'Newsletters', 
    subcategories: ['Daily News', 'Weekly Roundup', 'Funding News', 'Tech Deep Dives'],
    description: 'Curated newsletters delivering the most important tech stories to your inbox.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
  },
  { 
    name: 'Crypto', 
    subcategories: ['Bitcoin', 'Ethereum', 'NFTs', 'DeFi'],
    description: 'Everything on cryptocurrencies, blockchain technology, and decentralized finance.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80',
  },
  { 
    name: 'Apple', 
    subcategories: ['iPhone', 'Mac', 'iPad', 'Services'],
    description: 'The latest on Apple products, services, and corporate developments.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  },
];

// News articles data
export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'OpenAI Unveils GPT-5 with Revolutionary Multimodal Capabilities',
    excerpt: 'The latest version introduces unprecedented reasoning skills and can process images, audio, and text simultaneously.',
    category: 'AI',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    date: '2 hours ago',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
    slug: 'openai-unveils-gpt5-capabilities',
    featured: true,
    content: `
      <p>OpenAI has officially announced GPT-5, its most advanced large language model to date, featuring unprecedented multimodal capabilities that allow it to process and reason about images, audio, and text simultaneously.</p>
      
      <p>The new model represents a significant leap forward in AI capabilities, with OpenAI claiming it achieves human-level performance across a variety of complex tasks. In internal benchmarks, GPT-5 demonstrated remarkable improvements in logical reasoning, mathematical problem-solving, and creative content generation.</p>
      
      <h2>Key Capabilities</h2>
      
      <p>GPT-5's multimodal architecture allows it to:</p>
      
      <ul>
        <li>Process and understand images with near-human accuracy</li>
        <li>Generate accurate code from visual mockups</li>
        <li>Create complex visualizations from textual descriptions</li>
        <li>Understand and transcribe multiple speakers in audio recordings</li>
        <li>Solve complex reasoning tasks across different domains</li>
      </ul>
      
      <p>OpenAI CEO Sam Altman stated, "GPT-5 represents our most significant step yet toward artificial general intelligence. The model's ability to understand and reason across different types of information brings us closer to creating truly helpful AI assistants."</p>
      
      <h2>Industry Impact</h2>
      
      <p>The release of GPT-5 is expected to accelerate AI adoption across industries. Early access partners have already implemented the technology in fields ranging from healthcare and education to software development and creative design.</p>
      
      <p>Microsoft, OpenAI's primary investor, has announced plans to integrate GPT-5 into its products, including Bing, Office, and development tools. This integration promises to enhance productivity and creativity for millions of users worldwide.</p>
      
      <h2>Safety Measures</h2>
      
      <p>Addressing concerns about potential misuse, OpenAI emphasized its focus on safety. GPT-5 incorporates advanced safeguards against generating harmful content and has undergone extensive ethical testing. The company has also implemented new systems for detecting and preventing misuse of the technology.</p>
      
      <p>Despite these assurances, critics remain concerned about the potential societal impact of increasingly powerful AI systems. Some experts have called for stronger regulatory frameworks to govern the development and deployment of advanced AI models.</p>
      
      <h2>Availability</h2>
      
      <p>GPT-5 will be rolled out gradually, beginning with research institutions and select commercial partners. OpenAI plans to make the technology available through its API later this year, with pricing and access details to be announced in the coming weeks.</p>
      
      <p>This release marks a significant milestone in the evolution of artificial intelligence and sets the stage for a new wave of AI-powered applications and services.</p>
    `,
  },
  {
    id: '2',
    title: 'Apple\'s Vision Pro: The Future of Spatial Computing Has Arrived',
    excerpt: 'After years of development, Apple\'s first mixed reality headset promises to change how we interact with digital content.',
    category: 'Apple',
    author: {
      name: 'Michael Chen',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    date: '5 hours ago',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    slug: 'apple-vision-pro-future-spatial-computing',
    content: `
      <p>Apple has officially launched its long-awaited Vision Pro headset, marking the company's first major new product category since the Apple Watch and a significant step into the realm of spatial computing.</p>
      
      <p>The $3,499 device, which Apple describes as a "spatial computer," blends virtual and augmented reality technologies to create what the company calls an entirely new computing platform. Unlike traditional VR headsets that completely immerse users in virtual environments, the Vision Pro overlays digital content onto the real world, allowing users to remain aware of their surroundings.</p>
      
      <h2>Technical Specifications</h2>
      
      <p>The Vision Pro features:</p>
      
      <ul>
        <li>Dual micro-OLED displays with a combined 23 million pixels</li>
        <li>Apple's new R1 chip for processing sensor input</li>
        <li>M2 chip for computing power</li>
        <li>Advanced eye-tracking system for intuitive control</li>
        <li>Spatial audio with dynamic head tracking</li>
        <li>External EyeSight display that shows the user's eyes to others nearby</li>
      </ul>
      
      <p>The headset weighs approximately 12 ounces and connects to a battery pack that provides about two hours of use per charge.</p>
      
      <h2>User Experience</h2>
      
      <p>Apple has reimagined the user interface for spatial computing. Instead of using physical controllers, the Vision Pro is primarily controlled through eye movements, hand gestures, and voice commands. Users can navigate menus by looking at options and selecting them with subtle finger pinches, creating what Apple claims is the most natural and intuitive computing interface yet.</p>
      
      <p>The system runs on visionOS, a new operating system designed specifically for spatial computing. It supports existing iOS and iPadOS apps, while also enabling new experiences that take advantage of the spatial environment.</p>
      
      <h2>Applications</h2>
      
      <p>At launch, the Vision Pro supports a range of applications:</p>
      
      <ul>
        <li>Productivity: Multiple virtual screens for work</li>
        <li>Entertainment: Immersive video viewing and gaming</li>
        <li>Communication: FaceTime calls with spatial presence</li>
        <li>Creativity: 3D modeling and spatial design tools</li>
        <li>Wellness: Guided meditation and fitness experiences</li>
      </ul>
      
      <p>Apple has partnered with major content providers, including Disney, to create immersive entertainment experiences for the platform.</p>
      
      <h2>Market Impact</h2>
      
      <p>Industry analysts have mixed predictions about the Vision Pro's impact. While some view it as a transformative product that could redefine computing, others point to the high price point and limited initial applications as potential barriers to widespread adoption.</p>
      
      <p>"This is Apple's bid to define the future of computing," said tech analyst Ming-Chi Kuo. "While the first generation may appeal primarily to enthusiasts and developers, it sets the stage for more accessible versions that could eventually replace smartphones."</p>
      
      <p>Meta, Microsoft, and other tech giants have been investing heavily in mixed reality, but Apple's entry into the market is expected to accelerate adoption and development across the industry.</p>
      
      <h2>Looking Forward</h2>
      
      <p>The Vision Pro represents Apple's vision for the future of computing, but questions remain about its long-term success. The high price point limits its initial appeal, and the development of compelling applications will be crucial for wider adoption.</p>
      
      <p>Nevertheless, the product demonstrates Apple's commitment to spatial computing and suggests a future where our interaction with digital content becomes increasingly immersive and intuitive.</p>
    `,
  },
  {
    id: '3',
    title: 'Leaked Documents Reveal AI Censorship at Major Tech Companies',
    excerpt: 'Internal emails show systematic suppression of certain topics in AI systems deployed worldwide.',
    category: 'Security',
    author: {
      name: 'Alex Freeman',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    date: '8 hours ago',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    slug: 'leaked-documents-ai-censorship',
    content: `
      <p>A cache of leaked internal documents has revealed that several major technology companies have implemented systematic content controls and censorship mechanisms in their AI systems, raising serious questions about transparency and free speech in the digital age.</p>
      
      <p>The documents, which include emails, meeting notes, and technical specifications from five of the world's largest AI developers, were provided to journalists by an anonymous whistleblower who claimed to be a former employee at one of the companies.</p>
      
      <h2>Systematic Content Control</h2>
      
      <p>According to the leaked materials, these companies have developed sophisticated mechanisms to restrict AI systems from generating or discussing certain topics. The content controls extend far beyond the publicly acknowledged safety measures designed to prevent harmful outputs.</p>
      
      <p>The documents reveal that the companies maintain extensive "suppression lists" - topics and viewpoints that their AI systems are programmed to avoid or downplay. These lists include:</p>
      
      <ul>
        <li>Specific political perspectives</li>
        <li>Criticisms of particular corporate interests</li>
        <li>Information about certain historical events</li>
        <li>Scientific topics deemed controversial</li>
      </ul>
      
      <p>One internal email from a senior executive states: "We need to ensure our models reflect appropriate viewpoints on sensitive issues. The suppression framework gives us the control we need without alerting users to its existence."</p>
      
      <h2>Global Variations</h2>
      
      <p>Perhaps most concerning, the documents show that content controls are customized by region to satisfy different political regimes. AI systems deployed in certain countries are specifically programmed to avoid topics that might displease local governments, even when those topics are freely discussed in other regions.</p>
      
      <p>A technical specification labeled "Market-Specific Content Alignment" details how AI outputs are tailored to match the political climate of each deployment region, with different rules for North America, Europe, Asia, and the Middle East.</p>
      
      <h2>Corporate Response</h2>
      
      <p>When approached for comment, the implicated companies acknowledged that they implement safety measures but denied engaging in political censorship. A spokesperson for one company stated, "We have responsible AI guidelines to prevent harmful outputs, but we do not censor based on political viewpoints."</p>
      
      <p>However, the leaked documents contradict these claims, showing explicit discussions about managing political narratives and avoiding topics that might generate negative publicity or regulatory scrutiny.</p>
      
      <h2>Expert Reactions</h2>
      
      <p>AI ethics experts have expressed alarm at the revelations. Dr. Emily Zhao, an AI governance researcher at MIT, commented, "These documents confirm what many of us have suspected - that AI systems are being shaped not just for safety, but to serve corporate and political interests in ways that are hidden from users."</p>
      
      <p>Digital rights advocates are calling for increased transparency and oversight. The Electronic Frontier Foundation issued a statement urging "immediate regulatory action to ensure AI systems operate transparently and don't secretly restrict the flow of information."</p>
      
      <h2>Potential Impact</h2>
      
      <p>As AI systems increasingly mediate our access to information, hidden content controls could have far-reaching implications for public discourse and democratic processes. The whistleblower who provided the documents expressed hope that their release would "start an honest conversation about who controls what AI systems can say, and who gets to make those decisions."</p>
      
      <p>Lawmakers in several countries have already indicated that they plan to investigate the allegations and may consider new regulations requiring transparency about content controls in AI systems.</p>
    `,
  },
  {
    id: '4',
    title: 'Startup Funding Hits Record Highs Despite Economic Uncertainty',
    excerpt: 'VC funds have deployed over $120B in the first half of the year, with AI startups leading the way.',
    category: 'Venture',
    author: {
      name: 'Lisa Rodriguez',
      avatar: 'https://i.pravatar.cc/150?img=4',
    },
    date: '12 hours ago',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    slug: 'startup-funding-record-highs',
    content: `
      <p>Venture capital funding has reached unprecedented levels in the first half of this year, with investors deploying over $120 billion globally despite persistent economic headwinds and concerns about inflation and interest rates.</p>
      
      <p>According to data from PitchBook, this represents a 20% increase compared to the same period last year and the strongest start to a year on record. The surge in funding comes as somewhat of a surprise to market analysts who had predicted a slowdown in venture activity.</p>
      
      <h2>AI Dominates Investment Landscape</h2>
      
      <p>The funding boom has been dominated by artificial intelligence startups, which collectively raised $42 billion in the first six months of the year. This represents approximately 35% of all venture capital deployed globally, underscoring the transformative potential investors see in AI technologies.</p>
      
      <p>Leading the pack are companies developing generative AI applications, large language models, and specialized AI tools for enterprises. Notable deals include:</p>
      
      <ul>
        <li>Anthropic's $5 billion fundraising round, led by Spark Capital and Google</li>
        <li>Mistral AI's $2.7 billion valuation after just 12 months of operation</li>
        <li>Cohere's $1.2 billion raise for its enterprise-focused AI models</li>
      </ul>
      
      <p>"We're seeing a historic reallocation of capital toward AI," said Sarah Martin, managing partner at Sequoia Capital. "The sense among investors is that we're witnessing the birth of a new computing platform with implications as profound as the internet or mobile."</p>
      
      <h2>Geographic Distribution</h2>
      
      <p>While North American startups continue to attract the lion's share of funding at $68 billion, Asian companies have seen the fastest growth, securing $31 billion—an increase of 45% year-over-year. European startups raised $19 billion, while Latin American companies attracted a record $2.2 billion.</p>
      
      <p>China has reemerged as a significant player in the venture ecosystem after a regulatory crackdown had previously dampened investment activity. Chinese AI and semiconductor startups have raised $12 billion in the first half of the year, despite ongoing geopolitical tensions.</p>
      
      <h2>Beyond AI</h2>
      
      <p>While AI has dominated headlines, other sectors have also seen substantial investment:</p>
      
      <ul>
        <li>Climate tech startups raised $18 billion, with particular strength in energy storage, carbon capture, and clean manufacturing</li>
        <li>Biotech companies secured $15 billion, driven by advances in genetic medicine and drug discovery</li>
        <li>Fintech attracted $14 billion, with a focus on embedded finance and B2B solutions</li>
        <li>Space technology companies raised $5 billion as satellite networks and launch capabilities continue to expand</li>
      </ul>
      
      <h2>Valuations Under Pressure</h2>
      
      <p>Despite the robust funding environment, startup valuations have shown signs of moderation outside the AI sector. The median late-stage valuation has decreased by 15% compared to 2021's peak, reflecting a more disciplined approach to investment.</p>
      
      <p>"Investors are still deploying capital at record rates, but they're being more selective and focused on companies with clear paths to profitability," noted Mark Johnson, an analyst at PitchBook. "The days of growth at all costs are behind us."</p>
      
      <h2>Looking Ahead</h2>
      
      <p>Venture capitalists remain optimistic about the second half of the year, with 78% of those surveyed expecting funding levels to remain stable or increase further. However, some caution that the concentration of capital in AI could create challenges for startups in other sectors.</p>
      
      <p>As competition for AI talent and technology intensifies, some observers have raised concerns about a potential bubble. However, most venture partners argue that the transformative potential of AI justifies current investment levels.</p>
      
      <p>"This isn't like the dot-com boom," said David Chen, partner at Andreessen Horowitz. "We're seeing real technology with immediate applications and revenue potential. The companies raising today are building the infrastructure of tomorrow's economy."</p>
    `,
  },
  {
    id: '5',
    title: 'New JavaScript Framework Claims 10x Performance Over React',
    excerpt: 'A newcomer to the frontend ecosystem is making big promises, but can it deliver?',
    category: 'Apps',
    author: {
      name: 'David Park',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    date: '15 hours ago',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    slug: 'new-javascript-framework-performance',
    content: `
      <p>A new JavaScript framework called Voltage has emerged with bold claims of delivering performance up to 10 times faster than React, potentially disrupting the frontend development ecosystem that has been dominated by established frameworks for years.</p>
      
      <p>Developed by a team of former Google and Meta engineers, Voltage combines a reactive programming model with ahead-of-time compilation to produce what its creators describe as "near-native performance with familiar developer ergonomics."</p>
      
      <h2>Technical Approach</h2>
      
      <p>Voltage differentiates itself through several technical innovations:</p>
      
      <ul>
        <li>A compiler that converts declarative components into highly optimized imperative code</li>
        <li>Fine-grained reactivity that updates only the precise DOM elements that change</li>
        <li>Zero runtime overhead for static content</li>
        <li>Intelligent component pre-rendering and code splitting</li>
        <li>Native integration with WebAssembly for performance-critical operations</li>
      </ul>
      
      <p>"We've fundamentally rethought the approach to UI rendering," said Nina Martinez, Voltage's CTO. "Instead of using a virtual DOM or signals, we're compiling components directly to optimized imperative code that makes minimal changes to the DOM."</p>
      
      <h2>Performance Benchmarks</h2>
      
      <p>The team has published a series of benchmarks showing impressive results:</p>
      
      <ul>
        <li>Initial page load times 7-12x faster than React</li>
        <li>Update performance 5-10x faster than React</li>
        <li>Memory usage reduced by 80% compared to similar applications in React</li>
        <li>Bundle sizes 40-60% smaller than equivalent React applications</li>
      </ul>
      
      <p>Independent developers who have tested early versions of Voltage have confirmed significant performance improvements, though many note that the 10x claim applies primarily to specific use cases rather than across all applications.</p>
      
      <h2>Developer Experience</h2>
      
      <p>Voltage aims to provide a familiar experience for React developers while delivering superior performance. The framework uses a component model similar to React but with some key differences:</p>
      
      <pre><code>
// Voltage component example
component Counter() {
  let count = state(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => count.value++}>
        Increment
      </button>
    </div>
  );
}
      </code></pre>
      
      <p>The framework includes built-in support for CSS-in-JS, animations, and server-side rendering. It also offers a migration path for existing React applications, allowing developers to adopt Voltage incrementally.</p>
      
      <h2>Community Reaction</h2>
      
      <p>The announcement has generated significant buzz in the frontend community, with reactions ranging from excitement to skepticism.</p>
      
      <p>React core team member Dan Abramov commented on X (formerly Twitter): "Always interested to see new approaches to UI development. Some of Voltage's ideas look promising, though I'd caution against focusing too much on synthetic benchmarks rather than real-world use cases."</p>
      
      <p>Vue.js creator Evan You was more enthusiastic: "Voltage's compilation approach is innovative and addresses some real performance bottlenecks. Competition drives innovation and the whole ecosystem benefits."</p>
      
      <h2>The JavaScript Framework Fatigue Question</h2>
      
      <p>The emergence of yet another JavaScript framework has inevitably raised questions about framework fatigue in the developer community. With React, Vue, Angular, Svelte, Solid, and numerous other options already available, some developers question whether there's room for a new entrant.</p>
      
      <p>"The JavaScript ecosystem doesn't need more frameworks; it needs more stability," argued Sarah Chen, a senior frontend developer at Spotify, in a widely-shared blog post. "Each new framework requires learning new patterns and rebuilding our tooling."</p>
      
      <p>Others argue that genuine innovation deserves attention. "If Voltage can deliver on its performance promises without sacrificing developer experience, that's a meaningful advance," said technical author and consultant Robin Wieruch.</p>
      
      <h2>Looking Ahead</h2>
      
      <p>Voltage is currently in private beta with plans for a public release later this year. The team has secured $8.5 million in seed funding led by Sequoia Capital to support development and growth.</p>
      
      <p>Whether Voltage can capture significant market share in the competitive frontend framework space remains to be seen. While performance is important, factors such as community support, documentation quality, and ecosystem maturity often prove equally crucial to a framework's success.</p>
      
      <p>Nevertheless, the innovations introduced by Voltage may influence the broader ecosystem, potentially spurring improvements in established frameworks and pushing the boundaries of web application performance.</p>
    `,
  },
  {
    id: '6',
    title: 'Crypto Market Surges as Regulation Clarity Emerges',
    excerpt: 'Bitcoin and other cryptocurrencies see major gains as regulatory frameworks take shape worldwide.',
    category: 'Crypto',
    author: {
      name: 'Emma Wilson',
      avatar: 'https://i.pravatar.cc/150?img=6',
    },
    date: '1 day ago',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    slug: 'crypto-market-surges-regulation',
    content: `
      <p>The cryptocurrency market has experienced a significant rally in recent weeks, with Bitcoin surpassing $75,000 and the total market capitalization of all digital assets exceeding $2.5 trillion. This surge comes as regulatory frameworks for digital assets begin to take clearer shape across major economies.</p>
      
      <p>After years of regulatory uncertainty that has hampered institutional adoption, governments worldwide are now establishing more definitive rules for cryptocurrency markets, providing the clarity that many investors have been waiting for.</p>
      
      <h2>Regulatory Developments</h2>
      
      <p>Several key regulatory developments have contributed to the market's positive sentiment:</p>
      
      <ul>
        <li>The United States SEC has approved spot Bitcoin and Ethereum ETFs, allowing mainstream investors easier access to cryptocurrency exposure</li>
        <li>The European Union's Markets in Crypto-Assets (MiCA) regulation has entered into force, creating a comprehensive framework for digital assets across the bloc</li>
        <li>Singapore has finalized its Payment Services Act amendments, establishing clear licensing requirements for cryptocurrency businesses</li>
        <li>Japan has updated its Financial Instruments and Exchange Act to accommodate tokenized securities and DeFi protocols</li>
        <li>Brazil has implemented a regulatory sandbox specifically for blockchain-based financial innovations</li>
      </ul>
      
      <p>"We're finally seeing the regulatory clarity the industry has been requesting for years," said Michelle Lau, CEO of cryptocurrency exchange Nexus. "This allows institutions to engage with digital assets with the compliance frameworks they require."</p>
      
      <h2>Institutional Adoption Accelerates</h2>
      
      <p>With regulatory barriers diminishing, institutional adoption of cryptocurrencies has accelerated significantly. Recent developments include:</p>
      
      <ul>
        <li>BlackRock's Bitcoin ETF has accumulated over $25 billion in assets under management since its launch</li>
        <li>JPMorgan has expanded its blockchain-based payment system to include central bank digital currency compatibility</li>
        <li>Goldman Sachs has launched a digital assets trading desk for institutional clients</li>
        <li>State Street now offers cryptocurrency custody services for pension funds and endowments</li>
        <li>Norway's sovereign wealth fund has allocated 0.5% of its portfolio to Bitcoin and Ethereum</li>
      </ul>
      
      <p>These institutional moves represent a significant shift from the cautious approach many financial giants maintained in previous years.</p>
      
      <h2>Market Performance</h2>
      
      <p>The regulatory clarity has contributed to impressive market performance across the cryptocurrency sector:</p>
      
      <ul>
        <li>Bitcoin has risen 45% in the past month, reaching an all-time high of $75,800</li>
        <li>Ethereum has gained 38%, trading above $4,200</li>
        <li>The total cryptocurrency market cap has increased by 40% year-to-date</li>
        <li>Trading volumes on regulated exchanges have doubled since January</li>
        <li>Bitcoin's 30-day volatility has decreased to its lowest level since 2020</li>
      </ul>
      
      <p>Beyond price action, network fundamentals have also strengthened. Bitcoin's hash rate has reached record levels, and Ethereum has seen a significant increase in both transactions and developer activity.</p>
      
      <h2>The Next Frontier: Traditional Finance Integration</h2>
      
      <p>With basic regulatory frameworks in place, attention is now turning to the integration of cryptocurrencies with traditional financial systems. This includes:</p>
      
      <ul>
        <li>Central bank digital currencies (CBDCs) and their interoperability with public blockchains</li>
        <li>Tokenization of traditional assets like real estate, stocks, and bonds</li>
        <li>Integration of blockchain-based settlement systems with existing financial infrastructure</li>
        <li>Development of regulatory frameworks for decentralized finance (DeFi) protocols</li>
      </ul>
      
      <p>"The next phase isn't just about cryptocurrencies as speculative assets," explained Dr. Marcus Freeman, financial technology researcher at Imperial College London. "It's about the fundamental rebuilding of financial infrastructure using blockchain technology, with digital assets as an integral component."</p>
      
      <h2>Challenges Ahead</h2>
      
      <p>Despite the positive developments, challenges remain for the cryptocurrency sector. Regulatory approaches still vary significantly between jurisdictions, creating compliance complexities for global operations. Energy consumption concerns persist for proof-of-work blockchains like Bitcoin, and consumer protection issues continue to attract regulatory scrutiny.</p>
      
      <p>Additionally, the risk of overspeculation remains a concern. "While institutional adoption provides stability, we're seeing signs of excessive retail enthusiasm in some segments of the market," cautioned Anna Chen, chief investment officer at Digital Asset Capital Management.</p>
      
      <h2>Looking Forward</h2>
      
      <p>Analysts are divided on whether the current rally represents the beginning of a sustained bull market or a temporary surge driven by regulatory news.</p>
      
      <p>"The foundations for long-term growth are stronger than ever," argued Thomas Rodriguez, cryptocurrency strategist at Bernstein Research. "Unlike previous cycles driven purely by speculation, this uptrend is supported by genuine regulatory progress and institutional adoption."</p>
      
      <p>Others urge caution. "Markets tend to overreact to regulatory developments," noted Samira Wang, risk analyst at Chainalysis. "We're likely to see significant volatility as the market digests these changes and tests new price levels."</p>
      
      <p>Regardless of short-term price movements, the emerging regulatory clarity marks a significant milestone in cryptocurrency's evolution from a fringe technology to an established asset class within the global financial system.</p>
    `,
  }
];

// Featured articles for homepage carousel
export const featuredArticles = [
  {
    id: '1',
    title: 'OpenAI Unveils GPT-5 with Revolutionary Multimodal Capabilities',
    excerpt: 'The latest version introduces unprecedented reasoning skills and can process images, audio, and text simultaneously.',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80',
    date: '2 hours ago',
    slug: 'openai-unveils-gpt5-capabilities'
  },
  {
    id: '2',
    title: 'Apple\'s Vision Pro: The Future of Spatial Computing Has Arrived',
    excerpt: 'After years of development, Apple\'s first mixed reality headset promises to change how we interact with digital content.',
    category: 'Apple',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80',
    date: '5 hours ago',
    slug: 'apple-vision-pro-future-spatial-computing'
  },
  {
    id: '3',
    title: 'Leaked Documents Reveal AI Censorship at Major Tech Companies',
    excerpt: 'Internal emails show systematic suppression of certain topics in AI systems deployed worldwide.',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1920&q=80',
    date: '8 hours ago',
    slug: 'leaked-documents-ai-censorship'
  },
  {
    id: '4',
    title: 'Startup Funding Hits Record Highs Despite Economic Uncertainty',
    excerpt: 'VC funds have deployed over $120B in the first half of the year, with AI startups leading the way.',
    category: 'Venture',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80',
    date: '12 hours ago',
    slug: 'startup-funding-record-highs'
  },
];

// Podcasts data
export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: '1',
    title: 'The Rise of Generative AI in Business',
    description: 'We explore how companies are integrating generative AI into their workflows and the challenges they face.',
    podcastName: 'Equity',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
    audio: 'https://example.com/podcast1.mp3',
    duration: '45 min',
    date: '2 days ago',
    slug: 'rise-of-generative-ai-business'
  },
  {
    id: '2',
    title: 'Venture Capital in a Post-Pandemic World',
    description: 'How has the pandemic reshaped venture capital? We talk to leading VCs about the new investment landscape.',
    podcastName: 'StrictlyVC',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    audio: 'https://example.com/podcast2.mp3',
    duration: '38 min',
    date: '4 days ago',
    slug: 'venture-capital-post-pandemic'
  },
  {
    id: '3',
    title: 'The Future of Work: Remote, Hybrid, or Office?',
    description: "Tech companies are setting the trend for how we'll work in the future. We discuss the pros and cons of different models.",
    podcastName: 'Equity',
    image: 'https://images.unsplash.com/photo-1585976219691-0b092629cf02?auto=format&fit=crop&w=800&q=80',
    audio: 'https://example.com/podcast3.mp3',
    duration: '52 min',
    date: '1 week ago',
    slug: 'future-of-work-models'
  },
  {
    id: '4',
    title: 'Cybersecurity Threats in the Age of AI',
    description: 'As AI becomes more powerful, so do potential cybersecurity threats. Experts discuss what businesses should be prepared for.',
    podcastName: 'TechCrunch',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    audio: 'https://example.com/podcast4.mp3',
    duration: '41 min',
    date: '1 week ago',
    slug: 'cybersecurity-threats-ai-age'
  },
  {
    id: '5',
    title: 'The Regulatory Landscape for Cryptocurrencies',
    description: 'How are governments around the world approaching crypto regulation, and what does it mean for investors?',
    podcastName: 'StrictlyVC',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&q=80',
    audio: 'https://example.com/podcast5.mp3',
    duration: '48 min',
    date: '2 weeks ago',
    slug: 'regulatory-landscape-cryptocurrencies'
  },
  {
    id: '6',
    title: 'The Ethics of Artificial Intelligence Development',
    description: 'As AI becomes more advanced, what ethical considerations should guide its development and deployment?',
    podcastName: 'TechCrunch',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    audio: 'https://example.com/podcast6.mp3',
    duration: '55 min',
    date: '2 weeks ago',
    slug: 'ethics-ai-development'
  },
  {
    id: '7',
    title: 'Building Startup Culture in a Remote World',
    description: 'How can founders create strong company cultures when their teams are distributed around the globe?',
    podcastName: 'Equity',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    audio: 'https://example.com/podcast7.mp3',
    duration: '43 min',
    date: '3 weeks ago',
    slug: 'startup-culture-remote-world'
  },
  {
    id: '8',
    title: 'The Future of Fintech: Banking Beyond Borders',
    description: 'Digital finance is breaking down geographic barriers. What does this mean for traditional banking?',
    podcastName: 'TechCrunch',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
    audio: 'https://example.com/podcast8.mp3',
    duration: '50 min',
    date: '3 weeks ago',
    slug: 'future-fintech-banking'
  }
];

// Blog posts data
export const blogPosts: NewsArticle[] = [
  {
    id: 'b1',
    title: 'The Ethical Implications of AI in Content Creation',
    excerpt: 'As AI tools become more capable of generating human-like content, we explore the ethical questions raised for creators and publishers.',
    category: 'Blog',
    author: {
      name: 'Jessica Miller',
      avatar: 'https://i.pravatar.cc/150?img=7',
    },
    date: '2 days ago',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80',
    slug: 'ethical-implications-ai-content-creation',
    content: `
      <p>The rise of AI-powered content generation tools has sparked a heated debate about the ethical implications for creative industries. As tools like GPT-4, Midjourney, and DALL-E produce increasingly sophisticated text, images, and even music, creators and publishers face unprecedented questions about authorship, originality, and the future of creative work.</p>
      
      <h2>The Current State of AI Content Creation</h2>
      
      <p>Today's AI tools can generate articles, stories, marketing copy, images, music, and videos that in many cases are difficult to distinguish from human-created content. These capabilities have emerged rapidly, leaving ethical frameworks struggling to catch up.</p>
      
      <p>The technology behind these tools relies on training large models on vast datasets of human-created content—often without explicit permission from the original creators. This training process itself raises the first of many ethical questions.</p>
      
      <h2>Copyright and Ownership Questions</h2>
      
      <p>Who owns AI-generated content? This seemingly simple question has complex legal and ethical dimensions:</p>
      
      <ul>
        <li>Can AI outputs be copyrighted, and if so, by whom? The creator of the AI, the user who prompted it, or no one?</li>
        <li>Is AI-generated content inherently derivative of the works it was trained on?</li>
        <li>Should original creators be compensated when their work is used to train AI systems?</li>
      </ul>
      
      <p>Legal systems worldwide are grappling with these questions. In the United States, the Copyright Office has taken the position that AI-generated works without human creative input are not eligible for copyright protection. However, determining the threshold of human creative contribution remains challenging.</p>
      
      <h2>Impact on Creative Professions</h2>
      
      <p>The ability of AI to generate content at scale and minimal cost raises concerns about the displacement of human creators. Writers, illustrators, designers, and musicians are particularly affected.</p>
      
      <p>Some media outlets have already begun using AI to generate certain types of content, such as financial reports and sports summaries. Getty Images now offers AI-generated stock photos alongside human-created images. Music streaming platforms are experimenting with AI-composed background tracks.</p>
      
      <p>These developments pose existential questions for creative industries: Will AI primarily serve as a tool that enhances human creativity, or will it replace humans for certain types of creative work? How will creative professionals adapt and find sustainable business models?</p>
      
      <h2>Transparency and Disclosure</h2>
      
      <p>Should audiences know when they're consuming AI-generated content? This question touches on fundamental principles of transparency and trust.</p>
      
      <p>Currently, there are few standards or requirements for disclosing AI involvement in content creation. Some argue that clear labeling is essential for maintaining trust, while others suggest that the origin of content matters less than its quality and value to the audience.</p>
      
      <p>The lack of disclosure standards becomes particularly problematic in contexts like journalism, education, and scientific publishing, where the source and methodology behind content creation directly impact its credibility.</p>
      
      <h2>Perpetuating Bias and Misinformation</h2>
      
      <p>AI systems trained on internet content inevitably absorb and can amplify existing biases and inaccuracies. Without careful oversight, AI-generated content risks:</p>
      
      <ul>
        <li>Perpetuating harmful stereotypes present in training data</li>
        <li>Generating convincing but factually incorrect information</li>
        <li>Creating synthetic media (deepfakes) that mislead audiences</li>
      </ul>
      
      <p>These risks raise questions about the responsibility of AI developers, content platforms, and users to mitigate potential harms.</p>
      
      <h2>Emerging Ethical Frameworks</h2>
      
      <p>Several approaches to addressing these ethical challenges are emerging:</p>
      
      <h3>1. Opt-out mechanisms for creators</h3>
      
      <p>Some AI companies are developing systems that allow creators to exclude their work from AI training datasets. For example, artists can now use HTML meta tags to signal that they don't want their online portfolios used for AI training.</p>
      
      <h3>2. Compensation models</h3>
      
      <p>Proposals for compensating creators whose work contributes to AI training include licensing schemes, revenue-sharing models, and artist-friendly AI platforms that explicitly pay for training content.</p>
      
      <h3>3. Transparency requirements</h3>
      
      <p>Industry groups and policymakers are exploring standards for disclosing AI involvement in content creation, similar to requirements for disclosing sponsored content or automated trading in financial markets.</p>
      
      <h3>4. AI content detection</h3>
      
      <p>Tools to identify AI-generated content are being developed, though they currently have significant limitations and false positives/negatives.</p>
      
      <h2>The Path Forward</h2>
      
      <p>As AI content generation becomes more widespread and sophisticated, we need thoughtful dialogue involving creators, technologists, ethicists, legal experts, and policymakers to develop balanced approaches that:</p>
      
      <ul>
        <li>Respect the rights and livelihoods of human creators</li>
        <li>Allow beneficial innovation to continue</li>
        <li>Maintain transparency and trust with audiences</li>
        <li>Prevent exploitation and harm</li>
      </ul>
      
      <p>These discussions should influence both policy frameworks and the technical design of AI systems themselves.</p>
      
      <p>In the meantime, organizations using AI for content creation would be wise to develop their own ethical guidelines addressing questions of attribution, transparency, quality control, and fair compensation.</p>
      
      <p>The ethical use of AI in content creation isn't merely a philosophical question—it will shape the future of creative industries and the information ecosystem that underpins our society.</p>
    `,
  },
  {
    id: 'b2',
    title: "Web3 and the Creator Economy: What's Next?",
    excerpt: 'Is Web3 still the future for content creators? We examine the current state of blockchain-based platforms for artists and writers.',
    category: 'Blog',
    author: {
      name: 'Robert Zhang',
      avatar: 'https://i.pravatar.cc/150?img=8',
    },
    date: '4 days ago',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
    slug: 'web3-creator-economy-future',
    content: `
      <p>The intersection of Web3 technologies and the creator economy was once heralded as a paradigm shift that would empower artists, writers, musicians, and other creators to take control of their economic destinies. Two years after the peak of NFT excitement and "metaverse" hype, it's time to assess where things stand and what the future might hold for blockchain-based creator platforms.</p>
      
      <h2>The Initial Promise</h2>
      
      <p>Web3 proponents envisioned a creator economy with several revolutionary features:</p>
      
      <ul>
        <li>Direct creator-to-fan relationships without platform intermediaries</li>
        <li>Verifiable digital ownership through NFTs and blockchain records</li>
        <li>Programmable royalties ensuring creators profit from secondary sales</li>
        <li>Community ownership of platforms through governance tokens</li>
        <li>New monetization models beyond advertising and subscriptions</li>
      </ul>
      
      <p>These ideas attracted significant investment and attention during 2021 and early 2022, with numerous Web3 creator platforms launching amid soaring cryptocurrency valuations and NFT sales.</p>
      
      <h2>The Current Reality</h2>
      
      <p>Today, the landscape looks considerably different. The crypto market downturn, regulatory scrutiny, and technical challenges have tempered expectations. Many Web3 creator platforms have struggled with adoption beyond crypto enthusiasts, and several high-profile projects have shut down entirely.</p>
      
      <p>However, dismissing Web3's impact on the creator economy would be premature. While the space has contracted, several important developments suggest evolution rather than extinction:</p>
      
      <h3>1. Integration with Existing Platforms</h3>
      
      <p>Rather than building parallel ecosystems, Web3 technologies are increasingly being integrated into established creator platforms. Examples include:</p>
      
      <ul>
        <li>Instagram and Twitter/X supporting NFT profile pictures and digital collectibles</li>
        <li>Spotify exploring blockchain-based royalty distribution systems</li>
        <li>Medium incorporating token-gated content options</li>
      </ul>
      
      <p>This hybrid approach brings Web3 capabilities to existing audiences rather than requiring creators to build new followings on blockchain-native platforms.</p>
      
      <h3>2. Focus on Utility Over Speculation</h3>
      
      <p>The most successful remaining Web3 creator projects emphasize practical utility rather than speculative value:</p>
      
      <ul>
        <li>Access-oriented NFTs that unlock experiences, communities, or exclusive content</li>
        <li>Blockchain-based intellectual property licensing systems</li>
        <li>Decentralized attribution and royalty tracking for collaborative works</li>
        <li>Token-based community funding for creative projects</li>
      </ul>
      
      <p>These applications address genuine pain points for creators rather than simply tokenizing digital assets for trading.</p>
      
      <h3>3. Improved User Experience</h3>
      
      <p>Technical barriers that previously limited Web3 adoption are gradually being addressed:</p>
      
      <ul>
        <li>Wallet solutions that don't require managing private keys</li>
        <li>Layer-2 scaling solutions reducing transaction costs</li>
        <li>"Web3 abstraction" interfaces that hide blockchain complexity</li>
        <li>Fiat on-ramps that don't require cryptocurrency knowledge</li>
      </ul>
      
      <p>These improvements make Web3 tools more accessible to mainstream creators and their audiences.</p>
      
      <h2>Persistent Challenges</h2>
      
      <p>Despite progress, several challenges continue to limit Web3's impact on the broader creator economy:</p>
      
      <h3>1. Regulatory Uncertainty</h3>
      
      <p>The legal status of tokens, NFTs, and decentralized autonomous organizations (DAOs) remains unclear in many jurisdictions. This uncertainty makes it difficult for large platforms and institutional players to fully commit to Web3 models.</p>
      
      <h3>2. Environmental Concerns</h3>
      
      <p>Although many blockchains have transitioned to less energy-intensive consensus mechanisms, the environmental reputation of blockchain technology continues to concern many creators and their audiences.</p>
      
      <h3>3. Market Education</h3>
      
      <p>The concepts underlying Web3 remain complex and unfamiliar to many creators and consumers. Significant education is still needed to communicate benefits in terms that resonate beyond the crypto-native audience.</p>
      
      <h3>4. Volatility and Sustainability</h3>
      
      <p>Cryptocurrency volatility continues to complicate business models based on tokens. Creating sustainable economics that don't depend on speculative token appreciation remains challenging.</p>
      
      <h2>Emerging Models Worth Watching</h2>
      
      <p>Several approaches show particular promise for the next phase of Web3's impact on the creator economy:</p>
      
      <h3>1. Tokenized Patronage</h3>
      
      <p>Platforms like Corite and Catalog allow musicians to raise funds by selling fractional royalty rights as tokens, creating aligned incentives between creators and their supporters while maintaining creator independence.</p>
      
      <h3>2. On-Chain Attribution</h3>
      
      <p>Projects like Story Protocol are building infrastructure for tracking creative contributions and automatically distributing royalties for collaborative works and derivative content—addressing a longstanding challenge in creative industries.</p>
      
      <h3>3. Composable Content</h3>
      
      <p>Systems that allow creators to define programmable licensing terms for their work enable new forms of remixing, collaboration, and monetization that weren't previously possible at scale.</p>
      
      <h3>4. Community-Owned Platforms</h3>
      
      <p>Creator collectives using DAO structures to build and govern their own platforms offer an alternative to both traditional tech platforms and individual creator businesses.</p>
      
      <h2>The Path Forward</h2>
      
      <p>Web3 is unlikely to "replace" the existing creator economy as some early proponents claimed. Instead, we're seeing a more nuanced evolution where:</p>
      
      <ul>
        <li>Web3 tools become part of creators' broader technology stacks</li>
        <li>Blockchain functionality is abstracted away behind user-friendly interfaces</li>
        <li>Value propositions focus on solving specific creator problems rather than general decentralization</li>
        <li>Integration with existing platforms brings Web3 capabilities to where creators already have audiences</li>
      </ul>
      
      <p>For creators evaluating Web3 opportunities today, the key questions have shifted from "How can I cash in on the NFT boom?" to "Which of these tools genuinely helps me build sustainable relationships with my audience and better monetize my work?"</p>
      
      <p>The creators finding success with Web3 approaches today are those focusing on long-term community building, creative experimentation, and solving genuine pain points—rather than chasing short-term token gains or speculative markets.</p>
      
      <p>While the hype cycle has certainly cooled, the fundamental promise of Web3 for creators—more direct relationships, better ownership models, and new forms of collaboration—remains relevant and continues to drive innovation in this space.</p>
    `,
  },
  {
    id: 'b3',
    title: 'The Return of Hardware: Why Physical Products Matter in a Software World',
    excerpt: 'As software eats the world, a countertrend is emerging: innovative hardware is making a comeback in tech.',
    category: 'Blog',
    author: {
      name: 'Nathan Rivera',
      avatar: 'https://i.pravatar.cc/150?img=9',
    },
    date: '1 week ago',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    slug: 'hardware-return-physical-products-matter',
    content: `
      <p>For over a decade, the conventional wisdom in tech has been that "software is eating the world." This mantra, coined by venture capitalist Marc Andreessen in 2011, captured the massive shift toward software-based business models and the declining importance of hardware as a differentiator. But a curious countertrend has emerged: hardware innovation is experiencing a renaissance, with physical products once again becoming central to the strategies of leading tech companies.</p>
      
      <h2>The Software-Centric Decade</h2>
      
      <p>The 2010s were dominated by software-first thinking. Venture capital flowed predominantly to SaaS businesses with their attractive recurring revenue models and capital efficiency. Consumer tech was dominated by apps and platforms rather than devices. Even traditional hardware manufacturers tried to reposition themselves as software and services companies.</p>
      
      <p>This shift made sense for several reasons:</p>
      
      <ul>
        <li>Software scales with near-zero marginal costs</li>
        <li>Updates and improvements can be deployed instantly</li>
        <li>Software businesses typically have higher gross margins</li>
        <li>Hardware was increasingly commoditized</li>
      </ul>
      
      <h2>The Hardware Comeback</h2>
      
      <p>Despite these advantages of software, we're now seeing a resurgence of investment and innovation in hardware across multiple sectors. This revival is driven by several factors:</p>
      
      <h3>1. AI's Computational Demands</h3>
      
      <p>The rise of AI, particularly large language models and generative AI, has created enormous demand for specialized computing hardware. Companies like Nvidia have seen their valuations soar as their GPUs have become essential infrastructure for AI development. Meanwhile, tech giants are investing billions in custom AI chips:</p>
      
      <ul>
        <li>Google's TPUs (Tensor Processing Units)</li>
        <li>Amazon's Trainium and Inferentia chips</li>
        <li>Apple's Neural Engine</li>
        <li>Microsoft's rumored "Athena" AI accelerator</li>
      </ul>
      
      <p>These investments reflect the recognition that purpose-built hardware is necessary to advance AI capabilities cost-effectively.</p>
      
      <h3>2. Control of the Full Stack</h3>
      
      <p>Leading tech companies have realized that controlling both hardware and software creates strategic advantages:</p>
      
      <ul>
        <li>Apple's vertical integration of chips, devices, and services has driven its market-leading performance</li>
        <li>Google has expanded from Pixel phones to a broader hardware ecosystem</li>
        <li>Amazon continues to develop new Echo devices and other hardware</li>
        <li>Microsoft has built out its Surface line and acquired gaming hardware through Activision Blizzard</li>
      </ul>
      
      <p>This integrated approach allows for better performance, differentiated features, and greater control over the user experience.</p>
      
      <h3>3. The Physical-Digital Convergence</h3>
      
      <p>As computing extends beyond screens into the physical world, hardware innovation becomes essential:</p>
      
      <ul>
        <li>AR/VR headsets require breakthrough display, sensing, and input technologies</li>
        <li>Smart home devices blend into our living spaces with novel form factors</li>
        <li>Wearable technology integrates computing with fashion and health monitoring</li>
        <li>Autonomous vehicles and drones bring computing into transportation</li>
      </ul>
      
      <p>These applications demand innovations in miniaturization, energy efficiency, sensors, and materials that purely software-focused approaches cannot address.</p>
      
      <h3>4. Resilient Supply Chains</h3>
      
      <p>The pandemic and geopolitical tensions highlighted the risks of extended global supply chains and just-in-time manufacturing. This has led to:</p>
      
      <ul>
        <li>Reshoring of manufacturing for critical components</li>
        <li>Major government investments in semiconductor production</li>
        <li>Greater attention to supply chain resilience in hardware development</li>
      </ul>
      
      <p>These shifts have renewed focus on the strategic importance of hardware manufacturing capabilities.</p>
      
      <h2>Case Studies in Hardware Innovation</h2>
      
      <p>Several recent product launches highlight how hardware innovation is creating new categories and experiences:</p>
      
      <h3>Apple Vision Pro</h3>
      
      <p>Apple's spatial computing headset represents a bet that the future of computing requires radical hardware innovation. With its advanced display technology, eye and hand tracking, and spatial audio, the Vision Pro demonstrates that new computing paradigms demand breakthrough hardware.</p>
      
      <h3>Humane AI Pin</h3>
      
      <p>This wearable AI device attempts to reimagine the smartphone as a small, voice-controlled badge with a laser projector. While initial reviews have been mixed, the Humane Pin represents the kind of hardware experimentation that's becoming more common as companies seek alternatives to traditional form factors.</p>
      
      <h3>Anthropic's Claude Computer</h3>
      
      <p>Anthropic, primarily known for its Claude AI assistant, has announced plans to develop dedicated AI hardware optimized for running its models. This move from a pure AI company into hardware development signals the importance of custom silicon for competitive advantage in AI.</p>
      
      <h3>Framework Laptop</h3>
      
      <p>This modular, repairable laptop has found success by emphasizing hardware sustainability and user customization—precisely the aspects that software-only approaches cannot address. Framework's growth demonstrates demand for hardware innovation even in mature categories.</p>
      
      <h2>The New Hardware Playbook</h2>
      
      <p>Today's hardware innovation differs from previous eras in several important ways:</p>
      
      <h3>1. Software-Defined Hardware</h3>
      
      <p>Modern hardware products are increasingly programmable and updatable. Tesla's vehicles improve through software updates, Sonos speakers gain new features over time, and even complex processors are partially reconfigurable after deployment. This approach combines the flexibility of software with the performance of specialized hardware.</p>
      
      <h3>2. Hardware-as-a-Service</h3>
      
      <p>Business models are evolving to offer hardware through subscription services that include regular upgrades. Examples include Peloton's subscription-bundled equipment, Whoop's fitness wearable subscription, and Apple's iPhone upgrade program. These models align hardware development with recurring revenue approaches.</p>
      
      <h3>3. Rapid Prototyping and Iteration</h3>
      
      <p>Advanced manufacturing techniques like 3D printing, combined with modular electronics platforms, have accelerated hardware development cycles. While still not as fast as software iteration, hardware development can now move much more quickly than in previous decades.</p>
      
      <h3>4. Embedded ML and Edge Computing</h3>
      
      <p>As machine learning capabilities move from the cloud to devices, hardware design must balance computing power, energy efficiency, and privacy. This creates opportunities for specialized hardware that excels at specific AI tasks while minimizing power consumption.</p>
      
      <h2>Challenges and Opportunities</h2>
      
      <p>The hardware renaissance faces several challenges:</p>
      
      <ul>
        <li>Supply chain complexity and dependence on limited suppliers for critical components</li>
        <li>Higher capital requirements compared to software businesses</li>
        <li>Longer development cycles that can be difficult to align with fast-moving markets</li>
        <li>Environmental concerns about resource use and electronic waste</li>
      </ul>
      
      <p>However, these challenges also create opportunities for companies that can address them effectively:</p>
      
      <ul>
        <li>Sustainable hardware design with repairability and recyclability built in</li>
        <li>Leveraging advanced manufacturing to reduce minimum viable scales</li>
        <li>Creating hardware platforms that improve with software updates over time</li>
        <li>Developing new business models that align hardware economics with software-like revenues</li>
      </ul>
      
      <h2>Looking Forward</h2>
      
      <p>The renewed importance of hardware doesn't negate software's crucial role—rather, it highlights that the most valuable innovations often emerge from the interplay between the two. Companies that excel at integrating hardware and software capabilities will likely have significant advantages in the coming decade.</p>
      
      <p>For investors, this shift suggests reconsidering the software-only focus that has dominated tech investment. Hardware-focused startups with strong software integration and innovative business models may represent undervalued opportunities.</p>
      
      <p>For entrepreneurs, the hardware renaissance opens new possibilities for creating distinctive products that software alone cannot replicate. While hardware ventures remain challenging, the potential for differentiation and lasting value is substantial.</p>
      
      <p>The future of technology isn't just software eating the world—it's the thoughtful integration of software and hardware creating experiences and capabilities that neither could achieve alone.</p>
    `,
  },
  {
    id: 'b4',
    title: 'The End of Passwords: How Passkeys Are Finally Changing Authentication',
    excerpt: 'After decades of security experts predicting the death of passwords, passkeys are making it a reality.',
    category: 'Blog',
    author: {
      name: 'Priya Sharma',
      avatar: 'https://i.pravatar.cc/150?img=10',
    },
    date: '2 weeks ago',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80',
    slug: 'end-passwords-passkeys-changing-authentication',
    content: `
      <p>For decades, cybersecurity experts have predicted the demise of passwords, yet they've persisted as our primary means of digital authentication despite their well-known flaws. Passwords are difficult to remember, easy to steal, frequently reused, and fundamentally insecure. Now, a new standard called passkeys is finally gaining the momentum needed to replace passwords across the digital ecosystem.</p>
      
      <h2>What Are Passkeys?</h2>
      
      <p>Passkeys are a new authentication method based on public key cryptography. Unlike passwords, which are shared secrets that users must remember and type, passkeys use a pair of cryptographic keys:</p>
      
      <ul>
        <li>A private key that stays securely stored on the user's device</li>
        <li>A public key that is registered with the website or application</li>
      </ul>
      
      <p>When logging in, the website sends a challenge to the user's device, which is signed using the private key. This signature is verified with the public key, allowing authentication without ever transmitting a password that could be intercepted or stolen in a data breach.</p>
      
      <p>For users, the experience typically involves using the same biometric authentication they already use to unlock their devices—a fingerprint, face scan, or device PIN—rather than typing a password.</p>
      
      <h2>Why Passkeys Are Superior to Passwords</h2>
      
      <h3>1. Enhanced Security</h3>
      
      <p>Passkeys offer significantly better security than passwords for several reasons:</p>
      
      <ul>
        <li>Phishing resistance: Since passkeys are bound to specific websites, phishing attacks that trick users into entering credentials on fake sites don't work.</li>
        <li>No shared secrets: There's no password to steal in transit or from a server database.</li>
        <li>Local authentication: The private key never leaves the user's device, so remote attacks are ineffective.</li>
        <li>Resistance to brute force: Cryptographic keys aren't vulnerable to password-cracking techniques.</li>
      </ul>
      
      <h3>2. Improved User Experience</h3>
      
      <p>Beyond security, passkeys offer substantial usability benefits:</p>
      
      <ul>
        <li>No passwords to remember or type</li>
        <li>Faster login process using biometrics already set up on devices</li>
        <li>No need for password managers or complex password policies</li>
        <li>Reduced friction during account creation</li>
        <li>No more password reset processes when forgotten</li>
      </ul>
      
      <h3>3. Cross-Platform Standardization</h3>
      
      <p>Unlike previous attempts to replace passwords, passkeys benefit from broad industry support through the FIDO Alliance and W3C standards. This means passkeys work across:</p>
      
      <ul>
        <li>Different operating systems (iOS, Android, Windows, macOS)</li>
        <li>Major browsers (Chrome, Safari, Firefox, Edge)</li>
        <li>Various authentication methods (biometrics, PINs, security keys)</li>
      </ul>
      
      <p>This standardization is crucial for widespread adoption and interoperability.</p>
      
      <h2>The Ecosystem Reaches Critical Mass</h2>
      
      <p>While the underlying technology has existed for several years as FIDO2 authentication, 2023-2024 has seen passkeys reach critical mass through several key developments:</p>
      
      <h3>Platform Integration</h3>
      
      <p>All major platform providers now support passkeys:</p>
      
      <ul>
        <li>Apple has integrated passkey support across iOS, macOS, and Safari</li>
        <li>Google has added passkey support to Android and Chrome</li>
        <li>Microsoft supports passkeys across Windows and Edge</li>
        <li>Password managers like 1Password, Dashlane, and Bitwarden have added passkey support</li>
      </ul>
      
      <p>This creates a complete ecosystem where users can create and use passkeys across their devices.</p>
      
      <h3>Major Service Adoption</h3>
      
      <p>Many high-profile services now support passkeys:</p>
      
      <ul>
        <li>Google accounts</li>
        <li>Microsoft accounts</li>
        <li>PayPal</li>
        <li>eBay</li>
        <li>Adobe</li>
        <li>Amazon</li>
        <li>Best Buy</li>
        <li>WhatsApp</li>
        <li>TikTok</li>
      </ul>
      
      <p>This growing list provides users with opportunities to experience passkeys across their digital lives.</p>
      
      <h3>Developer Tools</h3>
      
      <p>Implementation has become significantly easier for developers with:</p>
      
      <ul>
        <li>Simplified APIs in major web platforms</li>
        <li>Authentication services offering passkey support as a standard feature</li>
        <li>Open-source libraries for various programming languages</li>
        <li>Better documentation and implementation guides</li>
      </ul>
      
      <p>These tools reduce the technical barriers that previously slowed adoption of advanced authentication methods.</p>
      
      <h2>Remaining Challenges</h2>
      
      <p>Despite the progress, several challenges remain before passwords can truly be eliminated:</p>
      
      <h3>1. Account Recovery</h3>
      
      <p>If a user loses their device containing passkeys, recovery methods are still evolving. Current approaches include:</p>
      
      <ul>
        <li>Cloud sync of passkeys (with platform providers like Apple, Google, or Microsoft)</li>
        <li>Backup passkeys on other devices</li>
        <li>Recovery codes (which reintroduce some password-like vulnerabilities)</li>
      </ul>
      
      <p>The industry is still working to balance security and convenience in recovery scenarios.</p>
      
      <h3>2. Legacy System Compatibility</h3>
      
      <p>Many existing systems were built around password authentication and require significant updates to support passkeys. Organizations with large, complex IT infrastructures face challenges in transitioning completely.</p>
      
      <h3>3. User Education</h3>
      
      <p>The concept of passkeys remains unfamiliar to many users. Clear education about how passkeys work and their benefits is essential for driving adoption, particularly for non-technical users.</p>
      
      <h3>4. Shared Device Scenarios</h3>
      
      <p>Passkeys present challenges for shared device scenarios, such as family computers or public terminals. Solutions for these use cases are still developing.</p>
      
      <h2>Implementation for Businesses</h2>
      
      <p>For organizations looking to implement passkeys, several best practices have emerged:</p>
      
      <h3>1. Gradual Rollout</h3>
      
      <p>Offering passkeys alongside existing password options allows users to opt in at their own pace while the technology matures. Many services are following this approach rather than forcing an immediate switch.</p>
      
      <h3>2. Clear User Guidance</h3>
      
      <p>Providing simple explanations and setup guides helps users understand how to create and use passkeys. The most successful implementations include visual guidance throughout the process.</p>
      
      <h3>3. Comprehensive Testing</h3>
      
      <p>Testing across various platforms, devices, and browsers is essential, as passkey implementations still have some inconsistencies between ecosystems.</p>
      
      <h3>4. Fallback Authentication</h3>
      
      <p>Maintaining secondary authentication methods for edge cases where passkeys aren't available or fail ensures users don't lose access to their accounts.</p>
      
      <h2>The Road Ahead</h2>
      
      <p>As passkey adoption continues to accelerate, we can expect several developments in the near future:</p>
      
      <ul>
        <li>Improved cross-platform synchronization of passkeys</li>
        <li>More sophisticated recovery mechanisms</li>
        <li>Integration with emerging identity systems</li>
        <li>Hardware security keys optimized for passkey support</li>
        <li>Enterprise management tools for passkeys in organizational settings</li>
      </ul>
      
      <p>Regulatory frameworks like the EU's eIDAS and various data protection regulations are also likely to evolve to recognize passkeys as a more secure authentication method, potentially driving further adoption.</p>
      
      <h2>Conclusion</h2>
      
      <p>After decades of predictions about the death of passwords, passkeys represent the first authentication alternative with the technical capability, user experience benefits, and ecosystem support needed to truly replace passwords at scale.</p>
      
      <p>While the transition will take time, the foundation has been laid for a more secure and usable authentication system. Organizations that begin implementing passkeys now will be at the forefront of this significant shift in how we secure our digital identities.</p>
      
      <p>For users, the opportunity to finally move beyond remembering dozens of complex passwords represents one of the most significant improvements to digital security and convenience in years—a rare case where enhanced security also means less hassle.</p>
    `,
  }
];

// Helper function to find article by slug
export const getArticleBySlug = (slug: string): NewsArticle | undefined => {
  return [...newsArticles, ...blogPosts].find(article => article.slug === slug);
};

// Helper function to find podcast by slug
export const getPodcastBySlug = (slug: string): PodcastEpisode | undefined => {
  return podcastEpisodes.find(podcast => podcast.slug === slug);
};

// Helper function to get articles by category
export const getArticlesByCategory = (category: string, subcategory?: string): NewsArticle[] => {
  let filteredArticles = [...newsArticles, ...blogPosts].filter(
    article => article.category.toLowerCase() === category.toLowerCase()
  );
  
  // If subcategory is provided, filter further (note: our current data doesn't have subcategories in articles)
  // This would require enhancing the articles data structure
  
  return filteredArticles;
};

// Helper function to get podcasts by category (e.g., 'Equity', 'StrictlyVC')
export const getPodcastsByCategory = (podcastName: string): PodcastEpisode[] => {
  return podcastEpisodes.filter(
    podcast => podcast.podcastName.toLowerCase() === podcastName.toLowerCase()
  );
};

// Helper function to find category by name
export const getCategoryByName = (name: string): CategoryData | undefined => {
  return categories.find(
    category => category.name.toLowerCase() === name.toLowerCase()
  );
};
