<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8.5 22 12 2M4.186 16.202 7.8 21.515c.265.39.754.57 1.215.447l10.166-2.718a1.085 1.085 0 0 0 .713-1.511L12.39 2.25a.448.448 0 0 0-.787-.033L4.15 15.055a1.07 1.07 0 0 0 .036 1.147\"/>";
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
