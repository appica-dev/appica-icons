<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m14.283 15.985 3.246-3.248a1.61 1.61 0 0 0-1.143-2.725 1.6 1.6 0 0 0-1.13.45l-3.246 3.249-3.246-3.248a1.607 1.607 0 0 0-2.272 2.274l3.245 3.248-3.245 3.249a1.608 1.608 0 1 0 2.272 2.274l3.246-3.248 3.246 3.248a1.61 1.61 0 0 0 2.273 0 1.61 1.61 0 0 0 0-2.274zM9.016 4.997a3 3 0 0 0 2.994 2.997 2.994 2.994 0 0 0 2.995-2.997A3 3 0 0 0 12.01 2a2.993 2.993 0 0 0-2.994 2.997\"/>";
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
