"use strict";

// ALl Facts
const factsList = document.querySelector(".facts-list");

const buttonAll = document.querySelector(".all-btn");

// Category Buttons
const categoryButtons = document.querySelector(".category-button");

const weekText = document.querySelector(".week-text");

// ALl of the Category Buttons
const childButtons = Array.from(categoryButtons.children);

// All of learnings
const learnings = [
  {
    id: 1,
    color: "#34e7e4",
    text: "In this week, I’ve learned so much about cybersecurity. Cybersecurity is one among the top five worldwide today's international states face several hazards. When the Cybersecurity breaches it encounters a financial loss as well as theft of intellectual property. Cyber warfare is on the horizon, and several governments are working to develop and use cyber weapons.",
    week: "week 1",
  },
  {
    id: 2,
    color: "#34e7e4",
    text: "Cyber security is the study of ways to protect devices and services against malicious actors such as hackers, spammers, and cybercriminals. While certain cyber security components are meant to strike first, most experts today are more concerned with establishing the best strategy to defend all assets from computers and cellphones to networks and databases from assaults.",
    week: "week 1",
  },
  {
    id: 3,
    color: "#34e7e4",
    text: "Look around today's world, and you'll see that technology is more important in daily life than it has ever been. The advantages of this trend vary from near-instant Internet connectivity to modern comforts afforded by smart home automation technologies and concepts such as the Internet of Things.",
    week: "week 1",
  },
  {
    id: 4,
    color: "#34e7e4",
    text: "In the media, cyber security has been used as a catch-all word to represent the act of protecting against all types of cybercrime, from identity theft to international digital weaponry. These descriptions are correct, but they do not represent the full nature of cyber security for persons who do not have a computer science degree or expertise in the digital business.",
    week: "week 1",
  },
  {
    id: 5,
    color: "#00d8d6",
    text: "In this week I learned about the History of the Computer. Prior to the invention of computers, people counted using sticks, stones, and bones. As technology advanced and the human intellect improved, more computing devices were developed. The term 'computer' has an interesting origin. It was initially used in the 16th century to describe someone who computed, or did computations. The term was used in the same way as a noun until the 20th century.",
    week: "week 2",
  },
  {
    id: 6,
    color: "#00d8d6",
    text: "Women were engaged as human computers to carry out all types of calculations and computations. By the late 19th century, the term was also used to denote devices that performed computations. The term is now often used to denote programmable digital devices that run on electricity. For thousands of years, machines have been employed for computations since the development of humanity. An abacus was one of the first and most well-known gadgets.",
    week: "week 2",
  },
  {
    id: 7,
    color: "#00d8d6",
    text: "Charles Babbage, the founder of computers, began designing the first mechanical computer in 1822. Then, in 1833, he created an Analytical Engine, which was a general-purpose computer. It comprised an ALU, some fundamental flow chart ideas and the concept of integrated memory.",
    week: "week 2",
  },
  {
    id: 8,
    color: "#00d8d6",
    text: "Then, more than a century later in computer history, we obtained our first general-purpose electronic computer. It was known as the ENIAC (Electronic Numerical Integrator and Computer). The inventors of this computer were John W. Mauchly and J.Presper Eckert.",
    week: "week 2",
  },
  {
    id: 9,
    color: "#00d8d6",
    text: "And as technology advanced, computers became smaller and faster to process information. Adam Osborne and EPSON presented the first laptop to us in 1981.",
    week: "week 2",
  },
  {
    id: 10,
    color: "#575fcf",
    text: "In this week, I learned about the dark side of the computer. When we talk about the dark side of the computer, virus, trojans, and attacks are there. A virus executes its code by introducing or attaching itself to a legal application or document that supports macros. A virus has the ability to have unexpected or harmful outcomes during the process, such as hurting system software by corrupting or deleting data.",
    week: "week 3",
  },
  {
    id: 11,
    color: "#575fcf",
    text: "Everyone is subject to ever-evolving cyberthreats from computer viruses and other sorts of malware whether you are using a Windows, Apple, or Linux computer, a desktop, laptop, smartphone, or tablet. Understanding what you're up against is the first step toward protecting yourself and your data.",
    week: "week 3",
  },
  {
    id: 12,
    color: "#575fcf",
    text: "Once a virus has successfully connected to a software, file, or document, it will remain dormant until the computer or device is forced to run its code. In order for a virus to infect your computer, you must run the infected software, which then executes the viral code.",
    week: "week 3",
  },
  {
    id: 13,
    color: "#575fcf",
    text: "However, once infected, the virus might spread to other computers on the same network. A virus's destructive and bothersome actions include stealing passwords or data, tracking keystrokes, damaging files, spamming your email contacts, and even taking over your laptop.",
    week: "week 3",
  },
  {
    id: 14,
    color: "#575fcf",
    text: "Trojans are harmful programs that pretend to do one job but actually execute another. They may be disguised as free software, films, or music, or they could appear to be real adverts. The term 'trojan virus' is technically incorrect; trojans are not viruses, according to most definitions.",
    week: "week 3",
  },
  {
    id: 15,
    color: "#575fcf",
    text: "Trojans can be used by attackers as independent tools or as a foundation for additional malicious behavior. Attackers, for example, utilize trojan downloaders to transfer future payloads to a victim's device. Trojan rootkits can be used to remain active on a user's device or a business network.",
    week: "week 3",
  },
  {
    id: 16,
    color: "#3c40c6",
    text: "In this week, I learned about Threat Attacks. A threat is a potential security risk that might exploit a system's or asset's weakness. An attack, on the other hand, is the actual act of exploiting the flaws of the information security system. Threats and attacks that threaten information security can be avoided in a number of ways.",
    week: "week 4",
  },
  {
    id: 17,
    color: "#3c40c6",
    text: "The most common cyber threats and assaults are delivered by email phishing or the exploitation of previously known vulnerabilities in servers or user devices such as desktop computers, laptop computers, smart phones, and tablets. Many of these threats are indiscriminate, while some are specifically aimed at businesses.",
    week: "week 4",
  },
  {
    id: 18,
    color: "#3c40c6",
    text: "Without adequate security measures in place, any data we create, whether purposefully or unintentionally, might be abused. That is why putting security in place is crucial for regulating how data is utilized.",
    week: "week 4",
  },
  {
    id: 19,
    color: "#3c40c6",
    text: "An example of a threat attack is Phishing attacks. Phishing occurs when attackers attempt to deceive users into doing 'the wrong thing' such as clicking a malicious link that downloads malware or redirects them to a dangerous website. Phishing emails may directly reach millions of people and hide amid the massive volume of innocent emails that busy individuals receive.",
    week: "week 4",
  },
  {
    id: 20,
    color: "#3c40c6",
    text: "Malware may be installed, systems can be sabotaged, and intellectual property and money can be stolen. An attack can have disastrous consequences. Unauthorized purchasing, stealing money, data, or identity theft are all examples of this for individuals and businesses. Phishing emails may affect any size or kind of organization.",
    week: "week 4",
  },
  {
    id: 21,
    color: "#ef5777",
    text: "In this week, I learned about the Vulnerabilities, Risk Assessment, and Risk Management. A vulnerability is a flaw that hackers can exploit to obtain unauthorized access to a computer system. A risk assessment evaluates a company's capacity to safeguard its data and information systems against cyber-attacks. A risk management is a systematic approach to threat prioritization.",
    week: "week 5",
  },
  {
    id: 22,
    color: "#ef5777",
    text: "A vulnerability in cybersecurity is a flaw in a host or system that may be exploited by cybercriminals to compromise an IT resource and accelerate the attack route, such as a missed software update or system misconfiguration. One of the most significant actions firms can take to improve and increase their overall cybersecurity posture is to identify cyber vulnerabilities.",
    week: "week 5",
  },
  {
    id: 23,
    color: "#ef5777",
    text: "Many individuals may confuse the phrases vulnerability, danger, and risk. However, in the area of cybersecurity, these phrases have different and distinct connotations. A vulnerability is a flaw that may be exploited by a bad party. Unpatched software, for example, or too permissive accounts, might allow fraudsters to obtain access to the network and establish a foothold within the IT environment.",
    week: "week 5",
  },
  {
    id: 24,
    color: "#ef5777",
    text: "A threat is a harmful act that can take advantage of a security flaw. A risk occurs when a cyber attack exploits a vulnerability. It reflects the potential damage to the organization in the case of a cyberattack.",
    week: "week 5",
  },
  {
    id: 25,
    color: "#ef5777",
    text: "The way in which a computer vulnerability is exploited is determined by the nature of the vulnerability and the attacker's motivations. These vulnerabilities might emerge as a result of unexpected interactions between several software applications, system components, or basic defects in a single program.",
    week: "week 5",
  },
  {
    id: 26,
    color: "#f53b57",
    text: "This week is EXAM week so there's no classes. I applied all the lessons I've learned when I'm answering the exam and the result is very nice.",
    week: "week 6",
  },
  {
    id: 27,
    color: "#ffdd59",
    text: "In this week, I learned about building the business case for website security. Cyberattacks are a persistent threat to security leaders and their companies. Hackers' strategies are more inventive and relentless than ever before, ruthlessly attacking weaknesses in an organization's security.",
    week: "week 7",
  },
  {
    id: 28,
    color: "#ffdd59",
    text: "To remain ahead of these emerging threats, organizations must change their cybersecurity thinking. To protect critical employee and customer data, a holistic strategy that successfully weaves security into all infrastructure and operations from the ground up is both cost-effective and vital.",
    week: "week 7",
  },
  {
    id: 29,
    color: "#ffdd59",
    text: "Security by design is a method of incorporating security considerations into all aspects of the organization. This includes new software development processes, formalizing infrastructure architecture, automating controls, and measures to ensure continual compliance. To be successful in this endeavor, an organizational mentality shift is required.",
    week: "week 7",
  },
  {
    id: 30,
    color: "#ffdd59",
    text: "The security by design methodology provides security professionals with what they've always desired: developers that consider security from the start of the development process. Rather of addressing concerns after the fact, they might contribute to architectural planning from the start.",
    week: "week 7",
  },
  {
    id: 31,
    color: "#ffdd59",
    text: "The bulk of successful assaults are the consequence of inadequate programming or software setup. These issues can be overcome more simply if security is considered from the beginning. If a developer prioritizes security elements in their design, they will be implemented and maintained throughout all stages of production. Systemic vulnerability is avoided from the start.",
    week: "week 7",
  },
  {
    id: 32,
    color: "#ffd32a",
    text: "In this week, I learned about another example of building the business case for website security. Website security refers to any action or program put in place to guarantee that website data is not exposed to cybercriminals or to prevent the website from being abused in any way. These activities aid in the protection of sensitive data, hardware, and software on a website against the numerous sorts of threats that exist today.",
    week: "week 8",
  },
  {
    id: 33,
    color: "#ffd32a",
    text: "Whether you have a brand-new business and are searching for website security solutions to deploy, or you have an established site and want to increase security, there are a few fundamentals to consider implementing.",
    week: "week 8",
  },
  {
    id: 34,
    color: "#ffd32a",
    text: "Cybersecurity is very important and there are four main reasons why. First, hosting services safeguard the server on which your website is hosted, not the website itself. Second, it's less expensive than a cyberattack. Third, you will safeguard your reputation while also retaining visitors and/or customers. And lastly, Malware and cyberattacks can be difficult to detect.",
    week: "week 8",
  },
  {
    id: 35,
    color: "#ffd32a",
    text: "SSL/TLS certificates safeguard sensitive data acquired by your website, such as emails, addresses, and credit card details, while it travels from your site to a web server. This is a fundamental website security technique, but it is so critical that common browsers and search engines designate sites without an SSL as 'insecure' making users wary of your site and often influencing them to leave.",
    week: "week 8",
  },
  {
    id: 36,
    color: "#ffd32a",
    text: "Depending on the functionality of your site and the sorts of personal information sought, such as eCommerce or financial information, you'll want to select the finest SSL certificate for your business. Remember that SSLs only protect data in transit, so for a truly secure website, you'll need to take other actions.",
    week: "week 8",
  },
  {
    id: 37,
    color: "#9980fa",
    text: "In this week, I learned about recognizing threats to your website. With more individuals saving personal information on their computers, it is more necessary than ever to protect yourself against cyber criminals attempting to access your data.",
    week: "week 9",
  },
  {
    id: 38,
    color: "#9980fa",
    text: "When recognizing threats, there are many signs that can help you and protect yourself, one of that is never click on an embedded link in an email. Even if it comes from someone you know, always enter the URL into your browser.",
    week: "week 9",
  },
  {
    id: 39,
    color: "#9980fa",
    text: "Make use of your common sense. Do you find a website strange? Is it requesting sensitive personal information? Don't take the risk if it appears to be dangerous.",
    week: "week 9",
  },
  {
    id: 40,
    color: "#9980fa",
    text: "Look for indications of validity. Is there contact information or evidence of a physical presence on the website? If you have any doubts, contact them via phone or email to confirm their validity.",
    week: "week 9",
  },
  {
    id: 41,
    color: "#9980fa",
    text: "Take your time reading the URL. Is the URL of a website you frequently visit accurately spelled? Phishers will frequently create webpages that are nearly identical to the spelling of the site you are attempting to access. An unintentional typo may direct you to a counterfeit version of the site.",
    week: "week 9",
  },
  {
    id: 42,
    color: "#9980fa",
    text: "If something appears to be too good to be true, it most likely is. Is the website providing you a previously unseen product or service at an unheard-of price? Or are they offering you a massive return on investment? Trust your intuition if the deal appears to be too good to be true.",
    week: "week 9",
  },
  {
    id: 43,
    color: "#9980fa",
    text: "Check the characteristics of any connections. Right-clicking a hyperlink and selecting 'Properties' reveals the link's real destination. Is it different from where it claimed to bring you?",
    week: "week 9",
  },
  {
    id: 44,
    color: "#5758bb",
    text: "In this week, I learned about understanding the basic SSL Certificates. SSL certificates are short data files that establish a cryptographically secure relationship between a web server and a browser. This connection ensures that all data sent between the web server and the browser remains private.",
    week: "week 10",
  },
  {
    id: 45,
    color: "#5758bb",
    text: "When you get on a page with a form to fill out and submit, the information you enter on an unprotected website can be intercepted by a hacker. This information might range from bank transaction details to an email address used to register for an offer. This 'interception' is commonly referred to as a 'man-in-the-middle attack' in hacker vocabulary.",
    week: "week 10",
  },
  {
    id: 46,
    color: "#5758bb",
    text: "One of the most typical methods is for a hacker to install a tiny, undetectable listening application on the server that hosts a website. That malware sits in the background until a visitor begins inputting information on the website, at which point it activates to begin capturing the data and sending it back to the hacker.",
    week: "week 10",
  },
  {
    id: 47,
    color: "#5758bb",
    text: "When you visit an SSL-encrypted website, your browser will establish a connection with the web server, inspect the SSL certificate, and then bind your browser and the server. This binding connection is secure, so no one else can see or access what you input except you and the website.",
    week: "week 10",
  },
  {
    id: 48,
    color: "#5758bb",
    text: "This connection occurs instantaneously, and some claim it is faster than connecting to an insecure website. You merely have to visit a website using SSL, your connection will instantly be protected.",
    week: "week 10",
  },
  {
    id: 49,
    color: "#5758bb",
    text: "SSL is a type of security technology. It is a protocol between servers and web browsers that ensures the privacy of data transmitted between the two. This is accomplished through the use of an encrypted connection that connects the server and browser.",
    week: "week 10",
  },
  {
    id: 50,
    color: "#5758bb",
    text: "SSL certificates should be used on websites that seek personal information from users, such as an email address or payment information. Having one indicates that the information you're gathering is confidential, and it assures customers that when they see the padlock and https://, their privacy is secure.",
    week: "week 10",
  },
  {
    id: 51,
    color: "#a3cb38",
    text: "In this week, I learned about achieving extended validation. An Extended Validation SSL Certificate is the most expensive type of SSL Certificate available. While all SSL levels – Extended Validation (EV), Organization Validated (OV), and Domain Validated (DV) guarantee encryption and data integrity, the amount of identity verification involved varies.",
    week: "week 11",
  },
  {
    id: 52,
    color: "#a3cb38",
    text: "During the verification of an EV SSL Certificate, the website's owner must go through a thorough and globally standardized identity verification process to prove exclusive rights to use a domain, confirm its legal, operational, and physical existence, and prove the entity has authorized the certificate's issuance.",
    week: "week 11",
  },
  {
    id: 53,
    color: "#a3cb38",
    text: "The verification procedure for OV and DV certificates is less thorough, with DV certificates requiring merely confirmation that the website owner has administrative authority over the domain.",
    week: "week 11",
  },
  {
    id: 54,
    color: "#a3cb38",
    text: "OV certificates provide some identifying information about the site operator, but not as much as EV certificates. Visitors must examine the certificate details in order to discover your company's identifying information. EV SSL Certificates, like DV and OV, activate HTTPS and the now-gray padlock in browser address bars.",
    week: "week 11",
  },
  {
    id: 55,
    color: "#a3cb38",
    text: "Because of the additional cost and time spent on verification, it is more difficult for a phishing website to receive an EV level certificate, which means your website visitors might consider this (among other criteria) as an indicator of trust. Visitors can have more confidence that the website is genuinely managed by your firm, making communication and financial transactions safer.",
    week: "week 11",
  },
  {
    id: 56,
    color: "#a3cb38",
    text: "Imposter or phishing websites continue to pose a significant danger to genuine websites and online businesses. Phishers have recently begun employing DV certificates to make their sites appear more trustworthy and fool unsuspecting consumers into entering money or personal information. This is a developing issue that highlights the need of having confirmed identities online.",
    week: "week 11",
  },
  {
    id: 57,
    color: "#009432",
    text: "In this week, I learned about the General Data Protection Regulation. GDPR is an abbreviation for General Data Protection Regulation. It is crucial to Europe's digital privacy regulations.",
    week: "week 12",
  },
  {
    id: 58,
    color: "#009432",
    text: "Data breaches are unavoidable. Information is lost, stolen, or otherwise made available to those who were never supposed to view it, and these persons are frequently nasty.",
    week: "week 12",
  },
  {
    id: 59,
    color: "#009432",
    text: "Under GDPR, organizations must not only guarantee that personal data is collected lawfully and under stringent restrictions, but individuals who collect and handle it must also safeguard it from misuse and exploitation, as well as respect the rights of data owners - or face fines.",
    week: "week 12",
  },
  {
    id: 60,
    color: "#009432",
    text: "GDPR applies to any organization operating within the EU as well as any organization operating outside of the EU that provides goods or services to EU customers or enterprises. As a result, practically every large organization in the world need a GDPR compliance plan.",
    week: "week 12",
  },
  {
    id: 61,
    color: "#009432",
    text: "Names, addresses, and photographs are examples of personal data under current regulation. GDPR broadens the definition of personal data to include things like an IP address. It also includes sensitive personal data such as genetic information and biometric information that may be used to uniquely identify an individual.",
    week: "week 12",
  },
  {
    id: 62,
    color: "#009432",
    text: "GDPR was passed by the European Parliament in April 2016 after four years of preparation and discussion, and the formal wording and regulations of the directive were published in all of the EU's official languages in May 2016. On May 25, 2018, the Act went into effect throughout the European Union.",
    week: "week 12",
  },
  {
    id: 63,
    color: "#009432",
    text: "GDPR provides a single legislation for the whole continent, as well as a single set of norms that apply to enterprises doing business in EU member states. This implies that the legislation's reach goes beyond Europe's boundaries, since multinational organizations situated outside the area but conducting business on 'European soil' must still comply.",
    week: "week 12",
  },
  {
    id: 64,
    color: "#006266",
    text: "In this week, I learned about managing the SSL certificates. Most of us take Secured Sockets Layer (SSL) and Transport Layer Security (TLS) certificates for granted, although their use has evolved substantially over time. Previously, only websites that handled secure transactions offered SSL certificate security. Certificates are now required by search engines for everything.",
    week: "week 13",
  },
  {
    id: 65,
    color: "#006266",
    text: "Certificate management is the process of monitoring, processing, and performing all processes in the lifespan of a certificate. Certificate administration is in charge of generating, renewing, and deploying certificates to endpoints to ensure that network services remain operational. Certificate administration should also automate processes and offer real-time status of network infrastructure.",
    week: "week 13",
  },
  {
    id: 66,
    color: "#006266",
    text: "Certificate management aids in network management by preventing disruptions and downtime and offering extensive monitoring of the whole infrastructure. Any network, even one with thousands of devices, should be able to handle a good certificate management scheme. If a certificate expires or is misconfigured, the network may experience catastrophic disruptions.",
    week: "week 13",
  },
  {
    id: 67,
    color: "#006266",
    text: "Any discussion of certificate management would be inadequate unless we first define a digital certificate. A certificate, commonly known as an SSL/TLS certificate, is a digital identification used to identify individuals, devices, and other network endpoints. Certificates are connected with a public/private key pair and verify that the public key, which is matched with the valid certificate, may be trusted.",
    week: "week 13",
  },
  {
    id: 68,
    color: "#006266",
    text: "A certificate's primary function is to ensure that data transferred between a user and a server remains secret. The certificates do this by encrypting and decrypting data as it travels over the network. This is accomplished through a process known as an SSL/TLS Handshake.",
    week: "week 13",
  },
  {
    id: 69,
    color: "#ed4c67",
    text: "In this week, I learned about the best practice for keeping website servers safe. We need to keep our systems up to date to ensure that the system is updated. Also, conducting vulnerability and malware scans is a must.",
    week: "week 14",
  },
  {
    id: 70,
    color: "#ed4c67",
    text: "A company's website servers are no different than any other equipment. Linked to the internet or a workplace network. One must have to PCs and laptops, as well as the software on them, must be updated, managed, and maintained. The same must be done with servers.",
    week: "week 14",
  },
  {
    id: 71,
    color: "#ed4c67",
    text: "The servers have their own operating system. Then there's the software that serves web pages to site visitors. Many websites also make use of content management systems, which enable non-technical people to create and change online pages.",
    week: "week 14",
  },
  {
    id: 72,
    color: "#ed4c67",
    text: "Any of these software levels may include vulnerabilities leaving them exposed to infection by malware. Criminals frequently take advantage of a known weakness that is readily remedied. The problem is that so many individuals don't maintain their gear and software up to date that flaws remain unfixed.",
    week: "week 14",
  },
  {
    id: 73,
    color: "#ed4c67",
    text: "Maintain all of your software and hardware to ensure that you are running the most recent version and have any patches or upgrades updated. Vendors release updates in response to criminals or their own teams discovering flaws. If the updates are not installed, the organization may be vulnerable to assaults.",
    week: "week 14",
  },
  {
    id: 74,
    color: "#ed4c67",
    text: "Despite greatest attempts to keep current, certain vulnerabilities will be overlooked. Third-party scanning comes into play here. Many companies and Certificate Authorities provide website vulnerability and virus scanning. Some, for example, provide free scanning when you purchase SSL certificates from them.",
    week: "week 14",
  },
  {
    id: 75,
    color: "#ed4c67",
    text: "This scanning simply looks for any weak points that have been overlooked, as well as any malware that has found a way in and where it is hidden so that you may take action to eradicate it.",
    week: "week 14",
  },
  {
    id: 76,
    color: "#b53471",
    text: "In this week, I learned about maintaining good website security. It's critical to maintain all of the platforms and scripts you've installed up to current. Hackers actively seek security loopholes in popular online software, and the applications must be updated to remedy security gaps. It is critical to maintain and update all software products that you utilize.",
    week: "week 15",
  },
  {
    id: 77,
    color: "#b53471",
    text: "It is crucial to use strong passwords. To break passwords, hackers typically use sophisticated software that employs brute force. Passwords should be complicated, incorporating capital letters, lowercase letters, digits, and special characters, to prevent brute force attacks. Passwords must be at least ten characters long. This password policy should be followed throughout your company.",
    week: "week 15",
  },
  {
    id: 78,
    color: "#b53471",
    text: "On your login pages, use SSL encryption. SSL permits sensitive information such as credit card details, social security numbers, and login passwords to be transferred securely. Information input on a page is encrypted so that any third party that intercepts it has no meaning. This helps to keep hackers from gaining access to your login credentials or other sensitive information.",
    week: "week 15",
  },
  {
    id: 79,
    color: "#b53471",
    text: "Choosing a safe and reliable web hosting business is critical to the security of your website. Make certain that the host you select is aware of potential risks and committed to keeping your website safe.",
    week: "week 15",
  },
  {
    id: 80,
    color: "#b53471",
    text: "In the event that your website is hacked, your host should back up your data to a distant server and make it simple to recover it. Choose a host who provides continuous technical help as needed.",
    week: "week 15",
  },
  {
    id: 81,
    color: "#b53471",
    text: "Every database, program, or plugin on your website is a potential access point for hackers. You should remove any no longer used files, databases, or software from your website. It is also critical to maintain your file structure structured in order to keep track of changes and eliminate obsolete files.",
    week: "week 15",
  },
  {
    id: 82,
    color: "#b53471",
    text: "Back up your website on a regular basis. Backups of all of your website files should be kept in case your site becomes inaccessible or your data is destroyed. Although your web host provider should backup their own servers, you should still backup your files on a regular basis.",
    week: "week 15",
  },
  {
    id: 83,
    color: "#833471",
    text: "In this week, I learned about the ten useful sources for information on website security. These sources are really helpful especially for us students because of the danger of the web. This is very useful to us and can let us be informative.",
    week: "week 16",
  },
  {
    id: 84,
    color: "#833471",
    text: "The CA Security Council (CASC) is comprised of major worldwide Certificate Authorities that are devoted to the exploration and promotion of best practices that promote trustworthy SSL deployment and CA operations as well as the security of the internet in general.",
    week: "week 16",
  },
  {
    id: 85,
    color: "#833471",
    text: "The Certification Authority Browser Forum, often known as the CA Browser Forum, is a consortium of Certificate Authorities and internet browser software developers who got together in 2005 to better reassure website users about the security and validity of the sites they were accessing.",
    week: "week 16",
  },
  {
    id: 86,
    color: "#833471",
    text: "The organization intends to collaborate to provide additional SSL certificates, particularly for confirming site ownership and company legitimacy.",
    week: "week 16",
  },
  {
    id: 87,
    color: "#833471",
    text: "Symantec, a prominent Certificate Authority and a founding member, member of the CA Browser Forum, with many resources committed to assisting you in understanding website security.",
    week: "week 16",
  },
  {
    id: 88,
    color: "#833471",
    text: "This category is filled of white papers covering subjects such as the types of dangers your website confronts and straightforward explanations of how malware works. You may also download the Symantec Website Security Threat Report, which examines current trends and data in the realm of website security.",
    week: "week 16",
  },
  {
    id: 89,
    color: "#833471",
    text: "The Online Trust Alliance (OTA) is a global, non-profit organization located in Bellevue, Washington. They define themselves as a 'casual industry working group with the objective of improving online trust and empowering users while fostering innovation and the vitality of the internet.'",
    week: "week 16",
  },
  {
    id: 90,
    color: "#833471",
    text: "Electronic Frontier Foundation are more concerned about the implications of technology and internet security on individuals and consumers than with enterprises. They were created in 1990 and advocate for 'user privacy, free expression, and innovation through impact litigation, policy research, grassroots advocacy, and technological creation'.",
    week: "week 16",
  },
  {
    id: 91,
    color: "#4cd137",
    text: "In this week, this is the continuous of the ten useful sources for information on website security. All the sources that has been teach last week is really helpful and could be a game changer for every student who will use that sources.",
    week: "week 17",
  },
  {
    id: 92,
    color: "#4cd137",
    text: "What they say may influence how you handle website security, particularly if your goal is to reassure visitors. They publish various whitepapers on the intersection of law and technology that are well worth reading, especially if you work in a more regulated area.",
    week: "week 17",
  },
  {
    id: 93,
    color: "#4cd137",
    text: "PCI Security Standards Council are the people in charge of regulation. If you do financial transactions, you should be aware of the following bodies. On your website. Once again, it is a global open forum. In 2006, the company was created.",
    week: "week 17",
  },
  {
    id: 94,
    color: "#4cd137",
    text: "As well as all the information you might desire on online credit card transactions, they also provide guidance and instructions about alternative types of credit card payment such mobile payment and card swipe payments.",
    week: "week 17",
  },
  {
    id: 95,
    color: "#4cd137",
    text: "It is Information Commissioner’s Office independent authority established to protect information rights in the public interest by encouraging transparency by public entities and data privacy for people.'",
    week: "week 17",
  },
  {
    id: 96,
    color: "#4cd137",
    text: "You may find advice on how to acquire, store, and dispose of people's data appropriately here. There is also guidelines on what data is permissible to request and how to utilize it.",
    week: "week 17",
  },
  {
    id: 97,
    color: "#4cd137",
    text: "Signing up for Google Webmaster Tools does much more than notify you when you've been banned. The program also provides advice and assesses your site to assist you in making it more search engine friendly and being seen on Google.",
    week: "week 17",
  },
  {
    id: 98,
    color: "#4cd137",
    text: "Get Safe Online is another UK project founded by the government and corporate sector to give unbiased, realistic, and simple information about internet safety.",
    week: "week 17",
  },
  {
    id: 99,
    color: "#4cd137",
    text: "You can discover all kinds of advice and news regarding internet security here. They also provide guidance on company security policies as well as remote and mobile working. In addition to these resources, they organize national events such as Get Safe Online Week.",
    week: "week 17",
  },
  {
    id: 100,
    color: "#4cd137",
    text: "Symantec is a well-regarded Certificate Authority. Symantec's strong PKI infrastructure comprises military-grade data centers and disaster recovery locations to ensure client data security, availability, and peace of mind.",
    week: "week 17",
  },
];

// Inserting learnings to html
const learningsList = (allLearnings) => {
  allLearnings.map((learning) => {
    factsList.insertAdjacentHTML(
      "beforeend",
      `
          <li class="fact">
              <p>${learning.text}</p>
              <span class="tag" style="background-color: ${learning.color}"
              >${learning.week}</span>
          </li>
          `
    );
  });
};

// Initialize the list of learnings
learningsList(learnings);

// When "All" button was clicked, show all the learnings
buttonAll.addEventListener("click", () => {
  factsList.innerHTML = "";
  learningsList(learnings);
});

// When every week button was clicked, show the specific week
const logsButtons = childButtons.forEach((el, key) => {
  el.classList.remove("btn");

  document.querySelector("." + el.className).addEventListener("click", () => {
    factsList.innerHTML = "";
    learnings.map((learning) => {
      if (learning.week == `week ${key + 1}`) {
        weekText.textContent = learning.week;

        factsList.insertAdjacentHTML(
          "beforeend",
          `
            <li class="fact">
                <p>${learning.text}</p>
                <span class="tag" style="background-color: ${learning.color}"
                >${learning.week}</span>
            </li>
            `
        );
      }
    });
  });

  el.classList.add("btn");
});
