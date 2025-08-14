import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";

const COOKIE_NAME = "googtrans";

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState(null);
  const [languageConfig, setLanguageConfig] = useState(null);

  useEffect(() => {
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue = null;
    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }

    if (global.__GOOGLE_TRANSLATION_CONFIG__) {
      const defaultLang = global.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage || "en";
      setLanguageConfig(global.__GOOGLE_TRANSLATION_CONFIG__);

      // Fallback if no cookie
      if (!languageValue) {
        languageValue = defaultLang;
        setCookie(null, COOKIE_NAME, `/auto/${defaultLang}`);
      }

      setCurrentLanguage(languageValue);
    } else {
      console.warn("global.__GOOGLE_TRANSLATION_CONFIG__ is not defined");
    }
  }, []);

  const switchLanguage = (lang) => {
    setCookie(null, COOKIE_NAME, `/auto/${lang}`);
    window.location.reload(true);
  };

  if (!currentLanguage || !languageConfig) {
    return null; // Wait for init
  }

  return (
    <div className="text-center notranslate">
      <select
        value={currentLanguage}
        onChange={(e) => switchLanguage(e.target.value)}
        className="px-8 py-2 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {languageConfig.languages.map((ld) => (
          <option key={`lang_${ld.name}`} value={ld.name}>
            {ld.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };
