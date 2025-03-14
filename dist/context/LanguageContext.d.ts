import React, { Dispatch } from "react";
interface LanguageState {
    language: Language;
}
declare type Language = "ru" | "fr" | "en";
declare type Action = {
    type: "RU" | "FR" | "EN";
    payload: Language;
};
interface LanguageContextI {
    languageState: LanguageState;
    dispatchLanguage: Dispatch<Action>;
}
export declare const LANGUAGES: Record<string, Language>;
export declare const LANGUAGES_ACTIONS: {
    SET_RUSSIAN: string;
    SET_ENGLISH: string;
    SET_FRENCH: string;
};
export declare const LanguageContext: React.Context<LanguageContextI>;
interface AppLanguageProviderProps {
    children: React.ReactNode;
}
export declare const AppLanguageProvider: React.FC<AppLanguageProviderProps>;
export declare const useLanguageValue: () => LanguageContextI;
export {};
