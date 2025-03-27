<script lang="ts">
  import { useMachine } from "@xstate/svelte";
  import { createMachine } from "xstate";

  const machine = createMachine(
    {
      id: "testable",
      initial: "idle",
      states: {
        idle: {
          on: {
            CLICK: { actions: ["loading"] },
          },
        },
      },
    },
    {
      actions: {
        loading: () => {
          console.log("loading...");
        },
      },
    },
  );

  const { snapshot, send } = useMachine(machine);
</script>

{$snapshot}
<button on:click={() => send({ type: "CLICK" })} data-testid="broken-test">Trigger console</button>
