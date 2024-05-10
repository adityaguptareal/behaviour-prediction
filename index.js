function numerology(refersh) {
  refersh.preventDefault();
  let user_name = document.getElementById("name").value;
  let dob = document.getElementById("dob-calander").value;

  // Code Changes
  let check_user_name = user_name.trim()
  if (check_user_name === "" || dob === "") {
    if (check_user_name === "") {
      document.getElementById("name").focus();
      alert("Please Enter Your Name and Date of Birth")
    } else {
      document.getElementById("dob-calander").focus();
      alert("Please Enter Your Name and Date of Birth")
    }
    return;
  }
  // else{
  let numerology_number = parseInt(dob[8]) + parseInt(dob[9])
  if (numerology_number.toString().length == 1) {
    numerology_number = numerology_number
  }
  else if (numerology_number.toString().length == 2) {
    let arr = Array.from(numerology_number.toString()).reduce((a, b) => (parseInt(a) + parseInt(b)))
    numerology_number = arr
  }


  if (numerology_number == 1) {
    console.log(user_name)
    let report_content = `<!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="style.css">
        <style>
          
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap');
        </style>
      </head>
      
      <body>
        <nav>
          <div class="logo left">Behaviour Pridiction</div>
          <div class="right">
            <ul class="nav-items">
            <li><a href="">Home</a></li>
            <li><a href="">How to Use</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Privay Policy</a></li>
            <li><a href="">Terms & Condition</a></li>
            </ul>
          </div>
        </nav>
        <div class="hero-section">
          <div class="cta hero-heading">BEHAVIOUR PRIDICTION REPORT</div>
          <div class="cta subheading">Decoding the Person Behaviour</div>
        </div>
        <img src="/ass/glow.png" alt="" class="glow5">
        <img src="/ass/glow.png" alt="" class="glow-for-report">
        <div class="report">
          <div class="report-heading">
            <img src="/ass/report.webp" class="report-icon" height="100px" width="100px" alt="">
            <div class="report-txt-heading user_report" >${user_name} Pridiction report</div>
      
          </div>
          <div class="report-content">
      
            <h2 class="report-txt-heading">Personality and Traits</h2>
            <div class="report-para">
      
            ${user_name} you have a 🙌 giving nature. And you're a good helper 🤝. If someone in your friend 🫂 is in trouble or has any problem then, you are with him or her to support them and to help them overcome their problem.
            ${user_name} you're a trustworthy✅ person and can gain the trust of anyone easily. You're aggressive 😡 in nature and authoritative in quality. </div>
            <div class="report-para">
      
            But, because of you're aggressive nature, you're relation with your family and friend gets bad.It seems that many times you can't understand between you're going and self-respect 🥺. Sometimes your voice gets bitter and because of that you 💔hurt that person. ${user_name} You should improve this.</div>
            
            <h2 class="report-txt-heading">Career and Ambitions</h2>
            <div class="report-para">
      
            ${user_name} you're a 🆓 freedom lover and no one can 🚫forced to work under someone. You can't be happy in you're job 🥺 until you reach in the top.
            ${user_name} it's the quality that you want to ⚡ initiate your project in a job or school. You're a 🎢 risk taker and because of that you always want to go ahead in you're life.</div>
            <div class="report-para">
      
            You're a 😎 attractive personality and whenever you go anywhere all the people are looking at you. You carry an aura on your face. You have 💪 good physique and always carry a glow ✨ in your face.</div>
            
             <h2 class="report-txt-heading">Relationships and Communication</h2>
            <div class="report-para">
      
            ${user_name} In you're relationship you are not lucky😔. But, if you are in a relationship then you can't hesitate to accept it. But, it seems that you always get cheated on or betrayed in a relationship and Your lover 🚶🏻leaves you.  It happens because of you're bad communication 🤬 or you're getting busy with your work.</div>
            <div class="report-para">
      
            ${user_name} you are a quick ⚖️ decision taker and have leadership 🗣️skills. Some tips for you can help you to achieve success or goals in your life. You have to be punctual ⏱️ in you're work and disciplined 🧘🏽.</div>
            
             <h2 class="report-txt-heading">Business and Entrepreneurship</h2>
            <div class="report-para">
      
            But, You're very suitable for 💼 business. You should start your business as 🔜 soon as possible because you can't work under someone 😌. You're a freedom lover and you don't want someone who forces you to work.</div>
            <div class="report-para">
      
            ${user_name} you also like to want to be rich in life. You have many goals and desires which you want to fulfil. You're a quick decision taker therefore you should start you're business career.
            
             <h2 class="report-txt-heading">Personal Growth and </h2>
            <div class="report-para">
      
            ${user_name} you tend to adhere to youre ideas, especially when you convinced you are on the right track . It is difficult to persuade you to change you're mode of behavior, opinion, conviction, or decision. you also formulate youre ideas quickly .</div>
            <div class="report-para">
      
            ${user_name} you have a clear understanding and a particular point of view, which dominates throughout all the things you do in life . you have a strong individuality and need a lot of attention and respect ✨; you are themselves caring for others and wish others to reciprocate . you make friends easily  and break friendships with difficulty .</div>
            
             <h2 class="report-txt-heading">Authoritative and </h2>
            <div class="report-para">
      
            ${user_name} you are authoritative  and also very fortunate in getting help from persons of authority.
            ${user_name} you like freedom and dislike restraint ; you cannot bear interference in youre work, at any cost. you are creative and inventive   and, most of the time, have positive and optimistic attitudes . Generally high spirited , you are large hearted and hardworking people ‍♀️, free from envy , malice , and grudge . you are efficient in you're jobs  , honest and true ✅, and right most of the time. ✅
            </div>
            <div class="report-para">
      
            ${user_name} you labor hard to achieve the top  and most of the time do so. If you do not succeed, you become sad , pessimistic , upset , irritated , and depressed . you like to live luxuriously ✨ and in a royal way  and spend money on pomp and show . ${user_name} you also spend money freely to buy gifts and presents for others  .</div>
            
             <h2 class="report-txt-heading">Good Manners and High Standards</h2>
            <div class="report-para">
      
            you have good manners and good taste ✨; you dislike disorder ‍♀️, laziness , slackness , false pride  , false praise  ‍♀️, false promises  ‍♀️, egotism  , and flattery  . you want freedom with no boundaries ️.
            </div>
             <h2 class="report-txt-heading">Kind, Cooperative, and Adaptable</h2>
            <div class="report-para">
      
            ${user_name} you are extremely kind , cooperative  , and can control you're nerves  ‍♀️. you are fond of traveling ✈️ and can adjust themselves to all kinds of situations  . you enjoy life  and can appreciate art and beauty  .
            <div class="report-para">
      
            ${user_name} you are ready to accept truth  ✅ and change you're opinions, because to them truth is more important than you're opinions  . ${user_name} you become famous in you're society and are admired for you're hard work  , poise  ✨, graciousness  ✨, and generosity  .
      
      
      
      
          </div>
        </div>
        
          `
    document.body.innerHTML = report_content;

  }
  else if (numerology_number == 2) {
    let report_content = `<!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="style.css">
        <style>
          
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap');
        </style>
      </head>
      
      <body>
        <nav>
          <div class="logo left">Behaviour Pridiction</div>
          <div class="right">
            <ul class="nav-items">
            <li><a href="">Home</a></li>
            <li><a href="">How to Use</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Privay Policy</a></li>
            <li><a href="">Terms & Condition</a></li>
            </ul>
          </div>
        </nav>
        <div class="hero-section">
          <div class="cta hero-heading">BEHAVIOUR PRIDICTION REPORT</div>
          <div class="cta subheading">Decoding the Person Behaviour</div>
        </div>
        <img src="/ass/glow.png" alt="" class="glow5">
        <img src="/ass/glow.png" alt="" class="glow-for-report">
        <div class="report">
          <div class="report-heading">
            <img src="/ass/report.webp" class="report-icon" height="100px" width="100px" alt="">
            <div class="report-txt-heading user_report" >${user_name} Pridiction report</div>
      
          </div>
          <div class="report-content">
              <h2 class="report-txt-heading"> Emotional Sensitivity and Social Interaction</h2>
              <div class="report-para">
              ${user_name} you are emotionally unstable 😥. You are sincere, sensitive 🧠. You listen to people and understand them. But many times you have mood swings 🌚🌝. Many times it has been seen that you can't take your decision on time ⏱️. Many people want to connect with you 🤝.</div>
              <div class="report-para">
              If you are meeting with new people or go in the new group you feel that you're listening to them. Therefore, they want to connect with you 👥. You're a center of attraction for female following 👩‍❤️‍👩. You have calm from your mind 🧘‍♀️. You don't like too much planning 📋.</div>
              
              <h2 class="report-txt-heading"> Conflict Resolution and Advisory Role</h2>
              <div class="report-para">
              If there is a dispute between your friends then you're able to solve them 🤝. You are a good advisor 👨‍🏫. And if you advise someone then it will be helpful for them. You are a gentle-looking and sincere 😇. You get hurt easily 💔.</div>
              
              <h2 class="report-txt-heading"> Emotional Vulnerability and Career Guidance</h2>
              <div class="report-para">
              ${user_name} you are an emotional person 😢 and therefore you should not share your emotion with other people because you will try to fool you and you can easily get hurt with them. Many times it has been seen that people around you don't have any intention to hurt you but, you get hurt very easily 😥. For the best career option, you should choose a field which includes caring, artist, and nurturing 🎨. You should look at careers like acting, dancing, singing, designing, comedians 🎭.</div>
              
              <h2 class="report-txt-heading"> Sentimental Nature and Social Interaction</h2>
              <div class="report-para">
              Sometimes you feel very hopeful 😊, sometimes depressed 😞; you are especially sensitive 🧠, moody 🌚🌝, and sentimental 💔. ${user_name} You are peaceful and gentle 🕊️. Your imaginative nature makes you inventive 🧠, but you lack determination 💪 and cannot execute your ideas as forcefully as it can. You need guides to assure them about, promote, and execute your ideas 🤝.</div>
              
              <h2 class="report-txt-heading"> Kind-heartedness and Social Engagement</h2>
              <div class="report-para">
                  ${user_name} You are kind-hearted 💗, gentle 🕊️, helpful 🤝, caring 🧠, and faithful to your duties 👷‍♀️. You treat friendships as sacred 🙏 and sacrifice everything of your own for others 🎁. ${user_name} You become more social and socialize easily 👥. Because of your changeable nature, you are a fast thinker 🧠. You become involved with others emotionally 💕 and face difficulties 😥. ${user_name} You are attractive 💅 and know the art of attracting and infatuating others 💋. You are easily satisfied, which makes you work less 🧘‍♀️ and gives you more time to dwell in the world of imagination 🧠</div>
          </div>
        </div>
        `;
    document.body.innerHTML = report_content;

  }
  else if (numerology_number == 3) {
    let report_content = `<!DOCTYPE html>
 <html lang="en">
 
 <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Document</title>
   <link rel="stylesheet" href="style.css">
   <style>
     
     @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
     @import url('https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap');
   </style>
 </head>
 
 <body>
   <nav>
     <div class="logo left">Behaviour Pridiction</div>
     <div class="right">
       <ul class="nav-items">
       <li><a href="">Home</a></li>
       <li><a href="">How to Use</a></li>
       <li><a href="">Blog</a></li>
       <li><a href="">Privay Policy</a></li>
       <li><a href="">Terms & Condition</a></li>
       </ul>
     </div>
   </nav>
   <div class="hero-section">
     <div class="cta hero-heading">BEHAVIOUR PRIDICTION REPORT</div>
     <div class="cta subheading">Decoding the Person Behaviour</div>
   </div>
   <img src="/ass/glow.png" alt="" class="glow5">
   <img src="/ass/glow.png" alt="" class="glow-for-report">
   <div class="report">
     <div class="report-heading">
       <img src="/ass/report.webp" class="report-icon" height="100px" width="100px" alt="">
       <div class="report-txt-heading user_report" >${user_name} Pridiction report</div>
 
     </div>
     <div class="report-content">
         <h2 class="report-txt-heading"> Ambition and Career</h2>
 <div class="report-para">${user_name} You have good knowledge in every field 📚. You're money cautious 💸. You always thinking about money 💸. You are an ambitious person 💪. You are a hard working person 💼. You are workaholic person 💼.  But because of this you can't give enough time to your family member and many times you are in stress 😩. You are very choosy person 👀. You want limited person or friends in your life. You don't want to have a big friend circle 👥.</div>
 
 <h2 class="report-txt-heading"> Friendship and Support</h2>
 <div class="report-para">${user_name} You know very well to maintain friendship 🤝. ${user_name}  you are always ready to help your friends in tough time 🤝. You want to close friend in your life. By default from your birth you are very much interested in money and finance 💸. It is good for you to choose your career option in finance related fields like CA, Company Secretary, Banking, Insurance 💼.</div>
 
 <h2 class="report-txt-heading"> Personal Traits and Goals</h2>
 <div class="report-para">You are bold, active, hardworking, dependable, popular, disciplined, self-confident, and initiators 💪. You are very ambitious 💪. You like to get ahead in the world 🌎. You want to do something great with your life so you are remembered by posterity 🕊️.</div>
 
 <h2 class="report-txt-heading"> Early Life and Career</h2>
 <div class="report-para">At the beginning of your career, which you start quite early in life, you have to struggle a lot 💪. You are flexible in your ideas and freely adopt what is beneficial from all religious practices 🕊️. Although you do not commit yourselves to any conventional religion, you are religious at heart 🙏. You need a lot of attention, and for that you learn many tricks, such as the art of conversation, expressing yourselves through gestures and postures, and making jokes and puns 😂.</div>
 
 <h2 class="report-txt-heading"> Personal Life and Relationships</h2>
 <div class="report-para">${user_name} You are hardworking throughout your life and keep yourselves busy with something or other all the time 💼. When one task becomes tiresome, you switch to another. In this way, you do many things and earn through many sources 💸. You are successful in the execution of any job you undertake and usually finish what you start 💪. You are fortunate in that you receive love, affection, help, and guidance from elderly people, relatives, and those well-placed in society ❤️.</div>
 
 <h2 class="report-txt-heading"> Physical and Emotional Well-being</h2>
 <div class="report-para">You are strongly built, healthy, and full of stamina 💪. You are always surrounded by members of the opposite sex 👩‍👩‍👧‍👦. A weakness for sex is one of your problems 😳. However, you are selective and engage in refined relationships that are beneficial to you 💕. You are loyal and devoted to your parents 👪. You sacrifice your personal comforts to keep an atmosphere of love and harmony in your family ❤️. Your life partners are usually attractive, chaste, loyal, and give you their full support 💕.</div>
 </div>
 </div>
 `
    document.body.innerHTML = report_content;
  }
  else if (numerology_number == 4) {
    let report_content = `<!DOCTYPE html>
 <html lang="en">
 
 <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Document</title>
   <link rel="stylesheet" href="style.css">
   <style>
     
     @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
     @import url('https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap');
   </style>
 </head>
 
 <body>
   <nav>
     <div class="logo left">Behaviour Pridiction</div>
     <div class="right">
       <ul class="nav-items">
       <li><a href="">Home</a></li>
       <li><a href="">How to Use</a></li>
       <li><a href="">Blog</a></li>
       <li><a href="">Privay Policy</a></li>
       <li><a href="">Terms & Condition</a></li>
       </ul>
     </div>
   </nav>
   <div class="hero-section">
     <div class="cta hero-heading">BEHAVIOUR PRIDICTION REPORT</div>
     <div class="cta subheading">Decoding the Person Behaviour</div>
   </div>
   <img src="/ass/glow.png" alt="" class="glow5">
   <img src="/ass/glow.png" alt="" class="glow-for-report">
   <div class="report">
     <div class="report-heading">
       <img src="/ass/report.webp" class="report-icon" height="100px" width="100px" alt="">
       <div class="report-txt-heading user_report" >${user_name} Pridiction report</div>
 
     </div>
     <div class="report-content">
         <h2 class="report-txt-heading"> Emotional Instability and Uncertainty</h2>
 <div class="report-para">You have to constantly face ups-and-downs 🎢. Because you undergo those changes so suddenly, you develop a doubting nature and cannot trust easily 🤔. Because of your uncertainty, you have to consult and act on the advice of others throughout your lives 🤝. you can undergo pain and suffering without anxiety 💪. ${user_name}you take sudden changes, ups-and-downs, and sufferings easily without getting impatient 🧘‍♀️. you face youre opposition boldly 😤.</div>
 
 <h2 class="report-txt-heading"> Nonconformist Tendencies</h2>
 <div class="report-para">If you are able to work in government, you do not sit with the ruling party but prefer to sit on the opposition benches 🙅‍♀️. you are either on the top or bottom—you do not like to be mediocre or belong to the middle class 🆙️. you have to struggle for your growth and development and have to face obstacles constantly in any job you do, whether small or great 💪.</div>
 
 <h2 class="report-txt-heading"> Criticism and Conflict</h2>
 <div class="report-para">${user_name} you have to face criticism and opposition throughout your lifetime 😔. you create problems for youselves and also generate secret enemies 🤫. your intentions, however, are fair and, by nature, you are not quarrelsome 🤝. you are rebellious by nature and instinctively rebel against rules and regulations 🚫. you do not feel hesitation in breaking the law 🤯. Whenever you rebel against constitutional authorities, you become popular and famous 🤩.</div>
 
 <h2 class="report-txt-heading"> Secretive and Selfish Nature</h2>
 <div class="report-para">you are self-made people and extremely secretive by nature 🤫. ${user_name} you do not disclose youre secrets, even to those near and dear to you 🤐. This gives you heart problems, but you like to feel lonely and bear all your'e suffering alone 😔. you are extremely selfish and can go to any extreme to fulfill your selfish motives, even if it means harming somebody 😈. you make false promises and create critics, opponents, and enemies throughout the course of your life 🤥.</div>
 
 <h2 class="report-txt-heading"> Social and Artistic Inclinations</h2>
 <div class="report-para"> ${user_name} you love conspiracy and sometimes live with conspirators during your 🕵️‍♀️. you also fear that people will misunderstand you and will take you to be conspirators 😰. This makes you feel lonely and deserted 😢. you are not attached to the concept of accumulating wealth 💰. Whenever you get money, you spend it lavishly 💸. you love to visit art exhibitions, attend concerts or theaters, or see exhibits of ancient relics 🎨. you enjoy evaluating these events critically but your thoughts are not very clear 🤔.</div>
 
 <h2 class="report-txt-heading"> Relationships and Communication</h2>
 <div class="report-para">you are reliable, patient friends, who can adjust youselves to all conditions 🤝. you have a quickly changing nature—sometimes you are sweet and gentle, and sometimes rough and rustic—you often annoy your kith and kin 🤷‍♀️. you are helpful to society and, by your unconventional and free-thinking manner, you are able to introduce great reforms into society that benefit the poor and the aggrieved 🧠. you are good conversationalists and are very polite and gentle in dealing with members of the opposite sex 💁‍♀️. you have many love affairs and are always unsuccessful in matters of love 💔.</div>
 </div>
 </div>
 `
    document.body.innerHTML = report_content;
  }

  else if (numerology_number == 5) {
    let report_content = `<!DOCTYPE html>
 <html lang="en">
 
 <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Document</title>
   <link rel="stylesheet" href="style.css">
   <style>
     
     @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
     @import url('https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap');
   </style>
 </head>
 
 <body>
   <nav>
     <div class="logo left">Behaviour Pridiction</div>
     <div class="right">
       <ul class="nav-items">
       <li><a href="">Home</a></li>
       <li><a href="">How to Use</a></li>
       <li><a href="">Blog</a></li>
       <li><a href="">Privay Policy</a></li>
       <li><a href="">Terms & Condition</a></li>
       </ul>
     </div>
   </nav>
   <div class="hero-section">
     <div class="cta hero-heading">BEHAVIOUR PRIDICTION REPORT</div>
     <div class="cta subheading">Decoding the Person Behaviour</div>
   </div>
   <img src="/ass/glow.png" alt="" class="glow5">
   <img src="/ass/glow.png" alt="" class="glow-for-report">
   <div class="report">
     <div class="report-heading">
       <img src="/ass/report.webp" class="report-icon" height="100px" width="100px" alt="">
       <div class="report-txt-heading user_report" >${user_name} Pridiction report</div>
 
     </div>
     <div class="report-content">
         <h2 class="report-txt-heading"> Gentle and Fragile Characters 🌸</h2>
 <div class="report-para">${user_name} You have gentle and fragile characters and are elevated thinkers. you are scholars by nature and are trying to learn every minute. your active brains are always engaged in thought. you love amusement and try to become jovial and create a happy atmosphere around you. ${user_name} you are interested in winning the favor of others, you spend all your energy and use all your resources to make others happy. 🤩</div>
 
 <h2 class="report-txt-heading"> Quick Decisions and Risk-taking 💸</h2>
 <div class="report-para">you are quick in your decisions and impulsive in your behavior. ${user_name} you love change and do not make long-range plans (which call for patience), although you are always busy planning new ways to make money. Because you are endowed with a facility for speculation and are willing to run risks, you invent new ways to make money quickly and avoid long-term plans. ${user_name} your willingness to risk makes you gamble; and if you really do so, you may gain wealth in this way. 💰</div>
 
 <h2 class="report-txt-heading"> Adaptable Nature and Relationships 💕</h2>
 <div class="report-para">${user_name} you have youthful and fertile brains with mature thoughts, which make you unique and attractive. you can develop friendships very easily and quickly with any number, but because you are unstable by nature, the friendships do not last very long. you often break friendships very easily during your weak period; at such times, you are deceived by and lose faith in your friends and feel lonely. you can accurately understand the intent of any person who visits you and can easily see the maneuvers of your partners and colleagues. you give answers to questions before the person asking finishes. you are very adaptable and can bear any tragedy and calamity with a smile on your face. 😊</div>
 
 <h2 class="report-txt-heading"> Versatile Personality and Communication 💬</h2>
 <div class="report-para">${user_name} With children, you are like a child; with young persons, a revolutionary and progressive youth; and with wise elderly people, wise. you are brilliant logicians—openness and eloquence render your opponents helpless. you can be friend to your opponents and convert to your own point of view. you are able to impress people by your attractive and charming personality, progressive ideas, adaptability, clarity of expression and logic, positive and optimistic attitude, and jovial, youthful nature. Sometimes you become extravagant. 💃</div>
 
 <h2 class="report-txt-heading"> Financial Acumen and Business Success 💸</h2>
 <div class="report-para">${user_name} your financial condition fluctuates, you are able to save money, which you can use during your hard times. you are generally lucky in getting money whenever you need it. you do not earn through one source only. you cannot sit idle and love to invent methods to make money quickly. you always invest money in business; and, because of your speculative nature and willingness to take risks, you ultimately become successful in business. 💸</div>
 
 <h2 class="report-txt-heading"> Time-conscious and Artistic 🕰️</h2>
 <div class="report-para">${user_name} you are time conscious—you value your own time and are always in a hurry. you are fond of fine arts, especially poetry—you can and do express your ideas in a very poetic way. you have a flexible character and change easily, but you do not like to change your way of working. 🎨</div>
 
 <h2 class="report-txt-heading"> Love for Travel and Health Consciousness ✈️</h2>
 <div class="report-para">you are traveler by nature and broaden your experience and knowledge through your journeys, both in your own country and in distant lands. you like to live in foreign lands away from your families, to enjoy life and learn. ${user_name} you remain youthful and attractive into your old age and always have helpers around. you believe in fate and destiny, you praise the law of karma and work constantly. you know that fate is more important, and you are lucky enough in your life to get whatever you want by chance. If you gamble, you multiply your money two or three times; and you do not regret your losses. you live on your nerves and love excitement. 🎉</div>
 
 <h2 class="report-txt-heading"> Independent Thinkers and Health Conscious 🧠</h2>
 <div class="report-para"> ${user_name} you are not influenced by any kind of preaching. you appreciate traditional beliefs but do not become mystical. you remain independent thinkers, open to new ideas. you love the company of learned and wise people, as well as young, progressive, and modern people. ${user_name} you are very cautious about your health and careful in selecting foods you need. you are quite conscious about your physical appearance. Although fragile, you have strong builds and remain healthy and active into your old age, usually living long lives. 💪</div>
 
 </div>
 </div>
 `
    document.body.innerHTML = report_content;
  }
  else if (numerology_number == 6) {
    let report_content = `<!DOCTYPE html>
 <html lang="en">
 
 <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Document</title>
   <link rel="stylesheet" href="style.css">
   <style>
     
     @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
     @import url('https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap');
   </style>
 </head>
 
 <body>
   <nav>
     <div class="logo left">Behaviour Pridiction</div>
     <div class="right">
       <ul class="nav-items">
       <li><a href="">Home</a></li>
       <li><a href="">How to Use</a></li>
       <li><a href="">Blog</a></li>
       <li><a href="">Privay Policy</a></li>
       <li><a href="">Terms & Condition</a></li>
       </ul>
     </div>
   </nav>
   <div class="hero-section">
     <div class="cta hero-heading">BEHAVIOUR PRIDICTION REPORT</div>
     <div class="cta subheading">Decoding the Person Behaviour</div>
   </div>
   <img src="/ass/glow.png" alt="" class="glow5">
   <img src="/ass/glow.png" alt="" class="glow-for-report">
   <div class="report">
     <div class="report-heading">
       <img src="/ass/report.webp" class="report-icon" height="100px" width="100px" alt="">
       <div class="report-txt-heading user_report" >${user_name} Pridiction report</div>
 
     </div>
     <div class="report-content">
       <h2 class="report-txt-heading"> Magnetic and Gentle Nature 🌟</h2>
 <div class="report-para">${user_name} You're natives are magnetic, youthful, gentle, soft-spoken, luxury-loving, artistic, and possessors of refined taste. you attract members of the opposite sex easily and are usually loved and respected by them. you spend freely, are social, and have opportunities to meet beautiful people. <br>
   <br>
   you love travel and often journey to foreign lands. you are always busy. you are overly conscious about your physical appearance and try to dress so as to always be presentable. you dislike ugliness, dirtiness, mismanagement, and disorder. you like to keep your dwelling places clean and orderly. you love to decorate your homes, rooms, offices, or places of work. 🌺</div>
 
 <h2 class="report-txt-heading"> Relationship and Lifestyle Harmony 💑</h2>
 <div class="report-para">you love your life partner, or person with whom you live, under all circumstances and try to please them. your married life is ordinary, but orderly. ${user_name} you do not like to be in a disturbed environment and do not initiate arguments. If someone starts to battle with you, you run from the field and are always ready for a compromise. <br>
   <br>
   ${user_name} You are clever and tactful and are able to learn about the deeply guarded secrets of others without deliberate effort. you think before you act, which gives you a slow tempo. But you like your habit of being slow and you believe that "slow and steady wins the race." you are usually upset when you are expected to move quickly and spoil a task by making mistakes. <br>
   <br>
   ${user_name} you want to remain peaceful and do not like any interference once you have started your work. you also do not like anyone to act against your will. you are secretive by nature and can keep the secrets of others, never revealing them to anyone else. 🤫</div>
 
 <h2 class="report-txt-heading"> Family Values and Social Grace 🏡</h2>
 <div class="report-para">${user_name} you are universal friends and make good family members. you are considerate and kind to your families and understand the joys and sorrows of your kith and kin. you maintain relationships with your parents, even after you leave the home. you are easily touched by the sorrow of your parents and try your best to help them. you trust your friends and family members. <br>
   &nbsp;
   Because of your refined taste, sweet manners, and considerate and gentle nature, ${user_name} you are popular in your circle of friends and become everybody's favorite. you are extravagant. you are lucky enough to get all the luxuries and facilities of modern living—such as a house with a garden, vehicles—before the age of forty-five. you love company and cannot live alone for long. 🌟</div>
 </div>
 </div>`
    document.body.innerHTML = report_content;
  }
  else if (numerology_number == 7) {
    let report_content = `<!DOCTYPE html>
 <html lang="en">
 
 <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Document</title>
   <link rel="stylesheet" href="style.css">
   <style>
     
     @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
     @import url('https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap');
   </style>
 </head>
 
 <body>
   <nav>
     <div class="logo left">Behaviour Pridiction</div>
     <div class="right">
       <ul class="nav-items">
         <li><a href="">Home</a></li>
         <li><a href="">How to Use</a></li>
         <li><a href="">Blog</a></li>
         <li><a href="">Privay Policy</a></li>
         <li><a href="">Terms & Condition</a></li>
       </ul>
     </div>
   </nav>
   <div class="hero-section">
     <div class="cta hero-heading">BEHAVIOUR PRIDICTION REPORT</div>
     <div class="cta subheading">Decoding the Person Behaviour</div>
   </div>
   <img src="/ass/glow.png" alt="" class="glow5">
   <img src="/ass/glow.png" alt="" class="glow-for-report">
   <div class="report">
     <div class="report-heading">
       <img src="/ass/report.webp" class="report-icon" height="100px" width="100px" alt="">
       <div class="report-txt-heading user_report" >${user_name} Pridiction report</div>
 
     </div>
     <div class="report-content">
       <h2 class="report-txt-heading"> Emotional Volatility and Resilience 🌪️</h2>
 <div class="report-para">${user_name} become indecisive, disruptive, destructive, restless, revolutionary, and moody. you have to meet so many failures in life that you are considered unfortunate; it is a number of upheaval and revolution. But, this is actually not a true statement. Failure is a key to success. 💪</div>
 
 <h2 class="report-txt-heading"> Spiritual and Individualistic Nature 🕊️</h2>
 <div class="report-para">You are truly spiritual and religious. you are kind-hearted, social, romantic, sentimental, and noble souls. ${user_name} you are original in your expressions and independent in your approaches to life. With your philosophical outlook, you create an individuality all your own. you give new updated interpretations to age-old values and truths.</div>
 
 <h2 class="report-txt-heading"> Advocacy and Communication Skills 🗣️</h2>
 <div class="report-para">you are advocates of individual freedom and personal liberty and cannot tolerate injustice. ${user_name} you are good speakers and have an ability to mobilize public opinion in favor of your arguments; even your opponents have to agree with your points of view. you are friendly and gain popularity easily, because you do not discriminate between rich and poor, king and beggar, master and servant. you are equally friendly and supportive to all.</div>
 
 <h2 class="report-txt-heading"> Duality and Restlessness 🌀</h2>
 <div class="report-para">your personalities have many faces—uncertainty is your specialty. ${user_name} you are good planners. you are idealists and materialists at the same time. On the one hand, you donate freely, live in Utopia, and think of plans for the universal and cosmic good. On the other hand, you market and sell your ideas for material gain and care about money. <br>
   
   <br>
   you are restless because you have an overbusy mind and hyperactive brain. you love change and love to travel. If you travel, you do so to learn and earn at the same time. your business dealings in foreign countries flourish because of your brilliant ideas.</div>
 
 <h2 class="report-txt-heading"> Mysticism and Creativity 🔮</h2>
 <div class="report-para">you love mystery and keep a mysterious environment around you. you learn from everybody and are very interested in occult knowledge. ${user_name} you have your own way of explaining ideas. you create an ideology of your own, a religion of your own that appeals to your imagination and is based on mysterious (not clear and scientific) foundations. <br>
   <br>
   You impress the minds of people you meet for a long time. Slowly ${user_name} you become popular in the towns or countries you visit. you are highly social and not commanding. you bring good fortune to your friends, associates, and bosses; when you somehow break your friendships, these people suffer losses. you have good memories and are flexible in nature.</div>
 
 <h2 class="report-txt-heading"> Versatility and Adaptability 🧠</h2>
 <div class="report-para">${user_name} you become a child with children, a youth with young people, and wise and sober with wise men. you discuss many subjects and advise people freely who come to you for guidance or advice. you love mountains and nature and travel to foreign lands. you are brave and take risks freely. you get settled in ${user_name} your lives around or after the age of thirty-four.</div>
 
 <h2 class="report-txt-heading"> Artistic Expression and Success 🎨</h2>
 <div class="report-para">you are good writers, painters, and poets and can express your ideas through any medium. Whatever means of expression you use, ${user_name} you are original and your subject is philosophy. you are true scientists of life. ${user_name} you want to bring workable doctrines to life. <br>
   
   <br>
   Whatever you like to call yourself, you become prominent in your own fields of work. you work hard, struggle, and face hardships in the early part of your lives. Because you always underestimate your talents, ${user_name} you become successful and rich later in life. you have successful married lives and have a special kind of sex appeal for members of the opposite sex. you are helped by your friends and profit from these relationships. 🤝</div>
 </div>
 </div>  `
    document.body.innerHTML = report_content;
  }

  else if (numerology_number == 8) {
    let report_content = `<!DOCTYPE html>
 <html lang="en">
 
 <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Document</title>
   <link rel="stylesheet" href="style.css">
   <style>
     
     @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
     @import url('https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap');
   </style>
 </head>
 
 <body>
   <nav>
     <div class="logo left">Behaviour Pridiction</div>
     <div class="right">
       <ul class="nav-items">
       <li><a href="">Home</a></li>
       <li><a href="">How to Use</a></li>
       <li><a href="">Blog</a></li>
       <li><a href="">Privay Policy</a></li>
       <li><a href="">Terms & Condition</a></li>
       </ul>
     </div>
   </nav>
   <div class="hero-section">
     <div class="cta hero-heading">BEHAVIOUR PRIDICTION REPORT</div>
     <div class="cta subheading">Decoding the Person Behaviour</div>
   </div>
   <img src="/ass/glow.png" alt="" class="glow5">
   <img src="/ass/glow.png" alt="" class="glow-for-report">
   <div class="report">
     <div class="report-heading">
       <img src="/ass/report.webp" class="report-icon" height="100px" width="100px" alt="">
       <div class="report-txt-heading user_report" >${user_name} Pridiction report</div>
 
     </div>
     <div class="report-content">
       <h2 class="report-txt-heading"> Determination and Resilience 💪💫</h2>
 <div class="report-para">${user_name}, You have confidence �confidence and determination 💪. It is also a number of mystery—its natives are mostly misunderstood, even by Your closest friends and relatives. You are hardworking 💼 and accept challenges readily; when challenged, You make the impossible possible. 🤯</div>
 
 <h2 class="report-txt-heading"> Introspective and Sincere Nature 🤔🙏</h2>
 <div class="report-para">You are introverted, reserved, patient, reflective, deep, serious, melancholic, and outwardly calm and well-balanced. 🧘‍♀️ You are very sincere with the social organizations, groups, communities, or families with which You associate Yourselves and devote Your whole lives to You. <br>
   <br>
   🤝 You are not helped by others very much, primarily because You like to do everything yourself and do not like to ask for help or be helped. 🙅‍♀️ You have a strong presence that can sometimes be a little heavy, but You have distinctive personalities. 🧠</div>
 
 <h2 class="report-txt-heading"> Perseverance and Sacrifice 🙏💪</h2>
 <div class="report-para">When You meet obstacles, delays, failures, and challenges, Your strong individuality, persistence, will, and patience lead You to the completion of Your tasks. 🏆${user_name} You have faith in life and are generally born to serve a cause to which You sacrifice Youselves and serve as tools. <br>
   <br>
   🕯️ Your lives are full of struggles, and You do not give up before You achieve Your desired goals. 💫 ${user_name} You can be  good fighters, politicians, and scientists. 🥊 You are revolutionary by nature and can be associated with major upheavals that sometimes are brought on by destruction. 🔥 However, Your motives are to serve silently and sacrifice Your lives for the benefit of the poor and downtrodden. 🙌</div>
 
 <h2 class="report-txt-heading"> Unpredictability and Loneliness 🌪️😔</h2>
 <div class="report-para">Your lives are unpredictable. Unexpected changes keep You busy adjusting to the new circumstances. 🤯 This makes it hard for Your friends and relatives to understand You, You feel very lonely at heart. <br>
   <br>
   😢 Your lifestyle makes You asocial; You do have a few real friends who are able to peep into the innocent and tender spaces hidden deep inside of Your personalities. 🤫 You shield Your friends and save them under all circumstances, but You also make the worst enemies. 😠 When You become angry, ${user_name} You disturb the whole environment and can make even the strongest person shake. <br>
   <br>
    🌪️ You keep enmity in Your hearts until the end of Your lives; You wait patiently and attack Your enemies at the appropriate time. 🗡️ You accept defeat with joy and change Your strategies. 🤔</div>
 
 <h2 class="report-txt-heading"> Ambition and Materialism 💰💸</h2>
 <div class="report-para">You are not satisfied by small success; You aspire for great success and full honor. 🏆 You believe Your work is Your worship and aim at doing big things, in whatever businesses or jobs You have. <br>
   
   <br>
   💼 You do not believe in the existing norms and come into conflict with social and moral values. 🚫 You are materialists and financial security is Your primary object, yet You do not run after money. 💳 ${user_name} You love Your own ideology and can do anything—take any job—to make money. 💰 You then can spend each and every cent of it on others, without selfish motive or expectation of return.
   <br>
    🤑 When you reach thirty-five years of age, You cannot save any money and go through several financial crises in Your lifetime. 💸 But after passing this age, You are able to have bank balances. 💲 You love to see Your balances grow and do not spend money easily. 🏦</div>
 
 <h2 class="report-txt-heading"> Spiritual Exploration 🧘‍♀️🕯️</h2>
 <div class="report-para">You try to overcome the ongoing internal dialogue in Your minds and try to learn the occult sciences, religion, philosophy, meditation, etc. 🔮</div>`
    document.body.innerHTML = report_content;
  }
  else if (numerology_number == 9) {
    let report_content = `<!DOCTYPE html>
 <html lang="en">
 
 <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Document</title>
   <link rel="stylesheet" href="style.css">
   <style>
     
     @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
     @import url('https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap');
   </style>
 </head>
 
 <body>
   <nav>
     <div class="logo left">Behaviour Pridiction</div>
     <div class="right">
       <ul class="nav-items">
       <li><a href="">Home</a></li>
       <li><a href="">How to Use</a></li>
       <li><a href="">Blog</a></li>
       <li><a href="">Privay Policy</a></li>
       <li><a href="">Terms & Condition</a></li>
       </ul>
     </div>
   </nav>
   <div class="hero-section">
     <div class="cta hero-heading">BEHAVIOUR PRIDICTION REPORT</div>
     <div class="cta subheading">Decoding the Person Behaviour</div>
   </div>
   <img src="/ass/glow.png" alt="" class="glow5">
   <img src="/ass/glow.png" alt="" class="glow-for-report">
   <div class="report">
     <div class="report-heading">
       <img src="/ass/report.webp" class="report-icon" height="100px" width="100px" alt="">
       <div class="report-txt-heading user_report" >${user_name} Pridiction report</div>
 
     </div>
     <div class="report-content">
 <h2 class="report-txt-heading"> Intense Energy and Determination ⚡💪</h2>
 <div class="report-para">${user_name} You possess intense energy 🔥 that drives you relentlessly towards your goals. You are a fighter at heart 🥊, you tackle challenges with a competitive spirit, always ready to conquer new heights. Courageous and adventurous 🏔️, you thrive on ambition 🏆 and determination, swiftly progressing on your chosen path. <br>
   <br>
    You are Quick to react and alert to obstacles 🚨, your strong defense mechanisms and readiness for opposition sometimes lead to creating unnecessary enemies. Your outspoken nature 🗣️ and quick temper 😡 can ignite conflicts, but your swift resolution of disputes 🔥 and aversion to brooding over problems showcase your direct approach to life. 🚀</div>
 
 <h2 class="report-txt-heading"> Optimism and Independence 🌟🕊️</h2>
 <div class="report-para">Optimistic 😊 and independent 🆓, you exude inexhaustible energy 💫 and detest dependency. Your fearless 😤 and impulsive nature 🤯, coupled with a tyrannical streak 👑, makes you a force to be reckoned <br>
   <br>
    An extremist at heart 🔥, you believe in making bold moves that startle the world 🤯, even if you lead to unexpected outcomes. Despite facing hardships and opposition 🙅‍♀️, your strong will 💪 and determination pave the way for success, especially as you mature past forty. 🌈</div>
 
 <h2 class="report-txt-heading"> Resilience and Compassion 🥥❤️</h2>
 <div class="report-para"> ${user_name} You are Like a coconut with a tough exterior and a soft core 🥥, you exhibit discipline 🧘‍♀️ and strength outwardly, while harboring compassion 💗 and tenderness within. Caring for those under your charge 👥, your authority 👑 and hard work 💼 can be invaluable to organizations when given full control. <br>
   <br>
    ${user_name} Your love for honor and prestige 🏆 drives you to endure challenges and losses, all in the pursuit of maintaining your reputation. Despite domestic challenges 🏠 and frequent quarrels 🤬, your dedication to family remains unwavering. 🌴</div>
 
 <h2 class="report-txt-heading"> Leadership and Compassion 🌟❤️</h2>
 <div class="report-para">${user_name} you Endowed with natural leadership abilities 👑, you possess the compassion 💗 and human qualities to influence even the most stubborn individuals. ${user_name} Your dominating presence 🤴 may attract criticism 🙅‍♀️, but your sincerity 🙏 and understanding guide your actions. With a strong sense of responsibility 💼 and a desire for recognition 🏆, you navigate life with a blend of resilience, compassion, and a relentless pursuit of your goals. 🌟🌿</div>
 </div>
 </div>
 `
    document.body.innerHTML = report_content;
  }

  else {

  }
}
document.getElementById("submit").addEventListener("click", numerology)