/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useEffect, useState } from "react";

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState<boolean | null>(null);

  useEffect(() => {
    // Check PWA running browse or standalone
    const checkPWAStatus = () => {
      const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
      // const isiOS = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
      const isStandaloneiOS = (window.navigator as any).standalone === true;

      // Check the PWA is installed
      const wasInstalledBefore = localStorage.getItem("pwa-installed") === "true";

      if (isStandalone || isStandaloneiOS || wasInstalledBefore) {
        setIsInstalled(true);
      } else {
        setIsInstalled(false);
      }
    };

    // Condition: can or can't install
    const beforeInstallHandler = (event: any) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    // Condition: App(PWA) was installed
    const appInstalledHandler = () => {
      localStorage.setItem("pwa-installed", "true"); // set state install = true, else = false
      setIsInstalled(true);
    };

    checkPWAStatus();

    window.addEventListener("beforeinstallprompt", beforeInstallHandler);
    window.addEventListener("appinstalled", appInstalledHandler);

    return () => {
      window.removeEventListener("beforeinstallprompt", beforeInstallHandler);
      window.removeEventListener("appinstalled", appInstalledHandler);
    };
  }, []);

  const installPWA = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install");
        } else {
          console.log("User dismissed the install");
        }
        setDeferredPrompt(null);
      });
    }
  };
  const openPWA = () => {
    window.open(window.location.origin, "_self");
  };

  return (
    <>
      <div>
        {
          isInstalled && (window.matchMedia("(display-mode: standalone)").matches || (window.navigator as any).standalone) ? (
            <button onClick={() => window.location.reload()}>Reload</button>
          ) : deferredPrompt ? (
            <button type="button" onClick={installPWA} className="install-button rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">Install PWA</button>
          ) : (
            <button type="button" onClick={openPWA} className="open-button rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">Open App</button>
          )
        }
      </div>
    </>
  );
};

export default InstallButton;
