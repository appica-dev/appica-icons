<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 19a2 2 0 1 1 0-4m0 4a2 2 0 1 0 0-4m0 4h9m-9-4h9m0 4a2 2 0 0 1 0-4m0 4a2 2 0 0 0 0-4m0 0v-5m-5 2V7h2a3 3 0 0 1 3 3m0 0 5-5 3.12 4.88M5 15v-2a1 1 0 0 1 1-1h7m8.12-2.12A3 3 0 0 1 19 15a3 3 0 0 1-2.12-.88z\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
