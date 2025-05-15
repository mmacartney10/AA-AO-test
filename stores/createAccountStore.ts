import { useForm } from "react-hook-form";

import {
  SippAccountSchema,
  sippAccountNavigation,
} from "@/schema/SippAccountSchema";

import {
  AccountOpeningSchema,
  accountOpeningNavigation,
} from "@/schema/AccountOpeningSchema";

import {
  AddAnAccountSchema,
  addAnAccountNavigation,
} from "@/schema/AddAccountSchema";
import { Journey } from "@/types";
import { useState } from "react";

const useCreateAccountStore = () => {
  const [journey, setJourney] = useState<Journey | null>(null);

  const sippAccountForm = useForm<SippAccountSchema>();

  const accountOpeningForm = useForm<AccountOpeningSchema>();

  const addAnAccountForm = useForm<AddAnAccountSchema>();

  const formId = "account-opening";

  const resetAllForms = () => {
    accountOpeningForm.reset();
    addAnAccountForm.reset();
    sippAccountForm.reset();
    setJourney(null);
  };

  return {
    journey,
    setJourney,
    accountOpeningForm,
    addAnAccountForm,
    sippAccountForm,
    accountOpeningNavigation,
    addAnAccountNavigation,
    sippAccountNavigation,
    resetAllForms,
    formId,
  };
};

export default useCreateAccountStore;
