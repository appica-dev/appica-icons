<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m12.007 20.001-7.495-7.423a4.997 4.997 0 1 1 7.495-6.562 4.997 4.997 0 0 1 8.494 5.176m-1.499 6.81v.01m2.12 2.11a2.998 2.998 0 1 0-4.24 0q.627.628 2.12 1.878 1.576-1.334 2.12-1.878\"/>";
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
