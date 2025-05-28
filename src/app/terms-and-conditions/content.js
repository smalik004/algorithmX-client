import React from 'react'
import { Montserrat } from 'next/font/google';

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"600",
  fallback: ["sans-serif"],
})

export default function Terms() {
    return (
      <div className="bg-black text-white min-h-screen flex flex-col  p-8">
        <div className=' p-2 max-w-[1200px] mx-auto'>
        <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>AGREEMENT TO TERMS</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        These Terms and Conditions form a legally binding agreement between you, whether individually or on behalf of an organization (“you”), and AlgorithmX (“we,” “us,” or “our”), governing your access to and use of the AlgorithmX website and any associated media forms, media channels, mobile websites, or mobile applications linked to the site (collectively, the "Site").
        </p>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        By accessing the Site, you confirm that you have read, understood, and agree to comply with these Terms and Conditions. If you disagree with any part of these Terms and Conditions, you are prohibited from using the Site and must stop using it immediately.
        </p>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        Additional terms or documents that may be posted on the Site periodically are incorporated by reference into these Terms and Conditions. We reserve the right to modify these Terms and Conditions at any time, at our discretion, and for any reason.
        </p>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        We will notify you of any changes by updating the “Last Updated” date on these Terms and Conditions. You waive any right to receive specific notice of each change.
        </p>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        It is your responsibility to review these Terms and Conditions regularly to stay informed of updates. Your continued use of the Site after such updates will constitute your acknowledgment and acceptance of those changes.
        </p>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        The Site's content is not intended for distribution or use in any country or jurisdiction where such distribution or use would violate laws or regulations or subject us to any registration requirement within such jurisdiction or country.
        </p>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        Users who choose to access the Site from other locations do so on their own initiative and are responsible for complying with local laws, to the extent that such laws apply.
        </p>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        The Site is intended for users who are at least 18 years old.
        </p>

        <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>INTELLECTUAL PROPERTIES RIGHT</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        Unless otherwise specified, the Site and all content, including but not limited to code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics (collectively, the “Content”), as well as any trademarks, service marks, and logos (the “Marks”) displayed on the Site, are our property or are licensed to us, and are protected by copyright, trademark, and other intellectual property laws.
        </p>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        The Content and Marks on the Site are provided “AS IS” for your personal use only. Except as expressly stated in these Terms and Conditions, you are not allowed to copy, reproduce, aggregate, republish, upload, post, publicly display, encode, translate, transmit, distribute, sell, license, or otherwise exploit any part of the Site or the Content and Marks for commercial purposes without our prior written consent.
        </p>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        As long as you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have legally gained access, solely for your personal, non-commercial use. We retain all rights not expressly granted to you in these Terms and Conditions or in the Site, Content, and Marks.
        </p>

        <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>USER REPRESENTATIONS</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        By using the Site, you affirm that:
        </p>
        <ul className="list-decimal list-inside text-[15px] font-helveticaneue leading-[24px] font-[400] text-semi-white font-[400]">
  <li>All information you provide during registration will be accurate, current, and complete;</li>
  <li>You have the legal capacity and agree to adhere to these Terms and Conditions;</li>
  <li>You are at least 18 years of age;</li>
  <li>You are not a minor in your place of residence;</li>
  <li>You will not access the Site through automated or non-human methods, such as bots, scripts, or other tools;</li>
  <li>You will not use the Site for any illegal or unauthorized activities;</li>
  <li>Your use of the Site will comply with all applicable laws and regulations.</li>
</ul>
<p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
If you provide any false, inaccurate, outdated, or incomplete information, we may suspend or terminate your account and refuse any current or future use of the Site (or any part of it).
        </p>

        <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>PROHIBITED USES</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        You may use the Site only for lawful purposes and in accordance with these Terms and Conditions. You agree not to use the Site:
        </p>
        <ul className="list-disc pl-5 text-[15px] font-helveticaneue leading-[24px] font-[400] text-semi-white font-[400]">
  <li>To collect data or other content systematically from the Site to create a collection, compilation, database, or directory without our written permission.</li>
  <li>To make unauthorized use of the Site, including by collecting usernames or email addresses of users through electronic means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
  <li>To act as a purchasing agent for making purchases on the Site.</li>
  <li>To advertise or offer to sell goods and services via the Site.</li>
  <li>To circumvent, disable, or interfere with any security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site or its Content.</li>
  <li>To frame or link to the Site without authorization.</li>
  <li>To deceive or defraud us or other users, especially in any attempt to obtain sensitive account information such as user passwords.</li>
  <li>To misuse our support services or submit false reports of abuse or misconduct.</li>
  <li>To engage in automated use of the Site, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering tools.</li>
  <li>To disrupt, interfere with, or place an undue burden on the Site or the networks or services connected to the Site.</li>
  <li>To impersonate another user or person or use another user’s username.</li>
  <li>To sell or transfer your profile to another person.</li>
  <li>To use any information obtained from the Site to harass, abuse, or harm another person.</li>
  <li>To use the Site as part of any effort to compete with us or use the Site and/or its Content for any revenue-generating purpose or commercial enterprise.</li>
  <li>To decipher, decompile, disassemble, or reverse engineer any of the software or code comprising the Site.</li>
  <li>To attempt to bypass any measures of the Site designed to prevent or restrict access to the Site or any part of it.</li>
  <li>To harass, annoy, intimidate, or threaten any of our employees or agents providing any portion of the Site to you.</li>
  <li>To delete the copyright or other proprietary rights notice from any Content.</li>
  <li>To copy or adapt the Site's software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
  <li>To upload or transmit (or attempt to upload or transmit) viruses, Trojan horses, or other harmful material, including spamming, that interferes with any party's use and enjoyment of the Site or modifies, disrupts, or interferes with the operation or maintenance of the Site.</li>
  <li>To upload or transmit (or attempt to upload or transmit) any material that functions as a passive or active information collection or transmission mechanism, such as clear graphics interchange formats (“gifs”), 1x1 pixels, web bugs, cookies, or other similar devices.</li>
  <li>To use, launch, develop, or distribute any automated system, including, but not limited to, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software, except as may result from standard search engine or Internet browser usage.</li>
  <li>To disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</li>
  <li>To use the Site in any manner inconsistent with any applicable laws or regulations.</li>
</ul>

<h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>USER CONTENT AND CONTRIBUTIONS</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        The Site may offer you opportunities to contribute to blogs, message boards, online forums, and other interactive features, where you can post, submit, publish, display, or transmit content or materials (collectively, "Contributions").
        </p>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        Contributions may be viewable by other users of the Site and through third-party websites. By making any Contributions, you agree that your Contributions will be treated as non-confidential and non-proprietary, and you confirm that:
        </p>
        <ul className="list-disc pl-5 text-[15px] font-helveticaneue leading-[24px] font-[400] text-semi-white font-[400]">
  <li>Your Contributions do not violate any third party’s intellectual property rights, including copyright, patent, trademark, trade secret, or moral rights.</li>
  <li>You are the creator and owner or have the necessary licenses, rights, consents, and permissions to use and authorize us and others to use your Contributions in any manner consistent with the Site and these Terms and Conditions.</li>
  <li>You have obtained written consent, release, and/or permission from every identifiable person in your Contributions to use their name or likeness as permitted by the Site and these Terms and Conditions.</li>
  <li>Your Contributions are truthful and not misleading.</li>
  <li>Your Contributions do not contain unauthorized advertising, promotional materials, chain letters, spam, mass mailings, or other forms of solicitation.</li>
  <li>Your Contributions are not obscene, offensive, defamatory, threatening, harassing, or otherwise objectionable, as determined by us.</li>
  <li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
  <li>Your Contributions do not advocate the violent overthrow of any government or incite, encourage, or threaten physical harm against another.</li>
  <li>Your Contributions do not violate any laws, regulations, or rules.</li>
  <li>Your Contributions do not invade the privacy or publicity rights of any third party.</li>
  <li>Your Contributions do not solicit personal information from anyone under the age of 18 or exploit people under the age of 18 in a sexual or violent manner.</li>
  <li>Your Contributions do not violate any federal or state law concerning child pornography or other regulations intended to protect minors.</li>
  <li>Your Contributions do not include offensive comments related to race, national origin, gender, sexual preference, or physical handicap.</li>
  <li>Your Contributions do not violate or link to material that violates any provision of these Terms and Conditions or any applicable law or regulation.</li>
</ul>
<p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
We reserve the right to remove or alter any Contributions that violate these Terms and Conditions at our discretion and without notice.
        </p>

        <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>LICENSE FOR USER CONTIBUTIONS</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        By posting your Contributions on the Site, you grant us an unrestricted, perpetual, irrevocable, non-exclusive, transferable, royalty-free license to use, copy, reproduce, modify, publish, distribute, and otherwise exploit your Contributions for any purpose, including commercial purposes, in any media format and through any media channels.
        </p>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        This license includes our right to use your name, company name, and any associated trademarks, service marks, trade names, logos, and personal and commercial images you provide. You waive any moral rights you may have in your Contributions.
        </p>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        You retain ownership of your Contributions and any associated intellectual property rights, but you grant us the rights necessary to use your Contributions in accordance with these Terms and Conditions. We are not responsible for any statements or representations made by you in your Contributions on the Site.
        </p>

        <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>SUBMISSIONS</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        If you submit any questions, comments, suggestions, ideas, feedback, or other information about the Site (collectively, "Submissions"), such Submissions will be treated as non-confidential, and we shall own exclusive rights to use and distribute those Submissions without any acknowledgment or compensation to you.
        </p>

        <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>THIRD PARTY CONTRIBUTIONS AND LINKS</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        The Site may contain links to third-party websites and content (collectively, “Third-Party Content”). We do not monitor, verify, or endorse Third-Party Content, and we are not responsible for any Third-Party Content accessed through the Site, including its accuracy, quality, or legality.
        </p>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        If you choose to leave the Site and access Third-Party Content, you do so at your own risk, and these Terms and Conditions no longer apply. We are not liable for any harm or damages resulting from your interaction with Third-Party Content.
        </p>

        <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>SITE MANAGEMENT</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        We reserve the right to manage the Site in ways that support our interests, including:
        </p>
        <ul className="list-decimal list-inside text-[15px] font-helveticaneue leading-[24px] font-[400] text-semi-white font-[400]">
  <li>All information you provide during registration will be accurate, current, and complete.</li>
  <li>You have the legal capacity and agree to adhere to these Terms and Conditions.</li>
  <li>You are at least 18 years of age.</li>
  <li>You are not a minor in your place of residence.</li>
  <li>You will not access the Site through automated or non-human methods, such as bots, scripts, or other tools.</li>
  <li>You will not use the Site for any illegal or unauthorized activities.</li>
  <li>Your use of the Site will comply with all applicable laws and regulations.</li>
</ul>


  <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>PRIVACY POLICY</h1>
  <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400]">
    We care about your privacy and data security. Please review our Privacy Policy for information on how we collect, use, and protect your data. By using the Site, you agree to our Privacy Policy.
  </p>

  <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>COPYRIGHT INFRINGEMENTS AND DMCA POLICY</h1>
  <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400]">
    If you believe that any material on the Site infringes your copyright, please notify our designated Copyright Agent with the required information as outlined by the Digital Millennium Copyright Act (DMCA).
  </p>
  <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400]">
    We will respond to valid DMCA notices and may remove or disable access to infringing content. If you believe your content was mistakenly removed, you may submit a counter-notification.
  </p>

  <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>TERM AND TERMINATION</h1>
  <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400]">
    These Terms and Conditions remain in effect as long as you use the Site. We reserve the right to deny access to and use of the Site, including blocking certain IP addresses, for any reason, including violations of these Terms and Conditions. We may terminate your use of the Site without notice.
  </p>
  <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400]">
    If we terminate your account, you are prohibited from creating a new account under any name. We may also pursue legal action against you if necessary.
  </p>

  <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>MODIFICATIONS AND AVAILABILITY</h1>
  <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400]">
    We may change, modify, or remove content from the Site at any time without notice. We are not obligated to update the Site and will not be liable for any changes, suspensions, or discontinuations of the Site.
  </p>
  <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400]">
    We do not guarantee that the Site will be available at all times and may experience interruptions due to maintenance, system failures, or other issues.
  </p>

  <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>GOVERNING LAW</h1>
  <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400]">
    These Terms and Conditions and any disputes arising from your use of the Site are governed by the laws of [Insert State], without regard to conflict of law principles.
  </p>

  <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>DISPUTE RESOLUTION</h1>
  <h1 className={`text-[24px] leading-[1] ${monsterfont1.className} mb-[35px] text-policy-text`}>Option 1: Legal Proceedings</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        Any legal action or proceeding related to these Terms and Conditions or the Site shall be brought exclusively in the state and federal courts located in [Insert Location]. You consent to the jurisdiction of these courts and waive any objections to the inconvenience of the forum.
        </p>
        <h1 className={`text-[24px] leading-[1] ${monsterfont1.className} mb-[35px] text-policy-text`}>Option 2: Informal Negotiation and Arbitration</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        To resolve disputes efficiently, you and we agree to first attempt to resolve any dispute through informal negotiations for at least 360 days before pursuing arbitration. If informal negotiations fail, disputes will be resolved through binding arbitration under the rules of the American Arbitration Association (AAA).
        </p>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        Arbitration will take place in [Insert Location], and the arbitrator's decision will be binding and enforceable in court.
        </p>
        <h1 className={`text-[24px] leading-[1] ${monsterfont1.className} mb-[35px] text-policy-text`}>Option 3: Exceptions</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        Certain disputes, including those related to intellectual property rights or allegations of theft, are not subject to arbitration and may be resolved in court.
        </p>
  

  <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>CORRECTIONS</h1>
  <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400]">
    The Site may contain errors, inaccuracies, or omissions. We reserve the right to correct any errors or update information on the Site without prior notice.
  </p>

  <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>DISCLAIMER</h1>
  <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400]">
    The Site is provided "AS IS" and "AS AVAILABLE." You agree that your use of the Site is at your sole risk. We disclaim all warranties, express or implied, regarding the Site, including accuracy, completeness, and reliability. We are not liable for any errors, interruptions, or security breaches on the Site.
  </p>

  <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>LIMITATIONS OF LIABILITY</h1>
  <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400]">
    We are not liable for any damages arising from your use of the Site, including indirect, incidental, or punitive damages. Our total liability to you for any claims related to the Site is limited to the amount paid by you, if any, during the month prior to the cause of action, or $1,000.
  </p>

  <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>INDEMNIFICATION</h1>
  <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400]">
    You agree to indemnify and hold us harmless from any claims, damages, or liabilities arising from your use of the Site, including violations of these Terms and Conditions.
  </p>

  <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>USER DATA</h1>
  <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400]">
    We are not responsible for any loss or corruption of data you transmit to the Site. You agree to back up your data and waive any claims against us for data loss.
  </p>

  <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>ELECTRONIC COMMUNICATIONS</h1>
  <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400]">
    By using the Site, you consent to receive electronic communications from us and agree that all agreements, notices, and other communications provided electronically satisfy any legal requirements that such communications be in writing.
  </p>

  <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>MISCELLANEOUS</h1>
  <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400]">
    These Terms and Conditions constitute the entire agreement between you and us regarding your use of the Site. Any failure to enforce these Terms and Conditions does not constitute a waiver of rights. If any provision is found unenforceable, the remaining provisions remain in effect.
  </p>

  <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>CONTACT INFORMATION</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400]  text-semi-white font-[400] ">
        If you have any questions or comments about this Privacy Policy, please contact us at:
        </p>
        <p className="text-[15px] italic font-helveticaneue leading-[24px] font-[400]  text-semi-white font-[400] ">
        AlgorithmX
        </p>
        <p className="text-[15px] italic font-helveticaneue leading-[24px] font-[400]  text-semi-white font-[400] ">
        2810 N Church St, PMB 15369, Wilmington, DE 19802
        </p>
        <p className="text-[15px] italic font-helveticaneue leading-[24px] font-[400]  text-semi-white font-[400] ">
        +1-425-577-6660
        </p>
        <p className="text-[15px] italic font-helveticaneue leading-[24px] font-[400]  text-semi-white font-[400] ">
        connect@algorithmx.com
        </p>


        </div>
    </div>
    );
  }