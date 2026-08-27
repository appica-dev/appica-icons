<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8.482 15.554 18 6m0 0v4.008M18 6h-3.992m-5.576 9.604a2 2 0 0 0-2.192-.462 2 2 0 0 0-1.091 1.095 2.01 2.01 0 0 0 .46 2.2 1.99 1.99 0 0 0 2.799-.024 2.01 2.01 0 0 0 .024-2.809\"/>";
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
