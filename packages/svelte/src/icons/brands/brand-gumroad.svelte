<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M13.5 13H16v3m-.976-6.618A4 4 0 1 0 12 16c1.862 0 2.554-1.278 3-3m6-1a9 9 0 1 1-18 0 9 9 0 0 1 18 0\"/>";
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
