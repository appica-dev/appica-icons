<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m12.007 20.001-.974-.965-6.521-6.458a4.997 4.997 0 1 1 7.495-6.562 4.997 4.997 0 0 1 8.364 5.425m-.17 8.76L22 22m-6.995-3.997a2.998 2.998 0 1 0 5.995 0 2.998 2.998 0 0 0-5.995 0\"/>";
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
