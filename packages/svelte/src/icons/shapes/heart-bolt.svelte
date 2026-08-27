<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m13.005 19.002-1 1-7.493-7.424a4.997 4.997 0 1 1 7.494-6.562 4.996 4.996 0 1 1 7.996 5.993M19 16.004l-1.998 2.998h3.996L19 22\"/>";
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
