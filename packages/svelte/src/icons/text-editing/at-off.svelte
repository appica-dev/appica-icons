<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9.173 9.17a4 4 0 0 0 5.646 5.668M15.999 12a4 4 0 0 0-4-4m7.695 7.697a2.5 2.5 0 0 0 1.305-2.197V12A9 9 0 0 0 7.944 3.953M5.622 5.636a9 9 0 0 0 9.877 14.644M2.999 3l18 18\"/>";
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
