<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M18 3v7m0 0-3-3m3 3 3-3M4.5 7h2.733a2 2 0 0 1 1.337.513L18 16h1.5a2.5 2.5 0 0 1 0 5h-2.733a2 2 0 0 1-1.337-.513L6 12H4.5a2.5 2.5 0 0 1 0-5\"/>";
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
