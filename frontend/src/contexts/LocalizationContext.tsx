import { createContext, useContext, useState, ReactNode } from "react";
import LocalizationService from "@/services/LocalizationService";

type Locale = "enUS" | "zhCN" | "esES";

interface LocalizationContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  locData: Record<string, string>;
  loadLocalizedText: (keys: string[]) => Promise<void>;
}

const LocalizationContext = createContext<LocalizationContextProps | undefined>(undefined);

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error("useLocalization must be used within LocalizationProvider");
  }
  return context;
};

export const LocalizationProvider = ({ children }: { children: ReactNode }) => {
  const localizationService = LocalizationService();
  const [locale, setLocaleState] = useState<Locale>(
    (localizationService.getUserLocale() as Locale) || "enUS"
  );
  const [locData, setLocData] = useState<Record<string, string>>({});

  const setLocale = (newLocale: Locale) => {
    localizationService.setUserLocale(newLocale);
    setLocaleState(newLocale);
  };

  const loadLocalizedText = async (keys: string[]) => {
    const textSet = await localizationService.getLocalizedTextSet(keys, locale);
    setLocData((prev) => ({ ...prev, ...textSet }));
  };

  return (
    <LocalizationContext.Provider value={{ locale, setLocale, locData, loadLocalizedText }}>
      {children}
    </LocalizationContext.Provider>
  );
};
