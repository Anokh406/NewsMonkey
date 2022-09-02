import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles= [
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Carmen Reinicke",
    "title": "Stock futures fall slightly ahead of key August jobs report due Friday - CNBC",
    "description": "Here's how stocks are trading ahead of Friday's key August jobs report.",
    "url": "https://www.cnbc.com/2022/09/01/stock-futures-are-flat-ahead-of-key-august-jobs-report-due-friday.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107112802-NYSE-Trading-Floor-OB-Photo-220901-CC-PRESS-3.jpg?v=1662056425&w=1920&h=1080",
    "publishedAt": "2022-09-02T07:59:00Z",
    "content": "U.S. stock futures were flat Friday morning as investors await a key jobs report for August due Friday that will give more information about the state of the economy.\r\nDow Jones Industrial Average fu… [+1180 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Elizabeth Wolfe and Aya Elamroussi, CNN",
    "title": "Explosive growth of fire in Los Angeles County should be a 'wake-up call' for the days ahead, official says - CNN",
    "description": "After a wildfire raging in Los Angeles County swelled to more than 5,200 acres in less than 48 hours, a top fire official warned the explosive growth should be a \"wake-up call\" to residents.",
    "url": "https://www.cnn.com/2022/09/01/weather/route-wildfire-los-angeles-county/index.html",
    "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220901033045-01-route-wildfire-los-angeles-county-super-tease.jpg",
    "publishedAt": "2022-09-02T07:22:00Z",
    "content": "(CNN)After a wildfire raging in Los Angeles County swelled to more than 5,200 acres in less than 48 hours, a top fire official warned the explosive growth should be a \"wake-up call\" to residents.\r\nTh… [+3202 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": null,
    "title": "Biden targets 'extremist' Trump allies as democratic threat in fraught political moment - Reuters.com",
    "description": "U.S. President Joe Biden charged Republican allies of Donald Trump with undermining the country's democracy and urged voters on Thursday to reject extremism ahead of November's midterm elections.",
    "url": "https://www.reuters.com/world/us/biden-confronts-extremism-perilous-moment-presidency-country-2022-09-01/",
    "urlToImage": "https://www.reuters.com/resizer/BvkVeEeCca-QRvTGdkkMnhX-ssM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FS33SR62YFOTFOB3S22DCPD5RA.jpg",
    "publishedAt": "2022-09-02T06:34:00Z",
    "content": "PHILADELPHIA, Sept 1 (Reuters) - U.S. President Joe Biden charged Republican allies of Donald Trump with undermining the country's democracy and urged voters on Thursday to reject extremism ahead of … [+4617 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Brad Lendon, Vedika Sud, Esha Mitra and Swati Gupta, CNN",
    "title": "India's first homegrown aircraft carrier puts it among world's naval elites - CNN",
    "description": "India joined an elite league of the world's naval powers on Friday, when it commissioned its first domestically built aircraft carrier, the INS Vikrant.",
    "url": "https://www.cnn.com/2022/09/02/asia/india-indigenous-aircraft-carrier-vikrant-commissioned-intl-hnk-ml/index.html",
    "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220901231431-01-india-aircraft-intl-hnk-super-tease.jpg",
    "publishedAt": "2022-09-02T05:55:00Z",
    "content": null
    },
    {
    "source": {
    "id": "the-washington-post",
    "name": "The Washington Post"
    },
    "author": "Ana Herrero, Marina Lopes",
    "title": "Argentina says it detained man who tried to shoot Vice President Kirchner - The Washington Post",
    "description": "Vice President Cristina Fernández de Kirchner is unharmed and being guarded by law enforcement after the incident, which was caught on video.",
    "url": "https://www.washingtonpost.com/world/2022/09/01/argentina-cristina-kirchner-gun-attack/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3CL3V3RKLYI63KIK7TSACXP4R4.jpg&w=1440",
    "publishedAt": "2022-09-02T05:14:00Z",
    "content": "Comment on this story\r\nArgentina detained a man who tried to shoot Vice President Cristina Fernández de Kirchner on Thursday evening, President Alberto Fernández said, calling the attempted attack th… [+4029 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "The Cavs started talking with the Jazz when the Knicks extended RJ Barrett - Woj - ESPN",
    "description": "Adrian Wojnarowski joins Scott Van Pelt on SportsCenter to detail the Donovan Mitchell trade to the Cleveland Cavaliers.✔️Subscribe to ESPN+ http://espnplus....",
    "url": "https://www.youtube.com/watch?v=McQTGMxljvE",
    "urlToImage": "https://i.ytimg.com/vi/McQTGMxljvE/maxresdefault.jpg",
    "publishedAt": "2022-09-02T04:20:32Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "Tom's Guide"
    },
    "author": "Philip Michaels",
    "title": "iPhone 14 upgrade guide — who should upgrade from their current iPhone? - Tom's Guide",
    "description": "Here's what you can expect if you upgrade to the iPhone 14, based on current rumors",
    "url": "https://www.tomsguide.com/news/iphone-14-upgrade-guide-who-should-upgrade-from-their-current-iphone",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/drYWUJb3AjShuf49bstDS3-1200-80.jpg",
    "publishedAt": "2022-09-02T04:00:31Z",
    "content": "By this time next week, phone shoppers on the hunt for the best iPhone are going to have a decision to make — should they upgrade to any of the iPhone 14 models expected to appear next Wednesday at t… [+16750 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Variety"
    },
    "author": "Michael Nordine",
    "title": "‘Rings of Power’ Recap: First Two Episodes Let ‘Lord of the Rings’ Fans Breathe a Sigh of Relief - Variety",
    "description": "SPOILER ALERT: Do not read unless you have watched the first two episodes of “The Lord of the Rings: The Rings of Power,” now streaming on Amazon Prime Video. That sound you just heard is neither drums, drums in the deep nor the roar of a Balrog. It was actua…",
    "url": "https://variety.com/2022/tv/news/rings-of-power-premiere-recap-episodes-one-two-galadriel-1235357785/",
    "urlToImage": "https://variety.com/wp-content/uploads/2022/09/RPAZ_S1_210712_GRAMAT_00023_R5.jpg?w=1000",
    "publishedAt": "2022-09-02T03:00:00Z",
    "content": "SPOILER ALERT: Do not read unless you have watched the first two episodes of “The Lord of the Rings: The Rings of Power,” now streaming on Amazon Prime Video.\r\nThat sound you just heard is neither dr… [+9046 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Guardian"
    },
    "author": "Lizzy Davies",
    "title": "Urgent aid appeal launched as satellite images show a third of Pakistan underwater - The Guardian",
    "description": "Humanitarian workers expect conditions to worsen as monsoon rains continue and say millions face a terrible winter",
    "url": "https://amp.theguardian.com/global-development/2022/sep/01/pakistan-floods-satellite-images-underwater-urgent-aid-appeal",
    "urlToImage": "https://i.guim.co.uk/img/media/11fb77833c363c7f7294c09d1eb06830fd9d7eeb/0_0_3200_1920/master/3200.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3803b37089e97daa61f361b8ccefaa87",
    "publishedAt": "2022-09-02T02:27:00Z",
    "content": "Aid workers have appealed for urgent donations to fight the absolutely devastating impact of flooding in Pakistan, as new satellite images appeared to confirm that a third of the country is now under… [+5084 chars]"
    },
    {
    "source": {
    "id": "entertainment-weekly",
    "name": "Entertainment Weekly"
    },
    "author": "Sydney Bucksbaum",
    "title": "Jennifer Lopez reveals Ben Affleck quoted his own movie during wedding reception speech - Entertainment Weekly News",
    "description": "\"That is one of my favorite lines that Ben wrote from a movie he directed called <em>Live By Night</em>. He also said it the night of our wedding reception in his speech, and I thought...how perfect.\"",
    "url": "https://ew.com/celebrity/jennifer-lopez-reveals-ben-affleck-quoted-his-own-movie-during-wedding-speech/",
    "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B945%2C190%5D&w=1500&h=750&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F09%2F02%2Fjennifer-lopez-ben-affleck-wedding-36-20082022.jpg",
    "publishedAt": "2022-09-02T02:17:00Z",
    "content": "Ben Affleck took a page out of his own book during his wedding toJennifer Lopez.\r\nIn her On the JLo newsletter Thursday, Lopez shared intimate details and photos from their Georgia nuptials on Sept. … [+3321 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "WESH Orlando"
    },
    "author": null,
    "title": "Officials: 1 dead, 1 injured after plane flips over at Orlando Executive Airport - WESH 2 Orlando",
    "description": "\"Unfortunately, that system moved in so fast, it was so severe with very heavy gusty winds that it actually flipped the airplane,\" said Orlando Executive Airport director and air traffic controller, Judith-Ann Jarrette.",
    "url": "https://www.wesh.com/article/orlando-airport-plane-flipped/41059551",
    "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/planeflipped-png-1662071851.png?crop=0.989xw:1.00xh;0.00653xw,0&resize=1200:*",
    "publishedAt": "2022-09-02T02:12:00Z",
    "content": "ORLANDO, Fla. —One person is dead and another was sent to the hospital after a plane at the Orlando Executive Airport flipped over during severe weather Thursday, according to the Orlando Fire Depart… [+1291 chars]"
    },
    {
    "source": {
    "id": "the-washington-post",
    "name": "The Washington Post"
    },
    "author": "Emmanuel Felton, Molly Hennessy-Fiske",
    "title": "State and federal officials mount response to Jackson, Miss., water crisis - The Washington Post",
    "description": "Officials began distributing water for city residents who for days have struggled as the state capital's water facility foundered.",
    "url": "https://www.washingtonpost.com/nation/2022/09/01/jackson-mississippi-water-crisis/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/D7EHEZRKEEI63KIK7TSACXP4R4.jpg&w=1440",
    "publishedAt": "2022-09-02T02:07:00Z",
    "content": "Comment on this story\r\nJACKSON, Miss. Gov. Tate Reeves on Thursday deployed 600 National Guard troops at mass water distribution sites across the Mississippi capital as workers struggled to repair be… [+8424 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NBCSports.com"
    },
    "author": "Mike Florio",
    "title": "Russell Wilson: It’s not about money, it’s about Super Bowls - NBC Sports",
    "description": "Broncos quarterback Russell Wilson has spent 10 years in the NFL, all with the Seahawks. He’s now committed to Denver for the next seven, before he ever even plays in a game as a member of the team.At a press conference announcing his new contract on Thursday…",
    "url": "https://profootballtalk.nbcsports.com/2022/09/01/russell-wilson-its-not-about-money-its-about-super-bowls/",
    "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/09/GettyImages-1417174921-e1662082526926.jpg",
    "publishedAt": "2022-09-02T01:38:00Z",
    "content": "Broncos quarterback Russell Wilson has spent 10 years in the NFL, all with the Seahawks. Hes now committed to Denver for the next seven, before he ever even plays in a game as a member of the team.\r\n… [+2890 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Dan Wetzel",
    "title": "Legacies of Serena and Venus Williams also rest on power of sisterhood. Let's remember that after doubles finale together at US Open - Yahoo Sports",
    "description": "They changed the sport and inspired lives. They did it in lockstep. If there were rivalries, they were hidden. If there was jealousy, it stayed a secret. The...",
    "url": "https://sports.yahoo.com/legacies-of-serena-and-venus-williams-also-rest-on-power-of-sisterhood-doubles-finale-013106999.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/XqIipHZg5y2ELIdfPtceFA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-08/8303b0b0-2a54-11ed-bfbc-e8b60e53c928",
    "publishedAt": "2022-09-02T01:31:00Z",
    "content": "Venus and Serena Williams were born 15 months apart into one of the most ridiculous albeit successful sporting pipe dreams ever formulated.\r\nTheir father, Richard, had watched the womens singles fina… [+6768 chars]"
    },
    {
    "source": {
    "id": "fox-news",
    "name": "Fox News"
    },
    "author": "Bradford Betz",
    "title": "NASA's James Webb releases first direct image of a planet outside our solar system - Fox News",
    "description": "NASA'S James Web Telescope released the first direct image of a planet outside our solar system: HIP 65426 b, 100 times farther from its host star than Earth is from the Sun.",
    "url": "https://www.foxnews.com/science/nasas-james-webb-releases-first-direct-image-planet-outside-solar-system",
    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/09/Exoplanet.jpg",
    "publishedAt": "2022-09-02T00:34:52Z",
    "content": "NASA on Thursday shared an image taken by the James Webb Telescope showing the first-ever direct image of a planet outside our solar system. \r\nNASA says the exoplanet, HIP 65426 b, is a gas giant, me… [+1871 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Ashley Strickland",
    "title": "Artemis I launch team is ready for another 'try' on Saturday - CNN",
    "description": "The Artemis I launch team is gearing up for another countdown that will begin early Saturday morning after a range of issues prevented liftoff on Monday. The team completed work at the launchpad and risk assessment to move toward another launch attempt.",
    "url": "https://www.cnn.com/2022/09/01/world/nasa-artemis-1-saturday-launch-update-scn/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220829123019-04-artemis-launch-082922.jpg?q=w_800,c_fill",
    "publishedAt": "2022-09-02T00:17:00Z",
    "content": "Turn to CNN for live coverage from Kennedy Space Center in Florida on Saturday afternoon. Space correspondent Kristin Fisher will bring us moment-by-moment reporting from the launch, along with a tea… [+4789 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Brenda Goodman, CNN",
    "title": "Everything you need to know about the updated Covid-19 boosters - CNN",
    "description": "There's a new kind of Covid-19 shot coming soon to a pharmacy or clinic near you.",
    "url": "https://www.cnn.com/2022/09/01/health/covid-omicron-booster-explainer-wellness/index.html",
    "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220831075627-01-embargo-restricted-updated-pfizer-vaccine-super-tease.jpg",
    "publishedAt": "2022-09-02T00:13:00Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "Bavarian Football Works"
    },
    "author": "zippy86",
    "title": "Transfer Deadline Day: Live updates— Did Chelsea waste nine figures?; Arsenal chasing Douglas Luiz down to th… - Bavarian Football Works",
    "description": "Quick hit round-up of the hectic last-minute loans and transfers action around Europe, even as FC Bayern sit comfortably and quietly on deadline day.",
    "url": "https://www.bavarianfootballworks.com/2022/9/1/23333141/transfer-deadline-day-updates-fc-barcelona-cristiano-ronaldo-bayern-munich-chelsea-liverpool-arsenal",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/o-wIJ5hokUg5w7C7IvGx4dXAvkM=/0x286:3991x2376/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23989124/1242696846.jpg",
    "publishedAt": "2022-09-02T00:01:32Z",
    "content": "Bayern Munich may be having a quiet deadline day the German transfer window has already closed but the action is hot and heavy around Europe as Bayerns Champions League rivals in England and Spain sc… [+8268 chars]"
    },
    {
    "source": {
    "id": "the-wall-street-journal",
    "name": "The Wall Street Journal"
    },
    "author": "Heather Haddon and Emily Glazer",
    "title": "Starbucks Names Laxman Narasimhan New CEO - WSJ - The Wall Street Journal",
    "description": "The coffee giant’s hiring of Laxman Narasimhan comes months after former head Howard Schultz temporarily took over to steer the chain through rising costs, a unionization push and challenges overseas.",
    "url": "https://www.wsj.com/articles/starbucks-names-laxman-narasimhan-new-ceo-11662062713",
    "urlToImage": "https://images.wsj.net/im-615337/social",
    "publishedAt": "2022-09-01T23:39:00Z",
    "content": "Starbucks named as its new CEO consumer products executive Laxman Narasimhan, months after former head Howard Schultz temporarily \r\ntook over to steer the coffee giant through rising costs, a unioniz… [+389 chars]"
    },
    {
    "source": {
    "id": "the-verge",
    "name": "The Verge"
    },
    "author": "Mitchell Clark",
    "title": "Apple settles lawsuit over its App Store moderation and power - The Verge",
    "description": "Apple has settled a lawsuit with developer and App Store critic Kosta Eleftheriou, after he accused the company of abusing its monopoly power to make life hard for apps that competed with its own.",
    "url": "https://www.theverge.com/2022/9/1/23333362/apple-app-store-lawsuit-flicktype-kosta-eleftheriou-scams",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/9AZP4Waq-e-Pk8oTw6O4_XDFhtw=/0x215:3000x1786/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23925966/acastro_STK045_01.jpg",
    "publishedAt": "2022-09-01T23:27:12Z",
    "content": "Kosta Eleftheriou still has suggestions about how it should deal with scams\r\nIllustration by Alex Castro / The Verge\r\nDeveloper and App Store critic Kosta Eleftheriou has settled his lawsuit with App… [+3538 chars]"
    }
    ]
    constructor(){
      super();
      this.state={
        articles:this.articles,
        loading:false
      }
    }
  render() {
    return (
        <>
        <div className="container">
          <h1 className='text-center text-uppercase text-capitalize'>NewsMonkey -Top headlines</h1>
          <div className="row">
            {this.state.articles.map((element)=>{
           return <div className="col-md-4"  key={element.url}>
                   <NewsItem  title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
            })}
          </div>
        </div>
        </>
    )
  }
}

export default News