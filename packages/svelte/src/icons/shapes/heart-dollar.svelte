<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m13.006 19.002-1 1-7.494-7.424a4.997 4.997 0 1 1 7.495-6.562 4.996 4.996 0 0 1 8.778 4.441M21 15.004h-2.498a1.5 1.5 0 0 0 0 2.999h1a1.5 1.5 0 0 1 0 2.998h-2.5m2 0V22m0-7.995v1\"/>";
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
