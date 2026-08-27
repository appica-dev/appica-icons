<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15.554 15.518 6 6m0 0h4.008M6 6v3.992m9.604 5.576a2 2 0 0 0-.462 2.192 2 2 0 0 0 1.095 1.091 2.01 2.01 0 0 0 2.2-.46 1.99 1.99 0 0 0-.024-2.799 2.01 2.01 0 0 0-2.809-.024\"/>";
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
