<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m19.502 12.577-2.493 2.469M12.007 20l-7.495-7.423a4.997 4.997 0 1 1 7.495-6.561 4.997 4.997 0 1 1 7.495 6.567m-3.498 6.418H22\"/>";
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
