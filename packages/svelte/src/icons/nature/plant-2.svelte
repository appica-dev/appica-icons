<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 19A10 10 0 0 1 2 9a10 10 0 0 1 10 10m0 0A10 10 0 0 0 22 9a10 10 0 0 0-10 10m2.99-7.5A9.7 9.7 0 0 0 12 4a9.7 9.7 0 0 0-2.99 7.5\"/>";
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
