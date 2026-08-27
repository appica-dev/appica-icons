<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20.5 14.966V9.034m-2.985 5.932V9.034m-5.971 5.932v3.546a.98.98 0 0 1-.614.913 1 1 0 0 1-1.085-.215L3.291 12.7a.985.985 0 0 1 0-1.398l6.554-6.512a.997.997 0 0 1 1.699.7v3.545h2.985v5.932z\"/>";
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
