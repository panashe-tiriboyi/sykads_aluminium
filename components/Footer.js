import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <labe>
          Made by{" "}
          <Link href="https://platformdev.co.za/">
            <a target="_blank" rel="noopener noreferrer">
              Platform Developers
            </a>
          </Link>{" "}
        </labe>
      </footer>
    </>
  );
}
