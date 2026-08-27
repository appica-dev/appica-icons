<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m12.007 20.001-7.495-7.423a4.997 4.997 0 1 1 7.495-6.562 4.997 4.997 0 1 1 7.901 6.116m-.906 3.872V22m0 0L22 19.002M19.002 22l-2.998-2.998\"/>";
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
