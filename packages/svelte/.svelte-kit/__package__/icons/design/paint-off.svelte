<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 3h10a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4M9 9H7a2 2 0 0 1-2-2V5m14 1h1a2 2 0 0 1 2 2 5 5 0 0 1-5 5m-4 0h-1v2M3 3l18 18m-11-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z\"/>";
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
