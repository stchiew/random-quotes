import * as React from "react";
import styles from "./Quotes.module.scss";
import type { IQuotesProps } from "./IQuotesProps";
import { escape } from "@microsoft/sp-lodash-subset";

const Quotes: React.FC<IQuotesProps> = (props) => {
  const {
    description,
    isDarkTheme,
    environmentMessage,
    hasTeamsContext,
    userDisplayName,
  } = props;

  return (
    <section
      className={`${styles.quotes} ${hasTeamsContext ? styles.teams : ""}`}
    >
      <div className={styles.welcome}>
        <h2>Hello, {escape(userDisplayName)}!</h2>
        <div>{environmentMessage}</div>
        <div>
          Web part property value: <strong>{escape(description)}</strong>
        </div>
        <div>
          <strong>This is now a functional component {isDarkTheme}</strong>
        </div>
      </div>
    </section>
  );
};
export default Quotes;
