import { useForm } from "react-hook-form";

import {
  AccountOpeningSchema,
  accountOpeningDefaultState,
  accountOpeningNavigation,
} from "@/schema/AccountOpeningSchema";

import {
  AddAnAccountSchema,
  addAnAccountDefaultState,
  addAnAccountNavigation,
} from "@/schema/AddAccountSchema";
import { Journey } from "@/types";
import { useState } from "react";

const useCreateAccountStore = () => {
  const [journey, setJourney] = useState<Journey | null>(null);

  const accountOpeningForm = useForm<AccountOpeningSchema>({
    defaultValues: accountOpeningDefaultState,
  });

  const addAnAccountForm = useForm<AddAnAccountSchema>({
    defaultValues: addAnAccountDefaultState,
  });

  const formId = "account-opening";

  const resetAllForms = () => {
    accountOpeningForm.reset();
    addAnAccountForm.reset();
  };

  return {
    journey,
    setJourney,
    accountOpeningForm,
    addAnAccountForm,
    accountOpeningNavigation,
    addAnAccountNavigation,
    resetAllForms,
    formId,
  };
};

export default useCreateAccountStore;
