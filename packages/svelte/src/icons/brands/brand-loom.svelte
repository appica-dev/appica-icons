<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17.464 6.518a6 6 0 1 0-3.023 7.965m3.041 2.981a6 6 0 1 0-7.965-3.023M6.54 17.482a6 6 0 1 0 3.024-7.965M6.518 6.54a6 6 0 1 0 7.965 3.024\"/>";
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
