import { component$, useSignal } from "@builder.io/qwik";

export const HelloWorld = component$(({ name }: { name: string }) => {
  const currentName = useSignal<string>(name);

  return (
    <>
      <h1>Hola {currentName.value}</h1>

      <button
        type="button"
        class="bg-blue-600 text-white px-4 py-2 rounded"
        onClick$={() => {
          currentName.value = currentName.value === "World" ? name : "World";
        }}
      >
        Click me
      </button>
    </>
  );
});
