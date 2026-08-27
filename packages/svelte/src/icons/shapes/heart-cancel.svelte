<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m12.007 20.001-7.495-7.423a4.997 4.997 0 1 1 7.495-6.562 4.997 4.997 0 1 1 7.987 6.006m-2.99 8.979L21 17.003m-4.997 1.999a2.999 2.999 0 1 0 5.997 0 2.999 2.999 0 0 0-5.997 0\"/>";
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
