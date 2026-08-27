<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m3.002 3 18 18m-3-7 1.5-1.428A5 5 0 1 0 12.002 6c-.95-1.273-2.44-2-4-2m8 12-4 4-7.5-7.428a5 5 0 0 1-1.288-5.068A4.98 4.98 0 0 1 5.002 5\"/>";
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
