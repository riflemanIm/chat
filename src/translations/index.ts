import i18n from "../i18next";
import en from "./en.json";
import fr from "./fr.json";
import ru from "./ru.json";

i18n.addResourceBundle("ru", "translations", ru);
i18n.addResourceBundle("en", "translations", en);
i18n.addResourceBundle("fr", "translations", fr);

export default i18n;
