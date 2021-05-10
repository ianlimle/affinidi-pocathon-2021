import React from 'react';
import 'pages/intro/Intro.scss';

const IntroPage = () => {
  return (
    <div className='intro page-form page-form--large'>
      <div className='intro__heading-block'>
        <h1 className='intro__heading'>Government Body - ID Issuer</h1>
        <h5 className='intro__subheading'>Affinidi Hackathon Submission</h5>
      </div>
      <div className='intro__text-block'>
        <h4>Scenario</h4>
        <p>
          With the rise of chatbots, more and more functionalities can be added
          into messaging platforms which allows chatbots to perform services for
          users. For instance, Telegram, an open-source messaging platform that
          is popular in Singapore has included payment services within Telegram
          Chatbot
          <a
            href='https://core.telegram.org/bots/payments'
            target='_blank'
            rel='noreferrer'
          >
            (https://core.telegram.org/bots/payments)
          </a>
          . This opens up new opportunities for a potential e-commerce within
          Telegram after Shopify (who conquered the web’s e-commerce). With more
          functionalities and features that can be configured for chatbots in
          the future, that is a high possibility in which a chatbot can act like
          a full mobile application which allows users to perform any services
          within the chatbot.
        </p>
        <p>
          In this particular hackathon, I have explored a possibility of using
          chatbot to retrieve a user’s personal insurance policy document. As
          insurance policy documents are personal, we can use Verifiable
          Credentials (VC) to perform Know-Your-Customer procedure before
          sending over the document to the user.
        </p>
        <h4>Roles in this scenario</h4>
        <p>
          There are 3 roles in SSI cycle: <strong>ISSUER</strong>,{' '}
          <strong>VERIFIER</strong>, and <strong>HOLDER</strong>. Each of them
          is explained in the example below.
        </p>
      </div>
      <div className='intro__roles-description'>
        <div className='intro__roles-description-role'>
          <h3>Issuer</h3>
          <p>
            Government Body that issues digital personal identity in the form of
            verifiable credential. Alternatively, for this particular use case,
            the issuer could be Insurance Company providing VC saying that the
            holder is a customer of the Insurance Company. There is some
            flexibility in terms of who is issuing the credential.
          </p>
        </div>
        <div className='intro__roles-description-role'>
          <h3>Holder</h3>
          <p>User who is using Telegram Customer Services Chatbots</p>
        </div>
        <div className='intro__roles-description-role'>
          <h3>Verifier</h3>
          <p>
            Insurance Company that has a Customer Service Chatbot that conducts
            identity verification before issuing any information to the
            customers
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
