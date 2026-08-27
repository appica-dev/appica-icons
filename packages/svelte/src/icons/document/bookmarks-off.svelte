<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11 7h2a2 2 0 0 1 2 2v2m0 4v6l-5-3-5 3V9a2 2 0 0 1 2-2m2.265-3A2 2 0 0 1 11 3h6a2 2 0 0 1 2 2v10M3 3l18 18\"/>";
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
