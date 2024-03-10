import * as React from "react";
import styles from "./Quotes.module.scss";
import type { IQuotesProps } from "./IQuotesProps";
import { escape } from "@microsoft/sp-lodash-subset";

const Quotes: React.FC<IQuotesProps> = (props) => {
  const {
    //description,
    //isDarkTheme,
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
        <div>A house divided against itself cannot stand.</div>
        <div>
          <strong>Abraham Lincoln</strong>
        </div>
      </div>
    </section>
  );
};
export default Quotes;
