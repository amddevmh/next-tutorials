//Yep,this is a server component, that supports interactivity :)
import { incrementCounterAction } from "@/app/actions";

export function FormButton() {
  return (
    <div className="flex flex-col items-center space-y-16">
      <p className="text-4xl">Click Me 👇🏻</p>
      <form
        action={async () => {
          "use server";
          await incrementCounterAction();
        }}
      >
        <button
          className=" rounded px-4 py-2 text-xl  font-medium bg-lime-200 text-black"
          type="submit"
        >
          <div className="flex flex-col items-start">
            <span>
              Click me to trigger a mutation using a server component <br />
            </span>
            <span className=" text-sm text-gray-500">
              /src/components/form-btn.tsx
            </span>
          </div>
        </button>
      </form>
    </div>
  );
}
