<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M19.504 12.577 12.008 20l-7.496-7.423a4.996 4.996 0 1 1 7.496-6.561 4.998 4.998 0 1 1 7.496 6.567M12.008 6.01 8.717 9.3a1 1 0 0 0 0 1.414l.543.542c.69.69 1.809.69 2.499 0l.999-1a3.18 3.18 0 0 1 4.498 0l2.248 2.25m-6.996 2.997 1.999 1.999m.5-4.497 1.999 1.999\"/>";
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
