import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span>{t("rights", { year: new Date().getFullYear() })}</span>
        <a href="#top" className="link">{t("top")}</a>
      </div>
    </footer>
  );
}
