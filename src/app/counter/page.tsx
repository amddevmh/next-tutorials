import React from "react";
import { counterService } from "../../../counter-service";
import { FormButton } from "@/components/form-btn";

export default async function CounterPage() {
  const counterState = await counterService.getCounterValue();

  return (
    <div className=" min-h-screen flex flex-col space-y-8 justify-center items-center">
      {/* Manipulate the counter with a server component */}
      <FormButton />
      <p className=" text-4xl"> {counterState}</p>
    </div>
  );
}
