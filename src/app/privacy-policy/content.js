import React from 'react'
import { Montserrat } from 'next/font/google';

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"600",
  fallback: ["sans-serif"],
})

export default function Introduction() {
    return (
      <div className="bg-black text-white min-h-screen flex flex-col  p-8">
        <div className=' p-2 max-w-[1200px] mx-auto'>
        <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>INTRODUCTION</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        AlgorithmX (“we,” “us,” or “our”) is committed to protecting the privacy of our users (“you” or “your”). This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website thealgorithmx.com, as well as any related media forms, media channels, mobile websites, or mobile applications connected to it (collectively, the “Site”). Please take the time to read this Privacy Policy carefully. If you disagree with any part of this Privacy Policy, please do not use the Site.
        </p>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        We reserve the right to modify this Privacy Policy at any time for any reason. We will notify you of any changes by updating the “Last Updated” date on this Privacy Policy. Changes will take effect immediately upon posting the revised Privacy Policy on the Site, and you waive the right to receive specific notice of each change.
        </p>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        We encourage you to review this Privacy Policy regularly to stay informed of any updates. Continued use of the Site after the posting of any revised Privacy Policy will constitute your acknowledgment and acceptance of the changes.
        </p>


        <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>INFORMATION WE COLLECT</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        We may gather information about you in various ways. The types of information we may collect on the Site include:
        </p>

        <h1 className={`text-[24px] leading-[1] ${monsterfont1.className} mb-[35px] text-policy-text`}>Personal Information</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        We may collect personally identifiable information, such as your name, shipping address, email address, and phone number, as well as demographic data like your age, gender, hometown, and interests, which you voluntarily provide when you register on the Site or engage in activities such as online chat or message boards. You are not required to provide us with personal information, but if you choose not to, certain features of the Site may not be accessible to you.
        </p>

        <h1 className={`text-[24px] leading-[1] ${monsterfont1.className} mb-[35px] text-policy-text`}>Automatically Collect Data</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        Our servers may automatically collect information such as your IP address, browser type, operating system, access times, and the pages you view before and after accessing the Site. If you are using our mobile application, we may also collect information about your device, such as its name and type, operating system, phone number, country, likes and replies to posts, and other interactions with the application and other users.
        </p>

        <h1 className={`text-[24px] leading-[1] ${monsterfont1.className} mb-[35px] text-policy-text`}>Mobile Device Information</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        If you access the Site through a mobile device, we may collect device-specific information, such as your device ID, model, manufacturer, and location data.
        </p>

        <h1 className={`text-[24px] leading-[1] ${monsterfont1.className} mb-[35px] text-policy-text`}>Third-Party Information</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        If you connect your account to a third party and grant the Site permission to access information from that third party, we may collect information from them, such as personal details or connections with your network of friends.
        </p>

        <h1 className={`text-[24px] leading-[1] ${monsterfont1.className} mb-[35px] text-policy-text`}>Data from Contests, Giveaways, and Surveys</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        We may also collect personal and other information when you participate in contests, giveaways, or respond to surveys.
        </p>


        <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>USE YOUR INFORMATION</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        The information we collect about you helps us provide you with a smooth, personalized experience on the Site. We may use your information for purposes such as:
        </p>
        <ul className="list-disc pl-5 text-[15px] font-helveticaneue leading-[24px] font-[400] text-semi-white">
        <li>Administering sweepstakes, promotions, and contests.</li>
        <li>Assisting law enforcement and responding to legal requests.</li>
        <li>Compiling anonymous statistical data for internal use or sharing with third parties.</li>
        <li>Creating and managing your account.</li>
        <li>Delivering targeted advertising, newsletters, and other promotional materials.</li>
        <li>Emailing you about your account or orders.</li>
        <li>Enabling communications between users.</li>
        <li>Enhancing the efficiency and operation of the Site.</li>
        <li>Monitoring and analyzing usage trends to improve your experience.</li>
        <li>Notifying you of updates to the Site.</li>
        <li>Offering new products, services, or recommendations.</li>
        <li>Preventing fraud, monitoring for theft, and protecting against criminal activity.</li>
        <li>Requesting feedback and contacting you about your experience with the Site.</li>
        <li>Resolving disputes and troubleshooting issues.</li>
        <li>Responding to product and customer service requests.</li>
        <li>Sending newsletters.</li>
        <li>Soliciting support for the Site.</li>
      </ul>
    
      <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>DISCLOSURE OF  YOUR INFORMATION</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        We may share your information in specific circumstances, such as:
        </p>
        <h1 className={`text-[24px] leading-[1] ${monsterfont1.className} mb-[35px] text-policy-text`}>Legal Requirements or to Protect Rights</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        If we believe that disclosing your information is necessary to comply with legal obligations, investigate potential violations of our policies, or protect the rights, property, or safety of others, we may share your information as required by applicable laws. This includes sharing information with other entities for fraud protection and credit risk reduction.
        </p>

        <h1 className={`text-[24px] leading-[1] ${monsterfont1.className} mb-[35px] text-policy-text`}>Third-Party Service Providers</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        We may share your information with third parties that perform services on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing.
        </p>

        <h1 className={`text-[24px] leading-[1] ${monsterfont1.className} mb-[35px] text-policy-text`}>Marketing Communications</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        With your consent, or where permitted by law, we may share your information with third parties for marketing purposes. You will have the option to withdraw your consent at any time.
        </p>
        <h1 className={`text-[24px] leading-[1] ${monsterfont1.className} mb-[35px] text-policy-text`}>Interactions with Other Users</h1>
      <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white">
        If you interact with other users on the Site, those users may view your name, profile photo, and details about your activities, such as sending invitations, chatting, liking posts, or following blogs.
      </p>
      <h1 className={`text-[24px] leading-[1] ${monsterfont1.className} mb-[35px] text-policy-text`}>Online Postings</h1>
      <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white">
        Any content you post on the Site, such as comments or contributions, may be publicly viewable by all users and may be distributed outside the Site indefinitely.
      </p>
      <h1 className={`text-[24px] leading-[1] ${monsterfont1.className} mb-[35px] text-policy-text`}>Third-Party Advertisers</h1>
      <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white">
        We may work with third-party advertising companies to serve ads when you visit the Site. These companies may use information about your visits to the Site and other websites stored in cookies to provide ads for products and services that may interest you.
      </p>
      <h1 className={`text-[24px] leading-[1] ${monsterfont1.className} mb-[35px] text-policy-text`}>Affiliates</h1>
      <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white">
        We may share your information with our affiliates, who are required to honor this Privacy Policy. Affiliates include our parent company, subsidiaries, joint venture partners, or other companies under common control with us.
      </p>
      <h1 className={`text-[24px] leading-[1] ${monsterfont1.className} mb-[35px] text-policy-text`}>Business Partners</h1>
      <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white">
        We may share your information with our business partners to offer you certain products or services.
      </p>
      <h1 className={`text-[24px] leading-[1] ${monsterfont1.className} mb-[35px] text-policy-text`}>Other Third Parties</h1>
      <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white">
        We may share your information with advertisers and investors to conduct general business analysis. We may also share your information with third parties for marketing purposes, as permitted by law.
      </p>
      <h1 className={`text-[24px] leading-[1] ${monsterfont1.className} mb-[35px] text-policy-text`}>Sale or Bankruptcy</h1>
      <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white">
        In the event of a merger, acquisition, reorganization, or sale of all or a portion of our assets, or in the event of bankruptcy, your information may be transferred to the successor entity. You acknowledge that such transfers may occur and that the new entity may continue to use your information as described in this Privacy Policy.
      </p>
      <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white">
        We are not responsible for the actions of third parties with whom you share personal or sensitive data, and we cannot manage or control third-party solicitations. If you no longer wish to receive communications from third parties, you must contact them directly.
      </p>

      <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>TRACKING TECHNOLOGIES</h1>
      <h1 className={`text-[24px] leading-[1] ${monsterfont1.className} mb-[35px] text-policy-text`}>Cookies and Web Beacons</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        We may use cookies, web beacons, tracking pixels, and other tracking technologies to customize the Site and enhance your experience. Cookies do not collect personal information by themselves, but they can collect information about your online activity. Most browsers are set to accept cookies by default, but you can remove or reject them. However, doing so may affect the availability and functionality of the Site. Web beacons cannot be declined, but they can be rendered ineffective by rejecting cookies or adjusting your browser settings to notify you each time a cookie is offered.
        </p>
        <h1 className={`text-[24px] leading-[1] ${monsterfont1.className} mb-[35px] text-policy-text`}>Website Analytics</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        We may partner with third-party vendors to allow the use of tracking technologies and remarketing services on the Site, including first-party and third-party cookies, to analyze and track user activity. By using the Site, you consent to the collection and use of your information by these third-party vendors. For more information, please review their privacy policies and contact them directly with any questions. We do not transfer personal information to these third-party vendors. If you do not wish to have your information collected by tracking technologies, you can opt out via the vendor’s website or through tools like the Network Advertising Initiative Opt-Out Tool or Digital Advertising Alliance Opt-Out Tool.
        </p>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        Please note that changes to your browser, such as upgrading or clearing cookies, may remove certain opt-out settings.
        </p>

        <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>THIRD-PARTY WEBSITES</h1>
      <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        The Site may contain links to third-party websites and applications that are not affiliated with us. Once you leave the Site, any information you provide to third-party websites is not covered by this Privacy Policy. We recommend reviewing the privacy policies of any third-party websites you visit before providing them with your information. We are not responsible for the content, privacy, or security practices of any third parties, including websites, services, or applications linked to or from the Site.
      </p>
      
      <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>SECURITY OF YOUR INFORMATION</h1>
      <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        We implement various security measures to protect your personal information. While we strive to use commercially acceptable means to protect your data, please be aware that no security system is infallible. We cannot guarantee absolute security for your information, and any transmission of data is at your own risk.
      </p>
      
      <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>POLICY FOR CHILDREN</h1>
      <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        We do not knowingly collect information from children under the age of 13. If you become aware of any data we have collected from children under the age of 13, please contact us immediately so we can take appropriate action.
      </p>
      
      <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>DO-NOT-TRACK FEATURES</h1>
      <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        Most web browsers and some mobile devices offer a Do-Not-Track (“DNT”) feature, which you can activate to signal your preference not to be tracked online. However, there is no uniform standard for recognizing and implementing DNT signals, and we do not currently respond to DNT browser signals. If a standard is established, we will update this Privacy Policy to reflect our practices.
      </p>

    <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>YOUR CHOICES REGARDING YOUR INFORMATION</h1>
    <h1 className={`text-[24px] leading-[1] ${monsterfont1.className} mb-[35px] text-policy-text`}>Emails and Communications</h1>
    <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
    If you no longer wish to receive emails or other communications from us, you can opt out by:
    </p>
    <ul className="list-disc pl-5 text-[15px] font-helveticaneue leading-[24px] font-[400] text-semi-white">
        <li>Updating your preferences in your account settings.</li>
        <li>Contacting us directly using the contact information provided below.</li>
    </ul>
    <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
    If you wish to stop receiving communications from third parties, you must contact them directly.
    </p>


    <h1 className={`text-[36px] leading-[1] ${monsterfont1.className} mb-[35px] mt-[10px]`}>INFORMATION WE COLLECT</h1>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        Under California Civil Code Section 1798.83, also known as the “Shine The Light” law, California residents may request information about the personal data we have disclosed to third parties for direct marketing purposes during the previous calendar year. To make such a request, please contact us using the information provided below.
        </p>
        <p className="text-[15px] font-helveticaneue leading-[24px] font-[400] mb-[25px] text-semi-white font-[400] ">
        If you are under 18, reside in California, and have a registered account on the Site, you may request the removal of any unwanted data that you publicly posted on the Site. To request removal, please contact us with the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Site, but please note that it may not be completely removed from our systems.
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
  


