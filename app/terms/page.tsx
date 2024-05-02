const Terms = () => {

    const containerStyles = 'mb-16 border border-grey rounded-xl p-4 shadow-customShadow'
    const headerStyles = 'font-black text-2xl text-green'
    const listStyles = 'list-disc px-8'
    
  return (
    <div className="flex flex-col gap-2 py-32 px-8 lg:px-64 font-bold">
      <h1 className="font-black text-6xl mb-16">Terms & Services</h1>
      <div className="mb-16 border border-grey rounded-xl p-4 shadow-customShadow">
        <h2 className={headerStyles}>Introduction</h2>
        <p>
          Welcome to devStuff! These terms and conditions outline the rules and
          regulations for the use of our website.
        </p>
        <p>
          By accessing this website, we assume you accept these terms and
          conditions in full. Do not continue to use devStuff's website if you
          do not accept all of the terms and conditions stated on this page.
        </p>
        <p>
          The following terminology applies to these Terms and Conditions,
          Privacy Statement, and Disclaimer Notice and any or all Agreements:
          "Client," "You," and "Your" refer to you, the person accessing this
          website and accepting the Company's terms and conditions. "The
          Company," "Ourselves," "We," "Our," and "Us," refers to our Company.
          "Party," "Parties," or "Us," refers to both the Client and ourselves,
          or either the Client or ourselves.
        </p>
      </div>
      <div className={containerStyles}>
        <h2 className={headerStyles}>License</h2>
        <p>
          Unless otherwise stated, devStuff and/or its licensors own the
          intellectual property rights for all material on devStuff. All
          intellectual property rights are reserved. You may access this from
          devStuff for your own personal use subjected to restrictions set in
          these terms and conditions.
        </p>
      </div>

      <div className={containerStyles}>
        <h2 className={headerStyles}>Restrictions</h2>
        <p>You are specifically restricted from all of the following:</p>
        <ul className={listStyles}>
          <li>
            Selling, sublicensing and/or otherwise commercializing any material
            from devStuff.
          </li>
          <li>
            Using this website in any way that is or may be damaging to this
            website.
          </li>
          <li>
            Using this website in any way that impacts user access to this
            website.
          </li>
          <li>
            Using this website contrary to applicable laws and regulations, or
            in any way may cause harm to the website, or to any person or
            business entity.
          </li>
          <li>
            Engaging in any data mining, data harvesting, data extracting or any
            other similar activity in relation to this website.
          </li>
          <li>Using this website to engage in any advertising or marketing.</li>
        </ul>
      </div>

      <div className={containerStyles}>
        <h2 className={headerStyles}>Disclaimer</h2>
        <p>
          To the maximum extent permitted by applicable law, we exclude all
          representations, warranties, and conditions relating to our website
          and the use of this website. Nothing in this disclaimer will:
        </p>
        <ul className={listStyles}>
          <li>
            Limit or exclude our or your liability for death or personal injury.
          </li>
          <li>
            Limit or exclude our or your liability for fraud or fraudulent
            misrepresentation.
          </li>
          <li>
            Limit any of our or your liabilities in any way that is not
            permitted under applicable law.
          </li>
        </ul>
        <p>
          The limitations and prohibitions of liability set in this section and
          elsewhere in this disclaimer: (a) are subject to the preceding
          paragraph; and (b) govern all liabilities arising under the
          disclaimer, including liabilities arising in contract, in tort, and
          for breach of statutory duty.
        </p>
      </div> 
      <div className={containerStyles}>
        <h2 className={headerStyles}>Pricing and Payment</h2>
        <p>
          All prices for products listed on devStuff are subject to change
          without notice. We reserve the right at any time to modify or
          discontinue the Service without notice at any time.
        </p>
      </div>
      <div className={containerStyles}>
        <h2 className={headerStyles}>Shipping</h2>
        <p>
          We aim to process and ship orders within 1-2 business days. However,
          shipping times may vary depending on location and product
          availability.
        </p>
      </div>
      <div className={containerStyles}>
        <h2 className={headerStyles}>Returns and Refunds</h2>
        <p>
          Please refer to our Returns and Refunds Policy for detailed
          information regarding returns and refunds.z
        </p>
      </div>
      <div className={containerStyles}>
        <h2 className={headerStyles}>Government Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance
          with the laws of [Your Country] and you irrevocably submit to the
          exclusive jurisdiction of the courts in that State or location.
        </p>
        <p>
          If you have any further questions or concerns regarding these terms
          and conditions, please contact us at [Your Contact Information].
        </p>
      </div>
    </div>
  );
};

export default Terms;
