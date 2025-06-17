export function changeLanguage(lng: any, callback: any): Promise<any>;
export const createInstance: any;
declare const instance: I18n;
export function dir(lng: any): "rtl" | "ltr";
export function exists(...args: any[]): boolean | undefined;
export function getFixedT(lng: any, ns: any, keyPrefix: any): {
    (key: any, opts: any, ...args: any[]): any;
    lng: any;
    lngs: any;
    ns: any;
    keyPrefix: any;
};
export function hasLoadedNamespace(ns: any, ...args: any[]): any;
export function init(...args: any[]): Promise<any>;
export function loadLanguages(lngs: any, callback: any): Promise<any>;
export function loadNamespaces(ns: any, callback: any): Promise<any>;
export function loadResources(language: any, ...args: any[]): any;
export function reloadResources(lngs: any, ns: any, callback: any): Promise<any>;
export function setDefaultNamespace(ns: any): void;
export function t(...args: any[]): any;
export function use(module: any): I18n;
declare class I18n extends EventEmitter {
    static createInstance(...args: any[]): I18n;
    constructor(...args: any[]);
    options: any;
    services: {};
    logger: Logger;
    modules: {
        external: never[];
    };
    init(...args: any[]): Promise<any>;
    isInitializing: boolean | undefined;
    store: ResourceStore | undefined;
    translator: Translator | undefined;
    format: any;
    isInitialized: boolean | undefined;
    loadResources(language: any, ...args: any[]): any;
    reloadResources(lngs: any, ns: any, callback: any): Promise<any>;
    use(module: any): I18n;
    setResolvedLanguage(l: any): void;
    resolvedLanguage: any;
    changeLanguage(lng: any, callback: any): Promise<any>;
    isLanguageChangingTo: any;
    language: any;
    languages: any;
    getFixedT(lng: any, ns: any, keyPrefix: any): {
        (key: any, opts: any, ...args: any[]): any;
        lng: any;
        lngs: any;
        ns: any;
        keyPrefix: any;
    };
    t(...args: any[]): any;
    exists(...args: any[]): boolean | undefined;
    setDefaultNamespace(ns: any): void;
    hasLoadedNamespace(ns: any, ...args: any[]): any;
    loadNamespaces(ns: any, callback: any): Promise<any>;
    loadLanguages(lngs: any, callback: any): Promise<any>;
    dir(lng: any): "rtl" | "ltr";
    cloneInstance(...args: any[]): I18n;
    toJSON(): {
        options: any;
        store: ResourceStore | undefined;
        language: any;
        languages: any;
        resolvedLanguage: any;
    };
}
declare class EventEmitter {
    observers: {};
    on(events: any, listener: any): EventEmitter;
    off(event: any, listener: any): void;
    emit(event: any, ...args: any[]): void;
}
declare class Logger {
    constructor(concreteLogger: any, ...args: any[]);
    init(concreteLogger: any, ...args: any[]): void;
    prefix: any;
    logger: any;
    options: any;
    debug: any;
    log(...args: any[]): any;
    warn(...args: any[]): any;
    error(...args: any[]): any;
    deprecate(...args: any[]): any;
    forward(args: any, lvl: any, prefix: any, debugOnly: any): any;
    create(moduleName: any): Logger;
    clone(options: any): Logger;
}
declare class ResourceStore extends EventEmitter {
    constructor(data: any, ...args: any[]);
    data: any;
    options: any;
    addNamespaces(ns: any): void;
    removeNamespaces(ns: any): void;
    getResource(lng: any, ns: any, key: any, ...args: any[]): any;
    addResource(lng: any, ns: any, key: any, value: any, ...args: any[]): void;
    addResources(lng: any, ns: any, resources: any, ...args: any[]): void;
    addResourceBundle(lng: any, ns: any, resources: any, deep: any, overwrite: any, ...args: any[]): void;
    removeResourceBundle(lng: any, ns: any): void;
    hasResourceBundle(lng: any, ns: any): boolean;
    getResourceBundle(lng: any, ns: any): any;
    getDataByLanguage(lng: any): any;
    hasLanguageSomeTranslations(lng: any): boolean;
    toJSON(): any;
}
declare class Translator extends EventEmitter {
    static hasDefaultValue(options: any): boolean;
    constructor(services: any, ...args: any[]);
    options: any;
    logger: Logger;
    changeLanguage(lng: any): void;
    language: any;
    exists(key: any, ...args: any[]): boolean;
    extractFromKey(key: any, options: any): {
        key: any;
        namespaces: any;
    };
    translate(keys: any, options: any, lastKey: any, ...args: any[]): any;
    extendTranslation(res: any, key: any, options: any, resolved: any, lastKey: any): any;
    resolve(keys: any, ...args: any[]): {
        res: undefined;
        usedKey: undefined;
        exactUsedKey: undefined;
        usedLng: undefined;
        usedNS: undefined;
    };
    isValidLookup(res: any): boolean;
    getResource(code: any, ns: any, key: any, ...args: any[]): any;
    getUsedParamsDetails(...args: any[]): any;
}
export { instance as default };
