import React, { createContext, ReactNode, useContext } from "react";

import { accountOpeningNavigation } from "@/schema/AccountOpeningSchema";
import { addAnAccountNavigation } from "@/schema/AddAccountSchema";
import { Journey } from "@/types";
import useCreateAccountStore from "./createAccountStore";

type AccountSoreContextValue = ReturnType<typeof useCreateAccountStore> | null;

export const AccountContext = createContext<AccountSoreContextValue>(null);

export const AccountStoreProvider = ({ children }: { children: ReactNode }) => {
  const store = useCreateAccountStore();

  return (
    <AccountContext.Provider value={store}>{children}</AccountContext.Provider>
  );
};

export const useAccountStore = () => {
  const context = useContext(AccountContext);

  if (!context) {
    throw new Error("Account Opening Provider not setup!");
  }

  const getAccountForm = (journey: Journey | null) => {
    switch (journey) {
      case "AA":
        return addAnAccountForm;
      case "AO":
        return accountOpeningForm;
      default:
        return null;
    }
  };

  const getSchemaNavigation = (journey: Journey | null) => {
    switch (journey) {
      case "AA":
        return addAnAccountNavigation;
      case "AO":
        return accountOpeningNavigation;
      default:
        return null;
    }
  };

  const {
    accountOpeningForm,
    addAnAccountForm,
    formId,
    journey,
    resetAllForms,
    setJourney,
  } = context;

  const accountForm = getAccountForm(journey);
  const schemaNavigation = getSchemaNavigation(journey);

  return {
    accountForm,
    formId,
    resetAllForms,
    setJourney,
    journey,
    schemaNavigation,
  };
};
