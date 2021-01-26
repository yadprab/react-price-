import React from "react";
import { Container } from "./Container";
const Header = () => {
  return (
    <>
      <header>
        <section className="top--section">
          <article className="info">
            <h1>Simple, traffic-based pricing</h1>
            <p className="text--small">
              Sign-up for our 30-day trial. No credit card required.{" "}
            </p>
          </article>
        </section>
        <Container />
      </header>
    </>
  );
};

export { Header };
