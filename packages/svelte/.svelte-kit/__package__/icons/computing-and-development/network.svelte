<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6 9a6 6 0 0 0 6 6M6 9a6 6 0 0 1 6-6M6 9h12m-6 6a6 6 0 0 0 6-6m-6 6q2-.5 2-6t-2-6m0 12q-2-.5-2-6t2-6m0 12v3m6-9a6 6 0 0 0-6-6M3 20h7m0 0a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 2-2m2 2h7m-7 0a2 2 0 0 0-2-2\"/>";
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
