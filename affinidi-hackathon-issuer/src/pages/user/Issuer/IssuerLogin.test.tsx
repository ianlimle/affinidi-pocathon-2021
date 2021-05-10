import React from "react";
import { render } from "@testing-library/react";
import IssuerLoginPage from "pages/user/Issuer/IssuerLogin.tsx";

describe("User Page test", () => {
  test("Page renders with login", () => {
    const { container } = render(<IssuerLoginPage />);
    
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="page-form page-form--slim"
      >
        <h1
          class="title"
        >
          Issuer Login
        </h1>
        <p>
          Log in to continue.
        </p>
        <form
          class="login-form"
        >
          <div
            class="form-group"
          >
            <label
              class="label form-label"
              for="username"
            >
              Username
            </label>
            <input
              class="input form-control"
              id="username"
              type="text"
              value=""
            />
          </div>
          <div
            class="form-group"
          >
            <label
              class="label form-label"
              for="password"
            >
              Password
            </label>
            <input
              class="input form-control"
              id="password"
              type="password"
              value=""
            />
          </div>
          <button
            class="button btn btn-primary btn-block"
            disabled=""
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    `);
  });
});
