import React from "react";
import IntroPage from "pages/intro/Intro";
import { render } from "@testing-library/react";

describe("User Logout component test", () => {
  test("Match inline snapshot", () => {
    const { container } = render(<IntroPage />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="intro page-form page-form--large"
      >
        <div
          class="intro__heading-block"
        >
          <h1
            class="intro__heading"
          >
            StartUp A - Driving License Issuer
          </h1>
          <h5
            class="intro__subheading"
          >
            A simple use case by Affinidi
          </h5>
        </div>
        <div
          class="intro__text-block"
        >
          <h4>
            Scenario
          </h4>
          <p>
            Alex, a frequent traveller, is planning for a road trip in Santa Monica, California and is looking to rent a camper van. 
          </p>
          <p>
            As he approaches the rental store, the receptionist struggles to verify that his driving license is legitimate as different countries may have different templates of their driving licenses.
          </p>
          <p>
            Instead, Alex could provide his verified credentials which contains his driving license information to the receptionist and is also able to use the same credentials if he wants to rent a vehicle in another country for a separate road trip.
          </p>
          <h4>
            Roles in this scenario
          </h4>
          <p>
            There are 3 roles in SSI cycle: 
            <strong>
              ISSUER
            </strong>
            , 
            <strong>
              VERIFIER
            </strong>
            , and 
            <strong>
              HOLDER
            </strong>
            . Each of them is explained in the example below.
          </p>
        </div>
        <div
          class="intro__example"
        >
          <img
            alt="entire-flow"
            class="flow-size"
            src="entire-flow.png"
          />
        </div>
        <div
          class="intro__roles-description"
        >
          <div
            class="intro__roles-description-role"
          >
            <h3>
              Issuer
            </h3>
            <p>
              StartUp A is able to issue a digitalised verified credentials which has information that a standard driving license has.
            </p>
          </div>
          <div
            class="intro__roles-description-role"
          >
            <h3>
              Holder
            </h3>
            <p>
              A frequent travellers who would like to have this verified credentials with him/her so he/she do not have to present their physical driving license during a car rental event.
            </p>
          </div>
          <div
            class="intro__roles-description-role"
          >
            <h3>
              Verifier
            </h3>
            <p>
              A car rental store would be able to verify the verfied credentials and not to worry about the legitimacy of the driving license as it may be difficult to verify different countries driving licenses. This is to also ensure that their cars are rented to individuals who are licensed drivers.
            </p>
          </div>
        </div>
        <p>
          Ready to try out the application? Get started 
          <a
            href="/applicant/login"
            rel="noreferrer"
          >
            here
          </a>
           by being the applicant first!
        </p>
        <p>
          For more information and well documented tutorials, please visit 
          <a
            href="https://www.affinidi.com/api"
            rel="noreferrer"
            target="_blank"
          >
            https://www.affinidi.com/api
          </a>
          .
        </p>
      </div>
    `);
  });
});
